export default class Quote {
  constructor(data) {
    this.author = data.quote.author || "";
    this.quote = data.quote.body || "";
  }
  get Template() {
    return /*html*/ `<div class="row">
<div class="col-12 font-italic see-through-light"><h2>"${this.quote}"</h2></div>
<div class="col-12 text-right see-through-light"><h4>-${this.author}</h4></div>
</div>`;
  }
}
