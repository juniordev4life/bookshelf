<template lang="pug">
  div.modal-container
    Modal(v-model="detailOpen" :content="bookdata.content" :image="bookdata.image_url" :title="bookdata.title")
    .c-book.c-book--cover(v-if="coverView")
      img.c-book__cover-image(:src="bookdata.image_url" @click="showDetails(bookdata.content, bookdata.image_url)")
      span(:class="{ 'c-book--favorite': true, 'c-book--favorite-full': bookdata.favorite }" @click="updateFavoriteBooks(categoryIndex, bookIndex, bookdata.id)")
    .c-book(v-else :class="['c-book--' + bookdata.category_title, tilted]")
      h2(@click="showDetails(bookdata.content, bookdata.image_url)") {{ bookdata.title }}
      span(:class="{ 'c-book--favorite': true, 'c-book--favorite-full': bookdata.favorite }" @click="updateFavoriteBooks(categoryIndex, bookIndex, bookdata.id)")
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'Book',
  data() {
    return {
      detailOpen: false
    }
  },
  components: {
    Modal
  },
  props: {
    bookdata: {
      type: Object,
      required: true
    },
    tilted: {
      type: String,
      required: true
    },
    categoryIndex: {
      type: Number,
      required: true
    },
    bookIndex: {
      type: Number,
      required: true
    },
    coverView: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    updateFavoriteBooks(categoryIndex, bookIndex, bookId) {
      if (typeof Storage !== 'undefined') {
        let favoriteBooks = window.localStorage.getItem('favoriteBooks') || []
        if (favoriteBooks.length > 0) {
          let favoriteBooksData = JSON.parse(
            window.localStorage.getItem('favoriteBooks')
          )
          const index = favoriteBooksData.indexOf(bookId)
          if (index >= 0) {
            favoriteBooksData.splice(-index, 1)
          } else {
            favoriteBooksData.push(bookId)
          }
          window.localStorage.setItem(
            'favoriteBooks',
            JSON.stringify(favoriteBooksData)
          )
        } else {
          favoriteBooks.push(bookId)
          window.localStorage.setItem(
            'favoriteBooks',
            JSON.stringify(favoriteBooks)
          )
        }
        let books = this.$store.getters.getBooks
        books.forEach((category, categoryIndex) => {
          category.books.forEach((book, bookIndex) => {
            if (book.id === bookId) {
              books[categoryIndex].books[bookIndex].favorite = !books[
                categoryIndex
              ].books[bookIndex].favorite
            }
          })
        })
      } else {
        throw new Error('LocalStorage not supported!')
      }
    },
    showDetails() {
      this.detailOpen = !this.detailOpen
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color-productivity: #8a5f21;
$color-economics: #0c347d;
$color-history: #54290c;
$color-science: #81d2c7;

.c-book {
  height: 220px;
  width: 40px;
  flex: 0 1;
  color: white;
  font-size: 0.9em;
  font-family: Verdana, sans-serif;
  margin-bottom: 10px;
  margin-top: 20px;
  transition: transform 0.4s ease;
  cursor: pointer;
  position: relative;
}

.c-book--tilted {
  width: 40px;
  margin-right: 33px;
}

.c-book--tilted {
  transform: translateY(-3px) translateX(15px) rotate(-9deg);
}

.c-book:hover {
  transform: scale(1.05);
}

.c-book--productivity {
  background-color: $color-productivity;
  border-left: 2px solid lighten($color-productivity, 4%);
  border-right: 2px solid darken($color-productivity, 4%);
}

.c-book--economics {
  background-color: $color-economics;
  border-left: 2px solid lighten($color-economics, 4%);
  border-right: 2px solid darken($color-economics, 4%);
}

.c-book--history {
  background-color: $color-history;
  border-left: 2px solid lighten($color-history, 4%);
  border-right: 2px solid darken($color-history, 4%);
}

.c-book--science {
  background-color: $color-science;
  border-left: 2px solid lighten($color-science, 4%);
  border-right: 2px solid darken($color-science, 4%);
  color: black;
}

.c-book h2 {
  padding: 0;
  font-size: 1em;
  transform-origin: 0% 0%;
  transform: rotate(0.25turn) translateY(-35px);
  width: 170px;
}

.c-book--favorite {
  background-color: white;
  display: inline-block;
  height: 15px;
  margin: 0 10px;
  bottom: 10px;
  transform: rotate(-45deg);
  width: 15px;
  left: 3px;
  position: absolute;
  opacity: 0.2;
}

.c-book--favorite:before,
.c-book--favorite:after {
  content: '';
  background-color: white;
  border-radius: 50%;
  height: 15px;
  position: absolute;
  width: 15px;
}

.c-book--favorite:before {
  top: -6px;
  left: 0;
}

.c-book--favorite:after {
  left: 6px;
  top: 0;
}

.c-book--favorite-full,
.c-book--favorite-full:before,
.c-book--favorite-full:after {
  background-color: red;
  opacity: 1;
}

.c-book--cover {
  height: 220px;
  width: 180px;
  flex: 0 1;
  margin-bottom: 10px;
  margin-top: 20px;
  transition: transform 0.4s ease;
  cursor: pointer;
  position: relative;

  .c-book--favorite {
    right: 15px;
    left: auto;
    top: 10px;
  }

  .c-book--favorite-full,
  .c-book--favorite-full:before,
  .c-book--favorite-full:after {
    background-color: red;
    opacity: 1;
  }
}

.c-book__cover-image {
  width: 165px;
  height: 220px;
  border: 1px solid #ddd;
}
</style>
