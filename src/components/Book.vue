<template lang="pug">
  .c-book(:class="['c-book--' + bookdata.category_title, tilted]")
    h2 {{ bookdata.title }}
</template>

<script>
export default {
  name: 'Book',
  props: {
    bookdata: {
      type: Object,
      required: true
    },
    tilted: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color-productivity: #a87328;
$color-economics: #0c347d;
$color-history: #54290c;
$color-science: #eded80;

.c-book {
  height: 220px;
  width: 40px;
  float: left;
  color: white;
  font-size: 0.9em;
  font-family: Verdana, sans-serif;
  margin-bottom: 10px;
  margin-top: 20px;
  transition: transform 0.4s ease;
  cursor: pointer;
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
</style>
