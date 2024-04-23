<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
  import { ref as databaseRef, set } from 'firebase/database'
  import {db} from '../database/firebase'

  const handleActionClick = (data:string) => {
    const now = new Date()
    let submit = ""
    if(data == "Date"){
      submit = now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear()
    }else{
      submit = now.getHours() + ":" + now.getMinutes()
    }
    set(databaseRef(db, 'devices/' + "device1"), {
        display: submit
    });
    console.log(submit)
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
      <div class="example-content">
        <div class="buttons">
          <button @click="handleActionClick('Date')">Date</button>
          <button @click="handleActionClick('Time')">Time</button>
        </div>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .buttons{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  button{
    width: 15rem;
    padding: 1rem;
    font-size: 1rem;
  }
</style>