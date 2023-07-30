<template>
  <div v-if="!show_body">
    <main v-if="!toggle_props" id="main_options" class="d-flex col justify-content-around">
      <service-option :pic_link='cre_sch_pic_link' :name="create_sch" @click="open_props"></service-option>
      <service-option :pic_link='change_sch_pic_link' :name="change_schedule"></service-option>
    </main>
    <schedule-props @close="open_props" v-if="toggle_props"></schedule-props>
  </div>
  <div v-else>
    <impressum></impressum>
  </div>
</template>

<script>
import ServiceOption from "./ServiceOption.vue";
import ScheduleProps from "./ScheduleProps.vue";
import Impressum from "./Impressum.vue";

export default {
  components: {Impressum, ServiceOption, ScheduleProps},
  props: ['show_body', 'page'],
  name: "SchedulerBody",
  data() {
    return {
      cre_sch_pic_link: require('@/assets/create_schedule.png'),
      create_sch: "Create a schedule",
      change_sch_pic_link: require('@/assets/change.png'),
      change_schedule: "Change existing schedule",
      toggle_props: false,
    }
  },
  methods: {
    open_props: function () {
      this.toggle_props = !this.toggle_props;
    },
  }
}
</script>

<style scoped>
main {
  margin-top: 5vw;
}
</style>