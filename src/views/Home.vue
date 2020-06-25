<template>
  <div class="home">
      <ion-app style="padding-top: 30px">

          <ion-content>
              <div class="titleNews">
                  <span class="tit">Les dernières news</span>
              </div>

              <Slider :slides="lastNews" />
              <!--<ion-card @click="goToNews(news.id)"   v-for="(news, index) in lastNews">-->
                      <!--<img :src="news.image" />-->
                      <!--<ion-card-header>-->
                          <!--<ion-card-title>{{ news.title }}</ion-card-title>-->
                      <!--</ion-card-header>-->
                      <!--<ion-card-content>-->
                          <!--{{ news.description }}-->
                      <!--</ion-card-content>-->
                  <!--</ion-card>-->

              <div class="linkPages" @click="$router.push({path: '/AllNews'})">
                  Voir toutes les news
              </div>
              <div class="titleNews">
                  <span class="tit" >Sneakers du moment</span>
              </div>
              <div class="mainCard">
                  <ion-card @click="goToSneak(snk.id)" class="cardLastNews" v-for="(snk, index) in snks">
                      <img :src="snk.image" />
                      <ion-card-header>
                          <ion-card-title style="font-size: 120%">{{ snk.name }}</ion-card-title>
                      </ion-card-header>
                      <ion-card-content>
                          <div class="cardSnkinside">
                              <span class="brandSnk">
                                  <img style="width: 50px;" :src="snk.brand.logo">
                              </span>
                              <span>{{ snk.price }} €</span>
                          </div>
                      </ion-card-content>
                  </ion-card>
              </div>
             <div class="linkPages" style="padding-bottom: 30px" @click="$router.push({path: '/Catalogue'})"> Voir toutes les sneakers</div>
          </ion-content>
      </ion-app>

  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'

import SkeletonNews from '../components/SkeletonNews.vue'
import Slider from '../components/Slider'
export default {
    name: 'Home',
    components:{
        SkeletonNews,
        Slider
    },

    data() {
        return {
            lastNews: '',
            snks: ''
        }
    },
    mounted() {

        this.getLatestNews()
        this.getRandomProducts()
    },

    methods: {
        getLatestNews() {
            axios.get('http://sneakers-x.herokuapp.com/api/news?max=5')
                .then(res => {
                    {
                        console.log(res)
                        this.lastNews = res.data
                    }
                }).catch(err => {
                console.log(err)
            })
        },

        getRandomProducts(){
            axios.get('http://sneakers-x.herokuapp.com/api/products?sort=random&max=6')
                .then(res => {
                    {
                        console.log(res.data)
                        this.snks = res.data.data
                    }
                }).catch(err => {
                console.log(err)
            })
        },

        goToSneak(elem){
            this.$router.push({path: `/Sneaker/${elem}`})
        }

    }
}
</script>

<style>
    .logo{
        font-family: 'Marck Script', cursive;
        font-size: 160%;
        cursor: pointer;
    }

    .newsCard{
        position: relative;
    }

    .titleNews{
        display: flex;
        justify-content: space-between;
        width: 90vw;
        margin: auto;
        padding-top: 32px;
        align-items: center;
    }

    .titleNews span{
        font-size: 200%;
    }

    .titleNews i{
        font-size: 150%;
    }

    .cardSnkinside{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .tit{
        background-color: black; color: white; padding: 5px 10px; margin: auto;
        border-radius: 3px;
    }

    .linkPages{
        text-decoration: underline;
        font-size: 110%;
    }

</style>
