<template>
    <ion-app style="padding-top: 55px">
        <ion-content>
            <ion-card @click="$router.push({path:'/AllProducts'})" style="width: 300px; height: 300px; margin: 10px auto; display: flex; align-items: center; justify-content: center; font-size: 150%">
                Tous les produits
            </ion-card>

            <ion-card @click="goToBrand(brand.id)" style="width: 300px; height: 300px; margin: 10px auto; display: flex; align-items: center; justify-content: center"   v-for="(brand, index) in brands">
                <img style="width: 200px; margin: auto" :src="brand.logo" />
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
                brands: ''
            }
        },

        mounted(){
            this.getBrands()
        },
        methods:{
            getBrands() {
                axios.get('http://sneakers-x.herokuapp.com/api/brands')
                    .then(res => {
                        {
                            console.log(res)
                            this.brands = res.data
                        }
                    }).catch(err => {
                    console.log(err)
                })
            },
            goToBrand(elem){
                this.$router.push({path: `/Brand/${elem}`})
            }
        }
    }
</script>