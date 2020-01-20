<template>
  <div class="c-modal" v-show="value">
    <div class="c-modal__container">
      <span class="c-modal__close" @click.prevent="close"></span>
      <div class="c-modal__title">{{ title }}</div>
      <p class="c-modal__text">{{ content }}</p>
      <div class="c-modal__image">
        <img class="c-modal__img" :src="image" alt="TEST" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: {
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="css" scoped>
.c-modal {
  position: fixed;
  top: 10%;
  height: 30%;
  background-color: rgba(255, 255, 255, 1);
  width: 60%;
  left: 20%;
  z-index: 9000;
  animation: fadein 0.3s;
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.65);
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.c-modal__container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
}

.c-modal__title {
  flex: 0 0 100%;
  font-weight: bold;
}

.c-modal__image {
  flex: 0 1 30%;
}

.c-modal__img {
  max-width: 100%;
  height: 300px;
}

.c-modal__text {
  flex: 0 1 65%;
  padding: 5px 15px;
}

.c-modal__close {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 28px;
  height: 28px;
  opacity: 0.3;
  cursor: pointer;
}
.c-modal__close:hover {
  opacity: 1;
}
.c-modal__close:before,
.c-modal__close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 25px;
  width: 2px;
  background-color: #333;
}
.c-modal__close:before {
  transform: rotate(45deg);
}
.c-modal__close:after {
  transform: rotate(-45deg);
}

@media (max-device-width: 1024px) {
  .c-modal {
    top: 0;
    height: 100%;
    width: 100%;
    left: 0;
  }

  .c-modal__image {
    flex: 0 1 100%;
  }

  .c-modal__img {
    max-width: 100%;
    height: 200px;
  }

  .c-modal__text {
    flex: 0 1 100%;
    padding: 5px 15px;
    font-size: 14px;
  }
}
</style>
