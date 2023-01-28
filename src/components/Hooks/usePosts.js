import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPost = useMemo(() => {
    if (sort !== "") {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPost;
};

export const usePosts = (posts, filter) => {
  const sortedPosts = useSortedPosts(posts, filter.selectedSort);

  const sortedAndSearchedPosts = useMemo(() => {
    switch (filter.selectedSearch) {
      case "id":
        return filter.surchQuerry === ""
          ? sortedPosts
          : sortedPosts.filter((post) => post.id === filter.surchQuerry);
      case "title":
        return sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(filter.surchQuerry.toLowerCase())
        );
      case "body":
        return sortedPosts.filter((post) =>
          post.body.toLowerCase().includes(filter.surchQuerry.toLowerCase())
        );
      default:
        return sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(filter.surchQuerry.toLowerCase())
        );
    }
  }, [filter.surchQuerry, filter.selectedSearch, sortedPosts]);

  return sortedAndSearchedPosts;
};
