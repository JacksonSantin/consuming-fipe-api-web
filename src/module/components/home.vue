<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon
        @click="controller.drawer.value = !controller.drawer.value"
      ></v-app-bar-nav-icon>

      <v-toolbar-title> Fipe Car API</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-for="link in controller.links.value" :key="link" variant="text">
        {{ link }}
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="controller.drawer.value" temporary>
      <v-sheet
        class="ma-5"
        style="cursor: pointer"
        @click="controller.searchBrands('carros')"
      >
        <v-img
          height="50"
          src="../../assets/cars.webp"
          cover
          class="text-white rounded-lg"
        >
          <v-toolbar color="rgba(0, 0, 0, 0.5)" theme="dark">
            <v-toolbar-title class="text-h6 mb-3"> Cars </v-toolbar-title>
          </v-toolbar>
        </v-img>
      </v-sheet>
      <v-sheet
        class="ma-5"
        style="cursor: pointer"
        @click="controller.searchBrands('motos')"
      >
        <v-img
          height="50"
          src="../../assets/motorcycle.jpg"
          cover
          class="text-white rounded-lg"
        >
          <v-toolbar color="rgba(0, 0, 0, 0.5)" theme="dark">
            <v-toolbar-title class="text-h6 mb-3"> Motorcycle </v-toolbar-title>
          </v-toolbar>
        </v-img>
      </v-sheet>
      <v-sheet
        class="ma-5"
        style="cursor: pointer"
        @click="controller.searchBrands('caminhoes')"
      >
        <v-img
          height="50"
          src="../../assets/truck.webp"
          cover
          class="text-white rounded-lg"
        >
          <v-toolbar color="rgba(0, 0, 0, 0.5)" theme="dark">
            <v-toolbar-title class="text-h6 mb-3"> Truck </v-toolbar-title>
          </v-toolbar>
        </v-img>
      </v-sheet>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <v-container>
        <v-row>
          <v-sheet
            width="100vw"
            height="50"
            class="my-5 rounded-xl grey-lighten-3 d-flex justify-center"
            elevation="4"
            border
          >
            <v-col cols="4 py-0 px-5">
              <v-select
                placeholder="Select Brand"
                density="compact"
                theme="light"
                variant="plain"
                item-title="nome"
                item-value="codigo"
                return-object
                hide-details
                v-model="controller.selectedBrand.value"
                :loading="controller.loading.value"
                :items="controller.cars.value"
                @update:model-value="controller.selectedBrands('carros')"
              ></v-select>
            </v-col>
            <v-divider :thickness="3" color="grey" vertical inset></v-divider>
            <v-col cols="4 py-0 px-5">
              <v-select
                placeholder="Select Model"
                density="compact"
                theme="light"
                variant="plain"
                item-title="nome"
                item-value="codigo"
                return-object
                hide-details
                v-model="controller.selectedModel.value"
                :loading="controller.loading.value"
                :items="controller.models.value"
                @update:model-value="controller.selectedModels()"
              ></v-select>
            </v-col>
            <v-divider :thickness="3" color="grey" vertical inset></v-divider>
            <v-col cols="4 py-0 px-5">
              <v-select
                placeholder="Select Year"
                density="compact"
                theme="light"
                variant="plain"
                item-title="nome"
                item-value="codigo"
                return-object
                hide-details
                v-model="controller.selectedYear.value"
                :loading="controller.loading.value"
                :items="controller.years.value"
                @update:model-value="controller.selectedYears()"
              ></v-select>
            </v-col>
          </v-sheet>
        </v-row>
        <!-- <v-card width="580" class="mx-auto my-5 d-flex align-center justify-center">
            <v-img
              src="../../assets/car.gif"
              :width="600"
              max-width="550"
              aspect-ratio="1/1"
              cover
              class="rounded-lg"
            ></v-img>
            <v-card-text>
            </v-card-text>
          </v-card> -->

        <v-row class="d-flex align-center justify-center">
          <v-card width="400">
            <v-img
              height="200"
              src="../../assets/car.gif"
              cover
              class="text-white"
            >
            </v-img>

            <v-card-text>
              <div class="font-weight-bold ms-1 mb-2">FIPE</div>


            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style>
</style>