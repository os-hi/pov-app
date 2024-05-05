<script setup lang="ts">
// import { computed, ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonItem,
  IonTitle,
  IonRow,
  IonCol,
  IonInput,
} from "@ionic/vue";



import { Ref, ref, watch } from "vue";
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

  watch(user, (newValue) => {
  if (newValue) {
    router.push(`/app/text`);
  }
});
// const isIncorrect = ref(false);

// const showPassword = ref(false);

const handleSubmit = () => {
  const newEmail = email.value;
  const newPass = password.value;

  signInWithEmailAndPassword(auth, newEmail, newPass)
    .then(() => {
      // Signed in
      router.push(`/app/text`);
      window.location.reload();
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
      <ion-toolbar color="dark">
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" color="dark">
      <div class="ion-content">
        <form novalidate @submit.prevent="handleSubmit" >
            <ion-item color="dark">
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

            <ion-item color="dark">
              <ion-input
                labelPlacement="stacked"
                label="Password"
                v-model="password"
                name="password"
                type="password"
                required
              ></ion-input>
            </ion-item>
          <ion-row responsive-sm class="ion-padding">
            <ion-col>
              <button type="submit" expand="block">Login</button>
            </ion-col>
          </ion-row>
          <div class="account">Don't have an account yet? <router-link to="/register">Register</router-link></div>
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
form{
    padding: 4rem 2rem;
    width: 24rem;
    border-radius: 15px;
    box-shadow: rgb(249, 171, 111) 0px 0px 5px;
}
.account{
    text-align: center;
}
button{
  width: 16rem;
  padding: .8rem 2rem;
  border-radius: 1rem;
  background-color: #DD771F;
}
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
