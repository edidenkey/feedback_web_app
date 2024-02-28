<template>
    <div>
        <v-row style="width:auto; height:auto" no-gutters>
            <v-col>
                <v-card elevation="1">
                    <v-row class="pa-10 align-center justify-center" no-gutters>
                        <v-row justify="space-between" class="fill-height" v-if="duration" no-gutters>
                            <v-col 
                              cols="12"
                              md="4"
                            >
                              <div class="text-h4">{{ title }}</div>
                            </v-col>
                            <v-col 
                              cols="12"
                              md="4"
                            >
                              <div class="text-subtitle-1 text-right mt-3">Duréee du test : {{ getCorrectDuration(duration) }}</div>
                            </v-col>
                        </v-row>
                        <v-row justify="center" v-else>
                          <div class="text-h4">{{ title }}</div>
                        </v-row>
                        <v-divider class="mt-5"></v-divider>
                        <div class="mt-5 text-subtitle-1">{{ description }}</div>
                    </v-row>
                </v-card>
            </v-col>
        </v-row> 
    </div>
</template>

<script setup>
import { useDisplay } from 'vuetify'

defineProps({
  title: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: false,
    default: []
  },
})

const { height,width,mobile } = useDisplay()

function getCorrectDuration(duration){
  const myArray = duration.split(":");
  let word = `${myArray[0]}j${myArray[1]}h${myArray[2]}`
  return word
}
</script>