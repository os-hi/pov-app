
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
      <ion-toolbar>
        <ion-title>POV Globe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">
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
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .buttons{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  button{
    border-radius: 1rem;
    padding: .5rem .1rem;
    font-size: 3.5rem;
  }
</style>