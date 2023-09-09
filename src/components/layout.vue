

<template>
    <div class="flex justify-between px-4 font-mono font-bold m-4">
        <div class="flex items-center " >
            <p class="anytext mr-2">&lt; </p>
            <p class="text-xl text-white mr-2"> mmayyiisuay</p> 
            <p class="anytext mr-2">/ &gt; </p>
        </div>
        <div class=" flex justify-center items-center gap-x-2 text-2xl">
            <v-link to="/" class="text-white"> am </v-link>
        </div>
    </div>
    <slot> </slot>
</template>
<script>
export default {
    name: 'default_layout',
}
</script>