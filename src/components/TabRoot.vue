<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import { calendar, cloud, chatbox, happy, person  } from "ionicons/icons";
import router from "../router";

import { useCurrentUser } from "vuefire";

const user = useCurrentUser();
// if no user is logged in, redirect to login page
// if user is logged in, redirect to /app/text
console.log("logged in: ", user.value?.email);
if (!user.value?.email) {
  console.log("pursuit", user.value);
  router.push(`/login`);
}
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" color="dark">
        <ion-tab-button tab="text" href="/app/text">
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
        <ion-tab-button tab="profile" href="/app/profile">
            <ion-icon :icon="person" />
            <ion-label>Profile</ion-label>
          </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<style scoped>
ion-tab-button:focus {
  color: #dd771f;
}
ion-tab-button:hover {
  color: #dd771f;
}
ion-tab-button:active {
  color: #dd771f;
}
</style>
