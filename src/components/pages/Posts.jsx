import PreListLoading from "../PrePostList";
import Pagination from "../UI/Pagination/Pagination";
import PostFilters from "../PostFilters";
import ChangeTheme from "../TopMenu";
import MyModal from "../UI/Modals/ModalAddItem/Modal";
import PostForm from "../PostForm";
import PostService from "../API/PostService";

import { useEffect, useState } from "react";
import { usePosts } from "../Hooks/usePosts";
import { usePagination } from "../Hooks/usePagination";
import { useFetching } from "../Hooks/useFetching";
import { useTheme } from "../Hooks/useTheme";
import { getPagesCount } from "../../utils/pages";
import { SkeletonTheme } from "react-loading-skeleton";

import "../../styles/App.css";
import "../../styles/Variables.css";
import "react-loading-skeleton/dist/skeleton.css";

function Posts() {
  // hooks
  const [posts, setPosts] = useState([]);

  const [setTheme] = useTheme(); // використання кастомого хуку
  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({
    selectedSort: "",
    selectedSearch: "",
    surchQuerry: "",
  });

  const sortedAndSearchedPosts = usePosts(posts, filter);

  const [pagesArray, pagination, setPagination] = usePagination();

  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    let data = await PostService.GetPosts(pagination.limit, pagination.page).then(
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
    <div>
      <SkeletonTheme baseColor="rgba(128, 128, 128, 0.514)" highlightColor="rgba(184, 184, 184, 0.514)">
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

export default Posts;
