<template>
    <div class="clubes">
        <div v-for="entidad in entidadStore.lstEntidades" :key="entidad.entidadId"   class="club-the-strongest" @click="irPago(entidad.entidadId)">
            <img class="TheStrongestLogo" :src="entidad.imagen64" />
            <div class="Titulo">
                {{ entidad.nombre }}
            </div>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

import { useEntidadStore } from '@/store/EntidadStore'
const entidadStore = useEntidadStore();

const props = defineProps<{
    tipo_entidad_id: any
}>()
onMounted(async () => {
    console.log("buscado entidades");
    console.log(props.tipo_entidad_id);

    await entidadStore.getEntidadesForTipoEntidad(props.tipo_entidad_id);
})



const irPago = (entidadId: number): void => {
    router.push({ name: 'Pago', params: { entidad_id: entidadId } })
}

</script>
<style scoped>
.clubes {
    background: linear-gradient(180deg,
            rgba(221, 233, 241, 0.7) 0%,
            rgba(245, 241, 230, 0.7) 100%);
    padding: 62px 39px 62px 39px;
    display: flex;
    flex-direction: row;
    gap: 37px;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    min-width: 360px;
    position: relative;
    overflow: hidden;
}

.club-the-strongest {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 65px;
    display: flex;
    flex-direction: column;
    gap: 21px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 240px;
    height: 287px;
    position: relative;
    box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
    overflow: hidden;
}

.TheStrongestLogo {
    flex-shrink: 0;
    width: 115px;
    height: 115px;
    position: relative;
    object-fit: cover;
}

.Titulo {
    color: #13316c;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 23px;
    font-weight: 700;
    position: relative;
}

.LosSargentosLogo {
    flex-shrink: 0;
    width: 114px;
    height: 136px;
    position: relative;
    object-fit: cover;
}

.club3 {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 65px;
    display: flex;
    flex-direction: column;
    gap: 42px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 240px;
    height: 287px;
    position: relative;
    box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
    overflow: hidden;
}

.blank {
    background: #c4c4c4;
    flex-shrink: 0;
    width: 115px;
    height: 115px;
    position: relative;
}
</style>