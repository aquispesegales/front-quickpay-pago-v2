<template>
        <div class="club-the-strongest">
            <div class="contenedor-club">
                <div class="titulo-club">{{ entidadStore.objEntidad?.nombre }}</div>
                <img class="logo-club" :src="entidadStore.objEntidad?.imagen64" />
            </div>
            <div class="datos-club">
                <div class="telefono-club">
                    <span>
                        <span class="tel-span">TELÉFONO</span>
                        <span class="tel-span2"></span>
                        <span class="tel-span3">{{   entidadStore.objEntidad?.telefono}}</span>
                    </span>
                </div>
                <div class="direccion-club">
                    <span>
                        <span class="direccion1">
                            DIRECCIÓN
                        </span>
                        <span class="direccion2">
                          {{   entidadStore.objEntidad?.direccion}}
                        </span>
                    </span>
                </div>
                <div class="nit-club">
                    <span>
                        <span class="nit-1">NIT</span>
                        <span class="nit-2">{{   entidadStore.objEntidad?.nit}}</span>
                    </span>

                </div>
            </div>
        </div>
    
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useEntidadStore } from '../../store/EntidadStore';
const entidadStore = useEntidadStore();
const props = defineProps<{
  entidadId: any
}>()
onMounted(async () => {
  await entidadStore.getEntidadForEntidadId(props.entidadId)
})

</script>
<style scoped>
.steps {
  background: linear-gradient(
    180deg,
    rgba(221, 233, 241, 0.7) 0%,
    rgba(245, 241, 230, 0.7) 100%
  );
  padding: 40px 58px 40px 58px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 100%;
  height: 870px;
  min-width: 360px;
  position: relative;
  overflow: hidden;
}
.club-the-strongest {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 40px;
  padding: 0px 33px 0px 33px;
  display: flex;
  flex-direction: row;
  gap: 70px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 780px;
  height: 200px;
  position: relative;
  box-shadow: 0px 13px 15.5px -3px rgba(153, 177, 194, 1);
  overflow: hidden;
}
.contenedor-club {
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.titulo-club {
  color: #13316c;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  font-weight: 700;
  position: relative;
}
.logo-club {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  position: relative;
  object-fit: cover;
}
.datos-club {
  padding: 39px 0px 39px 0px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  width: 891px;
  height: 279px;
  position: relative;
  overflow: hidden;
}

.telefono-club span,
.direccion-club span,
.nit-club span {
  font-size: 20px;
}


.telefono-club {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 46px;
  position: relative;
  overflow: hidden;
}
.tel-span {
  color: #1f4680;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.tel-span2 {
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.tel-span3 {
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}
.direccion-club {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 44px;
  position: relative;
  overflow: hidden;
  text-align: left;

}
  

.direccion1 {
  color: #1f4680;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.direccion2 {
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}
.nit-club {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 27px;
  position: relative;
  overflow: hidden;
}

.nit-1 {
    text-align: left;
  color: #1f4680;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.nit-2 {
    text-align: left;
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}
</style>