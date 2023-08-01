<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon
        @click="controller.drawer.value = !controller.drawer.value"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon left size="large" class="mr-3">mdi-car-side</v-icon> Fipe Car
        API
      </v-toolbar-title>

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

        <v-row
          v-if="controller.selectedYear.value"
          class="d-flex align-center justify-center"
        >
          <v-card :elevation="2" width="400">
            <v-img
              v-if="controller.tipoVeiculo.value === 'carros'"
              height="200"
              src="../../assets/car.gif"
              cover
              class="text-white"
            >
            </v-img>
            <v-img
              v-else-if="controller.tipoVeiculo.value === 'motos'"
              height="200"
              src="../../assets/motorcycle.jpg"
              cover
              class="text-white"
            >
            </v-img>
            <v-img
              v-else
              height="200"
              src="../../assets/truck.gif"
              cover
              class="text-white"
            >
            </v-img>

            <v-skeleton-loader
              v-if="controller.loading.value"
              type="card"
            ></v-skeleton-loader>

            <div v-else>
              <v-card-title class="text-center pt-4">
                FIPE: {{ controller.price.value.CodigoFipe }}
              </v-card-title>

              <v-card-text>
                <v-list>
                  <v-list-item>
                    <div class="d-flex align-center">
                      <p class="font-weight-bold mr-2">Price:</p>
                      <span class="font-weight-normal">{{
                        controller.price.value.Valor ?? ""
                      }}</span>
                    </div>
                  </v-list-item>
                  <v-list-item>
                    <div class="d-flex align-center">
                      <p class="font-weight-bold mr-2">Brand:</p>
                      <span class="font-weight-normal">{{
                        controller.price.value.Marca ?? ""
                      }}</span>
                    </div>
                  </v-list-item>
                  <v-list-item>
                    <div class="d-flex align-center">
                      <p class="font-weight-bold mr-2">Model:</p>
                      <span class="font-weight-normal">{{
                        controller.price.value.Modelo ?? ""
                      }}</span>
                    </div>
                  </v-list-item>
                  <v-list-item>
                    <div class="d-flex align-center">
                      <p class="font-weight-bold mr-2">Year:</p>
                      <span class="font-weight-normal">{{
                        controller.price.value.AnoModelo ?? ""
                      }}</span>
                    </div>
                  </v-list-item>
                  <v-list-item>
                    <div class="d-flex align-center">
                      <p class="font-weight-bold mr-2">Fuel:</p>
                      <span class="font-weight-normal">{{
                        controller.price.value.Combustivel ?? ""
                      }}</span>
                    </div>
                  </v-list-item>
                  <v-list-item>
                    <div class="d-flex align-center">
                      <p class="font-weight-bold mr-2">Reference month:</p>
                      <span class="font-weight-normal">{{
                        controller.price.value.MesReferencia ?? ""
                      }}</span>
                    </div>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </div>
          </v-card>
        </v-row>
        <v-row v-else class="d-flex align-center justify-center">
          <v-card
            color="grey-lighten-2"
            elevation="0"
            class="text-center"
            width="400"
            title="Please filter to return data!"
          ></v-card>
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