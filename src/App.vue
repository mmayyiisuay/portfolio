<script setup>
import HelloWorld from './components/HelloWorld.vue'
import layout from './components/layout.vue';
</script>

<template>
  <layout/>
  <div class="image-container w-full">
    <img src="/src/assets/bg.jpg" class="opacity-20 " />
    <div class="text-overlay font-mono font-bold w-3/5">
      <p class="text-5xl">Hello :{{ ')' }}  </p>
      <div class="flex items-end">
        <p class="text-2xl mr-4"> My name is</p>
        <transition name="slide-fade" mode="out-in">
          <p :key="currentText" class="text-4xl text-purple-700 "> {{currentText}}</p>
        </transition>
      </div>
    </div>

  </div>
  
</template>

<script>
  export default {
  data() {
    return {
      texts: ["Natcha Suaysaard", "Mayji", "MJ" , "MorJor",],
      currentIndex: 0,
    };
  },
  computed: {
    currentText() {
      return this.texts[this.currentIndex];
    },
  },
  methods: {
    changeText() {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    },
  },
  mounted() {
    setInterval(this.changeText, 2000);
  },
};
</script>

<style scoped>
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
</style>