import React, { Component } from "react";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  //npm i redux react-redux redux-thunk

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <label> Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <br />
          <div>
            <label> Body: </label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
