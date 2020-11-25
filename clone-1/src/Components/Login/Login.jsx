import React, { Component } from "react";

import { DataContext } from "../Context/DataContextProvider";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { authenticateUser } = this.context;

    authenticateUser({ email, password });
  }

  render() {
    const { email, password } = this.state;
    const { loading, error } = this.context;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

Login.contextType = DataContext;
