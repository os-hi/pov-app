<script setup lang="ts">
// import { computed, ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonItem,
  IonTitle,
  IonRow,
  IonCol,
  IonInput,
} from "@ionic/vue";

    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { useFirebaseAuth } from 'vuefire'
    import {Ref,ref} from 'vue'
    import router from "../router";

    const email: Ref<string> = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const isIncorrect = ref(false);
    const auth = useFirebaseAuth()!

    const handleSubmit = () =>{
        if(password.value === confirmPassword.value){
            const newEmail = email.value;
            const newPass = password.value
            createUserWithEmailAndPassword(auth, newEmail, newPass)
            .then(() => {
                // Signed up 
                router.push(`/app/text`);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
        }else{
            console.log("invalid");
            isIncorrect.value = true
            
        }
    }
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" color="dark">
      <div class="ion-content">
        <form novalidate @submit.prevent="handleSubmit">
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
            <ion-item color="dark">
              <ion-input
                labelPlacement="stacked"
                label="Confirm Password"
                v-model="confirmPassword"
                name="confirmPassword"
                type="password"
                required
              ></ion-input>
            </ion-item>

          <ion-row responsive-sm class="ion-padding">
            <ion-col>
                <button type="submit">Register</button>
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
        <div class="account">Already have an account? <router-link to="/login">Login</router-link></div>
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
.ion-content {
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
}
button{
  width: 16rem;
  padding: .8rem 2rem;
  border-radius: 1rem;
  background-color: #DD771F;
}
.list {
  margin-bottom: 0;
}
</style>
