<template>
  <home :controller="controller" />
</template>

<script setup>
import { fipeCarControllerImpl } from "../di/di";
import Home from "../components/home.vue";
const controller = fipeCarControllerImpl();
</script>

<style>
</style>