export class Api {
  constructor () {
    this.base = 'https://api.themoviedb.org/3'
    this.auth = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjY2NDM2NmVlYTI1MjMwZTk0NjA0YzViYzBiMjVkNSIsInN1YiI6IjYzN2UwN2U1ZmU2MzE4MDBjZTQ4ZjU0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DTzZE4fhKUWm1sh7fgdCWGB67xx2LUNRZdeKxTcSyF8'
    this.urlString = new URL(window.location)
    this.params = this.urlString.search
  }

  url () {
    if (!this.urlString.search) {
      return this.discover()
    }

    if (this.page()) return this.page()

    if (this.showById()) return this.showById()

    if (this.query()) return this.query()
  }

  discover () {
    return this.base + '/discover/tv'
  }

  showById () {
    const id = this.urlString.searchParams.get('id')

    if (id) {
      return this.base + '/tv/' + id
    }

    return false
  }

  query () {
    const query = this.urlString.searchParams.get('query')

    if (query) {
      return this.base + '/search/tv?query=' + query
    }

    return false
  }

  page () {
    const page = this.urlString.searchParams.get('page')

    if (page) {
      return this.discover() + '?page=' + page
    }

    return false
  }
}
