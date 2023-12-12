<template>
    <div>
    <the-header></the-header>
    <router-view></router-view>
    <!-- The <router-view> tag is where the content of the current route is rendered -->
    <!-- 具体来说 在header里面 我们设置了很多router-link 我们希望在这个App.vue页面切换到不同link的时候 这也不同link所对应的页面可以在App.vue显示出来 -->
    <!-- 所以要在这个页面上用 <router-view></router-view> -->  
</div>
  </template>
  
  <script>
  import TheHeader from './components/layout/TheHeader.vue';
  
  export default {
    components: {
      TheHeader
    }  
  }
  </script>
  

  <style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  /* asterisk selector applies the rule to every element on the page */
  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: "Roboto", sans-serif;
  }
  
  body {
    margin: 0;
  }
  </style>