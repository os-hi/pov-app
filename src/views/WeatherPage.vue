<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
  import {ref} from 'vue'
  import { ref as databaseRef, set } from 'firebase/database'
  import {db} from '../database/firebase'


  const temperature = ref('')
  const humidity = ref('')
  const key = import.meta.env.VITE_OPENWEATHER_API_KEY
  const url = import.meta.env.VITE_OPENWEATHER_API_URL
  const city = "cebu"


  async function fetchWeather(userChoice: string) {
    await fetch(
    // This endpoint doesn't work for the free version, replaced with the one below
    // `${url}/data/2.5/forecast/daily?q=${city}&units=imperial&cnt=16&appid=${key}`,
    `${url}/data/2.5/weather?q=${city}&units=imperial&cnt=40&appid=${key}`,
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      temperature.value = data.main.temp
      humidity.value = data.main.humidity

      if(userChoice == "temp") {
        set(databaseRef(db, 'devices/' + "device1"), {
        display: temperature.value + ' °C'
      })}else{
        set(databaseRef(db, 'devices/' + "device1"), {
        display: humidity.value + ' %'
        })
      }
    })
    .catch(() => {
      temperature.value = '';
      humidity.value = '';
    });

   
  }
    

</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>POV Globe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <suspense>
        <div class="example-content">

          <button @click="fetchWeather('temp')">Temperature</button>
          <button @click="fetchWeather('humid')">Humidity</button>
        </div>
      </suspense>
    </ion-content>
  </ion-page>
</template>

<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
  button{
    padding: .1rem 1rem
  }
</style>
