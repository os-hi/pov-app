<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton } from '@ionic/vue';
  import {ref} from 'vue'
  import { ref as databaseRef, set } from 'firebase/database'
  import {db} from '../database/firebase'
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const temperature = ref('')
  const humidity = ref('')
  const key = import.meta.env.VITE_OPENWEATHER_API_KEY
  const url = import.meta.env.VITE_OPENWEATHER_API_URL
  const city = "cebu"


  async function fetchWeather(userChoice: string) {
    await fetch(
    // `${url}/data/2.5/forecast/daily?q=${city}&units=imperial&cnt=16&appid=${key}`,
    `${url}/data/2.5/weather?q=${city}&units=metric&cnt=40&appid=${key}`,
    )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      temperature.value = data.main.temp
      humidity.value = data.main.humidity

      if(userChoice == "temp") {
        set(databaseRef(db, 'devices/' + "device1"), {
        display: temperature.value + ' *C'
      })
    }else{
        set(databaseRef(db, 'devices/' + "device1"), {
        display: humidity.value + ' %'
        })
      }
    router.push('/app/color');
    })
    .catch(() => {
      temperature.value = '';
      humidity.value = '';
    });

   
  }
    

</script>
<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>LED Globe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="dark">
      <suspense>
        <div class="example-content">
          <img src="../assets/weather.png" alt="weather">
          <div class="buttons">
            <button @click="fetchWeather('temp')">Temperature</button>
            <button @click="fetchWeather('humid')">Humidity</button>
          </div>
          
        </div>
      </suspense>
    </ion-content>
  </ion-page>
</template>

<style scoped>
 ion-buttons{
    color: #DD771F
  }
  .example-content {
    padding: .2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
  }
  .buttons{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  button{
    width: 10rem;
    height: 9rem;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    background-color: transparent;
    color: #DD771F;
    font-size: 1.2rem;
    box-shadow: gray 0px 0px 5px;
  }
  button:active{
    background-color: #DD771F;
    color: white;
    box-shadow: rgb(85, 85, 245) 0px 0px 5px;
  }
  button:focus{
    background-color: #DD771F;
    color: white;
    box-shadow: rgb(85, 85, 245) 0px 0px 5px;
  }
</style>
