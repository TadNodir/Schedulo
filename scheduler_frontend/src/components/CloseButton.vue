<template>
  <button class="btn btn-white text-dark float-right" @click="closeX">
    {{ x }}
  </button>
</template>

<script>
export default {
  name: "CloseButton",
  emits: ['closeX'],
  data() {
    return {
      x: 'X'
    }
  },
  methods: {
    closeX: function () {
      this.$emit('closeX', this.x);
    }
  }
}
</script>

<style scoped>
button {
  font-size: 1.5vw;
}
</style>