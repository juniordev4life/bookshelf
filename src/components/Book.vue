<template lang="pug">
  .c-book(:class="['c-book--' + color]")
    h2 {{ title }}
</template>

<script>
import Book from './Book.vue'

export default {
  name: 'Book',
  components: {
    Book
  },
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
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

.c-book {
  height: 200px;
  width: 40px;
  float: left;
  color: white;
  font-size: 0.9em;
  font-family: Verdana, sans-serif;
  margin-bottom: 10px;
  margin-top: 20px;
  transition: transform 0.4s ease;
}

.book-tilted {
  float: left;
  width: 74px;
}

.book-tilted > .c-book {
  transform: translateY(-3px) translateX(15px) rotate(9deg);
}

.c-book:hover {
  transform: scale(1.05);
}

.book-green {
  background-color: darkgreen;
  border-left: 2px solid lighten(darkgreen, 4%);
  border-right: 2px solid darken(darkgreen, 4%);
}

.book-blue {
  background-color: $darkblue;
  border-left: 2px solid lighten($darkblue, 4%);
  border-right: 2px solid darken($darkblue, 4%);
}

.book-umber {
  background-color: $umber;
  border-left: 2px solid lighten($umber, 4%);
  border-right: 2px solid darken($umber, 4%);
}

.book-springer {
  background-color: $springer;
  border-left: 2px solid lighten($springer, 4%);
  border-right: 2px solid darken($springer, 4%);
  color: black;
}

.c-book h2 {
  padding: 0;
  font-size: 1em;
  transform-origin: 0% 0%;
  transform: rotate(0.25turn) translateY(-35px);
  width: 170px;
}

.c-book h3 {
  padding: 0;
  font-size: 0.7em;
  transform-origin: 0 0;
  transform: rotate(0.25turn) translateY(-15px) translateX(-20px);
  width: 150px;
}
</style>
