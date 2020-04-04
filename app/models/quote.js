export default class Quote {
  constructor(data) {
    this.author = data.quote.author;
    this.quoteUrl = data.quote.url;
  }
  get Template() {
    return /*html*/ `<div class="row bg-dark">
<div class="col-12 text-light font-italic"><h2>"${this.quoteUrl}"</h2></div>
<div class="col-12 text-light text-right"><h4>-${this.author}</h4></div>
</div>`;
  }
}
