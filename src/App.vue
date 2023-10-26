<script setup>
import layout from './components/layout.vue';
import VanillaTilt from "vanilla-tilt";
import { Button } from 'flowbite-vue'
import CardWork from './components/CardWork.vue';
</script>

<template>
  <!-- <div class="cursor group" id="cursor">
    <div class="cursorin "></div>
  </div> -->
  <layout/>
  <div class="image-container w-full h-64 sm:h-auto ">
    <img src="/src/assets/bg.jpg" class="opacity-[15%] sm:block hidden" alt="Image" />
    <img src="/src/assets/bg2.png" class="opacity-[15%] sm:hidden block" alt="Image" style="width: 100%; height: 350px;"/>
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
            <p class="sm:text-5xl text-base mb-4">Hello :{{ ')' }}  </p>
            <div class="flex items-end ">
              <p class="sm:text-2xl text-xs sm:mr-4 mr-2"> My name is</p>
              <transition name="slide-fade" mode="out-in">
                <p :key="currentText" class="sm:ml-2 ml-4 sm:text-4xl text-xs text-purple-700 ">{{currentText}}</p>
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
      <div class="flex justify-between items-start">
        <div class="w-1/3  ">
          <Button gradient="purple-blue" outline @click="togglePopup">
            <p class="sm:text-lg sm:py-4 text-[8px]" >GET IN TOUCH</p>
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

        <CardWork/>
      </div>
    </div> 
    
    
  </div>
  <div v-if="showPopup" class="z-20 h-screen w-full fixed left-0 top-0 bg-gradient-to-t from-indigo-900  bg-opacity-10 flex justify-center items-center" >
    <div class="flex justify-center z-50  h-[60%] sm:w-[60%] w-[80%] rounded-3xl bg-black">
      <div class="sm:flex sm:items-center sm:justify-between sm:w-[80%] ">
        <p class="sm:items-start sm:text-[40px] text-[20px] font-extrabold text-purple-300">Get in touch!</p>
        <form ref="form" @submit.prevent="sendEmail" action="" class="mt-2 sm:w-[50%] ">
          <input
            type="text"
            name="name"
            class="focus:outline-none mt-6 block w-full px-2 py-2 bg-white border border-l-purple-400 border-t-purple-800 rounded-md text-sm shadow-sm placeholder-slate-400 font-normal"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            class="focus:outline-none mt-6 block w-full px-2 py-2 bg-white border border-l-purple-400 border-t-purple-800 rounded-md text-sm shadow-sm placeholder-slate-400 font-normal"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="subject"
            class="focus:outline-none mt-6 block w-full px-2 py-2 bg-white border border-l-purple-400 border-t-purple-800 rounded-md text-sm shadow-sm placeholder-slate-400 font-normal"
            placeholder="Subject"
            required
          />
          <textarea
              type="text"
              name="message"
              class="focus:outline-none block w-full h-[100px] mt-6 px-2 py-2 bg-white border border-l-purple-400 border-t-purple-800 rounded-md shadow-sm placeholder-slate-400"
              placeholder="Your message"
          />
          <div class=" flex justify-end mt-6 ">
            <Button
              type="submit"
              value="Send"
              gradient="purple-blue" 
              class="sm:text-lg sm:py-4 text-[8px] text-pink-100 hover:scale-105"
            >
              Send
            </Button>
          </div>
          
          
          <div v-if="showAlert" class="mt-4" :class="showAlert === 'Email sent successfully!' ? 'text-green-600' : 'text-red-600'">
            {{ showAlert  }}
          </div>
        </form>
      </div>
      
    </div>
  </div>
  
  
  
</template>

<script>
  
  // var cursor = document.getElementById("cursor");
  //   document.body.addEventListener("mousemove", function(e) {
  //     cursor.style.left = e.clientX + "px",
  //     cursor.style.top = e.clientY + "px";
  //   });
    
  export default {
  data() {
    return {
      showPopup : false,
      texts: ["Natcha Suaysaard", "Mayji", "MJ" , "MorJor",],
      currentIndex: 0,
      passions: ["Front-end development", "UX UI design", "Sleep"],
      currentPassionIndex: 0,
      screenWidth: window.innerWidth,
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
    togglePopup() {
      this.showPopup = !this.showPopup;
      console.log(this.showPopup);
      
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

/* .cursor {
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
} */


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