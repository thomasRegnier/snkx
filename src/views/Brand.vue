<template>
    <ion-app style="padding-top: 55px">
        <ion-content>
            <!--<h1 style="display: flex; align-items: center; justify-content: center">{{ brand.name }}-->
                <!--<img style="width: 50px; margin-left: 5px" :src="brand.logo"/></h1>-->
            <img width="100%" :src="brand.banner"/>
            <ion-card @click="goToSneak(news.id)"   v-for="(news, index) in brand.products">
                <img :src="news.image" />
                <ion-card-header>
                    <ion-card-title>{{ news.name }}</ion-card-title>
                    <ion-card-content style="display: flex; align-items: center; justify-content: space-between">
                        <span class="brandSnk">
                                  <img style="width: 50px;" :src="brand.logo">
                              </span>
                       <span>
                           {{ news.price }} €
                       </span>
                    </ion-card-content>
                </ion-card-header>
            </ion-card>
        </ion-content>
        <GoBack />
    </ion-app>
</template>

<script>
    import axios from "axios"
    import GoBack from '../components/GoBack'
    export default {
        components:{
            GoBack
        },
        data(){
            return{
                brand: ''
            }
        },

        mounted(){

            this.getBrand(this.$route.params.id)
        },
        methods:{
            getBrand(elem) {
                axios.get('http://sneakers-x.herokuapp.com/api/brands/'+elem)
                    .then(res => {
                        {
                            console.log(res)
                            this.brand = res.data
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