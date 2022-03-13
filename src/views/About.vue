<template>
    <section>
      <p>
        Meu dia a dia de trabalho:
      </p>
      <div class="skills">
        <div>
          <h2><i class="fas fa-code" aria-hidden="true"></i> Code</h2>
          <ul>
            <li>javaScript</li>
            <li>typeScript</li>
            <li>HTML5</li>
            <li>Sass / CSS</li>
          </ul>
        </div>
        <div>
          <h2><i class="fas fa-tools" aria-hidden="true"></i> Framework</h2>
          <ul>
            <li>Angular</li>
            <li>Electron</li>
            <li>Ionic</li>
            <li>Vue</li>
          </ul>
        </div>
        <div>
          <h2><i class="fas fa-eye" aria-hidden="true"></i> Visual</h2>
          <ul>
            <li>XD</li>
            <li>Photoshop</li>
            <li>Premiere</li>
          </ul>
        </div>
        <div>
          <h2><i class="fas fa-bullhorn" aria-hidden="true"></i> Marketing</h2>
          <ul>
            <li>Wordpress</li>
            <li>E-mail mkt</li>
          </ul>
        </div>
        <!-- <div v-for="(item, article) in proj" :key="article">
            <h2><i :class="item.ico" aria-hidden="true"></i> {{ item.categ.title }}</h2>
            <ul>
              <li>{{ item.lists }}</li>
            </ul>
        </div> -->
      </div>
    </section>
</template>


<script>
// export default {
//   data() {
//     return {
//       proj: [
//         {
//           categ: { title: "Code" },
//           ico: "fas fa-code",
//           lists: [
//             {
//               bullets: ["lol"],
//             },
//           ],
//         },
//       ],
//     };
//   },
// };
</script>


<style lang="scss" scoped>
.skills {
  display: flex;
  gap: 100px;
  h2 {
    font-size: 1.1em;
    margin: 15px 0;
    text-transform: uppercase;
  }
  li {
    font-size: 1.1em;
    margin-bottom: 7px;
  }
}
@media (max-width: 1100px) {
  section{
    padding: 25px;
  }
}
@media (max-width: 800px) {
  .skills {
    gap: 50px;
    padding-bottom: 50px;
  }
}
@media (max-width: 650px) {
  .skills {
    flex-direction: column;
  }
}

// .skills > div :nth-child(1) {
//   text-align: center;
// }
</style>