<template>
    <scheduler-header @go_home="set_page"></scheduler-header>
    <scheduler-body :show_body="hide_container" :page="page"></scheduler-body>
    <scheduler-footer @imprsm="open_impressum"></scheduler-footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SchedulerHeader from './components/SchedulerHeader.vue';
import SchedulerBody from './components/SchedulerBody.vue';
import SchedulerFooter from './components/SchedulerFooter.vue';

@Options({
  components: {
    SchedulerHeader, SchedulerBody, SchedulerFooter
  },
  props: ['show_body', 'page'],
  data() {
    return {
      hide_container: false,
    }
  },
  methods: {
    open_impressum: function() {
      this.hide_container = !this.hide_container;
    },
    set_page: function() {
      this.hide_container = this.page;
    }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
body {
  margin: 0;
}
</style>
