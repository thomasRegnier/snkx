<template>
    <ion-app>
            <ion-content>
                    <div  class="containerImg">
                        <img v-for="(img, index) in product.images" :src="img.name" />
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 95vw; margin: auto">
                        <span style="font-size: 120%; font-weight: bold">{{ product.brand.name}}</span>
                        <img style="width: 60px" :src="product.brand.logo">
                    </div>
                    <div style="margin: auto; font-size: 250%; width: 95vw; text-align: left">
                        {{ product.name }}
                    </div>

                    <div style="width: 95vw; margin: auto; border-top: 1px dotted lightgrey; margin-top: 20px; padding-top: 10px; text-align: left; font-size: 150%">
                        {{ product.price }} €
                    </div>
                    <div v-html="product.description" style="width: 95vw; margin: auto; text-align: justify">
                        {{ product.description }}
                    </div>
            </ion-content>

            <ion-fab  vertical="bottom" horizontal="end" slot="fixed">
                <a style="color:white" target="_blank" :href="'http://sneakers-x.herokuapp.com/Product/'+product.id">
                    <ion-fab-button color="dark">
                           <i class="fas fa-shopping-cart"></i>
                    </ion-fab-button>
                </a>
            </ion-fab>
        <GoBack />
    </ion-app>
</template>


<script>
    import axios from 'axios'
    import GoBack from '../components/GoBack'


    export default {
        components: {GoBack},
        data(){
            return{
                product: '',
                current: 0,
                direction: 1,
                transitionName: "fade",
                show: false,
                active: 0,
                slideOptions: {
                    slidesPerview: 3,
                    initialSlide: 2
                }
            }
        },
        mounted(){
            console.log(this.$route)
            this.getProduct(this.$route.params.id)
            this.show = true;

            console.log(this.product)

        },


        methods:{
            getProduct(id) {
                axios.get(`http://sneakers-x.herokuapp.com/api/products/${id}`)
                    .then(res => {
                        {
                            console.log(res.data)
                            this.product = res.data
                        }
                    }).catch(err => {
                    console.log(err)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

    .containerImg{
        padding-top: 60px;
        width: 100vw;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
    }

    .containerImg img{
        scroll-snap-align: center;

    }

    .containerImg::-webkit-scrollbar {
        background-color:#fff;
        width:16px
    }

    .containerImg::-webkit-scrollbar-track {
        background-color: #fff;
    }
    .containerImg::-webkit-scrollbar-track:hover {
        background-color:#f4f4f4
    }

    .containerImg::-webkit-scrollbar-thumb {
        background-color:#babac0;
        border-radius:16px;
        border:5px solid #fff;
    }
    .containerImg::-webkit-scrollbar-thumb:hover {
        background-color: #a0a0a5;
        border: 4px solid #f4f4f4;
    }

    .containerImg::-webkit-scrollbar-button {display:none}

</style>