<template>
    <div id="About"
        class="text-4xl w-full h-full bg-gradient-to-b from-[#4F53B9] to-[#ACD8F8] flex flex-col items-center text-white pb-12">
        <div class="mt-32 ">
            <img :src="me" alt="me"
                class="shadow-me rounded-[50px] w-[200px] sm:w-[300px] md:w-[250px] h-[200px] sm:h-[300px] md:h-[250px]" />
        </div>
        <div v-motion-slide-left class="text-ssm mt-8 text-[18px] sm:text-[28px] md:text-[24px] font-mono"
            v-motion :delay="500">Hey, 👋🏻 I’m Meiji </div>
        <p class="text-ssm mt-10 text-[26px] sm:text-[36px] md:text-[32px] text-center font-semibold">I enjoy designing
            websites —<br>blending design and development<br>to bring ideas to life.</p>
        <p class="animate-bounce mt-4">🌱</p>
        <a class="text-lg font-mono  bg-white p-4 rounded-tr-3xl rounded-bl-3xl shadow-md hover:scale-95 " target="_blank" :href="resume" >
            <p class="text-[#4F53B9] animate-bounce">my resume !</p>
        </a>
    </div>
</template>
  
<script>
import {me, resume} from '../assets/index';

export default {
    data() {
        return {
            me,
            resume,
        };
    },
    
};
</script>
  
<style scoped>
.shadow-me {
    box-shadow: 0px 50px 102.4px 0px rgba(255, 255, 255, 0.45);
}

@media (max-width: 460px) {
    .text-ssm {
        font-size: 18px;
    }
}</style>
  