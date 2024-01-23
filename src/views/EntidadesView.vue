<template>
    <CabeceraPagoComponent></CabeceraPagoComponent>
    <EntidadesComponent :tipo_entidad_id="route.params.tipo_entidad_id"></EntidadesComponent>
</template>
<script setup lang="ts" >
import CabeceraPagoComponent from '@/components/pago/CabeceraPagoComponent.vue'
import EntidadesComponent from '@/components/pago/EntidadesComponent.vue';
import { useRoute } from 'vue-router'
const route = useRoute()



</script>
<style scoped></style>