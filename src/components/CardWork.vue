<template>
    
    <div  v-for="works in works" class="bg-white sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] text-black rounded-3xl sm:hover:scale-110 sm:hover:transition-[1s] mt-4">
        <div  class="sm:p-10 p-4 flex-col">
            <p class="sm:text-2xl text-sm">
                {{ works.name }}
            </p>
            <p class="text-xs font-light">
                {{ works.discription }}
            </p>
        </div>

    </div>
</template>

<script>
    export default{
        data () {
            return {
                works : [
                {
                    "name" : "ไม่มีจ้า 1",
                    "discription" : "ไม่มีงาน ไม่เงิน ไม่มีอนาคต 1",
                },
                {
                    "name" : "ไม่มีจ้า 2",
                    "discription" : "ไม่มีงาน ไม่เงิน ไม่มีอนาคต 2",
                },
                {
                    "name" : "ไม่มีจ้า 3",
                    "discription" : "ไม่มีงาน ไม่เงิน ไม่มีอนาคต 3",
                },
            ],};
        },
    };

</script>
