export default class PostService {
  static async getAll() {
    try {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then(async (responce) => {
        return await responce.json();
      });

      return responce;
    } catch (e) {
      console.log(e);
    }
  }
}
