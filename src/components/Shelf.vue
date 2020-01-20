<template lang="pug">
  .c-shelf
    .c-shelf__category(v-for="(category,index) in books" :key="index")
      p {{ category.category }}
      Book(:title="book.title" v-for="(book, index) in category.books" :key="index")
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
    randomBookColor() {
      return '#' + ((Math.random() * 0xffffff) << 0).toString(16)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$brown: #a87328;
$darkblue: #0c347d;
$umber: #54290c;
$springer: #eded80;
html {
  height: 100%;
}

body {
  background-color: #aaacb5;
}

.c-shelf {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  border: 10px $brown solid;
  overflow: hidden;
  background-image: linear-gradient(
    darken($brown, 32%),
    darken($brown, 30%) 220px,
    lighten($brown, 4%) 220px,
    lighten($brown, 4%) 222px,
    $brown 222px,
    $brown 228px,
    darken($brown, 4%) 228px,
    darken($brown, 4%) 230px
  );
  background-size: 10px 230px;
  box-shadow: 0px 1000px 0px 400px #7a7668;
}

.c-shelf__category {
  display: block;
}
</style>
