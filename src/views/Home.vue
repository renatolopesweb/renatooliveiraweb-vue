<template>
  <section>
    <header>
      <h1>RENATO OLIVEIRA</h1>
      <!-- <h2>front-end · web-design</h2> -->
      <h2>
        <svg height="75" stroke="#000" stroke-width="2" class="animate-title" width="100%">
          <text
            x="50%"
            dominant-baseline="middle"
            text-anchor="middle"
            y="25px"
          >front-end · web-design</text>
        </svg>
      </h2>
    </header>
  </section>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          title: "Linkedin",
          img: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/renatooliveiraweb"
        },
        {
          title: "Github",
          img: "fab fa-github-alt",
          url: "https://github.com/renato7oliveira"
        },
        {
          title: "Instagram",
          img: "fab fa-instagram",
          url: "https://www.instagram.com/renatooliveiraweb"
        },
        {
          title: "E-mail",
          img: "far fa-envelope",
          url: "mailto:renato.ldeoliveira@gmail.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  display: grid;
  align-content: center;
  height: calc(100vh - 200px);
  text-align: center;
  h1 {
    font-size: 5.2vw;
    font-weight: 900;
    letter-spacing: -4px;
    margin: 0;
  }
  h2 {
    color: var(--color-bg);
    font-size: 3.1vw;
    font-weight: 900;
    margin: 0;
    // -webkit-text-stroke-width: 1.5px;
    // -webkit-text-stroke-color: #000;
  }
}

.animate-title {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: dash 3s linear forwards, animateTitle 1s ease-in forwards;
  // font-size: 80px;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes animateTitle {
  0%,
  90% {
    fill: var(--color-bg);
    fill-opacity: 0;
  }
  100% {
    fill: var(--color-bg);
    fill-opacity: 1;
  }
}
@media (max-width: 600px) {
  header {
    h1 {
      font-size: 8vw;
      margin-bottom: -10px;
    }
    h2 {
      font-size: 4.5vw;
    }
  }
}
</style>