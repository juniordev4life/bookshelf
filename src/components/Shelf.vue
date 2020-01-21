<template lang="pug">
  .c-shelf(:class="{ 'c-shelf--cover': coverView }")
    .c-shelf__view-toggle
      span.c-shelf__view-toggle-label Cover View
      .c-shelf__view-toggle-button
        input.c-shelf__view(type="checkbox" id="shelfviewswitch" @click="toggleCoverView")
        label.c-shelf__view-label(for="shelfviewswitch") Toggle
    .c-shelf__category(v-for="(category,categoryIndex) in books" :key="categoryIndex")
      .c-shelf__category-title {{ category.category }}
      Book(:bookdata="book" v-for="(book, bookIndex) in category.books" :key="bookIndex" :tilted="isTilted(book)" :categoryIndex="categoryIndex" :bookIndex="bookIndex" :coverView="coverView")
</template>

<script>
import Book from '@/components/Book.vue'

export default {
  name: 'Shelf',
  data() {
    return {
      coverView: false
    }
  },
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
    },
    toggleCoverView() {
      this.coverView = !this.coverView
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
  overflow: visible;
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
  position: relative;
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

.c-shelf__view-toggle {
  position: absolute;
  top: -60px;
  right: 0;
}

.c-shelf__view-toggle-label {
  display: inline-block;
}

.c-shelf__view-toggle-button {
  display: inline-block;
  margin-left: 10px;
}

input.c-shelf__view[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label.c-shelf__view-label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 25px;
  background: grey;
  display: block;
  border-radius: 25px;
  position: relative;
}

label.c-shelf__view-label:after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 20px;
  transition: 0.3s;
}

input.c-shelf__view:checked + label.c-shelf__view-label {
  background: #bada55;
}

input.c-shelf__view:checked + label.c-shelf__view-label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label.c-shelf__view-label:active:after {
  width: 20px;
}

@media (max-device-width: 1024px) {
  .c-shelf {
    width: 80%;
  }

  .c-shelf__view-toggle {
    display: none;
  }
}
</style>
