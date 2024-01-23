<template>
  <div class="hero-section">

    <div class="hero-text">

      <div class="titulo-hero">
        <div class="titulo-hero-text">
          <span>
            <span class="titulo-hero-text-span">
              
              Paga rápido
              <br />
            </span>
            <span class="titulo-hero-text-span2">
              
               paga seguro.
            </span>
          </span>
        </div>
      </div>

      <!--<div class="subtitulo-hero">
        <div class="subtitulo-hero-text">
          Paga rápido, paga seguro.
        </div>
      </div>-->
      <a href="#seccion-entidades"> <button class="boton-hero">Iniciar</button></a>


    </div>

    <div class="hero-imagen">
      <img class="hero-imagen-src" src="./../../assets/sitio/heroImage.png" />
    </div>

  </div>
</template>
<style scoped>
.hero-section {
  background: linear-gradient(112.07deg,
      rgba(221, 230, 241, 1) 38.999998569488525%,
      rgba(253, 196, 71, 0.2) 100%);
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 100%;
  height: 913px;
  min-width: 360px;
  position: relative;
}

.hero-text {
  padding: 165px 31px 339px 19px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  /*align-items: flex-start;*/
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-shrink: 0;
  width: 686px;
  height: 894px;
  position: relative;
  overflow: hidden;
}

.titulo-hero {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.titulo-hero-text {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 81px;
  line-height: 122.35%;
  font-weight: 500;
  position: relative;
  width: 100%;
  height: 185px;
}

.titulo-hero-text-span {
  color: #1f4680;
  font-family: "Poppins", sans-serif;
  font-size: 81px;
  line-height: 122.35%;
  font-weight: 500;
}

.titulo-hero-text-span2 {
  color: rgb(225, 160, 19);
  font-family: "Poppins", sans-serif;
  font-size: 81px;
  line-height: 122.35%;
  font-weight: 500;
}

.subtitulo-hero {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-shrink: 0;
  height: 100px;
  position: relative;
  overflow: hidden;
}

.subtitulo-hero-text {
  color: #1f4680;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  line-height: 122.35%;
  font-weight: 400;
  position: relative;
  width: 100%;
}

.boton-hero {
  background: #13316c;
  border-radius: 65px;
  padding: 9px 148px 9px 148px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 292px;
  box-shadow: 0px 1px 5.8px 5px rgba(19, 49, 108, 0.28);
  overflow: hidden;
  color: #ffffff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 122.35%;
  font-weight: 500;
  height: 60px;
}

.hero-imagen {
  padding: 0px 0px 200px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  height: 894px;
  position: relative;
  overflow: hidden;
}

.hero-imagen-src {
  flex-shrink: 0;
  width: 500px;
  height: 500px;
  position: relative;
  object-fit: cover;
}</style>