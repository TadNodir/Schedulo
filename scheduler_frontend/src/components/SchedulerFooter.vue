<template>
  <footer class="fixed-bottom bg-dark text-center text-white">
    <span><a class="link-light" href="mailto:tadnodir99@gmail.com">{{ kontakt }}</a>&nbsp|&nbsp<a class="link-light" href="#" @click="impressum_page">{{ impressum }}</a></span><br>
    <span>Made with &#10084;</span><br>
    <span>&copy; 2023 Schedulo. All rights reserved.</span>
  </footer>
</template>

<script>
export default {
  name: "SchedulerFooter",
  emits: ['imprsm'],
  data() {
    return {
      kontakt: 'Kontakt',
      impressum: 'Impressum'
    }
  },
  methods: {
    impressum_page: function() {
      this.$emit('imprsm', this.impressum);
    }
  }
}
</script>

<style scoped>
footer {
  padding-left: 1vw;
  font-family: Constantia, serif;
}
</style>