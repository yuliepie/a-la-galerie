import { createApi } from "unsplash-js";

class UnsplashService {
  #ACCESS_KEY;
  // #SECRET;
  #instance;
  constructor() {
    this.#ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
    // this.#SECRET = process.env.UNSPLASH_SECRET;

    this.#instance = createApi({
      accessKey: this.#ACCESS_KEY,
    });
  }

  async getPhotoURLs(query) {
    if (typeof query !== "string") {
      throw new Error("Query is supposed to be the type of string!");
    }

    try {
      const { response, status } = await this.#instance.search.getPhotos(query);
      return { urls: response?.results.map(result => result.urls.regular), status };
    } catch (err) {
      console.error(err);
    }
  }
}

export default new UnsplashService();
