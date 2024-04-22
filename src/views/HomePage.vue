<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>POV Globe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-item>
            <ion-textarea label="10 letters only" :counter="true" :maxlength="10" :counter-formatter="customFormatter" label-placement="floating" fill="outline" placeholder="Type something here" v-model="text"></ion-textarea>
        </ion-item>
        <ion-button >Submit</ion-button>
    </ion-content>
  </ion-page>
  
</template>

<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonTextarea, IonButton  } from '@ionic/vue';
  import { ref } from 'vue';

  const text = ref('');
  const customFormatter = (inputLength:number, maxLength:number) => {
    return `${maxLength - inputLength} characters remaining`;
  }

</script>