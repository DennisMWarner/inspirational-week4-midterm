import store from "../store.js";
import Image from "../models/image.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  getImage() {
    imgApi
      .get()
      .then(res => {
        console.log(res.data);
        let images = new Image(res.data);
        store.commit("images", images);
      })
      .catch(err => {
        console.error(err);
      });

    console.log("hello from image service API");
  }
}
const imageService = new ImageService();
export default imageService;
