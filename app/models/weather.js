export default class Weather {
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.kelvin = Math.round((data.main.temp - 273.15) * (9 / 5) + 32);
  }
  get Template() {
    return /*html*/ `<div class="row ">
  <div class="col-12 see-through-dark rounded-top"><h3>${this.city}</h3></div>
  <div class="col-12 see-through-dark rounded-bottom"><h4>${this.kelvin} &#176</h4></div>
  </div>`;
  }
}
