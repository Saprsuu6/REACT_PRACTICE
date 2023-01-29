import ChangeTheme from "./components/TopMenu";
import { useTheme } from "./components/Hooks/useTheme";
import PostFilters from "./components/PostFilters";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/Modals/ModalAddItem/Modal";
import "./styles/App.css";
import "./styles/Variables.css";
import { usePosts } from "./components/Hooks/usePosts";
import { useEffect, useState } from "react";
import PostService from "./components/API/PostService";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetching } from "./components/Hooks/useFetching";
import { getPagesCount } from "./utils/pages";
import { usePagination } from "./components/Hooks/usePagination";
import PreListLoading from "./components/PrePostList";
import MyButton from "./components/UI/Button/Button";
import Pagination from "./components/UI/Pagination/Pagination";

function App() {
  // hooks
  const [posts, setPosts] = useState([]);

  const { theme, setTheme } = useTheme(); // використання кастомого хуку
  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({
    selectedSort: "",
    selectedSearch: "",
    surchQuerry: "",
  });

  const sortedAndSearchedPosts = usePosts(posts, filter);

  const [pagesArray, pagination, setPagination] = usePagination();

  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    let data = await PostService.Get(pagination.limit, pagination.page).then(
      (data) => {
        return data;
      }
    );

    setPosts(data.data);
    let totalCount = data.totalCount;

    setPagination({
      ...pagination,
      totalPages: getPagesCount(totalCount, pagination.limit),
    });
  });

  useEffect(() => {
    fetchPost();
  }, [pagination.page]);

  // other methods
  const CreatePost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPagination({ ...pagination, page: page });
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
        <PreListLoading
          isPostsLoading={isPostsLoading}
          error={postError}
          removePost={removePost}
          sortedAndSearchedPosts={sortedAndSearchedPosts}
        ></PreListLoading>
        <Pagination
          changePage={changePage}
          pagesArray={pagesArray}
          pagination={pagination}
        ></Pagination>
      </SkeletonTheme>
    </div>
  );
}

export default App;
