import '../scss/styles.scss'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'

import './card.js'

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.themoviedb.org/3/discover/movie', {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjY2NDM2NmVlYTI1MjMwZTk0NjA0YzViYzBiMjVkNSIsInN1YiI6IjYzN2UwN2U1ZmU2MzE4MDBjZTQ4ZjU0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DTzZE4fhKUWm1sh7fgdCWGB67xx2LUNRZdeKxTcSyF8',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => {
      response.results.forEach(res => {
        const card = document.createElement('my-card')
        card.show = res

        document.getElementById('row').appendChild(card)
      })

      updatePaginationStyle(response.page)

      console.log(response)
    })
})

function updatePaginationStyle (page) {
  removeActiveClass()

  if (page === 1) {
    document.querySelector('button[id="previous"]').classList.add('disabled')

    document.querySelector('button[data-page="1"]').parentElement.classList.add('active')
  }
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
