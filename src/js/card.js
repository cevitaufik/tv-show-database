class Card extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set show (show) {
    this._show = show
    this.render()
  }

  render () {
    const sinopsis = (this._show.overview.length >= 250) ? this._show.overview.substring(0, 250) + '...' : this._show.overview
    this.innerHTML = `
        <div class="card h-100">
          <img src="https://image.tmdb.org/t/p/original${this._show.poster_path}" class="card-img-top" alt="${this._show.original_title}">
          <div class="card-body">
            <h5 class="card-title">
            ${this._show.original_title} (${this._show.release_date.substring(0, 4)})
            </h5>
            <p class="card-text">${sinopsis}</p>
          </div>
        </div>
        `
  }
}

customElements.define('my-card', Card)
