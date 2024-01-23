<template>
    <div class="sponsors">
        <div class="comercios-sponsors">
            <div class="titulo-sponsors">Respaldados por:</div>
            <div class="imagenes-sponsors">
                <div class="sponsors-container">
                    <img class="cyber-source" src="./../../assets/sitio/CyberSource.png" />
                    <img class="red-enlace" src="./../../assets/sitio/redEnlace.png" />
                    <img class="visa" src="./../../assets/sitio/Visa.png" />
                    <img class="master-card" src="./../../assets/sitio/MasterCard.png" />
                    <img class="bancobisa-1" src="./../../assets/sitio/bancobisa.png" />
                    <img class="qrSimple" src="./../../assets/sitio/QRsimple.png" />
                </div>
            </div>
        </div>
        <div class="quick-pay-2024">
            <div class="datos">2024 Quick Pay</div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
.sponsors {
    background: rgba(228, 235, 235, 0.7);
    /*border-radius: 65px;*/
    padding: 48px 29px;
    display: flex;
    gap: 72px;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    box-shadow: 0px 13px 16px 13px rgba(19, 49, 108, 0.25);
    width: 100%;
    height: auto;
    overflow: hidden;
}

.comercios-sponsors {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 23px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 943px;
    height: 168px;
    position: relative;
    overflow: hidden;
}

.sponsors-container {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
}

.titulo-sponsors {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 933px;
    position: relative;
    overflow: hidden;
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    position: relative;
}

.imagenes-sponsors {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex: 1;
    height: 90px;
    min-width: 200px;
    position: relative;
    overflow: hidden;
}

.cyber-source {
    flex-shrink: 0;
    width: 144px;
    height: 81px;
    position: relative;
    object-fit: cover;
}

.red-enlace {
    flex-shrink: 0;
    width: 70px;
    height: 72px;
    position: relative;
    object-fit: cover;
}

.visa {
    flex-shrink: 0;
    width: 134px;
    height: 41px;
    position: relative;
    object-fit: cover;
}

.master-card {
    flex-shrink: 0;
    width: 97px;
    height: 58px;
    position: relative;
    object-fit: cover;
}

.bancobisa-1 {
    flex-shrink: 0;
    width: 164px;
    height: 49px;
    position: relative;
    object-fit: cover;
}

.qrSimple {
    flex-shrink: 0;
    width: auto;
    height: auto;
    position: relative;
    object-fit: cover;
}

.quick-pay-2024 {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 370px;
    height: 55px;
    position: relative;
    overflow: hidden;
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-end;
    justify-content: flex-end;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
}


.datos {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 300;
    position: relative;
}
</style>