<script setup lang="ts">

import { IonPage, IonContent } from '@ionic/vue';
import { Auth, signOut } from 'firebase/auth';
import {  useFirebaseAuth } from "vuefire";
import router from '../router';

const user: Auth | null = useFirebaseAuth()

const handleLogout = async () => {
    try {
        await signOut(user).then(() => {
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
    <ion-content color="dark">
        <button @click="handleLogout">Logout</button>
    </ion-content>
   </ion-page>
</template>
