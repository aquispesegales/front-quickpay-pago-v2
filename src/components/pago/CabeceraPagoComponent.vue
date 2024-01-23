<template>
    <div class="header">
        <div class="logo">
            <img class="quick-pay-blanco-1" src="./../../assets/sitio/QuickPayLogo1.png" />
        </div>
    </div>
    <div class="entidades-barra">
        <div class="mensaje" @click="buscarEntidad(tipoEmpresa.dominioId)" 
        v-for="tipoEmpresa  in tipoEmpresas.lstTipoEmpresas">{{ tipoEmpresa.descripcion }}</div>
    </div>
</template>
<script setup lang="ts">
import { useTipoEmpresas } from '../../composable/tipoEmpresas'
const tipoEmpresas = useTipoEmpresas();

import { useEntidadStore } from '../../store/EntidadStore';
const entidadStore = useEntidadStore();
const buscarEntidad = async (tipoEntidadId:number) =>{
    await entidadStore.getEntidadesForTipoEntidad(tipoEntidadId.toString());
}


</script>
<style scoped>
.header {
    background: #ffffff;
    padding: 10px 0px 10px 0px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    width: 100%;
    height: 93px;
    position: relative;
    overflow: hidden;
}

.logo {
    padding: 24px 0px 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    width: 427px;
    height: 104px;
    position: relative;
}

.quick-pay-blanco-1 {
    flex-shrink: 0;
    width: 200px;
    height: auto;
    position: relative;
    object-fit: cover;
}

.entidades-barra {
    padding: 10px 34px 10px 34px;
    display: flex;
    flex-direction: row;
    gap: 115px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 100%;
    height: 61px;
    position: relative;
    overflow: hidden;
}

.mensaje,
.mensaje2 {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}
</style>