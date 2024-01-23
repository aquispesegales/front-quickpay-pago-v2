<template>
  <v-row no-gutters>
    <v-col cols="12" fluid class="d-flex align-center flex-column">
      <v-sheet class="pa-0 ma-0 ">
        <v-btn v-if="!qr_proceso && !pago_exito" class="ml-5" height="35" min-width="164" variant="outlined"
          @click="generarQR()">
          Volver a generar QR
        </v-btn>
        <br /><br />
        <div v-if="qr.imagenQr">
          <dl>
            <strong>FECHA VENCIMIENTO :</strong> {{ qr.fechaVencimiento }}
          </dl>
          <dl><strong>MONTO :</strong> {{ total }}</dl>
          <!--<dl><strong>ALIAS :</strong> {{ qr.alias }}</dl>-->
          <img :src="qr.imagenQr" alt="Pago" width="250" />
          <div class="ml-2 text-center">
            Descarga QR
            <v-icon icon="mdi mdi-arrow-collapse-down" @click="descargaQr(qr.imagenQr)"></v-icon>
          </div>
            <!-- bnt temporal-->
            <v-btn  class="ml-5" height="35" min-width="164" variant="tonal" color="naranja"
                @click="descargarFactura()">
                YA REALICE EL PAGO
              </v-btn>
        </div>


        <div v-else>
          <dl></dl>
          <dl></dl>
          <div style="border: 3px dashed #000; width: 230px; height: 230px; text-align: center; padding-top: 10px;">
            <img width="200px" v-if="qr_proceso" src="../../assets/pago/genera_qr.gif" alt="genera qr">
            <img width="200px" v-if="pago_proceso" src="../../assets/pago/procesando_pago.gif" alt="procesa pago qr">
            <div v-if="pago_exito" class="div-exito">
              <h3 style=" color: limegreen;">Pago Realizado con Exito</h3><br>
              <v-btn v-if="qr != null" class="ml-5" height="35" min-width="164" variant="text"
                @click="descargarFactura()">
                Descarge su Factura
              </v-btn>
            

            </div>
          </div>
        </div>

      </v-sheet>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, inject } from "vue";
import { useQrStore } from "../../store/QrStore";
import { formatearMoneda } from "../../composable/utilsComposable";
const qrStore = useQrStore();
const qr = ref({});
import { useUtilStore } from "@/store/UtilStore";
const utilStore = useUtilStore();
const swal = inject('$swal')
import { useDeudaClienteStore } from "@/store/DeudaClienteStore";
const deudaClienteStore = useDeudaClienteStore();
const qr_proceso = ref(false);
const pago_proceso = ref(false);
const pago_exito = ref(false);
const alias_exito = ref(null);
import { io } from "socket.io-client";
const url_sockete = import.meta.env.VITE_API_SOCKETE;

onMounted(() => {
  const socket = io(url_sockete);
  qr.value = {};
  pago_exito.value = false;
  alias_exito.value = null;
  socket.on('connect', () => {
    console.log("sokete conectado")
  });

  socket.on("confirmaPagoQr", (event) => {
    if (event) {
      qr.value = {};
      pago_proceso.value = true;
      setTimeout(() => {
        pago_proceso.value = false;
        pago_exito.value = true;
        alias_exito.value = event;
      }, 10000);
    }


  });

  generarQR();
})






const total = computed(() => {
  let sum = 0;
  deudaClienteStore.lstDetallePagos.forEach((obj) => {
    sum += obj.subTotal;
  });
  //return sum;
  return formatearMoneda(sum);
});
const props = defineProps(["entidadId"]);
const descargaQr = (linkSource) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = "qr.jpg";
  downloadLink.click();
};
const generarQR = async () => {
  pago_exito.value = false;
  alias_exito.value = null;
  let sum = 0;
  let deudasCliente = [];
  deudaClienteStore.lstDetallePagos.forEach(async (item) => {
    sum += item.subTotal;
    deudasCliente.push(item.deudaClienteId);
  });
  if (deudasCliente.length <= 0) {
    return alert("Debe seleccionar Items a Pagar");
  }
  let obj = {
    detalleGlosa: "detalle",
    monto: sum,
    moneda: "BOB",
    lstDeudaCliente: deudasCliente,
  };
  qr_proceso.value = true;
  qr.value = {};
  let r = await qrStore.generarQr(obj);

  if (r.data.status) {
    qr.value = r.data.result;

  } else {
    //alert(r.data.message);
    //return;
  }
  qr_proceso.value = false;

};
const descargarFactura = async () => {
  utilStore.setDialogLoading(true);
  let rr = await deudaClienteStore.descargaFactura(qr.value.alias);
  if (rr.data.status) {
    var binaryString = atob(rr.data.result);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    let blob = new Blob([bytes.buffer], {
      type: "application/pdf",
    });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "factura.pdf";
    document.body.appendChild(link);
    link.click();
  } else {
    swal.fire({
      text: rr.data.message,
      icon: "error",
      confirmButtonColor: "#25368B",
      confirmButtonText: "Aceptar"
    });
  } //alert(rr.data.message);
  utilStore.setDialogLoading(false);
};
</script>
<style scoped >
.div-exito {
  padding-top: 70px;

}
</style>