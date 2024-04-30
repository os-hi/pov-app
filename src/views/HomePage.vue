<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonTextarea  } from '@ionic/vue';
  import { ref } from 'vue';
  import { ref as databaseRef, set } from 'firebase/database'
  import {db} from '../database/firebase'

  // import router from '../router';

  // import { useCurrentUser } from 'vuefire'

  // const user = useCurrentUser()
// if no user is logged in, redirect to login page
  // if user is logged in, redirect to /app/text

  // if (user.value) {
  //   console.log(user.value.email);
  //   router.push(`/login`);
  // }

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
      <ion-toolbar color="dark">
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
</style>