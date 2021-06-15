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
    align-self: flex-start;
    height: 100vh;
    padding: 60px;
    transition: $t-def;
    &:hover{
      background: rgba($color: #f0f0f0, $alpha: 0.6);
    }
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



