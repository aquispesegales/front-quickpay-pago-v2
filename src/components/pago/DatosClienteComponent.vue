<template>
    <div class="codigo-input">
        <div class="input-field">
            <label for="codigo-cliente">Ingrese el código del cliente</label>
            <input type="text" id="codigo-cliente" placeholder="Ej. 259863" v-model="vCodigoCliente">
        </div>
        <button class="buscar-cliente" @click="buscarCliente()">Buscar Cliente</button>
    </div>
    <div class="informacion-cliente"  v-if="deudaClienteStore.objDatosCliente?.codigoCliente">
        <div class="codigo-cliente">
            <span>Código Cliente:</span>
            <span>{{ deudaClienteStore.objDatosCliente?.codigoCliente }}</span>
        </div>
        <div class="codigo-cliente">
            <span>CI:</span>
            <span>{{ deudaClienteStore.objDatosCliente?.nroDocumento }}</span>
        </div>
        <div class="codigo-cliente">
            <span>Nombre Cliente:</span>
            <span>{{ deudaClienteStore.objDatosCliente?.nombreCliente }}</span>
        </div>
        <div class="codigo-cliente">
            <span>Correo Cliente:</span>
            <span>{{ deudaClienteStore.objDatosCliente?.correoCliente }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, inject } from 'vue';
import { useUtilStore } from "@/store/UtilStore";
const utilStore = useUtilStore();
import { useDeudaClienteStore } from "@/store/DeudaClienteStore";
const deudaClienteStore = useDeudaClienteStore();
import { useEntidadStore } from '../../store/EntidadStore';

const swal = inject('$swal')

const entidadStore = useEntidadStore();

const vCodigoCliente = ref("");

const buscarCliente = async () => {

    if (vCodigoCliente.value == "") {
        //alert("Código Cliente Obligatorio");
        swal.fire({

            text: "Código Cliente Obligatorio",
            icon: "error",
            confirmButtonColor: "#25368B",
            confirmButtonText: "Aceptar"
        });

        return;
    }
    utilStore.setDialogLoading(true, "Buscando Datos de Ciente...");
    let obj = await deudaClienteStore.getClienteByEntidadIdAndCodigoCliente(
        entidadStore.objEntidad?.entidadId+"",
        vCodigoCliente.value
    );
    if (obj.status == false) {
        utilStore.setDialogLoading(false);
        //alert(obj.message);
        swal.fire({
            text: obj.message,
            icon: "error",
            confirmButtonColor: "#25368B",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    utilStore.setDialogLoading(false);
};
</script>
<style scoped>
a,
button,
input,
select,
h1,
h2,
h3,
h4,
h5,
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    appearance: none;
    background: none;

    -webkit-font-smoothing: antialiased;
}

.paso1,
.paso1 * {
    box-sizing: border-box;
}

.paso1 {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
}

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
    width: 200px;
    height: auto;
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

.mensaje.clicked,
.mensaje2.clicked {
    font-weight: 700;
}

.mensaje:hover::before,
.mensaje2:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #1f4680;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
}

.mensaje:hover::before,
.mensaje2:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.steps {
    background: linear-gradient(180deg,
            rgba(221, 233, 241, 0.7) 0%,
            rgba(245, 241, 230, 0.7) 100%);
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
    border-radius: 65px;
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
    box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
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

.stepper-horizontal {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 1321px;
    position: relative;
}

.step-text-horizontal {
    flex-shrink: 0;
    width: 32px;
    height: 58px;
    position: relative;
}

.step-symbol {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.icon {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
}

.circle {
    background: var(--light, #ffffff);
    border-radius: 50%;
    border-style: solid;
    border-color: var(--active, #0162dd);
    border-width: 2px;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.icon-personal {
    height: auto;
    position: absolute;
    right: 12.5%;
    left: 12.5%;
    width: 75%;
    bottom: 15.62%;
    top: 9.38%;
    height: 75%;
    overflow: visible;
}



.text {
    color: #2360bc;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    font-weight: 700;
    position: absolute;
    left: -30px;
    top: 42px;
}

.step-trail {
    flex-shrink: 0;
    width: 595px;
    height: 32px;
    position: relative;
}

.rect {
    background: var(--default, #a1aebe);
    height: 2px;
    position: absolute;
    right: 0%;
    left: 0%;
    width: 100%;
    top: calc(50% - 1px);
}

.circle2 {
    background: var(--light, #ffffff);
    border-radius: 50%;
    border-style: solid;
    border-color: var(--default, #a1aebe);
    border-width: 2px;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.icon-personal2 {
    height: auto;
    position: absolute;
    right: 14.06%;
    left: 10.94%;
    width: 75%;
    bottom: 14.06%;
    top: 10.94%;
    height: 75%;
    overflow: visible;
}

.text2 {
    color: var(--text-color, #465668);
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    left: -44.5px;
    top: 42px;
}

.step-trail2 {
    flex-shrink: 0;
    width: 559px;
    height: 32px;
    position: relative;
}

.icon-personal3 {
    height: auto;
    position: absolute;
    right: 14.06%;
    left: 10.94%;
    width: 75%;
    bottom: 14.06%;
    top: 10.94%;
    height: 75%;
    overflow: visible;
}

.text3 {
    color: var(--text-color, #465668);
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    left: -4.5px;
    top: 42px;
}


.informacion-1 {
    display: flex;
    flex-direction: row;
    gap: 200px;
    align-items: flex-start;
}

.codigo-input {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-field {

    padding: 12px 16px;
}

label {
    color: #13316c;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
}

#codigo-cliente {
    border: 1px solid rgba(38, 154, 212, 0.2);
    border-radius: 8px;
    padding: 8px;
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    background-color: #fffcf6;
}

.buscar-cliente {
    background: #cd9724;
    border-radius: 32px;
    padding: 10px 20px;
    color: #ffffff;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.buscar-cliente:hover {
    background-color: #dba737;
}

.informacion-cliente {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.codigo-cliente span {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 700;
}

.codigo-cliente span:nth-child(2) {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 300;
    /* Ligero */
}
</style>