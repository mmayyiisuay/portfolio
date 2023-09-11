<script setup>
import layout from './components/layout.vue';
import cardWork from './components/CardWork.vue';
import VanillaTilt from "vanilla-tilt";
import { Button } from 'flowbite-vue'
</script>

<template>
  <div class="cursor group" id="cursor">
    <div class="cursorin "></div>
  </div>
  <layout/>
  <div class="image-container w-full">
    <img src="/src/assets/bg.jpg" class="opacity-[15%] "/>
    <div class="text-overlay font-mono font-bold sm:w-8/12 w-10/12  ">
      <div class="md:flex md:justify-between sm:mb-[100px] mb-[30px]">
        <div class="flex items-center justify-center">
          <div class="flex-col">
            <div class="block sm:hidden mt-20 w-full">
              <div class="flex justify-center" >
                <div class="mb-2 w-[100px] h-[100px] bg-gradient-to-r from-indigo-800 to-purple-500 flex justify-center items-center rounded-full" ref="tiltedElement" >
                  <img  src="/src/assets/me.jpg" class="rounded-full " style="width: 80px; height: 80px;"  />
                </div>
              </div>
            </div>
            <p class="sm:text-5xl text-base">Hello :{{ ')' }}  </p>
            <div class="flex items-end ">
              <p class="sm:text-2xl text-xs sm:mr-4 mr-2"> My name is</p>
              <transition name="slide-fade" mode="out-in">
                <p :key="currentText" class="sm:ml-2 ml-4 sm:text-4xl text-base text-purple-700 ">{{currentText}}</p>
              </transition>
            </div>
            <p class="sm:text-base sm:mt-0 mt-2 text-xs" >a Computer Engineering student at KMITL.</p>
          </div>
        </div>
        <div class="hidden sm:block">
          <div class=" parent_box bg-gradient-to-r from-indigo-800 to-purple-500 flex justify-center items-center rounded-full" ref="tiltedElement" >
            <img  src="/src/assets/me.jpg" class="rounded-full " style="width: 200px; height: 200px;"  />
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="w-1/3 my-4 ">
          <Button gradient="purple-blue" outline>
            <p class="sm:text-lg text-xs" >GET IN TOUCH</p>
          </Button>
        </div>
        <div class="w-2/3 flex-col text-end">
          <p class="sm:text-2xl text-xs">passionate in</p>
          <transition name="slide-fade" mode="out-in">
            <p :key="currentPassion" class="sm:text-4xl text-base text-purple-700">{{ currentPassion }}</p>
          </transition>
        </div>
      </div>
    </div>
  </div>
  <div class="flex font-mono sm:mt-0 mt-[100px]">
    <div class="border-r-violet-400 border-r-2 sm:w-[200px] sm:h-[600px] w-[60px] h-screen"></div>
    <div class="flex-col w-full">
      <p class="text-white sm:text-3xl text-xl ml-6">WORK</p>
      <div class="sm:flex sm:justify-around sm:mt-4 ml-10 ">

        <cardWork/>
      </div>
    </div>
    
  </div>
  
  
</template>

<script>
  var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function(e) {
      cursor.style.left = e.clientX + "px",
      cursor.style.top = e.clientY + "px";
    });
    
  export default {
  data() {
    return {
      texts: ["Natcha Suaysaard", "Mayji", "MJ" , "MorJor",],
      currentIndex: 0,
      passions: ["Front-end development", "UX UI design", "Sleep"],
      currentPassionIndex: 0,
    };
  },
  computed: {
    currentText() {
      return this.texts[this.currentIndex];
    },
    currentPassion() {
      return this.passions[this.currentPassionIndex];
    },
  },
  methods: {
    changeText() {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    },
    changePassion() {
      this.currentPassionIndex = (this.currentPassionIndex + 1) % this.passions.length;
    },
  },
  mounted() {
    setInterval(this.changeText, 2000);
    setInterval(this.changePassion, 2000);
    VanillaTilt.init(this.$refs.tiltedElement, {
      max: 30,
      speed: 100,
    });
  },
  
};
</script>

<style scoped>
/* *{
  cursor: none;
} */

.cursor {
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: -100px;
  top: 50%;
  mix-blend-mode: difference; 
  background-color: transparent;
  z-index: 10000;
  border: 1px solid white;
  height: 30px;
  width: 30px;
  transition: all 150ms ease-out;
}

.cursorin {
  position: relative;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  left: 9%;
  top: 23%;
  mix-blend-mode: difference; 
  background-color: white;
  z-index: 10000;
  margin:1em auto;
  width:1em;
  font-size:5px;
}

.cursorin:before {
  content:"";
  position:absolute;
  background:rgb(255, 222, 36);
  width:1em;
  height:1.15em;
  transform:rotate(-45deg) skewX(22.5deg) skewY(22.5deg);
}

.cursorin:after{
  content:"";
  position:absolute;
  background:rgb(255, 222, 36);
  width:1em;
  height:1.15em;
  transform:rotate(45deg) skewX(22.5deg) skewY(22.5deg);
}


.moving-image {
  position: relative;
  transition: transform 0.3s ease; 
}
.moving-image:hover {
  transform: translate(-10px, -10px) rotate(5deg); 
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.parent_box {
  width: 250px;
  height: 250px;
  margin: 10px 0;
  transform-style: preserve-3d;
}

.parent_box:hover {
  box-shadow: 20px 10px 10px  rgba(122, 55, 255, 0.2);
}

</style>