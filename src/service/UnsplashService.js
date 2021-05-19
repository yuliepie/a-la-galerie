import { createApi } from "unsplash-js";

class UnsplashService {
  #instance;
  constructor() {
    this.#instance = createApi({
      accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    });
  }

  async getPhotoURLs(query) {
    if (typeof query !== "string") {
      throw new Error("Query is supposed to be the type of string!");
    }

    try {
      const { response, status } = await this.#instance.search.getPhotos({ query });
      return { urls: response?.results.map(result => result.urls.regular), status };
    } catch (err) {
      console.error(err);
    }
  }
}

export default new UnsplashService();
