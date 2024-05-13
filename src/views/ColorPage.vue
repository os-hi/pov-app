<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton } from '@ionic/vue';
  import { ref as databaseRef, set, get } from 'firebase/database'
  import {db} from '../database/firebase'
import { ref } from 'vue';

  const selectedColor = ref('');
  const handleActionClick = async  (color: string) => {
     // Get current data from database
     const snapshot = await get(databaseRef(db, 'devices/' + "device1"));
      const data = snapshot.val();
      
      // Merge existing data with updated color
      const newData = { ...data, color };
      
      // Set merged data to database
      set(databaseRef(db, 'devices/' + "device1"), newData);

      // Update selectedColor
    selectedColor.value = color;
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
      <div class="heading-wrapper">
          <h1>Choose a color:</h1>
      </div>
      <div class="buttons">
          <button class="red" :class="{ selected: selectedColor === '#FF0000' }" @click="handleActionClick('#FF0000')"></button>
          <button class="green" :class="{ selected: selectedColor === '#00FF00' }" @click="handleActionClick('#00FF00')"></button>
          <button class="blue" :class="{ selected: selectedColor === '#0000FF' }" @click="handleActionClick('#0000FF')"></button>
          <button class="yellow" :class="{ selected: selectedColor === '#FFFF00' }" @click="handleActionClick('#FFFF00')"></button>
          <button class="purple" :class="{ selected: selectedColor === '#800080' }" @click="handleActionClick('#800080')"></button>
          <button class="orange" :class="{ selected: selectedColor === '#FFA500' }" @click="handleActionClick('#FFA500')"></button>
          <button class="cyan" :class="{ selected: selectedColor === '#00FFFF' }" @click="handleActionClick('#00FFFF')"></button>
          <button class="white" :class="{ selected: selectedColor === '#FFFFFF' }" @click="handleActionClick('#FFFFFF')"></button>
          <button class="pink" :class="{ selected: selectedColor === '#FFC0CB' }" @click="handleActionClick('#FFC0CB')"></button>
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
  .heading-wrapper {
    background-color: #333; /* Background color for the heading */
    padding: 1rem; /* Add some padding for spacing */
    border-radius: 10px; /* Add border-radius for rounded corners */
    text-align: center; /* Center align the text */
    box-shadow: 0 0 10px #FFA500; /* Add a glow effect using box-shadow */
    animation: glowHead .5s infinite alternate; /* Apply glow animation */
  }
  h1 {
    color: white; /* Set text color to white */
    margin: 0; /* Remove default margin */
  }
  .red {
    background-color: #FF0000;
    --button-color: #FF0000; /* Set button color variable */
  }

  .green {
    background-color: #00FF00;
    --button-color: #00FF00; /* Set button color variable */
  }

  .blue {
    background-color: #0000FF;
    --button-color: #0000FF; /* Set button color variable */
  }

  .yellow {
    background-color: #FFFF00;
    --button-color: #FFFF00; /* Set button color variable */
  }

  .purple {
    background-color: #800080;
    --button-color: #800080; /* Set button color variable */
  }

  .orange {
    background-color: #FFA500;
    --button-color: #FFA500; /* Set button color variable */
  }

  .cyan {
    background-color: #00FFFF;
    --button-color: #00FFFF; /* Set button color variable */
  }

  .white {
    background-color: #FFFFFF;
    --button-color: #FFFFFF; /* Set button color variable */
  }

  .pink {
    background-color: #FFC0CB;
    --button-color: #FFC0CB; /* Set button color variable */
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
  /* Define glow effect for selected button */
  .selected {
    animation: glow .5s infinite alternate; /* Change glow animation duration and timing here */
    --glow-color: var(--button-color); /* Use a CSS variable for glow color */
  }
  @keyframes glow {
    from {
      box-shadow: 0 0 10px var(--glow-color); /* Use a CSS variable for glow color */
    }
    to {
      box-shadow: 0 0 20px var(--glow-color); /* Use a CSS variable for glow color and size */
    }
  }
  @keyframes glowHead {
    from {
      box-shadow: 0 0 10px #FFA500; /* Start glow effect */
    }
    to {
      box-shadow: 0 0 20px #FFA500; /* End glow effect */
    }
  }
</style>
