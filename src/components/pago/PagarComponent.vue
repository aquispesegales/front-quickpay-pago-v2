<template>
    <div class="payment-details"
        v-if="deudaClienteStore.objDatosCliente?.codigoCliente && deudaClienteStore.lstDetallePagos.length > 0">
        <div class="detail-section">
            <div class="titulo-pago">Detalle de pago</div>
            <div v-for="deuda in deudaClienteStore.lstDetallePagos" :key="deuda.deudaClienteId">

                <div class="detail-row">
                    <div class="detail-item">Tipo de servicio:</div>
                    <div class="service-type">{{ deuda.tipoServicio }}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-item">Concepto:</div>
                    <div class="service">{{ deuda.concepto }}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-item">Monto:</div>
                    <div class="concept">{{ formatearMoneda(deuda.subTotal+"") }}</div>
                </div>
                <div class="step-trail">
                    <div class="rect"></div>
                </div>

            </div>
            <div class="detail-row">
                <div class="total-amount">Total a pagar:</div>
                <div class="total-amount-value">{{ formatearMoneda(total) }}</div>
            </div>
        </div>

        <div class="payment-method">
            <div class="titulo-pago">
                Método de pago
            </div>
            <button class="payment-button">
                <img class="payment-image" src="../../assets/pago/pago_qr.png" alt="Método de pago 1" @click="tab = 'qr'" />
            </button>
            <!--<button class="payment-button">
                <img class="payment-image" src="../../assets/pago/pago_tj.png" alt="Método de pago 2" @click="tab = 'tj'" />
            </button>-->
            <PagoQRComponent v-if="tab == 'qr'"></PagoQRComponent>
           <!--<PagarTJComponent v-if="tab == 'tj'"></PagarTJComponent>-->
        </div>

    </div>
    <div v-else>
        <v-alert color="azul_marino" variant="tonal" prominent border="top">
            <template v-slot:title>
                Nota
            </template>

            Para Seleccionar pagos primero debe Buscar a un Cliente en el Primer Paso
        </v-alert>
    </div>
</template>
<script setup lang="ts">
import { Ref, ref, computed } from 'vue';
import { useUtilStore } from "@/store/UtilStore";
import PagoQRComponent from './PagoQRComponent.vue';
//import PagarTJComponent from './PagarTJComponent.vue';
import { formatearMoneda } from "../../composable/utilsComposable";
const utilStore = useUtilStore();
import { useDeudaClienteStore } from "@/store/DeudaClienteStore";
const deudaClienteStore = useDeudaClienteStore();
const tab: Ref<string | null> = ref(null);



const total = computed(() => {
    let sum = 0;
    deudaClienteStore.lstDetallePagos?.forEach((obj) => {
        sum += obj.subTotal;
    });
    return formatearMoneda(sum+"");
});


</script>
<style scoped>
.payment-details {
    display: flex;
    justify-content: space-between;
    gap: 100px;
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

.detail-section {
    padding: 30px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 65px;
    color: #1f4680;
    box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
    font-family: "Poppins", sans-serif;
    margin-left: 20px
}

.titulo-pago {
    color: #1f4680;
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
}

.detail-title,
.method-title {
    color: #1f4680;
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 10px;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.detail-item,
.service-type,
.service,
.concept,
.total-amount,
.total-amount-value {
    flex: 1;
}

.total-amount,
.total-amount-value {
    color: #e0a62a;
    font-weight: 700;
    font-size: 21px;
}


.payment-method {
    width: 500px;
    padding: 30px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 65px;
    font-family: "Poppins", sans-serif;
    box-shadow: 0px 17px 15.5px -3px rgba(153, 177, 194, 1);
}

.payment-button {
    border: none;
    width: 100%;
    
    padding: 0;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
}

.payment-image {
    width: 120px;
    height: auto;
}
</style>