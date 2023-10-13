<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { Travel_listStore } from '../stores/counter.js';

const All_travel = Travel_listStore();
const All_travel_list = ref(All_travel.travel_list);



const items = ref([])
const url = ref('{{i.ip}}')

function fetchPosts() {
  axios
    .get(url.value)
    .then((response) => {
      items.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(fetchPosts)
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="(i,index) in All_travel_list " :key="index">
      <div class="card h-100">
        <img :src="i.img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>{{i.name}}</strong></h5>
          <p class="card-text">เช็คสภาพอากาศก่อนออกเดินทาง</p>
        </div>
        <div class="card-footer">
          <RouterLink :to="`/WeatherCard/${index}`">
            <button class="btn btn-info" type="submit">เช็คสภาพอากาศ</button>
          </RouterLink>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Kodchasan:ital,wght@1,600&family=Mali&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&family=Sriracha&display=swap');
.card {
  border: 2px solid #352eff; 
  border-radius: 5px; 
}

.card-img-top {
  width: 100%;
  max-height: 400px;
}

.card-text {
  font-family: 'Itim', cursive;
  font-size: 20px;
}

.card-footer {
  font-family: 'Itim', cursive;
  font-size: 50px;
}

.card-title { 
  font-family: 'Itim', cursive;
  font-size: 30px;
}
</style>
