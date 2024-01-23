<template>
        <div id="seccion-quienes-somos" class="quienes-somos">
      <div class="mensaje-principal">
        <div class="titulo-quienes-somos">Quienes Somos</div>
        <div class="descripcion-quienes-somos">
          <p class="descripcion">“Desarrollamos una plataforma de cobros enfocada en brindar una solución integral
            al problema de los recaudaciones de nuestros clientes”
          </p>
        </div>
      </div>

      <div class="mensaje-secundario">
        <div class="mensaje-sec-1">
          <p class="mensaje-sec-1-text"> 31% de las empresas en bolivia adoptaron algún método de cobro electrónico en
            línea. </p>
        </div>

        <div class="mensaje-sec-2">
          <img class="quienes-somos-imagen" src="../../assets/sitio/QuienesSomosImg.png" />
        </div>
      </div>
    </div>
</template>
<style scoped>

.quienes-somos {
  background: #f5f5f5;
  padding: 39px 29px 4px 29px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 100%;
  height: 1083px;
  min-width: 360px;
  position: relative;
  overflow: hidden;
}
.mensaje-principal {
  padding: 0px 0px 63px 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 1509px;
  height: 330px;
  min-width: 360px;
  position: relative;
  overflow: hidden;
}
.titulo-quienes-somos {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 64px;
  font-weight: 700;
  position: relative;
  width: 750px;
  min-width: 360px;
}

.descripcion-quienes-somos {
  margin: 0 0 0 -11px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.descripcion {
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 400;
  position: relative;
  width: 790px;
  height: 231px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mensaje-secundario {
  padding: 0px 0px 63px 0px;
  display: flex;
  flex-direction: row;
  gap: 53px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  height: 683px;
  min-width: 360px;
  position: relative;
  overflow: hidden;
}
.mensaje-sec-1 {
  background: rgba(205, 158, 17, 0.23);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 600px;
  height: 600px;
  position: relative;
  box-shadow: 23px 33px 45.1px -6px rgba(97, 63, 7, 0.32);
  
}

.mensaje-sec-1-text {
  overflow: hidden;
  color: #1f4680;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 29px;
  font-weight: 600;
  position: relative;
  width: 425px;
  height: 299px;
}

.mensaje-sec-2 {
  background: rgba(205, 158, 17, 0.23);
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 600px;
  height: 600px;
  position: relative;
  box-shadow: 23px 33px 45.1px -6px rgba(97, 63, 7, 0.32);
  overflow: hidden;
}
.quienes-somos-imagen{
  flex-shrink: 0;
  width: 70%;
  height: auto;
  position: relative;
  object-fit: cover;
}
</style>