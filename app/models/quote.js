export default class Quote {
  constructor(data) {
    this.author = data.quote.author || "";
    this.quote = data.quote.body || "";
  }
  get Template() {
    return /*html*/ `
<div class="col-md-10 font-italic see-through-light rounded-top"><h2>"${this.quote}"</h2></div>
<div class="col-md-10 text-right see-through-light rounded-bottom"><h4>-${this.author}</h4></div>
`;
  }
}
