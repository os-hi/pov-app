<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
  import { ref as databaseRef, set, get } from 'firebase/database'
  import {db} from '../database/firebase'

  const handleActionClick = async  (color: string) => {
     // Get current data from database
     const snapshot = await get(databaseRef(db, 'devices/' + "device1"));
      const data = snapshot.val();
      
      // Merge existing data with updated color
      const newData = { ...data, color };
      
      // Set merged data to database
      set(databaseRef(db, 'devices/' + "device1"), newData);
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
     <div class="container">
      <img src="../assets/color.png" alt="color">
      <h1>Choose a color:</h1>
      <div class="buttons">
          <button class="red" @click="handleActionClick('#FF0000')"></button>
          <button class="green" @click="handleActionClick('#00FF00')"></button>
          <button class="blue" @click="handleActionClick('#0000FF')"></button>
          <button class="yellow" @click="handleActionClick('#FFFF00')"></button>
          <button class="purple" @click="handleActionClick('#800080')"></button>
          <button class="orange" @click="handleActionClick('#FFA500')"></button>
          <button class="cyan" @click="handleActionClick('#00FFFF')"></button>
          <button class="white" @click="handleActionClick('#FFFFFF')"></button>
          <button class="pink" @click="handleActionClick('#FFC0CB')"></button>
        </div>
     </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
  ion-buttons{
    color: #DD771F;
  }
  img {
    width: 200px;
    height: 300px;
  }
  .red {
    background-color: #FF0000;
  }
  .green {
    background-color: #00FF00;
  }
  .blue {
    background-color: #0000FF;
  }
  .yellow {
    background-color: #FFFF00;
  }
  .purple {
    background-color: #800080;
  }
  .orange {
    background-color: #FFA500;
  }
  .cyan {
    background-color: #00FFFF;
  }
  .white {
    background-color: #FFFFFF;
  }
  .pink {
    background-color: #FFC0CB;
  }
  .container {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  button {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    box-shadow: rgb(248, 161, 54) 0px 0px 5px;
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 2rem;
  }
</style>
