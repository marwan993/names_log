<template>
  <div id="app" class="h-100">
    <div class="container-fluid h-100">
      <div class="col-md-12 h-100 d-flex justify-content-center align-items-center">
            <NameForm />
      </div>
    </div>
  </div>
</template>

<script>
import NameForm from './components/NameForm.vue'

export default {
  name: 'App',
  components: {
    NameForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-bg {
  background: #bce5d0;
}
</style>