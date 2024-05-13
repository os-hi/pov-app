<script setup lang="ts">
  import {IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonTextarea, IonMenuButton, IonButtons} from '@ionic/vue';
  import { ref,onMounted } from 'vue';
  import { ref as databaseRef, set } from 'firebase/database'
  import { db} from '../database/firebase'
  import { onAuthStateChanged, User } from "firebase/auth";
  import { auth } from "../database/firebase";
  import { useRouter } from 'vue-router';

  const router = useRouter();


const isAuthenticated = ref(false); // Reactive variable to track authentication state

// Listen for authentication state changes
onMounted(() => {
  onAuthStateChanged(auth, (user: User | null) => {
    isAuthenticated.value = !!user; // Update isAuthenticated based on user presence
    if (!isAuthenticated.value) {
      router.push("/login"); // Redirect to login page if user is not authenticated
    }
  });
});

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

  const customFormatter = (inputLength:number, maxLength:number) => {
    return `${maxLength - inputLength} characters remaining`;
  }

  const handleSubmit = () => {
  if (text.value.trim() !== "") { // Check if text is not empty
    set(databaseRef(db, 'devices/device1'), {
      display: text.value.toUpperCase()
    });
    console.log("Text sent:", text.value); // Log the text being sent
    try {
      router.push('/app/color'); // Ensure router is imported and used correctly
      console.log("Redirecting to /app/color...");
    } catch (error) {
      console.error("Error redirecting to /app/color:", error); // Log any errors that occur during routing
    }
  } else {
    console.error("Text is empty!"); // Log error if text is empty
  }
};
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
          <ion-item class="ion-text-wrap" color="dark">
              <ion-textarea 
                class="textarea" 
                label="what's on your mind" 
                :counter="true" :maxlength="10" 
                :counter-formatter="customFormatter" 
                label-placement="floating" fill="outline" 
                placeholder="Type something here" 
                v-model="text">
              </ion-textarea>
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
    justify-content: space-between;
    padding-top: 3rem;
    height: 100%;
  }
  img{
    width: 15rem;
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