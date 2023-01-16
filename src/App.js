import { useState } from "react";
import PostForm from "./components/post-form";
import PostList from "./components/post-list";
import MySelect from "./components/UI/Select/select";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript1", body: "JS" },
    { id: 2, title: "JavaScript3", body: "Jasdasd" },
    { id: 3, title: "JavaScript2", body: "Jas" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const CreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={CreatePost}></PostForm>
      <hr style={{ margin: "15px 0 15px 0" }} />
      <MySelect
        defautValue="Sort by"
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By description" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      ></MySelect>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title={"Posts"}></PostList>
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts were not found</h1>
      )}
    </div>
  );
}

export default App;
