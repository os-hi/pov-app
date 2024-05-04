 
<script setup lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
  import { IonMenu, IonHeader, IonToolbar, IonContent, IonTitle } from '@ionic/vue';
  import { ref } from 'vue';
  import { onAuthStateChanged, User } from 'firebase/auth';
  import { Auth, signOut } from 'firebase/auth';
  import {  useFirebaseAuth } from "vuefire";
  import router from './router';
  import { auth } from './database/firebase';

  const userLogout: Auth | null = useFirebaseAuth()

  const isAuthenticated = ref(false); // Reactive variable to track authentication state

  // Listen for authentication state changes
  onAuthStateChanged(auth, (user: User | null) => {
    isAuthenticated.value = !!user; // Update isAuthenticated based on user presence
    if (!isAuthenticated.value) {
      router.push('/login'); // Redirect to login page if user is not authenticated
    }

  });
 

  
  
  const handleLogout = async () => {
    try {
        if(!userLogout) return
        
        await signOut(userLogout).then(() => {
            router.push('/login')
            
        }).catch((error) => {
            console.log('auth error', error)
        });

        // Optionally, you can navigate to a login page or perform any other action after logout
    } catch (error) {
        console.error('Error logging out:', error)
    }
}
</script>

<template>
  <suspense>
    <ion-app>
      <ion-menu v-if="isAuthenticated" content-id="main-content">
      <ion-header >
        <ion-toolbar color="dark">
          <ion-title>LED Globe</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding" color="dark">
        <div class="menu-content">
          <button @click="handleLogout">Logout</button>
        </div>
      </ion-content>
    </ion-menu>
      <ion-router-outlet>
      </ion-router-outlet>
    </ion-app>
  </suspense>
  </template>
  
  <style scoped>
  .menu-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width:100%;
    height: 100%;
  }
  button{
    border-radius: 1rem;
    padding: 1rem 3rem;
    background-color: #DD771F;
    color: white;
    font-size: 1rem;
  }
  </style>
 