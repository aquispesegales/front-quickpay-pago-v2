<template>
    <div class="styled-table" v-if="deudaClienteStore.objDatosCliente?.codigoCliente">
        
        <v-table class="pa-10" fixed-header>
            <thead>
                <tr>
                    <th></th>
                    <th class="text-left">
                        <span class="font-weight-black text-subtitle-1 text-negro"> TIPO DE SERVICIO</span>
                    </th>
                    <th class="text-left">
                        <span class="font-weight-black text-subtitle-1 text-negro"> SERVICIO</span>
                    </th>
                    <th class="text-left">
                        <span class="font-weight-black  text-subtitle-1 text-negro">PERIODO</span>
                    </th>
                    <th class="text-left">
                        <span class="font-weight-black  text-subtitle-1 text-negro">CANTIDAD</span>
                    </th>
                    <th class="text-left">
                        <span class="font-weight-black  text-subtitle-1 text-negro">CONCEPTO</span>
                    </th>

                    <th class="text-right">
                        <span class="font-weight-black  text-subtitle-1 text-negro">
                            SUB TOTAL</span>
                    </th>
                </tr>
            </thead>
            <tbody>
             
                <tr v-for="deuda in lstDeudasCliente" :key="deuda.deudaClienteId">

                    <td>
                        <v-checkbox v-model="deudaClienteStore.lstDetallePagos" :value="deuda" hide-details></v-checkbox>
                    </td>
                    <td class="font-weight-thin  text-subtitle-1 text-negro">
                        {{ deuda.tipoServicio }}
                    </td>
                    <td class="font-weight-thin  text-subtitle-1 text-negro">
                        {{ deuda.servicio }}
                    </td>
                    <td class="font-weight-thin  text-subtitle-1 text-negro">
                        {{ deuda.periodo }}
                    </td>
                    <td class="font-weight-thin  text-subtitle-1 text-negro">
                        {{ deuda.cantidad }}
                    </td>
                    <td class="font-weight-thin  text-subtitle-1 text-negro">
                        {{ deuda.concepto }}
                    </td>

                    <td class="font-weight-thin  text-subtitle-1 text-negro text-right">
                        {{ formatearMoneda(deuda.subTotal.toString()) }}
                    </td>
                </tr>
            </tbody>

        </v-table>

        <div class="total-section">
            <p>Total a pagar: <span id="totalAmount">{{ total }} Bs</span></p>
        </div>

    </div>
    <div v-else>
        <v-alert  color="azul_marino"  variant="tonal" prominent border="top">
            <template v-slot:title>
                Nota
            </template>

            Para Seleccionar pagos primero debe Buscar a un Cliente en el Primer Paso
        </v-alert>
    </div>
</template>
<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { formatearMoneda } from "../../composable/utilsComposable";
import { useUtilStore } from "@/store/UtilStore";
const utilStore = useUtilStore();
import { useDeudaClienteStore } from "@/store/DeudaClienteStore";
const deudaClienteStore = useDeudaClienteStore();
const props = defineProps(["entidadId"]);

interface DeudaCliente {
    deudaClienteId:number,
    tipoServicio:string,
    servicio:string,
    periodo:string,
    cantidad:number,
    concepto:string,
    montoUnitario:number,
    subTotal:number
  }

const lstDeudasCliente = ref<DeudaCliente[]>();

const total = computed(() => {
    let sum:number = 0;
    deudaClienteStore.lstDetallePagos?.forEach((obj) => {
        sum += obj.subTotal;
    });
    return formatearMoneda(sum.toString());
});


onMounted(() => {
    descargandoNuevasDeudas();
})

const descargandoNuevasDeudas = async () => {
    utilStore.setDialogLoading(true);
    lstDeudasCliente.value = [];
    deudaClienteStore.lstDetallePagos = [];
    let codCliente = deudaClienteStore.objDatosCliente?.codigoCliente;
    let res = await deudaClienteStore.getDeudaClienteByEntidadIdAndCodigoCliente(
        props.entidadId,
        codCliente+""
    );
    lstDeudasCliente.value = res.result;
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
    background: none;

    -webkit-font-smoothing: antialiased;
}

.container {
    margin-top: 50px;
    width: 100%;
}

.paso-2-seleccionar-pagos,
.paso-2-seleccionar-pagos * {
    box-sizing: border-box;
}

.paso-2-seleccionar-pagos {
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

.clubes {
    background: linear-gradient(180deg,
            rgba(221, 233, 241, 0.7) 0%,
            rgba(249, 243, 232, 0.7) 100%);
    padding: 40px 58px 40px 58px;
    display: flex;
    flex-direction: row;
    gap: 47px;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    height: auto;
    position: relative;
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
    background: var(--default, #a1aebe);
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

.icon-action-check {
    width: 24px;
    height: 24px;
    position: absolute;
    left: calc(50% - 12.5px);
    top: calc(50% - 12px);
    overflow: visible;
}

.text {
    color: var(--text-color, #465668);
    text-align: center;
    font-family: "Inter-Medium", sans-serif;
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    left: -29.5px;
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

.text2 {
    color: var(--active, #0162dd);
    text-align: center;
    font-family: "Inter-Bold", sans-serif;
    font-size: 13px;
    font-weight: 700;
    position: absolute;
    left: -43px;
    top: 42px;
}

.step-trail2 {
    flex-shrink: 0;
    width: 559px;
    height: 32px;
    position: relative;
}

.circle3 {
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

.text3 {
    color: var(--text-color, #465668);
    text-align: center;
    font-family: "Poppins-Medium", sans-serif;
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    left: -4.5px;
    top: 42px;
}


table {
    width: 100%;
    border-collapse: collapse;

}

th,
td {
    padding: 8px;
    text-align: center;
    color: #1F4680;

}

th {
    color: #1F4680;
}

.checkbox-column {
    width: 10%;
    color: #1F4680;

}

.styled-table {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 65px;
    align-items: flex-end;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 90%;
    height: auto;
    position: relative;
    box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
}


.total-section {
    padding: 15px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    box-shadow: 0px 5px 5px -3px rgba(153, 177, 194, 1);
}

.total-section p {
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 23px;
    color: #1f4680;
}

#totalAmount {
    color: #bf860b;
}
</style>