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
            books: getBooksData(category.book_ids)
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

function getBooksData(bookIds) {
  let books = []
  bookIds.forEach(bookId => {
    axios
      .get(`https://ancient-springs-73658.herokuapp.com/books/${bookId}`)
      .then(function(response) {
        books.push(response.data)
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
  })
  return books
}

export default {
  state,
  getters,
  mutations,
  actions
}
