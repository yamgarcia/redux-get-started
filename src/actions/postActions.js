import { FETCH_POSTS, NEW_POSTS } from "./types";

export const fetchPosts = () => dispatch => {
  //when ever you wanna send data we call dispatch
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

// export function fetchPosts() {
//     return function(dispatch) {
//       fetch("http://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: FETCH_POSTS,
//             payload: post
//         }));
//     };
//   }
