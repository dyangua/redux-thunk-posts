import React from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>POST CENTRAL</h2>
      <PostList />
    </div>
  );
}

export default App;
