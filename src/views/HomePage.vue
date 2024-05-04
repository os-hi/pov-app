<script setup lang="ts">
  import {IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonTextarea, IonMenuButton, IonButtons} from '@ionic/vue';
  import { ref } from 'vue';
  import { ref as databaseRef, set } from 'firebase/database'
  import {auth, db} from '../database/firebase'
  import { useRouter } from 'vue-router'
  import { onAuthStateChanged } from 'firebase/auth';

  const refreshRouter = useRouter();
  // import router from '../router';

  // import { useCurrentUser } from 'vuefire'

  // const user = useCurrentUser()
// if no user is logged in, redirect to login page
  // if user is logged in, redirect to /app/text

  // if (user.value) {
  //   console.log(user.value.email);
  //   router.push(`/login`);
  // }



  onAuthStateChanged(auth, (user) => {
    if (user) {
    const currentRoute = refreshRouter.currentRoute.value;
    refreshRouter.push({ ...currentRoute }); // Navigates to the current route, triggering a reload
  }
});

  const text = ref('');

  const customFormatter = (inputLength:number, maxLength:number) => {
    return `${maxLength - inputLength} characters remaining`;
  }

  const handleSubmit = () => {
    if(text.value != ""){
      set(databaseRef(db, 'devices/' + "device1"), {
        display: text.value
      });
    }
  }
</script>



<template>
  <ion-page id="main-content">
    <ion-header >
      <ion-toolbar color="dark" >
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>LED Globe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="dark">
      <div class="text-container">
        <img src="../assets/message.webp" alt="message">
          <ion-item class="ion-text-wrap" color="dark">
              <ion-textarea class="textarea" label="what's on your mind" :counter="true" :maxlength="10" :counter-formatter="customFormatter" label-placement="floating" fill="outline" placeholder="Type something here" v-model="text"></ion-textarea>
          </ion-item>
          <button @click="handleSubmit">Send</button>
      </div>
    </ion-content>
  </ion-page>
  
</template>


<style scoped>
  ion-buttons{
    color: #DD771F
  }
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
  button{
    border-radius: 1rem;
    padding: 1rem 4rem;
    width: 16rem;
    color: white;
    font-size: 1rem;
    background-color: #DD771F;
  }
 .logout{
    background-color: transparent;
    width: auto;
  }
</style>