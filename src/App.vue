<template>
  <div id="app">
      <ion-header translucent>
        <ion-toolbar>
            <ion-title class="logo">
                <i @click="forMenu"   class="fas fa-bars forMenu"></i>
                Sneakers-X</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="menuSmart" :class="{showSmart: openMenu}">
          <div class="headMenu">
              <span class="logo" style="color: black; font-weight: bold">Sneakers-X</span>
              <span class="mobileIcon"><i @click="forMenu" style="font-size: 140%" class="fas fa-times"></i></span>
          </div>
          <div style="padding-top: 20px; padding-bottom: 20px">
              <div style="text-align: left; padding-left: 20px">
                  <span @click="goSearch" style="margin-right: 10px"><i class="fa fa-search"></i></span>
                  <input v-model="search" type="text"/>
              </div>
          </div>
          <div class="forLinksMenu">
              <router-link :to="{ path: '/' }" v-on:click.native="forMenu">Home</router-link>
              <router-link :to="{ path: '/AllNews' }" v-on:click.native="forMenu">Actualités</router-link>
              <router-link :to="{ path: '/Catalogue' }" v-on:click.native="forMenu">Catalogue</router-link>
              <router-link :to="{ path: '/Contact' }" v-on:click.native="forMenu">Contact</router-link>
          </div>
      </div>

      <transition name="fade">
          <div v-if="openMenu" @click="forMenu" class="shadow"></div>
      </transition>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.forMenu{
    position: absolute;
    top: 10px;
    left: 10px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.shadow{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(153deg, rgba(0,0,0,0.6068802521008403) 0%, rgba(0,0,0,0.8365721288515406) 100%);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999999;
}

    .menuSmart{
        width: 70vw;
        height: 100vh;
        background-color: white;
        position: absolute;
        top: 0;
        left: -90vw;
        z-index: 99999999;
        transition: ease-in-out 0.5s;
    }
.showSmart{
    left: 0px !important;
}
.fade-enter-active, .fade-leave-active{
    transition: ease-in-out  .4s;
}

.fade-enter, .fade-leave-to{
    opacity: 0;
}

    .headMenu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px 0px 20px;
    }


    .forLinksMenu{
        display: flex;
        flex-direction: column;

    }

    .forLinksMenu a{
        text-align: left;
        margin-left: 20px;
        padding-bottom: 10px;
    }


    a{
        color: grey;
        margin-left: 10px;
        font-size: 110%;
    }
    a:hover{
        color: black;
        text-decoration: none;
    }
    .router-link-exact-active {
        color: black;
    }
</style>



<script>
    export default {
        data(){
            return{
                openMenu : false,
                search :''

            }
        },

        methods:{
            forMenu(){
                this.openMenu = !this.openMenu
                if (this.openMenu){
                    document.body.style.overflow = 'hidden';

                } else{
                    document.body.style.overflow = 'scroll';
                }
            },

            goSearch(){
                this.openMenu = !this.openMenu
                this.$router.push({path: `/Search/${this.search}`})
            }
        }
    }
</script>
