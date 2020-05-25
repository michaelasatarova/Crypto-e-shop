<template>
  <div id="app">   
    <div class="container-fluid bg-dark">

       <div id="nav" >
         <h3 class="float-left main-color"> <strong> LOGO</strong></h3>
          <router-link to="/">Home</router-link> |
          <router-link to="/coins">Coins</router-link>

        <div class="float-right">
          <a href="#">Login </a>|
          <a href="#">Sign Up</a>
        </div>         
      </div>

    </div>
   
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-color{
 color: #fcff0b;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #fcff0b;
    }
  }
  a:hover, a:active{
    color: #fcff0b;
  }
}
</style>
