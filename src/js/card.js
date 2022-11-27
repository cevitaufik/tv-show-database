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
            <i class="bi bi-star-fill text-warning"></i>
            <span class="ms-1">${this._show.vote_average}</span>
            </h5> 
            <h5 class="card-title" type="button" data-bs-toggle="modal" data-bs-target="#modal">
              ${this._show.original_name} (${this._show.first_air_date.substring(0, 4)})
            </h5>
            <p class="card-text">
              ${sinopsis}
            </p>
          </div>
        </div>
        `
  }
}

customElements.define('my-card', Card)
