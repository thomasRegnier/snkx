<template>
    <ion-app style="padding-top: 55px">
        <ion-content>
            <ion-card @click="goToSneak(snk.id)" class="cardLastNews" v-for="(snk, index) in datas.data">
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

            <div style="display: flex; justify-content: center; align-items: center; padding-top: 20px">
                <nav>
                    <ul class="pagination">
                        <li class="page-item"
                            :class="{ disabled: datas.current_page === 1 }"
                            @click="getAllProducts(1)"
                        >
                            <div class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </div>
                        </li>

                        <li class="page-item" v-for="page in datas.last_page"  :class="{active: page === datas.current_page }">
                            <div class="page-link"
                               @click="getAllProducts(page)"
                            >
                                {{ page }}
                            </div>
                        </li>

                        <li class="page-item" :class="{ disabled: datas.current_page === datas.last_page }">
                            <div class="page-link"  aria-label="Next"
                               @click="getAllProducts(datas.last_page)"
                            >
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </ion-content>
        <GoBack />

    </ion-app>
</template>


<script>
    import axios from 'axios'
    import GoBack from '../components/GoBack'

    export default {
        components:{
            GoBack
        },
        data(){
            return{
                datas: ''
            }
        },

        mounted(){
            this.getAllProducts(1)
        },

        methods:{
            getAllProducts(page){

                window.scroll(0, 0)

                let url = `http://sneakers-x.herokuapp.com/api/products?page=${page}`
                axios.get(url)
                        .then(res => {
                            {
                                console.log(res.data)
                                this.datas = res.data
                            }
                        }).catch(err => {
                        console.log(err)
                    })
                },
        }
    }
</script>

<style scoped>



.pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
}


    .page-link{
        position: relative;
        display: block;
        padding: 0.5rem 0.75rem;
        margin-left: -1px;
        line-height: 1.25;
        border: 1px solid #dee2e6;
    }

    .page-item{
        color: black !important;
    }

.active{
    color: white !important;
    background-color: black !important;
}


</style>