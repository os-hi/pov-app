
<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton } from '@ionic/vue';
  import { ref as databaseRef, set } from 'firebase/database'
  import {db} from '../database/firebase'



  const handleActionClick = (emoji: string) => {

  set(databaseRef(db, 'devices/' + "device1"), {
      display: emoji
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
      <div class="example-content">
        <img src="../assets/emoji.webp" alt="emoji">
        <h1>Choose a shape:</h1>
        <div class="buttons">
          <button @click="handleActionClick('<+->')">
            ♡
          </button>
          <button @click="handleActionClick('$#')">
            △
          </button>
          <button @click="handleActionClick('^!')">
            ☐
          </button>
       
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
  img{
    width: 20rem;
  }
  .buttons{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 2rem;
  }
  button{
    padding: .5rem 1rem;
    border-radius: 1rem;
    font-size: 4rem;
    background-color: transparent;
    box-shadow: gray 0px 0px 5px;
  }
  button:focus{
    background-color: #DD771F;
  }
  h1{
    text-align: center;
  }
</style>