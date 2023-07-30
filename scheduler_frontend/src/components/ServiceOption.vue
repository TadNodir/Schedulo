<template>
  <div>
    <button id="bigBtn" type="button" class="btn btn-dark m-4 shadow border rounded" data-bs-placement="bottom" title="This click will change your life.">
      <img class="rounded border" :src="pic_link" alt="schedule_picture">
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ServiceOption",
  data() {
    return {
      createSchedule: "Create a schedule",
    }
  },
  props: ['pic_link', 'name']
}
</script>

<style scoped>
#bigBtn {
  height: 20vw;
  width: 20vw;
  font-family: Constantia, serif;
}
img {
  height: 15vw;
  width: 18vw;
}
</style>