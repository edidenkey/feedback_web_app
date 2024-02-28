<template>
    <v-app>
      <div v-if="loading">
        <LoadingCard/>
      </div>
      <div
        v-else
        style="justify-content: center; align-content: center"
        class="pa-10 wrapper"
      >
        <div v-if="bilan">
          <template v-if="questions.length > step">
            <EspaceTestCard
              class="mb-10"
              :duration="bilan ? `${bilan.duration}` : ''"
              :title="
                bilan ? `${bilan.libelle}` : 'Erreur de chargement de contenu'
              "
              :description="
                bilan
                  ? `${bilan.description}`
                  : 'Ce contenu n\'a pas pu se charger. Veuillez essayez ultérieurement. Si le problème persiste, veuillez nous contacter'
              "
              :items="[
                { title: 'Accueil', href: '/espace-candidat/accueil' },
                { title: 'Liste des bilans', href: '/espace-candidat/bilans' },
                { title: 'Test', href: '#' },
              ]"
            />
            <v-card>
              <v-card-title class="text-white" style="background-color: #1e88e5">
                <v-row v-if="step != questions.length">
                  <v-col cols="12" md="6"
                    ><span>Question {{ step + 1 }}</span></v-col
                  >
                  <v-col cols="12" md="6" class="text-end">
                    <span v-if="displayDays>0" class="mr-2"
                      >{{ displayDays }} jour(s), {{ displayHours }}:{{
                        displayMinutes
                      }}:{{ displaySeconds }}</span
                    >
                    <span v-else class="mr-2"
                      > {{ displayHours }}:{{
                        displayMinutes
                      }}:{{ displaySeconds }}</span
                    >
                    <v-icon
                      class="mb-1"
                      size="x-small"
                      icon="mdi-timer-sand"
                    ></v-icon>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-window v-model="step" :touch="false">
                <!--<v-window-item
                              v-for="(item,index) in questions"
                              :value="index"
                              >
                              <div>je teste encore</div>
                              </v-window-item>
                              <v-card>
                                  
                              </v-card>-->
                <v-window-item
                  v-for="(item, index) in questions"
                  :key="index"
                  :value="index"
                >
                  <v-card-text>
                    <div class="mt-7">
                      <div class="d-flex flex">
                        <v-divider
                          :thickness="3"
                          class="border-opacity-20 mr-5"
                          vertical
                        ></v-divider>
                        <!--<v-img
                                                  width="364"
                                                  aspect-ratio="16/9"
                                                  cover
                                                  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                              ></v-img>-->
                        <span class="text-h6">{{ item.libelle }}</span>
                      </div>
                    </div>
                    <div class="ma-5">
                      <v-form ref="form" lazy-validation v-model="valid">
                        <div v-if="item.typeQuestion.code == 10">
                          <v-row>
                            <v-col>
                              <v-checkbox
                                v-for="answer in item.questionAnswers"
                                density="compact"
                                color="#1E88E5"
                                v-model="severalAnswerModel"
                                :label="answer.value"
                                :value="answer.value"
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                          <div>
                            <v-icon
                              color="success"
                              icon="mdi-information-outline"
                              class="mr-1"
                            ></v-icon>
                            <span class="text-success"
                              >Plusieurs réponses possibles</span
                            >
                          </div>
                        </div>
                        <div v-if="item.typeQuestion.code == 1">
                          <v-radio-group
                            density="default"
                            color="#1E88E5"
                            v-model="oneAnswerModel"
                          >
                            <v-radio
                              v-for="answer in item.questionAnswers"
                              :label="answer.value"
                              :value="answer.value"
                            ></v-radio>
                          </v-radio-group>
                          <div>
                            <v-icon
                              color="success"
                              icon="mdi-information-outline"
                              class="mr-1"
                            ></v-icon>
                            <span class="text-success"
                              >Une seule réponse possible</span
                            >
                          </div>
                        </div>
                        <div
                          v-if="
                            item.typeQuestion.code == 3 ||
                            item.typeQuestion.code == 4
                          "
                        >
                          <v-textarea
                            v-model="oneAnswerModel"
                            variant="outlined"
                            auto-grow
                            rows="3"
                            row-height="25"
                            shaped
                            clearable
                            label="Saisissez votre réponse"
                          ></v-textarea>
                        </div>
                        <div v-if="item.typeQuestion.code == 6">
                        <v-row v-for="(it, index) in item.questions" :key="it.id">
                            <v-col cols="12" md="6">
                            <span
                                style="font-size: 19px !important"
                                class="text-subtitle-1"
                                >{{ it.libelle }}</span
                            >
                            </v-col>
                            <v-col cols="12" md="6">
                            <v-slider
                                thumb-size="11"
                                v-model="jaugeAnswerModel[index]"
                                color="#1E88E5"
                                :ticks="
                                item.questionAnswers.length >= 4
                                    ? getJaugeNotationForTicks(
                                        item.questionAnswers
                                    )
                                    : getJaugeNotation(item.questionAnswers)
                                "
                                :max="item.questionAnswers.length - 1"
                                step="1"
                                :thumb-label="item.questionAnswers.length >= 4 ? 'always' : false"
                                show-ticks="always"
                                tick-size="3"
                            >
                                <template
                                v-if="item.questionAnswers.length >= 4"
                                v-slot:thumb-label="{ modelValue }"
                                >
                                <div style="width:150px;text-align:center">
                                    {{
                                    getJaugeNotationForThumb(
                                    modelValue,
                                    item.questionAnswers
                                    )
                                    }}
                                </div>
                                </template>
                            </v-slider>
                            </v-col>
                        </v-row>
                        </div>
                        <div v-if="item.typeQuestion.code == 7">
                          <v-file-input
                            v-model="severalAnswerModel"
                            variant="outlined"
                            clearable
                            label="Sélectionner un fichier"
                          ></v-file-input>
                        </div>
                        <div v-if="item.typeQuestion.code == 2">
                          <v-text-field
                            label="Veuillez saisir une réponse"
                            v-model="oneAnswerModel"
                          >
                            <template v-slot:append>
                              <v-icon @click="addAnswer"> mdi-plus </v-icon>
                            </template>
                          </v-text-field>
                          <template v-if="severalAnswerModel.length > 0">
                            <v-container>
                              <template
                                v-for="(item, index) in severalAnswerModel"
                                :key="index"
                              >
                                <v-row no-gutters>
                                  <v-col>
                                    <v-text-field :model-value="item" readonly>
                                      <template v-slot:append>
                                        <v-icon
                                          color="red"
                                          @click="deleteAnswer(index)"
                                        >
                                          mdi-delete
                                        </v-icon>
                                      </template>
                                    </v-text-field>
                                  </v-col>
                                </v-row>
                              </template>
                            </v-container>
                          </template>
                        </div>
                        <div v-if="item.typeQuestion.code == 9">
                          <TexteATrous
                            :items="item.questionAnswers[0].value"
                            :mymodel="severalAnswerModel"
                          ></TexteATrous>
                        </div>
                        <div v-if="item.typeQuestion.code == 5">
                          <MenuDeroulant
                            :items="item.questionAnswers[0].value"
                            :mymodel="severalAnswerModel"
                          ></MenuDeroulant>
                        </div>
                      </v-form>
                      <v-divider class="mt-10"></v-divider>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      size="small"
                      variant="outlined"
                      color="#1E88E5"
                      @click="nextAction(item)"
                    >
                      {{
                        step + 1 == questions.length
                          ? "Finaliser le test"
                          : "Question suivante"
                      }}
                    </v-btn>
                  </v-card-actions>
                </v-window-item>
              </v-window>
            </v-card>
          </template>
          <template v-else>
            <v-row style="width: auto; height: auto" no-gutters>
              <v-col>
                <FeedBackEnd firstText="Bilan terminé" secondText="le bilan" :evaluationName="bilan.libelle"/>
              </v-col>
            </v-row>
          </template>
        </div>
      </div>
    </v-app>
  </template>
  
  <script>
    import EspaceTestCard from "./EspaceTestCard.vue";
    import TexteATrous from "./TexteATrous.vue";
    import MenuDeroulant from "./MenuDeroulant.vue";
    import FeedBackEnd from "./FeedBackEnd.vue";
    import LoadingCard from "./LoadingCard.vue";
    import { useFeedQuestions } from "../stores/feedQuestions";
    import { useDisplay } from "vuetify";
    import { useToast } from "vue-toastification";
  
    export default {
      components: {
        EspaceTestCard,
        TexteATrous,
        MenuDeroulant,
        FeedBackEnd,
        LoadingCard
      },
      setup() {
        const toast = useToast();
        const { height, width, mobile } = useDisplay();
        const useFeedQuestionsStore = useFeedQuestions();
        return { width, useFeedQuestionsStore, toast, mobile };
      },
      data: () => ({
        loading: true,
        bilan: null,
        sessionContenu: null,
        questions: [],
        severalAnswerModel: [],
        oneAnswerModel: "",
        jaugeAnswerModel: [],
        step: null,
        valid: true,
        jaugeNotation: {},
        countdown: 0,
        displaySeconds: 0,
        displayMinutes: 0,
        displayHours: 0,
        displayDays: 0,
      }),
      computed: {
        _seconds: () => 1,
        _minutes() {
          return this._seconds * 60;
        },
        _hours() {
          return this._minutes * 60;
        },
        _days() {
          return this._hours * 24;
        },
      },
      beforeMount() {},
      onMounted() {},
      created() {},
      mounted() {
        this.getBilan();
      },
      watch: {
        countdown(val) {
          if (val < 0) {
            this.step = this.questions.length;
          }
        },
      },
      methods: {
        formatNum: (num) => (num < 10 ? "0" + num : num),
        showRemaining() {
          const timer = setInterval(() => {
            this.countdown -= 1;
            if (this.countdown < 0 || this.step == this.questions.length) {
              clearInterval(timer);
            }
            const days = Math.floor(this.countdown / this._days);
            const hours = Math.floor((this.countdown % this._days) / this._hours);
            const minutes = Math.floor(
              (this.countdown % this._hours) / this._minutes
            );
            const seconds = Math.floor(
              (this.countdown % this._minutes) / this._seconds
            );
            this.displayMinutes = this.formatNum(minutes);
            this.displaySeconds = this.formatNum(seconds);
            this.displayHours = this.formatNum(hours);
            this.displayDays = days;
          }, 1000);
        },
        addAnswer() {
          if (this.oneAnswerModel != "") {
            this.severalAnswerModel.push(this.oneAnswerModel);
            this.oneAnswerModel = "";
          }
        },
        deleteAnswer(index) {
          this.severalAnswerModel.splice(index, 1);
        },
        nextAction(current_quetion) {
            var myanswers = [];
            var images = [];
            this.severalAnswerModel = [];
            this.oneAnswerModel = "";
            this.jaugeAnswerModel = [];
            this.jaugeNotation = {};
            this.step++;
        },
        getJaugeNotationForTicks(myanswers) {
            var myNumbers = [];
            myanswers.forEach((element, index) => {
            myNumbers.push(index);
            });
            return myNumbers;
        },
        getJaugeNotation(answers) {
            // Object.keys(this.jaugeNotation).forEach(key => {
            //   delete this.jaugeNotation[key];
            // })
            var localJaugeNotation = {}
            answers.forEach((element, index) => {
                this.jaugeNotation[index] = element.value;
                localJaugeNotation[index] = element.value;
            });
            return localJaugeNotation;
        },
        getJaugeNotationForThumb(myindex, myanswers) {
            var localJaugeNotation = {}
            myanswers.forEach((element, index) => {
            this.jaugeNotation[index] = element.value;
            localJaugeNotation[index] = element.value;
            });
            return localJaugeNotation[myindex];
        },
        getBilan() {
            this.questions = this.useFeedQuestionsStore.evaluation.questions;
            this.bilan = this.useFeedQuestionsStore.evaluation.sessionContenu.contenu;
            this.sessionContenu = this.useFeedQuestionsStore.evaluation.sessionContenu;
            let mytab = this.bilan.duration.split(":");
            if (mytab.length == 4) {
            this.countdown =
                parseInt(mytab[3]) +
                parseInt(mytab[2]) * 60 +
                parseInt(mytab[1]) * 60 * 60 +
                parseInt(mytab[0]) * 24 * 60 * 60;
            } else {
            this.countdown =
                parseInt(mytab[2]) * 60 +
                parseInt(mytab[1]) * 60 * 60 +
                parseInt(mytab[0]) * 24 * 60 * 60;
            }
            setTimeout(() => (this.loading = false), 3000);
            this.showRemaining();
        },
      },
    };
  </script>
  <style scoped>
    .v-slider-thumb__label {
      min-width: 120px !important;
      justify-content: left !important;
    }
  </style>
  