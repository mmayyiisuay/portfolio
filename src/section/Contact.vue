<template>
    <div class="bg-gradient-to-tr from-[#bed2f5] via-transparent to-transparent ">

        <div id="Contact" class="md:flex-row flex flex-col-reverse pt-20 relative z-20" >
            <div class="md:w-1/3 w-full flex md:flex-col md:items-end justify-center md:justify-start md:pr-10  md:py-20 md:gap-y-10 gap-x-10 mt-10 md:mt-0" >
                <a href="https://github.com/mmayyiisuay" target="_blank" >
                    <img :src="github" alt=""  class="shadow-xl md:shadow-[#c9c9c9] shadow-white rounded-full hover:scale-90 w-[50px]">
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img :src="ig" alt=""  class="shadow-xl md:shadow-[#c9c9c9] shadow-white rounded-xl hover:scale-90 w-[50px]">
                </a>
                <a href="https://line.me/ti/p/YNmR38Y_UF" target="_blank">
                    <img :src="line" alt=""  class="shadow-xl md:shadow-[#c9c9c9] shadow-white rounded-full hover:scale-90 w-[50px]">
                </a>
            </div>
            <div class="md:w-2/3 w-full flex flex-col md:items-start items-center">
                <div class="md:w-[60%] w-[80%] crad-form shadow-lg px-6 py-10 rounded-2xl bg-white">
                    <p class="w-full text-start text-[30px] font-extrabold uppercase">Contact.</p>
                    <p class="w-full text-start text-[14px] text-ssm ">Get in touch or shoot me an email directly <br> on <span class="font-semibold text-[#4d48d3] "> 
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=natchasuaysaard@gmail.com" target="_blank">natchasuaysaard@gmail.com</a> </span></p>
                    <form ref="form" @submit.prevent="sendEmail" class="w-full mt-10 font-semibold ">
                        <div class=" flex flex-col gap-y-2">
                            <div class="flex flex-col">
                                <label >Name</label>
                                <input type="text" name="user_name" class="rounded-lg" required="required">
                            </div>
                            <div class="flex flex-col">
                                <label>Email</label>
                                <input type="email" name="user_email" class="rounded-lg" required="required">
                            </div>
                            <div class="flex flex-col">
                                <label>From Name</label>
                                <input type="text" name="from_name" class="rounded-lg" required="required">
                            </div>
                            <div class="flex flex-col">
                                <label>Message</label>
                                <textarea name="message" class="rounded-lg" required="required"></textarea>
                            </div>
                        </div>
                        <button class="flex justify-end mt-10 rounded-xl py-2 px-6 bg-[#4d48d3] shadow-lg hover:scale-95"  >
                            <input type="submit" :value="loading ===1 ? 'sending..' : (loading === 2 ? 'done !':(loading === 3 ? 'try again !':'send'))" class="text-white">
                        </button>
                        
                    </form>
                    
                    
                </div>
                
            </div>
        </div>

        <div class="custom-shape-divider-bottom relative -mt-32 z-10" >
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
    </div>
</template>

<script>
  import emailjs from '@emailjs/browser';
  import {iconsend,github,ig,line} from '../assets/index'
  
  export default {
    data() {
        return{
            iconsend,
            github,
            ig,
            line,
            loading:0,
        }
    },
    methods: {
      sendEmail() {
        this.loading = 1;
        console.log(this.loading);
        
        emailjs.sendForm('service_lxqxyc9', 'template_akgezrk', this.$refs.form, 'MGXaQzcdX9_gSx5lO')
          .then((result) => {
              console.log('SUCCESS!', result.text);
              this.loading=2;
              this.$refs.form.reset();
          console.log(this.loading);
          }, (error) => {
              console.log('FAILED...', error.text);
              this.loading=3;
          console.log(this.loading);
          });
      },
      
    }
  }

  
  </script>
  <style>
.custom-shape-divider-bottom {
    
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom svg {
    position: relative;
    display: block;
    width: calc(139% + 1.3px);
    height: 188px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom .shape-fill {
    fill: #95acf5;
}

@media (max-width: 400px) {
    
    .text-ssm {
            font-size: 12px; 
        }
}

@media (max-width:993px) and (min-width:766px) {
    .text-ssm{
        font-size: 12px;
    }
    
    .crad-form {
        width: 80%;
    }
    
}
</style> 