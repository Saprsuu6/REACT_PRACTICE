export default class PostService {
  static async GetPosts(limit = 10, page = 1) {
    const responce = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`,
      {
        method: "GET",
      }
    ).then(async (responce) => {
      return {
        data: await responce.json(),
        totalCount: responce.headers.get("x-total-count"),
      };
    });

    return responce;
  }

  static async GetCurrentById(id) {
    const responce = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "GET",
      }
    ).then(async (responce) => {
      return {
        data: await responce.json(),
      };
    });

    return responce;
  }
}
