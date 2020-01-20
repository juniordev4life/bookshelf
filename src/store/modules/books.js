import axios from 'axios'

const state = {
  books: null
}

const getters = {
  getBooks: state => {
    return state.books
  }
}

const mutations = {
  async fetchBooks(state) {
    await axios
      .get('https://ancient-springs-73658.herokuapp.com/categories')
      .then(function(response) {
        let books = []
        const categories = response.data.categories
        categories.forEach(category => {
          books.push({
            category: category.title,
            books: getBooksData(category.title, category.book_ids)
          })
        })
        console.log(books)
        state.books = books
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
  },
  getBooks: state => {
    return state.books
  }
}

const actions = {
  fetchBooks: ({ commit }) => {
    commit('fetchBooks')
  }
}

function getBooksData(categoryTitle, bookIds) {
  const tiltedBook = randomTiltedBook(bookIds)
  let books = []
  bookIds.forEach((bookId, index) => {
    axios
      .get(`https://ancient-springs-73658.herokuapp.com/books/${bookId}`)
      .then(function(response) {
        let bookData = response.data
        if (tiltedBook === index) {
          bookData.tilted = true
        }
        bookData.category_title = categoryTitle.toLowerCase()
        books.push(bookData)
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
  })
  return books
}

function randomTiltedBook(books) {
  return Math.floor(Math.random() * Math.floor(books.length))
}

export default {
  state,
  getters,
  mutations,
  actions
}
