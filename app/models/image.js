export default class Image {
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    if (
      !data.large_url ||
      !data.large_url.includes(".jpg" || ".png" || ".jpeg" || ".mp4")
    ) {
      this.imgUrl = "app/assets/images/_20190619_120542.JPG";
      console.log("server image is not an image type");
    } else {
      this.imgUrl = data.large_url || "app/assets/images/_20190619_120542.JPG";
    }

    this.id = data.id || "";
  }
}
