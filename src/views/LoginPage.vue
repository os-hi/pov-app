<script setup lang="ts">
// import { computed, ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonContent,
  IonList,
  IonItem,
  IonTitle,
  IonRow,
  IonCol,
  IonInput,
  IonToast,
} from "@ionic/vue";

//   const username = ref("");
//   const password = ref("");
//   const submitted = ref(false);

//   const usernameValid = true;
//   const passwordValid = true;

//   const showToast = ref(false);
//   const toastMessage = ref("");

//   const canSubmit = computed(
//     () => username.value.trim() !== "" && password.value.trim() !== ""
//   );

//   const onLogin = () => {
//     submitted.value = true;
//     if (usernameValid && passwordValid) {
//     }
//   };

//   const onSignup = () => {
//     toastMessage.value = "Successfully logged in!";

//     showToast.value = true;

//     username.value = "";
//     password.value = "";
//   };

import { Ref, ref } from "vue";
// import { RouterLink } from "vue-router";
import router from "../router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFirebaseAuth } from "vuefire";
import { useCurrentUser } from 'vuefire'

const auth = useFirebaseAuth()!;

const email: Ref<string> = ref("");
const password = ref("");


  const user = useCurrentUser()
// if no user is logged in, redirect to login page
  // if user is logged in, redirect to /app/text

  if (user) {
    router.push(`/app/text`);
  }
// const isIncorrect = ref(false);

// const showPassword = ref(false);

const handleSubmit = () => {
  const newEmail = email.value;
  const newPass = password.value;

  console.log(newEmail, newPass);
  signInWithEmailAndPassword(auth, newEmail, newPass)
    .then(() => {
      // Signed in
      router.push(`/app/text`);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="ion-content">
        <form novalidate @submit.prevent="handleSubmit">
          <ion-list>
            <ion-item>
              <ion-input
                label="Email"
                labelPlacement="stacked"
                v-model="email"
                name="username"
                type="email"
                :spellcheck="false"
                autocapitalize="off"
                required
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-input
                labelPlacement="stacked"
                label="Password"
                v-model="password"
                name="password"
                type="text"
                required
              ></ion-input>
            </ion-item>
          </ion-list>

          <ion-row responsive-sm class="ion-padding">
            <ion-col>
              <ion-button type="submit" expand="block">Login</ion-button>
            </ion-col>
            <!-- <ion-col>
                <ion-button
                    :disabled="!canSubmit"
                    @click="onSignup"
                    color="light"
                    expand="block"
                    >Signup</ion-button
                >
                </ion-col> -->
          </ion-row>
        </form>
        <!-- <ion-toast
          :is-open="showToast"
          :message="toastMessage"
          :duration="2000"
        ></ion-toast> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.ion-content {
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.list {
  margin-bottom: 0;
}
</style>
