<template>
    <div class="altcoins">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="bg-dark text-light py-5 rounded-top">
                        <h2 class="m-0"><strong>{{info[0].name}}</strong> </h2>        
                        <p><strong>{{info[0].website}}</strong> </p>
                        <p><strong>{{info[0].data_symbols_count}}</strong> </p>
                        <p><strong>{{info[0].volume_1mth_usd}}</strong> </p>
                    </div>
                </div>

                 <div class="col">
                    <div class="main-bg text-dark py-5 rounded-top">
                        <h2 class="m-0"><strong>{{info[1].name}}</strong> </h2>        
                        <p><strong>{{info[1].website}}</strong> </p>
                        <p><strong>{{info[1].data_symbols_count}}</strong> </p>
                        <p><strong>{{info[1].volume_1mth_usd}}</strong> </p>
                    </div>
                </div>

                 <div class="col">
                    <div class="bg-dark text-light pt-5 pb-2 rounded-top">
                        <h2 class="m-0"><strong>{{info[2].name}}</strong> </h2>        
                        <p><strong>{{info[2].website}}</strong> </p>
                        <p><strong>{{info[2].data_symbols_count}}</strong> </p>
                        <p><strong>{{info[2].volume_1mth_usd}}</strong> </p>
                    </div>
                </div>

                 <div class="col">
                    <div class="main-bg text-dark py-5 rounded-top">
                        <h2 class="m-0"><strong>{{info[3].name}}</strong> </h2>        
                        <p><strong>{{info[3].website}}</strong> </p>
                        <p><strong>{{info[3].data_symbols_count}}</strong> </p>
                        <p><strong>{{info[3].volume_1mth_usd}}</strong> </p>
                    </div>
                </div>
            </div>

             <div class="row my-3">
                <div class="col">
                    <div class="main-bg text-dark py-5 rounded-top">
                        <h2 class="m-0"><strong>{{info[6].name}}</strong> </h2>        
                        <p><strong>{{info[6].website}}</strong> </p>
                        <p><strong>{{info[6].data_symbols_count}}</strong> </p>
                        <p><strong>{{info[6].volume_1mth_usd}}</strong> </p>
                    </div>
                </div>

                 <div class="col">
                    <div class="bg-dark text-light py-5 rounded-top">
                        <h2 class="m-0"><strong>{{info[7].name}}</strong> </h2>        
                        <p><strong>{{info[7].website}}</strong> </p>
                        <p><strong>{{info[7].data_symbols_count}}</strong> </p>
                        <p><strong>{{info[7].volume_1mth_usd}}</strong> </p>
                    </div>
                </div>

                 <div class="col">
                    <div class="main-bg text-dark  py-5  rounded-top">
                        <h2 class="m-0"><strong>{{info[8].name}}</strong> </h2>        
                        <p><strong>{{info[8].website}}</strong> </p>
                        <p><strong>{{info[8].data_symbols_count}}</strong> </p>
                        <p><strong>{{info[8].volume_1mth_usd}}</strong> </p>
                    </div>
                </div>

                 <div class="col">
                    <div class="bg-dark text-light py-5 rounded-top">
                        <h2 class="m-0"><strong>{{info[9].name}}</strong> </h2>        
                        <p><strong>{{info[9].website}}</strong> </p>
                        <p><strong>{{info[9].data_symbols_count}}</strong> </p>
                        <p><strong>{{info[9].volume_1mth_usd}}</strong> </p>
                    </div>
                </div>
            </div>


        </div>
          
    </div>
</template>

<script>
import {products} from '@/store/api.js'

  export default {
    data(){
      return {
        info: {
       type: Object
    }
      }
    },
    mounted () {
      products().then( r=>{
        this.info = r;
      })
  },
  
  }
</script>

<style lang="scss" scoped>

</style>