import ChangeTheme from "./components/TopMenu";
import { useTheme } from "./components/Hooks/useTheme";
import PostFilters from "./components/PostFilters";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyModal from "./components/UI/Modals/ModalAddItem/Modal";
import "./styles/App.css";
import "./styles/Variables.css";
import { usePosts } from "./components/Hooks/usePosts";
import { useEffect, useState } from "react";
import PostService from "./components/API/PostService";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import PostSceleton from "./components/CustumSceleton/PostSceleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  // hooks
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript1", body: "JS" },
    { id: 2, title: "JavaScript3", body: "Jasdasd" },
    { id: 3, title: "JavaScript2", body: "Jas" },
  ]);

  const { theme, setTheme } = useTheme(); // використання кастомого хуку
  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({
    selectedSort: "",
    selectedSearch: "",
    surchQuerry: "",
  });

  const sortedAndSearchedPosts = usePosts(posts, filter);

  useEffect(() => {
    fetchPosts();
  }, []);

  const [isPostsLoading, setIsPostsLoading] = useState(false);

  // other methods
  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      // болванка
      await PostService.getAll().then((data) => {
        setPosts(data);
      });
      setIsPostsLoading(false);
    }, 5000);
  }

  const CreatePost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={CreatePost}></PostForm>
        </MyModal>
        <ChangeTheme setModal={setModal} setTheme={setTheme}></ChangeTheme>
        <PostFilters filter={filter} setFilter={setFilter}></PostFilters>
        <hr style={{ margin: "15px 0 15px 0" }} />
        {isPostsLoading ? (
          Array(10)
            .fill(0)
            .map((_, i) => (
              <PostSceleton
                style={{ margin: "10px 0px 10px 0px" }}
                key={i}
              ></PostSceleton>
            ))
        ) : (
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title={"Posts"}
          ></PostList>
        )}
      </SkeletonTheme>
    </div>
  );
}

export default App;
