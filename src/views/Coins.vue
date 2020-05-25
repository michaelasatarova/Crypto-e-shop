<template>
  <div class="about">
    <div class="main-bg">
      <div class="container  mpt">
         <h1 ><Strong>Do you want to buy coins?</Strong> </h1>        
             <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptate quos, tempore, nostrum qui placeat ut ducimus omnis ipsam cumque vitae quibusdam? Aspernatur earum illo cupiditate temporibus assumenda eius distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis commodi cumque id debitis accusantium quasi. Culpa, earum voluptates? Eligendi, ipsa in corporis ad pariatur sapiente aperiam libero eveniet incidunt.</p>
            <div class="btn btn-dark">Read More</div>
      </div>
    </div>

    <div class="container">
        <h2 class="pt-5">Cryptocurrency live price tables</h2>
        <p>Minimum purchase is 50 Coins tokens. Get a bonus from 5% to 20% on every token purchase</p>
        <Altcoins/>           
    </div>

    <div class="mt-5">
      <Footer/>
    </div>
      
    

  </div>
</template>

<script>
// @ is an alias to /src
import Altcoins from "@/components/Altcoins.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Coins",
  components: {
    Altcoins,
    Footer,
  }
};
</script>

<style lang="scss">

.main-bg{
  background-color:#fcff0b;
}
.mpt{
  padding: 200px;
}
.short-p{
  width: 80%;
}
</style>