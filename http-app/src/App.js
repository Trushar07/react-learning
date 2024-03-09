import React, { Component } from "react";
import "./App.css";
import httpService from "./services/httpService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const { data: posts } = await httpService.get(apiEndPoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await httpService.post(apiEndPoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    const originalPosts = this.state.posts;
    post.title = "New Title";

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    post[index] = [...post];
    this.setState({ posts });

    try {
      const { data } = await httpService.put(apiEndPoint + "/" + post.id, {
        title: post.title,
      });
      console.log(data);
      toast.success("Updated Successfully!");
    } catch (exception) {
      alert("Something went wrong!");
      this.setState({ posts: originalPosts });
    }
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const newPosts = this.state.posts.filter((m) => m.id !== post.id);
    this.setState({ posts: newPosts });

    // Optimistic updates
    try {
      await httpService.delete(apiEndPoint + "/" + post.id);
      // throw new Error("New"); /* Throwing an Error intentionally */
    } catch (exception) {
      if (exception.response && exception.response.status === 404) {
        alert("This post has already been deleted!");
      }
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button
          className="btn btn-primary"
          onClick={this.handleAdd}
          style={{ marginBottom: "10px" }}
        >
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
