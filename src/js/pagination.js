class Pagination extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set params (params) {
    this._params = params
    this.render()
    console.log(params);
  }

  // eslint-disable-next-line accessor-pairs
  set page (page) {
    this._page = page
    this.render()
  }

  render () {
    const prev = (this._page === 1) ? 1 : this._page - 1
    const next = this._page + 1
    const params = (this._params) ? this._params + '&' : '?'
    this.innerHTML = `
        <nav class="m-auto">
          <ul class="pagination">
            <li class="page-item">
              <a href="${params}page=${prev}" class="page-link" id="previous">Previous</a>
            </li>
            <li class="page-item">
              <a href="${params}page=${this._page}" class="page-link" data-page="${this._page}">${this._page}</a>
            </li>
            <li class="page-item">
              <a href="${params}page=${this._page + 1}" class="page-link" data-page="${this._page + 1}">${this._page + 1}</a>
            </li>
            <li class="page-item">
              <a href="${params}page=${this._page + 2}" class="page-link" data-page="${this._page + 2}">${this._page + 2}</a>
            </li>
            <li class="page-item">
              <a href="${params}page=${this._page + 3}" class="page-link" data-page="${this._page + 3}">${this._page + 3}</a>
            </li>
            <li class="page-item">
              <a href="${params}page=${this._page + 4}" class="page-link" data-page="${this._page + 4}">${this._page + 4}</a>
            </li>
            <li class="page-item">
              <a href="${params}page=${next}" class="page-link" id="next">Next</a>
            </li>
          </ul>
        </nav>
        `
  }
}

customElements.define('my-pagination', Pagination)
