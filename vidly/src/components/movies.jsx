import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: "",
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const updatedMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: updatedMovies });
  };

  handleLike = (movie) => {
    const currentMovies = [...this.state.movies];
    const index = currentMovies.indexOf(movie);
    currentMovies[index] = { ...currentMovies[index] };
    currentMovies[index].liked = !currentMovies[index].liked;
    this.setState({ movies: currentMovies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    const pStyle = {
      fontWeight: 700,
      textAlign: "center",
      fontSize: "auto",
      flex: 1,
    };

    if (this.state.movies.length === 0) {
      return <p style={pStyle}>There are no movies in the database!</p>;
    }

    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id //if selectedGenre and it's id is truthy value then...
        ? this.state.movies.filter(
            (m) => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;

    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    const pageMovies = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div className="row">
        <div style={{ padding: "80px 40px" }} className="col-2">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <div
            style={{
              display: "flex",
            }}
          >
            <Link
              to="/movies/new"
              className="btn btn-primary"
              style={{ marginRight: "20px", width: "auto" }}
            >
              New Movie
            </Link>
            <p style={pStyle}>
              Showing {filtered.length} movie in the database.
            </p>
          </div>

          <MoviesTable
            movies={pageMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={this.state.sortColumn}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
