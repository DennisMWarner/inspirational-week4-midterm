import store from "../store.js";
import Image from "../models/image.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000,
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
      });
  }
}
const imageService = new ImageService();
export default imageService;
