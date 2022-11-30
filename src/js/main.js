import '../scss/styles.scss'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import './card.js'
import './pagination.js'
import { Api } from './api.js'

const api = new Api()

window.addEventListener('DOMContentLoaded', () => {
  fetch(api.url(), {
    headers: {
      Authorization: api.auth,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => {
      response.results.forEach(res => updateCard(res))

      pageButton(response.page, response.total_pages)
    })
})

const pageButton = (current, total) => {
  const page = document.createElement('my-pagination')
  page.prev = api.previousPage()
  page.next = (current !== total) ? api.nextPage() : null

  document.getElementById('paginate').appendChild(page)
}

const updateCard = data => {
  const card = document.createElement('my-card')
  card.show = data

  document.getElementById('row').appendChild(card)
}

if (api.query) document.getElementById('query').value = api.query
