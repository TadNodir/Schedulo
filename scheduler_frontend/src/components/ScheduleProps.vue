<template>
  <section class="border w-35 h-75 overflow-auto rounded shadow position-absolute top-50 start-50 translate-middle" @click.self="closeLayer">
    <close-button @closeX="closeLayer"></close-button>
    <form @submit.prevent="handleSubmit" class="input-group">
      <label for="name" class="m-2"> {{ name_label }} </label>
      <input id="name" v-model="properties.name_schedule" class="m-2 rounded" type="text" name="s_name" max="20" required><br>
      <div id="error_msg" v-if="properties.name_schedule.length > 20" class="error text-danger"> {{ errorMsg }}</div>
      <label for="days_amt" class="m-2"> {{ d_p_w }} </label>
      <input id="days_amt" v-model="properties.days_amt" class="m-2 rounded" type="number" name="days_amount" max="7" min="1" required><br>
      <div id="error_msg" v-if="typeof properties.days_amt === 'string' || (properties.days_amt > 7 || properties.days_amt < 0)" class="error text-danger"> {{ errorMsg }}</div>
      <label for="min_p_per" class="m-2"> {{ m_p_p }} </label>
      <input id="min_p_per" v-model="properties.mins_amt" class="m-2 rounded" type="number" name="min_p_per" min="1" required><br>
      <div id="error_msg" v-if="typeof properties.mins_amt === 'string' || properties.mins_amt < 0" class="error text-danger"> {{ errorMsg }}</div>
      <div class="input-group m-2">
        <label for="start_time" class=""> {{ start_time }} </label>
        <input id="start_time" v-model="properties.start_t" class="mb-2 rounded" type="number" name="start_time" min="0" max="12" required>
        <div id="error_msg" v-if="typeof properties.start_t === 'string' || (properties.start_t < 0 || properties.start_t > 12)" class="error text-danger"> {{ errorMsg }}</div>
        <select class="custom-select w-25 rounded" id="select_start">
          <option value="am">{{ am }}</option>
          <option value="pm">{{ pm }}</option>
        </select>
      </div>
      <div class="input-group m-2">
        <label for="end_time" class=""> {{ end_time }} </label>
        <input id="end_time" v-model="properties.end_t" class="mb-2 rounded" type="number" name="end_time" min="0" max="12" required>
        <div id="error_msg" v-if="typeof properties.end_t === 'string' || (properties.end_t < 0 || properties.end_t > 12)" class="error text-danger"> {{ errorMsg }}</div>
        <select class="custom-select w-25 rounded" id="select_end">
          <option value="am">{{ am }}</option>
          <option value="pm">{{ pm }}</option>
        </select>
      </div>
      <br>
      <input class="btn btn-dark rounded float-right" type="submit" name="submit_props" value="Create">
    </form>
  </section>
</template>

<script>
import CloseButton from "./CloseButton.vue";
export default {
  name: "ScheduleProps",
  emits: ['close'],
  components: {
    CloseButton
  },
  data() {
    return {
      name_label: 'Schedule name:',
      d_p_w: 'Days per week:',
      m_p_p: 'Minutes per period:',
      start_time: 'Start time:',
      end_time: 'End time:',
      am: 'a.m.',
      pm: 'p.m.',
      error: '',
      errorMsg: 'Incorrect input',
      name_schedule: '',
      days_amt: 5,
      mins_amt: 60,
      start_t: 8,
      end_t: 6,
      properties: {}
    }
  },
  methods: {
    closeLayer: function() {
      this.$emit('close');
    },
    handleSubmit: function () {
      this.error = this.errorMsg
    },
    addProps: function () {
      console.log(this.properties);
    },
    created() {
      this.addProps();
    }
  }
}
</script>

<style scoped>
section {
  width: 35vw;
  font-size: 1.2vw;
  font-family: Constantia, serif;
}
form {
  padding: 2vw;
}
input, select {
  display: block;
  box-sizing: border-box;
  width: 100%;
}
#error_msg {
  font-size: 0.9vw;
  width: 100%;
}
</style>