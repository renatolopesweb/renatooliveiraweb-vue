<template>
  <section>
    <HomeAbout />
    <HomeSkills />
    <HomeLab />
  </section>
</template>

<script>

import HomeAbout from "../components/HomeAbout";
import HomeSkills from "../components/HomeSkills";
import HomeLab from "../components/HomeLab";
export default {
  components: {
    HomeAbout,
    HomeSkills,
    HomeLab
  }
}
</script>



<style lang="scss" scoped>




$color-primary: #8c52ff;
$t-def: 0.3s;



section{
  grid-template-columns: repeat(3, 1fr);
  article{
    display: grid;
    align-content: center;
    padding: 0 60px;
    transition: $t-def;
  }
article:nth-child(2) {
  box-shadow: 1px 0px 6px 0px rgba($color: #ccc, $alpha: 0.8);
  background: rgba($color: #f0f0f0, $alpha: 0.6);
    // box-shadow:  20px 20px 60px rgba($color: #ccc, $alpha: 0.4),
    //          -20px -20px 60px #ffffff;
}
}

@media(max-width: 800px){
  section{
    grid-template-columns: 1fr;
    article{
      padding: 30px;
    }
  }
}

</style>



