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

    set(databaseRef(db, 'devices/' + "device1"), {
      display: text.value
    });
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
      <ion-toolbar>
        <ion-title>POV Globe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="text-container">
          <ion-item class="ion-text-wrap">
              <ion-textarea class="textarea" label="10 letters only" :counter="true" :maxlength="10" :counter-formatter="customFormatter" label-placement="floating" fill="outline" placeholder="Type something here" v-model="text"></ion-textarea>
          </ion-item>
          <button @click="handleSubmit">Send</button>
      </div>
        
    </ion-content>
  </ion-page>
  
</template>


<style scoped>
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7rem;
    height: 100%;
  }
  .ion-text-wrap {
    width: 30rem;
  }
  .textarea {
    padding: 1rem;
  }
  button{
    padding: .8rem 5rem;
    border-radius: 1rem;
    background: #9A74D9;
    color: white;
  }
</style>