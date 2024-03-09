import React from "react";
import Like from "./common/like";
import { Link } from "react-router-dom";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort, sortColumn } = props;
  const thStyle = { cursor: "pointer" };

  //   function showSortIcon() {
  //     // if (sortColumn.path !== path) return null;
  //     sortColumn.order === "asc" ? (
  //       <i className="fa-duotone fa-sort-up"></i>
  //     ) : (
  //       <i className="fa-duotone fa-sort-down"></i>
  //     );
  //   }

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={thStyle} onClick={() => onSort("title")}>
            Title
          </th>
          <th style={thStyle} onClick={() => onSort("genre.name")}>
            Genre
          </th>
          <th style={thStyle} onClick={() => onSort("numberInStock")}>
            Stock
          </th>
          <th style={thStyle} onClick={() => onSort("dailyRentalRate")}>
            Rate
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>
              <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
            </td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like onClick={() => onLike(movie)} liked={movie.liked} />
            </td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDelete(movie)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
