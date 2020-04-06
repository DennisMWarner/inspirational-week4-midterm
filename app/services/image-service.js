import store from "../store.js";
import Image from "../models/image.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 3000,
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  getImage() {
    imgApi
      .get()
      .then((res) => {
        let image = new Image(res.data);
        store.commit("images", image);
      })
      .catch((err) => {
        console.error(err);
        let image = new Image("");
        store.commit("images", image);
        console.log("default Image constructor called and commited to store");
      });
  }
}
const imageService = new ImageService();
export default imageService;
