<template>
  
  <div id="seccion-entidades">
    <!--<div class="titulo-entidades">titulo a definir</div>-->


    <div class="entidades-container">
      <div class="imagen-entidades">
        <img class="entidades-image-1" src="../../assets/sitio/EntidadesImage.png" />
      </div>
      <div class="botones-entidades">
        <div class="universidades" v-for="tipoEmpresa in  tipoEmpresas.lstTipoEmpresas" @click="irEntidades(tipoEmpresa.dominioId)" >
          <i class="fa-solid fa-building-columns"></i>
          <div class="universidades-text">{{ tipoEmpresa.descripcion }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useTipoEmpresas } from '../../composable/tipoEmpresas'
const tipoEmpresas =  useTipoEmpresas();

const router = useRouter();



const irEntidades = (tipoEntidadId:number):void => {
  router.push({ name: 'Entidades', params: { tipo_entidad_id: tipoEntidadId } })
}

</script>
<style scoped>
.entidades {
  background: #f0f5f4;
  padding: 43px 83px 43px 83px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 100%;
  min-width: 360px;
}

.titulo-entidades {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 1299px;
  position: relative;
  overflow: hidden;
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 64px;
  font-weight: 700;
  position: relative;
}

.entidades-container {
  display: flex;
  flex-direction: row;
  gap: 96px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 100%;
  min-width: 360px;
}

.imagen-entidades {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 613px;
  height: 755px;
  position: relative;
  overflow: hidden;
}

.entidades-image-1 {
  flex-shrink: 0;
  /*width: 436px;*/
  height: 443px;
  position: relative;
  object-fit: cover;
}

.botones-entidades {
  display: flex;
  flex-direction: row;
  gap: 83px;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 640px;
  height: auto;
}

.universidades {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

i {
  flex-shrink: 0;
  font-size: 60px;
  color: #1f4680;
  object-fit: cover;
}

.universidades-text {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 29px;
  font-weight: 700;
  position: relative;
}

.clubes {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.clubes2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 31px;
  font-weight: 700;
  position: relative;
}

.eventos {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.eventos2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 31px;
  font-weight: 700;
  position: relative;
}

.seguros {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.seguros2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 31px;
  font-weight: 700;
  position: relative;
}

.servicios {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.servicios2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  font-weight: 700;
  position: relative;
}

.colegios {
  background: rgba(31, 70, 128, 0.15);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 251px;
  height: 219px;
  position: relative;
  box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}

.colegios2 {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  font-weight: 700;
  position: relative;
}
</style>