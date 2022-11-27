import '../scss/styles.scss'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import './card.js'
import './pagination.js'
import { Api } from './api.js'

const api = new Api()
console.log(api.url())

window.addEventListener('DOMContentLoaded', () => {
  fetch(api.url(), {
    headers: {
      Authorization: api.auth,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      if (api.showById()) {
        updateCard(response)
      } else {
        response.results.forEach(res => {
          updateCard(res)
        })
      }

      updatePagination(response.page)
      updatePaginationStyle(response.page)
    })
})

function updatePagination (pageNumber) {
  const page = document.createElement('my-pagination')
  page.page = pageNumber
  page.params = api.params

  document.getElementById('paginate').appendChild(page)
}

function updateCard (data) {
  const card = document.createElement('my-card')
  card.show = data

  document.getElementById('row').appendChild(card)
}

function updatePaginationStyle (page) {
  removeActiveClass()

  if (page === 1) {
    document.querySelector('a[id="previous"]').classList.add('disabled')
  }

  if (page - 3 >= 1) {
    const element = document.querySelector('a[data-page-midle="1"]').parentElement

    element.innerHTML = createPageButton(page + 1)
    element.nextElementSibling.innerHTML = createPageButton(page + 2)

    element.previousElementSibling.innerHTML = createPageButton(page)
    element.previousElementSibling.previousElementSibling.innerHTML = createPageButton(page - 1)
  }

  document.querySelector(`a[data-page="${page}"]`).parentElement.classList.add('active')
  document.getElementById('previous').setAttribute('href', `?page=${page - 1}`)
  document.getElementById('next').setAttribute('href', `?page=${page + 1}`)
}

function createPageButton (number) {
  console.log('tes')
  return `<a href="?page=${number}" class="page-link" data-page="${number}">${number}</a>`
}

function removeActiveClass () {
  const elements = document.querySelectorAll('.page-item.active')

  if (elements.length) {
    elements.forEach(el => {
      el.classList.remove('active')
      console.log(el)
    })
  }
}
