<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <div class="max-w-7xl mx-auto">
        <nav class="p-3">
          <RouterLink to="/" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home</RouterLink>
          <RouterLink to="/trial" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Trial</RouterLink>
        </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen">
      <RouterView />
  </main> -->

  <div class="nav">nav</div>
  <main class="main">
    <!-- main -->
    <header class="header">header</header>
    <div class="content">
      <!-- content -->
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
    </div>
  </main>

</template>

<style>
  .nav, .main, .header, .content {
    border: solid 1px;
  }
  #app {
    display: flex;
    gap: 2px;
  }
  .nav  {
    background-color: lightpink;
    width: 200px;
    height: 100px;
  }
  .main {
    background-color: lightgreen;
    flex: 1;
    height: 200px;
  }
  .header {
    background-color: lightslategray;
  }
  .content {
    background-color: limegreen;
  }
</style>