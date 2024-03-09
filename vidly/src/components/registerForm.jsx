import React, { Component } from "react";
import Joi from "joi";

class RegisterForm extends Component {
  state = {
    account: {
      email: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = Joi.object({
    name: Joi.string().required().label("Name"),
    password: Joi.string().required().label("Password"),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .label("Email"),
  });

  validate = () => {
    const result = this.schema.validate(this.state.account, {
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

    const account = { ...this.state.account };
    account[currentTarget.name] = currentTarget.value;
    this.setState({ account, errors });
  };

  render() {
    return (
      <div className="login">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={this.state.account.email}
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={this.handleChange}
            />
          </div>
          {this.state.errors.email && (
            <div className="alert alert-danger">{this.state.errors.email}</div>
          )}
          <br />
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.account.password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          {this.state.errors.password && (
            <div className="alert alert-danger">
              {this.state.errors.password}
            </div>
          )}
          <br />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={this.state.account.name}
              name="name"
              className="form-control"
              placeholder="Enter name"
              onChange={this.handleChange}
            />
          </div>
          {this.state.errors.name && (
            <div className="alert alert-danger">{this.state.errors.name}</div>
          )}
          <br />
          <button disabled={this.validate()} className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
