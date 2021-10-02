import { useState } from "react";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState(null);
  const apiURL = "https://jsonplaceholder.typicode.com/posts";

  function fetchData() {
    fetch(apiURL)
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
      });
  }
  return (
    <div className="App">
      <div className="posts">
        {posts &&
          posts.map((post, index) => (
            <div className="element">
              <h2>
                {post.id}: {post.title}
              </h2>
              <h2 className="title"> </h2>
              <p className="text"> Post: {post.body} </p>
            </div>
          ))}
        <div className="btn-block">
          <button className="btn" onClick={fetchData}>
            Show All Posts
          </button>
        </div>
      </div>
    </div>
  );
}
