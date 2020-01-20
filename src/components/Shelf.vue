<template lang="pug">
  .c-shelf
    .c-shelf__category(v-for="(category,categoryIndex) in books" :key="categoryIndex")
      .c-shelf__category-title {{ category.category }}
      Book(:bookdata="book" v-for="(book, bookIndex) in category.books" :key="bookIndex" :tilted="isTilted(book)" :categoryIndex="categoryIndex" :bookIndex="bookIndex")
</template>

<script>
import Book from '@/components/Book.vue'

export default {
  name: 'Shelf',
  components: {
    Book
  },
  props: {
    books: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: false
    }
  },
  methods: {
    isTilted(book) {
      if (book.tilted) {
        return 'c-book--tilted'
      }
      return ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$brown: #a87328;

.c-shelf {
  width: 50%;
  height: 100%;
  margin: 0 auto;
  border: 10px $brown solid;
  overflow: hidden;
  background-image: linear-gradient(
    darken($brown, 32%),
    darken($brown, 30%) 270px,
    lighten($brown, 4%) 270px,
    lighten($brown, 4%) 272px,
    $brown 222px,
    $brown 228px,
    darken($brown, 4%) 278px,
    darken($brown, 4%) 280px
  );
  background-size: 10px 280px;
}

.c-shelf__category {
  position: relative;
  display: flex;
  padding-top: 30px;
}

.c-shelf__category-title {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: $brown;
  color: white;
  font-size: 20px;
  font-style: italic;
}

@media (max-device-width: 1024px) {
  .c-shelf {
    width: 80%;
  }
}
</style>
