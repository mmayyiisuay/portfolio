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
        default:
        return '';
    }
}
const works = ref(worksData.worksData);
</script>
<template>
    <div class="flex z-0 justify-around" id="Works">
        <div class="wrap w-[40vw] text-[40px] sm:text-[30px] md:text-[36px] text-ssm my-10 ml-[10px]">
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
        <div class="flex flex-col w-[40%] mr-10  my-6 ">
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
    <div class="grid grid-crad md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 gap-y-4 py-10 md:px-28 bg-gradient-to-tr from-[#4F53B9] to-[#ACD8F8]">
        <div v-for="project in works" :key="project.name" class="flex justify-center">
            <div class="bg-sky-100 w-[70%] md:w-full h-full rounded-[3vw] flex flex-col items-center  py-8 p-4 bg-css  shadow-box ">
    
                <img :src="getProjectImage(project.src)" alt="" class="h-[35%]  rounded-[2vw] " />
                
                <div class="h-full flex flex-col items-start text-[14px]">
                    <div class="flex justify-between w-full  mt-10  mb-4 w-role">
                        <div class="">
                            <div>
                                {{ project.date }}
                            </div>
                            <div>
                                {{ project.type }}
                            </div>
                        </div>
                        <div class="sm:flex justify-end text-center  ">
                            <div v-for="role in project.role" class="text-role"  :key="role">
                                <div class="border border-indigo-500 text-indigo-500 px-2 rounded-lg mx-2">
                                    {{ role }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-2/3">
                        <p class="text-ssm text-[20px] font-semibold ">
                            {{ project.name }}
                        </p>
                        <li v-for="detail in project.details" :key="detail" class="ml-4">
                            {{ detail }}
                        </li>
                        
                    </div>
                    <div class="flex gap-x-2 ">
                        <div v-for="tool in project.tools" class="" :key="tool">
                            <div class=" bg-indigo-500 px-2 rounded-lg text-white whitespace-no-wrap overflow-hidden truncate">
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
.shadow-box{
        box-shadow: 0px 50px 102.4px 0px rgba(255, 255, 255, 0.45);
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
@media (max-width: 450px) {
    .icon-size{
        display: none;
        }
    
    }

@media (max-width: 460px) {
    .text-ssm {
        font-size: 20px; 
    }
    .text-role {
        font-size: 12px;
    }
    .bg-css{
        width: 90%;
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
    .grid-crad {
        grid-column: 2;
        padding: 6%;
    }
}

@media (max-width: 765px) and (min-width: 630px) {
    
}



</style>