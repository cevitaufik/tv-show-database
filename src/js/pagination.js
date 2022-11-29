class Pagination extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set prev (prev) {
    this._prev = prev
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set next (next) {
    this._next = next
    this.render()
  }

  render () {
    const prevBtn = (this._prev)
      ? `
          <a href="${this._prev}" class="btn btn-primary">
            <i class="bi bi-chevron-double-left"></i>
            Previous
          </a>
        `
      : ''

    const nextBtn = (this._next)
      ? `
          <a href="${this._next}" class="btn btn-primary ms-auto">
            Next 
            <i class="bi bi-chevron-double-right"></i>
          </a>
        `
      : ''

    this.innerHTML = `
        <div class="d-flex my-2">
          ${prevBtn}
          ${nextBtn}
        </div>
        `
  }
}

customElements.define('my-pagination', Pagination)
