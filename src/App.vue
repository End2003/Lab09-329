<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
    
<div class="container">
  <nav class=" bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <RouterLink :to="`/`">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16" >
          <path d="M18.935,18.509h-3.83c0-2.819-2.285-5.105-5.104-5.105s-5.105,2.286-5.105,5.105H1.066c-0.234,0-0.425,0.19-0.425,0.426c0,0.234,0.191,0.425,0.425,0.425h17.869c0.234,0,0.425-0.19,0.425-0.425C19.359,18.699,19.169,18.509,18.935,18.509 M5.746,18.509c0-2.351,1.905-4.254,4.254-4.254s4.255,1.903,4.255,4.254H5.746zM14.813,14.298l1.805-1.806c0.166-0.166,0.166-0.436,0-0.602c-0.166-0.167-0.436-0.167-0.602,0l-1.806,1.805c-0.165,0.166-0.165,0.436,0,0.603C14.378,14.463,14.647,14.463,14.813,14.298 M9.575,9.575v2.552c0,0.235,0.19,0.426,0.425,0.426s0.425-0.19,0.425-0.426V9.575c0-0.235-0.19-0.426-0.425-0.426S9.575,9.339,9.575,9.575 M5.187,14.298c0.167,0.165,0.436,0.165,0.603,0c0.166-0.167,0.166-0.437,0-0.603l-1.806-1.805c-0.167-0.167-0.435-0.167-0.602,0c-0.166,0.166-0.166,0.436,0,0.602L5.187,14.298z M7.448,4.044h0.851v2.127c0,0.235,0.19,0.425,0.425,0.425h2.553c0.234,0,0.426-0.19,0.426-0.425V4.044h0.851c0.234,0,0.425-0.19,0.425-0.425c0-0.117-0.047-0.224-0.124-0.301l-2.553-2.552C10.224,0.688,10.117,0.641,10,0.641S9.776,0.688,9.699,0.766L7.146,3.318C7.07,3.395,7.022,3.501,7.022,3.619C7.022,3.854,7.213,4.044,7.448,4.044 M10,1.667l1.525,1.525h-0.249c-0.234,0-0.425,0.191-0.425,0.426v2.127H9.149V3.619c0-0.235-0.19-0.426-0.425-0.426H8.475L10,1.667z"/>
        </svg> 
        </RouterLink>
        <br>
        <div class="fon">
              สถาพอากาศที่สถานที่ท่องเที่ยว
            </div>
      </a>
    </div>
  </nav><hr>

  <RouterView />
  
</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Kodchasan:ital,wght@1,600&family=Mali&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&family=Sriracha&display=swap');
.container-fluid {
  border: 2px solid #5d00f4; 
  border-radius: 5px; 
  background-color: #bed5ff;
  font-family: 'Itim', cursive;
  
}
.fon{
  text-align: center;
  font-size: 50px;

}
body{
  background-color: rgb(255, 255, 255);
}
.container{
  background-color: rgb(249, 249, 249);
}

</style>