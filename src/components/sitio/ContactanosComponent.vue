<template>
    <div id="seccion-contactos">
  
        <div class="mensaje-usuario">
            <div class="titulo-contactanos cont-ctanos2">CONTÁCTANOS</div>

            <div class="nombre-contactanos">
                <div class="nombre">Nombre:</div>
                <input type="text" id="nombre" name="nombre">
            </div>

            <div class="correo-contactanos">
                <div class="correo">Correo:</div>
                <input type="text" id="correo" name="correo">
            </div>

            <div class="asunto-contactanos">
                <div class="asunto">Asunto:</div>
                <input type="text" id="asunto" name="asunto">
            </div>

            <div class="mensaje-contactanos">
                <div class="mensaje">Mensaje:</div>
                <input type="text" id="mensaje" name="mensaje">
            </div>
        </div>

        <div class="datos-empresa">
            <div class="ubicacion">
                <i class="fas fa-location-dot"></i>
                <div class="ubicaci-n">Ubicación</div>
            </div>
            <div class="ubicaci-n2">La Paz, Bolivia</div>

            <div class="correo-empresa">
                <i class="fas fa-envelope"></i>
                <div class="ubicaci-n">Correo</div>
            </div>
            <div class="correo-empresa2">ventas@quickpay.com.bo</div>

            <div class="ubicacion-empresa">
                <i class="fas fa-phone"></i>
                <div class="ubicaci-n">Teléfono</div>
            </div>
            <div class="correo-empresa3">+591 12345678</div>
        </div>

    </div>
</template>
<style scoped>
i {
  flex-shrink: 0;
  font-size: 30px;
  color: #1f4680;
  object-fit: cover;
}

input[type="text"] {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 300px; 
}
.contactanos {
    background: #e4ebeb;
    padding: 48px 29px 48px 29px;
    display: flex;
    flex-direction: row;
    gap: 72px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 100%;
    height: auto;
    min-width: 360px;
    position: relative;
    overflow: hidden;
  }
  .contactanos-container {
    background: rgba(183, 204, 219, 0.4);
    border-radius: 65px;
    padding: 22px 56px 67px 80px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 70%;
    height: 70%;
    min-width: 360px;
    position: relative;
    box-shadow: 0px 13px 16px 13px rgba(19, 49, 108, 0.25);
    overflow: hidden;
  }
  .mensaje-usuario {
    padding: 0px 0px 63px 0px;
    display: flex;
    flex-direction: row;
    gap: 21px;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 721px;
    height: 876px;
    position: relative;
    overflow: hidden;
  }
  .titulo-contactanos {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 721px;
    position: relative;
    overflow: hidden;
  }
  .cont-ctanos2 {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 64px;
    font-weight: 700;
    position: relative;
    width: 504px;
    height: 103px;
  }
  .nombre-contactanos {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 721px;
    position: relative;
    overflow: hidden;
  }
  .nombre {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 700;
    position: relative;
  }
  
  .correo-contactanos {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 721px;
    position: relative;
    overflow: hidden;
  }
  .correo {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 700;
    position: relative;
  }
 
  .asunto-contactanos {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 721px;
    position: relative;
    overflow: hidden;
  }
  .asunto {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 700;
    position: relative;
  }

  .mensaje-contactanos {
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 721px;
    position: relative;
    overflow: hidden;
  }
  .mensaje {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 700;
    position: relative;
  }

  #mensaje {
    padding: 15px;
    font-size: 18px;
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  

  .datos-empresa {
    padding: 130px 17px 196px 17px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-shrink: 0;
    width: 465px;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .ubicacion {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 351px;
    position: relative;
    overflow: hidden;
  }
  .image-6 {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    position: relative;
    object-fit: cover;
  }
  .ubicaci-n {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 600;
    position: relative;
  }
  .ubicaci-n2 {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 300;
    position: relative;
  }
  .correo-empresa {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 351px;
    position: relative;
    overflow: hidden;
  }
  .correo-empresa2 {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 300;
    text-decoration: underline;
    position: relative;
  }
  .ubicacion-empresa {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;
    width: 351px;
    position: relative;
    overflow: hidden;
  }
  .correo-empresa3 {
    color: #1f4680;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 300;
    position: relative;
  }
</style>