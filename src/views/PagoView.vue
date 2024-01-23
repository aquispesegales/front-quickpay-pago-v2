<template>
    <div>


        <div class="pagos">
            <DatosEntidadComponent :entidadId="route.params.entidad_id"></DatosEntidadComponent>
            <StepsPagoComponent :entidadId="route.params.entidad_id"></StepsPagoComponent>
        </div>
    </div>
</template>
<script setup lang="ts">

import DatosEntidadComponent from '@/components/pago/DatosEntidadComponent.vue';
import StepsPagoComponent from '@/components/pago/StepsPagoComponent.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style scoped>
.pagos {
    padding: 40px 40px 40px 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    min-width: 360px;
    background: linear-gradient(180deg,
            rgba(221, 233, 241, 0.7) 0%,
            rgba(245, 241, 230, 0.7) 100%);

}

div {



}
</style>