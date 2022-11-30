export class Api {
  constructor () {
    this.base = 'https://api.themoviedb.org/3'
    this.auth = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjY2NDM2NmVlYTI1MjMwZTk0NjA0YzViYzBiMjVkNSIsInN1YiI6IjYzN2UwN2U1ZmU2MzE4MDBjZTQ4ZjU0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DTzZE4fhKUWm1sh7fgdCWGB67xx2LUNRZdeKxTcSyF8'
    this.urlString = new URL(window.location)
    this.params = new URLSearchParams(this.urlString.search)
    this.currentPage = parseInt(this.params.get('page'))
    this.query = this.params.get('query')
  }

  url () {
    if (!this.urlString.search) return this.discover()

    if (this.page()) return this.page()

    if (this.hasQuery()) return this.hasQuery()
  }

  discover () {
    return `${this.base}/discover/tv`
  }

  hasQuery () {
    return (this.query) ? `${this.base}/search/tv?query=${this.query}` : false
  }

  page () {
    return (this.currentPage) ? `${this.discover()}?page=${this.currentPage}` : false
  }

  nextPage () {
    if (this.currentPage) {
      this.params.set('page', this.currentPage + 1)

      return this.toQueryString()
    }

    this.params.set('page', 2)

    return this.toQueryString()
  }

  previousPage () {
    if (this.currentPage && this.currentPage > 1) {
      this.params.set('page', this.currentPage - 1)

      return this.toQueryString()
    }

    return false
  }

  toQueryString () {
    return `?${this.params.toString()}`
  }
}
