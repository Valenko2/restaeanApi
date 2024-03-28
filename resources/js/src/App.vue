
<script setup >

</script>
<template>
   <PrimaryHeader/>
    <router-view/>
</template>

<script>
import PrimaryHeader from "@/components/PrimaryHeader.vue";
export default {
    components: {
        PrimaryHeader
    },
    setup() {
        return {
            userName: "Владислав"
        }
    },
}
</script>
