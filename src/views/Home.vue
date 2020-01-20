<template lang="pug">
  Shelf(v-if="books" :books="books")
</template>

<script>
import Shelf from '@/components/Shelf.vue'

export default {
  name: 'home',
  components: {
    Shelf
  },
  computed: {
    books() {
      return this.$store.getters.getBooks
    }
  }
}
</script>
