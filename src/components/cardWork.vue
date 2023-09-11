<template>
    
    <div  v-for="works in works" class="bg-white w-[300px] h-[300px] text-black rounded-3xl hover:scale-110 hover:transition-[1s]">
        <div  class="p-10 flex-col">
            <p class="text-2xl">
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
                    "name" : "ไม่มีจ้า",
                    "discription" : "ไม่มีงาน ไม่เงิน ไม่มีอนาคต",
                },
                {
                    "name" : "ไม่มีจ้า",
                    "discription" : "ไม่มีงาน ไม่เงิน ไม่มีอนาคต",
                },
                {
                    "name" : "ไม่มีจ้า",
                    "discription" : "ไม่มีงาน ไม่เงิน ไม่มีอนาคต",
                },
            ],};
        },
    };

</script>