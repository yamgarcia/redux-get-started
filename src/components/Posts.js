import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       posts: []
  //     };
  //   }
  //   componentDidMount() {
  //     fetch("http://jsonplaceholder.typicode.com/posts")
  //       .then(res => res.json())
  //       .then(data => this.setState({ posts: data }));
  //   }
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts: p } = this.props;
    const postItems = p.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
