<template>
  <div class="page-loader">
    <div class="loop-container" v-if="!isloaded">
      <div class="cube c1"></div>
      <div class="cube c2"></div>
      <div class="cube c3"></div>
      <div class="cube c4"></div>
    </div>

    <!-- <div class="cube c2"></div>
    <div class="cube c3"></div>
    <div class="cube c4"></div> -->
  </div>
</template>

<script>
export default {
  data: () => {},
};
</script>
<style>
.page-loader {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  /* background-color: rgb(233, 203, 233); */
}

.loop-container {
  width: 150px;
  height: 150px;
  /* background-color: gray; */
  position: relative;
}

/* Styling for all cubes */
.cube {
  width: 50px;
  height: 50px;

  position: absolute;
}

/* Cube-specific styles */
.c1 {
  animation: moveC1 4s infinite;
  background-color: #26355d;
}

.c2 {
  animation: moveC2 4s infinite;
  background-color: #af47d2;
}

.c3 {
  animation: moveC3 4s infinite;
  background-color: #ff8f00;
}

.c4 {
  animation: moveC4 4s infinite;
  background-color: #ffdb00;
}

/* Keyframes for moving and changing colors */

/* Cube 1 */
@keyframes moveC1 {
  0% {
    top: 0;
    left: 0;
    background-color: #26355d;
  }
  25% {
    top: 0;
    left: 90px;
    background-color: #af47d2;
  }
  50% {
    top: 90px;
    left: 90px;
    background-color: #ff8f00;
  }
  75% {
    top: 90px;
    left: 0;
    background-color: #ffdb00;
  }
  100% {
    top: 0;
    left: 0;
    background-color: #26355d;
  }
}

/* Cube 2 */
@keyframes moveC2 {
  0% {
    top: 0;
    left: 90px;
    background-color: #af47d2;
  }
  25% {
    top: 90px;
    left: 90px;
    background-color: #ff8f00;
  }
  50% {
    top: 90px;
    left: 0;
    background-color: #ffdb00;
  }
  75% {
    top: 0;
    left: 0;
    background-color: #26355d;
  }
  100% {
    top: 0;
    left: 90px;
    background-color: #af47d2;
  }
}

/* Cube 3 */
@keyframes moveC3 {
  0% {
    top: 90px;
    left: 90px;
    background-color: #ff8f00;
  }
  25% {
    top: 90px;
    left: 0;
    background-color: #ffdb00;
  }
  50% {
    top: 0;
    left: 0;
    background-color: #26355d;
  }
  75% {
    top: 0;
    left: 90px;
    background-color: #af47d2;
  }
  100% {
    top: 90px;
    left: 90px;
    background-color: #ff8f00;
  }
}

/* Cube 4 */
@keyframes moveC4 {
  0% {
    top: 90px;
    left: 0;
    background-color: #ffdb00;
  }
  25% {
    top: 0;
    left: 0;
    background-color: #26355d;
  }
  50% {
    top: 0;
    left: 90px;
    background-color: #af47d2;
  }
  75% {
    top: 90px;
    left: 90px;
    background-color: #ff8f00;
  }
  100% {
    top: 90px;
    left: 0;
    background-color: #ffdb00;
  }
}
</style>
