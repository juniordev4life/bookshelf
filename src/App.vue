<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Books</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    this.$store.dispatch('fetchBooks', { vm: this })
    if (typeof Storage !== 'undefined') {
      let favoriteBooks = window.localStorage.getItem('favoriteBooks')
      favoriteBooks = JSON.parse(favoriteBooks)
      if (favoriteBooks === null) {
        window.localStorage.setItem('favoriteBooks', JSON.stringify([]))
      } else {
        window.localStorage.setItem(
          'favoriteBooks',
          JSON.stringify(favoriteBooks)
        )
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
