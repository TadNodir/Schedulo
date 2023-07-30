<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand fs-4 ml-2" href="#" @click="go_home">{{ brand }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="text-center collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav position-absolute top-50 start-50 translate-middle fs-5">
        <li class="nav-item active">
          <a class="nav-link" href="#" @click="go_home">{{ home }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{  profile }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{ logout }}</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 position-absolute top-50 end-0 translate-middle-y mr-4">
        <input class="m-1 p-1 border-1 rounded" type="search" placeholder="Search" aria-label="Search">
        <button class="mb-1 p-1 border-1 btn btn-secondary btn-sm fs-6" type="submit" @click="search_items">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
// import axios from 'axios';
export default {
  name: "SchedulerHeader",
  emits: ['go_home'],
  data() {
    return {
      home: "HOME",
      profile: "'S PROFILE",
      logout: "LOGOUT",
      brand: "Schedulo",
      home_val: false
    }
  },
  methods: {
    search_items: function () {

    },
    go_home: function() {
      this.$emit('go_home', this.home_val);
    },
    ask_username: function () {
// Fetching data from the backend
      axios.get('/api/users')
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });

// Posting data to the backend
//       axios.post('/api/users', { name: 'John Doe', email: 'john@example.com' })
//           .then(response => {
//             console.log(response.data);
//           })
//           .catch(error => {
//             console.error(error);
//           });

    }
  }
}
</script>

<style scoped>
nav {
  /*overflow: hidden;*/
  /*background-color: #333;*/
  /*padding: 10px;*/
  /*display: flex;*/
  /*margin: 0;*/
  /*font-family: "Britannic Bold", serif;*/
  /*color: aliceblue;*/
  /*width: 100%;*/
  /*height: 3vw;*/
  padding-left: 1vw;
  font-family: Constantia, serif;
}
form {
  margin-right: 1vw;
}
</style>