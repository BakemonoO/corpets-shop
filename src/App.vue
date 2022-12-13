<template>
<div class="app">
  <navigation/>
  <router-view></router-view>
<app-footer/>
</div>
  
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import Navigation from './components/Navigation.vue'

  export default {
  components: { Navigation, AppFooter },
  
  data() {
    return {
    }
  },

  methods: {

  },

  computed: {
   
  },

  watch: {

  }

  }
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  line-height: 100%;
  font-size: 18px;
  font-weight: 400;
  svg {
    fill: inherit;
    stroke: inherit;
  }
}

h1 {
  font-size: 40px;
  line-height: 145%;
}

.router__link_item {
  &:visited {
    color: inherit;
  }
  &:link {
    text-decoration: none;
  }
}

.app {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
}

</style>