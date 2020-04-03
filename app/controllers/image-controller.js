import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function backgroundImageDraw() {
  console.log(store.State.images);
  document.body.style.backgroundImage = store.State.images[0].img;
}
export default class ImageController {
  constructor() {
    store.subscribe("images", backgroundImageDraw);
    ImageService.getImage();
  }
}
