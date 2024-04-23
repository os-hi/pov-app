
<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
  import { ref as databaseRef, set } from 'firebase/database'
  import {db} from '../database/firebase'



  const handleActionClick = (emoji: string) => {

  set(databaseRef(db, 'devices/' + "device1"), {
      display: emoji
  });
}

</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>POV Globe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">
        <img src="../assets/emoji.webp" alt="emoji">
        <h1>Choose an emoji:</h1>
        <div class="buttons">
          <button @click="handleActionClick('❤️')">
            ❤️
          </button>
          <button @click="handleActionClick('😆')">
            😆
          </button>
          <button @click="handleActionClick('😮')">
            😮
          </button>
          <button @click="handleActionClick('😥')">
            😥
          </button>
          <button @click="handleActionClick('😠')">
            😠
          </button>
          <button @click="handleActionClick('👍')">
            👍
          </button>
        </div>
        
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
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
    border-radius: 1rem;
    padding: .5rem .1rem;
    font-size: 5rem;
    background-color: transparent;
    box-shadow: gray 0px 0px 5px;
  }
  button:focus{
    background-color: rgb(85, 85, 245);
  }
  h1{
    text-align: center;
  }
</style>