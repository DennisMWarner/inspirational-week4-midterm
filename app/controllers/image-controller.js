import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function backgroundImageDraw() {
  let urlString = store.State.images.imgUrl;

  document.body.style.backgroundImage = "url(" + urlString + ")";
}
export default class ImageController {
  constructor() {
    store.subscribe("images", backgroundImageDraw);
    ImageService.getImage();
  }
}
