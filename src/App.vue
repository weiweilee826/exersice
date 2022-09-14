<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'App',
  created(){
    // const api = `${process.env.VUE_APP_API}/api/${process.env.CUSTOM_PATH}/products`;
    const api = `${process.env.VUE_APP_API}/api/weiwei2020/products`;
      this.$http.get(api).then((response) => {
        console.log(response.data);
      });
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
