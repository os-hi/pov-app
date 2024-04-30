<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonIcon } from '@ionic/vue';
  import {  person  } from "ionicons/icons";
  import { useCurrentUser } from "vuefire";
  import { Auth, signOut } from 'firebase/auth';
  import {  useFirebaseAuth } from "vuefire";
  import router from '../router';

  const userLogout: Auth | null = useFirebaseAuth()
  const user = useCurrentUser();
  const email = user.value?.email;
  
  const trimmedEmail = email?.substring(0, email.indexOf("@gmail.com"));
  
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
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>LED Globe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="dark">
      <div class="example-content">
        <div style="display: flex; flex-direction: column; align-items: center;">
        <ion-icon :icon="person" style="font-size: 100px;
        color: #DD771F"/>
        <h1 style="font-size: 30px;">{{trimmedEmail}}</h1>
        </div>
        <ion-list  style="background-color: transparent; width: 100%;">
          <ion-item color="dark">
            <ion-label style="font-size: 20px;">Email: {{email}}</ion-label>
          </ion-item>
        </ion-list>
        <button @click="handleLogout">Logout</button>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
  .example-content {
    padding:  2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
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
