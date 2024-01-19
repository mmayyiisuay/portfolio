<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import {css,html,figma,illustrator,javascript,python,tailwind,vue,react,feedmyfriend, cenextgen, pana, pasaloo, securefirst, pha, potato} from '../assets/index'
import { worksData } from '../assets/data/index';



const spansSlow = ref([]);
const spansFast = ref([]);
const navbarTextColor = ref('white');
let width = ref(window.innerWidth);

function handleMouseMove(e) {
    const normalizedPosition = e.pageX / (width.value / 2) - 1;
    const speedSlow = 100 * normalizedPosition;
    const speedFast = 100 * normalizedPosition;
    const screenWidth = window.innerWidth;

spansSlow.value.forEach((span) => {
    if (screenWidth > 768){
        span.style.transform = `translate(${speedSlow}px)`;
    }
    
});

spansFast.value.forEach((span) => {
    if (screenWidth > 768){
        span.style.transform = `translate(${speedFast}px)`;
    }
    });
}

function handleWindowResize() {
    width.value = window.innerWidth;
}

onMounted(() => {
    spansSlow.value = document.querySelectorAll('.spanSlow');
    spansFast.value = document.querySelectorAll('.spanFast');

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', handleScroll);
});


function getProjectImage(src) {
  // Map your src to the corresponding imported image
  switch (src) {
    case '../works/feedmyfriend.png':
      return feedmyfriend;
    case '../works/cenextgen.png':
      return cenextgen;
    case '../works/pana.png':
      return pana;
    case '../works/pasaloo.png':
      return pasaloo;
    case '../works/pha.png':
      return pha;
    case '../works/potato.png':
      return potato;
    case './securefirst.png':
      return securefirst;
    // Add more cases for other images
    default:
      return '';
  }
}
const works = ref(worksData.worksData);
</script>
<template>
    <div class="flex z-0 justify-around" id="Works">
        <div class="wrap w-[40vw] text-[40px] sm:text-[30px] md:text-[36px] text-ssm mt-10 ml-[10px]">
            <div class="w-[100vw] font-bold uppercase ">
                <div class="text-blue-400 overflow-hidden inline-block w-[10vw]">
                    <div class="left-content">
                        <span class="spanSlow">Works</span>
                    </div>
                </div>
                <div class="text-[#6467b5] overflow-hidden inline-block w-[10vw]">
                    <div class="mid-content">
                        <span class="spanSlow">Works</span>
                    </div>
                </div>
                <div class="text-[#4F53B9] overflow-hidden inline-block w-[30vw]">
                    <div class="right-content">
                        <span class="spanSlow">Works</span>
                    </div>
                </div>
            </div>
            <div class="w-[100vw] font-extralight no-mt-ssm">
                <div class="text-blue-400 overflow-hidden inline-block w-[10vw]">
                    <div class="left-content">
                        <span class="spanSlow">experience</span>
                    </div>
                </div>
                <div class="text-[#5b5eb3] overflow-hidden inline-block w-[10vw] ">
                    <div class="mid-content">
                        <span class="spanSlow">experience</span>
                    </div>
                </div>
                <div class="text-[#383a85] overflow-hidden inline-block w-[30vw]">
                    <div class="right-content">
                        <span class="spanSlow">experience</span>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="flex flex-col w-[40%] mr-10  mt-6 ">
            <div class="flex justify-between">
                <img :src="css" alt="css" class="icon-size"/>
                <img :src="html" alt="html" class="icon-size"/>
                <img :src="javascript" alt="javascript" class="icon-size"/>
            </div>
            <div class="flex  justify-around">
                <img :src="vue" alt="vue" class="icon-size"/>
                <img :src="react" alt="react" class="icon-size"/>
            </div>
            <div class="flex justify-between ">
                <img :src="tailwind" alt="tailwind" class="icon-size"/>
                <img :src="figma" alt="figma" class="icon-size"/>
                <img :src="illustrator" alt="illustrator" class="icon-size"/>
            </div>
        </div>
        
    </div>
    <!-- <div>
        <div v-if="works.length > 0" class=" mt-2">
            <div v-for="i in 3" :key="i" class="mt-2 bg-orange-100">
            <h3>{{ works[i - 1].name }}</h3>
            
            </div>
        </div>

    </div> -->

    <div v-for="project in works" :key="project.name">
    <div class="w-full h-full flex flex-col items-center mt-10">
        <div class="bg-sky-100 w-[70%] h-fit rounded-[6vw] flex flex-col md:flex-row items-center md:p-8 py-8 px-10 bg-css">

            <img :src="getProjectImage(project.src)" alt="" class="w-[80%]  md:w-[40%] rounded-[2vw] md:ml-10" />

            <div class="ml-0 md:ml-10 mr-0 md:mr-2 flex flex-col items-start md:w-[60%] ">
                <div class="flex justify-between w-full md:pr-20 mt-10 md:mt-0 mb-4 w-role">
                    <div class="">
                        {{ project.date }}
                    </div>
                    <div class="sm:flex justify-end text-center  ">
                        <div v-for="role in project.role" class="text-role"  :key="role">
                            <div class="border border-indigo-500 text-indigo-500 px-2 rounded-lg mx-2">
                                {{ role }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <p class="text-ssm text-[28px] sm:text-[36px] md:text-[36px] font-semibold">
                        {{ project.name }}
                    </p>
                    <li v-for="detail in project.details" :key="detail" class="ml-4">
                        {{ detail }}
                    </li>
                    
                </div>
                <div class="mt-10 flex gap-x-2 ">
                    <div v-for="tool in project.tools" class="" :key="tool">
                        <div class="border bg-indigo-500 px-2 rounded-lg text-white whitespace-no-wrap overflow-hidden truncate">
                            {{ tool }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

    
    
</template>
<style scope>
.tool-box{

}
.icon-size {
    width: 50px;
    height: 50px;
}
.icon-size:hover{
    transform: scale(1.1);
        }
.left-content {
    width: 100vw;
    text-align: start;
    transform: translate(5vw);
}
.mid-content {
    width: 100vw;
    text-align: start;
    transform: translate(-5vw);
}
.right-content {
    width: 100vw;
    text-align: start;
    transform: translate(-15vw);
}
span {
    display: inline-block;;
    line-height: .8;
    transition: ease-out 1s;
}

@media (max-width: 640px) {
        .text-ssm {
            font-size: 24px;
        }
        .no-mt-ssm{
            margin-top: 0px;
        }
        .icon-size{
        width: 30px;
        height: 30px;
        }
    }
@media (max-width: 384px) {
    .icon-size{
        display: none;
        }
    .bg-css{
        width: 90%;
    }
    }

@media (max-width: 460px) {
    .text-ssm {
        font-size: 20px; /* Default font size for .text-ssm */
    }
    .text-role {
        font-size: 12px;
    }

    
}

@media (max-width:993px) and (min-width:766px) {
    .text-ssm{
        font-size: 25px;
    }
    .text-role {
        font-size: 12px;
    }
    .w-role {
        width: 100%;
        padding-right: 0;
    
    }

    
}



</style>