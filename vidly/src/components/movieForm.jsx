import React, { Component } from "react";
import Joi from "joi";
import { getGenres } from "../services/fakeGenreService";
import { getMovie } from "../services/fakeMovieService";

class MovieForm extends Component {
  state = {
    data: {
      title: "",
      genreID: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreID: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number of Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  });

  componentDidMount() {
    const genres = getGenres();
    console.log(genres);
    this.setState({ genres });
    //console.log(this.state.genres);

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreID: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  validate = () => {
    const result = this.schema.validate(this.state.data, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = Joi.object({ [name]: this.schema.extract(name) });
    const { error } = schema.validate(obj);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted!");
  };

  handleChange = ({ currentTarget }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) {
      errors[currentTarget.name] = errorMessage;
    } else delete errors[currentTarget.name];

    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data, errors });
  };

  render() {
    return (
      <div className="login">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={this.state.data.title}
              name="title"
              className="form-control"
              placeholder="Enter Title"
              onChange={this.handleChange}
            />
          </div>
          {this.state.errors.title && (
            <div className="alert alert-danger">{this.state.errors.title}</div>
          )}
          <br />
          <div className="form-group">
            <label htmlFor="genreID">Genre</label>
            <select
              id="genreID"
              type="genreID"
              name="genreID"
              value={this.state.data.genreID}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Select Genre"
            >
              {this.state.genres.map((genre) => (
                <option key={genre._id}>{genre.name}</option>
              ))}
            </select>
          </div>
          {this.state.errors.genreID && (
            <div className="alert alert-danger">
              {this.state.errors.genreID}
            </div>
          )}
          <br />
          <div className="form-group">
            <label htmlFor="numberInStock">Number in Stock</label>
            <input
              id="numberInStock"
              type="text"
              value={this.state.data.numberInStock}
              name="numberInStock"
              className="form-control"
              placeholder="Enter Number of Stock"
              onChange={this.handleChange}
            />
          </div>
          {this.state.errors.numberInStock && (
            <div className="alert alert-danger">
              {this.state.errors.numberInStock}
            </div>
          )}
          <br />
          <div className="form-group">
            <label htmlFor="dailyRentalRate">Rate</label>
            <input
              id="dailyRentalRate"
              type="text"
              value={this.state.data.dailyRentalRate}
              name="dailyRentalRate"
              className="form-control"
              placeholder="Enter Rate"
              onChange={this.handleChange}
            />
          </div>
          {this.state.errors.dailyRentalRate && (
            <div className="alert alert-danger">
              {this.state.errors.dailyRentalRate}
            </div>
          )}
          <br />
          <button disabled={this.validate()} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
