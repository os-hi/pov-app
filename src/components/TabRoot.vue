<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
} from "@ionic/vue";

import { calendar, cloud, chatbox, colorPalette, shapes } from "ionicons/icons";
import router from "../router";
import { ref, onMounted } from "vue";
import { onAuthStateChanged, User } from "firebase/auth";
import { Auth, signOut } from "firebase/auth";
import { useFirebaseAuth } from "vuefire";
import { auth } from "../database/firebase";

const isAuthenticated = ref(false); // Reactive variable to track authentication state
const userLogout: Auth | null = useFirebaseAuth();

// Listen for authentication state changes
onMounted(() => {
  onAuthStateChanged(auth, (user: User | null) => {
    isAuthenticated.value = !!user; // Update isAuthenticated based on user presence
    console.log(isAuthenticated.value);
    if (!isAuthenticated.value) {
      router.push("/login"); // Redirect to login page if user is not authenticated
    }
  });
});

// Logout handler
const handleLogout = async () => {
  try {
    if (!userLogout) return;

    await signOut(userLogout).then(() => {
      router.push("/login");
      window.location.reload(); // Reload the page after logout
    });

    // Optionally, you can navigate to a login page or perform any other action after logout
  } catch (error) {
    console.error("Error logging out:", error);
    // Handle error or provide feedback to the user
  }
};
</script>

<template>
  <ion-menu v-if="isAuthenticated" content-id="main-content">
    <ion-header>
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
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" color="dark">
        <ion-tab-button tab="text" href="/app/text">
          <ion-icon :icon="chatbox" />
          <ion-label>Message</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="emoji" href="/app/emoji">
          <ion-icon :icon="shapes" />
          <ion-label>Shape</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="date" href="/app/date">
          <ion-icon :icon="calendar" />
          <ion-label>Date</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="weather" href="/app/weather">
          <ion-icon :icon="cloud" />
          <ion-label>Weather</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="color" href="/app/color">
          <ion-icon :icon="colorPalette" />
          <ion-label>Color</ion-label>
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
.menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
}
button {
  border-radius: 1rem;
  padding: 1rem 3rem;
  background-color: #dd771f;
  color: white;
  font-size: 1rem;
}
</style>
