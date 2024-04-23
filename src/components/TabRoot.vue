<script setup lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import { calendar, cloud, chatbox, happy, exit } from 'ionicons/icons';
import router from '../router';

  import { useCurrentUser } from 'vuefire'

  const user = useCurrentUser()
// if no user is logged in, redirect to login page
  // if user is logged in, redirect to /app/text

  if (!user) {
    router.push(`/`);
  }

  
</script>

<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="app" href="/app/text">
            <ion-icon :icon="chatbox" />
            <ion-label>Message</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="emoji" href="/app/emoji">
            <ion-icon :icon="happy" />
            <ion-label>Emoji</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="date" href="/app/date">
            <ion-icon :icon="calendar" />
            <ion-label>Date</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="weather" href="/app/weather">
            <ion-icon :icon="cloud" />
            <ion-label>Weather</ion-label>
          </ion-tab-button>
          <!-- <ion-tab-button tab="login" href="/">
            <ion-icon :icon="exit" />
            <ion-label>Logout</ion-label>
          </ion-tab-button> -->
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
