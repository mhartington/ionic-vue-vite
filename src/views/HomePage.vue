<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
} from '@ionic/vue';
const items = Array.from(Array(50).keys());
</script>

<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonTitle>Blank</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonList>
        <IonItem v-for="item in items" :routerLink="'/detail/' + item">Item {{item}}</IonItem>
      </IonList>
    </IonContent>
  </IonPage>
</template>

<style scoped>
</style>
