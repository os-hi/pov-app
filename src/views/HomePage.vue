<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonTextarea, IonButton  } from '@ionic/vue';
  import { ref } from 'vue';
  import { ref as databaseRef, set } from 'firebase/database'
  import {db} from '../database/firebase'

  const text = ref('');
  // const numbersRef = databaseRef(db, 'numbers')

  const customFormatter = (inputLength:number, maxLength:number) => {
    return `${maxLength - inputLength} characters remaining`;
  }

  const handleSubmit = () => {
    if(text.value != ""){
      set(databaseRef(db, 'devices/' + "device1"), {
        display: text.value
      });
    }

  //   function writeUserData(userId, name, email, imageUrl) {
  // const db = getDatabase();
  // set(ref(db, 'users/' + userId), {
  //   username: name,
  //   email: email,
  //   profile_picture : imageUrl
  // });
// }

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
      <div class="text-container">
        <img src="../assets/message.webp" alt="message">
          <ion-item class="ion-text-wrap">
              <ion-textarea class="textarea" label="what's on your mind" :counter="true" :maxlength="10" :counter-formatter="customFormatter" label-placement="floating" fill="outline" placeholder="Type something here" v-model="text"></ion-textarea>
          </ion-item>
          <div class="buttons">
            <IonButton @click="handleSubmit" shape="round" size="large" expand="block">Send</IonButton>
          </div>
      </div>
        
    </ion-content>
  </ion-page>
  
</template>


<style scoped>
  .header-background {
    background-color: blue;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }
  img{
    width: 20rem;
  }
  .ion-text-wrap{
    width: 90%;
  }

  .textarea {
    padding: 1rem;
  }
  .buttons{
    width: 16rem;
  }
</style>