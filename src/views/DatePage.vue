<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton } from '@ionic/vue';
  import { ref as databaseRef, set } from 'firebase/database'
  import {db} from '../database/firebase'
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const handleActionClick = (data:string) => {
    const now = new Date()
    let submit = ""
    if(data == "Date"){
      submit = (now.getMonth() + 1)+ "/" + now.getUTCDate() + "/" + now.getFullYear()
    }else{
      submit = now.getHours() + ":" + now.getMinutes()
    }
    set(databaseRef(db, 'devices/' + "device1"), {
        display: submit
    });
    router.push('/app/color');
    console.log(submit)
  }
</script>

<template>
  <ion-page id="main-content">
    <ion-header >
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>LED Globe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="dark">
      <div class="example-content">
        <img src="../assets/date.png" alt="date">
        <div class="buttons">
          <button @click="handleActionClick('Date')">Date</button>
          <button @click="handleActionClick('Time')">Time</button>
        </div>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<style scoped>
 ion-buttons{
    color: #DD771F
  }
  .example-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }
  .buttons{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  img{
    width:400px;
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