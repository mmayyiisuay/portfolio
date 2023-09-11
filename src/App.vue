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
  <div class="image-container w-full ">
    <img src="/src/assets/bg.jpg" class="opacity-[15%] "/>
    <div class="text-overlay font-mono font-bold w-8/12 ">
      <div class="flex justify-between mb-[100px]">
        <div class="flex items-center">
          <div class="flex-col">
            <p class="text-5xl">Hello :{{ ')' }}  </p>
            <div class="flex items-end">
              <p class="text-2xl mr-4"> My name is</p>
              <transition name="slide-fade" mode="out-in">
                <p :key="currentText" class="text-4xl text-purple-700 ">{{currentText}}</p>
              </transition>
            </div>
            <p >a Computer Engineering student at KMITL.</p>
          </div>
        </div>
        <div class="parent_box bg-gradient-to-r from-indigo-800 to-purple-700 flex justify-center items-center rounded-full" ref="tiltedElement" >
          <img  src="/src/assets/me.jpg" class="rounded-full " style="width: 200px; height: 200px;"  />
        </div>
      </div>
      <Button gradient="purple-blue" outline>GET IN TOUCH</Button>
      <div class="flex-col text-end">
        <p class="text-2xl">passionate in</p>
        <transition name="slide-fade" mode="out-in">
          <p :key="currentPassion" class="text-4xl text-purple-700">{{ currentPassion }}</p>
        </transition>
      </div>
    </div>
  </div>
  <div class="flex font-mono ">
    <div class="border-r-violet-400 border-r-2 w-[200px] h-[600px]"></div>
    <div class="flex-col w-full">
      <p class="text-white text-3xl ml-6">WORK</p>
      <div class="flex justify-around mt-4">
        
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