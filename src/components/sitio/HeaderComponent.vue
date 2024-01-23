<template>
    <div class="header">
        <div class="logo">
            <img class="LogoImagen" src="./../../assets/sitio/QuickPayLogo1.png" />
        </div>
        <a href="#seccion-quienes-somos" class="quienes-somos-text">Quienes somos</a>
        <a href="#seccion-entidades" class="entidades-text">Entidades</a>
        <!--<a href="#seccion-contactos" class="contactos-text">Contáctanos</a>-->
        <!--<button class="registrate-button">Regístrate</button>-->
    </div>
</template>

<style scoped>
a {


    text-decoration: none;

}

.header {
    background: #ffffff;
    padding: 0px 0px 0px 8px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
    height: 111px;
    min-width: 360px;
    position: relative;
    overflow: hidden;
}

.logo {
    padding: 24px 0px 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex-shrink: 0;
    width: 427px;
    height: 104px;
    position: relative;
}

.LogoImagen {
    flex-shrink: 0;
    height: 48px;
    position: relative;
    object-fit: cover;
}

.quienes-somos-text,
.entidades-text,
.contactos-text,
.registrate-button {
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    color: #13316c;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 23px;
    font-weight: 400;
    text-decoration: none;
}

.quienes-somos-text,
.entidades-text,
.contactos-text {
    width: 252px;
    height: 104px;
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.3s ease;
}

.registrate-button {
    background: #13316c;
    border-radius: 65px;
    width: 224px;
    height: 60px;
    color: #ffffff;
    text-align: center;
    font-size: 23px;
    font-weight: 600;
    transition: background-color 0.3s ease;
}

.quienes-somos-text:hover,
.entidades-text:hover,
.contactos-text:hover {
    border-bottom-color: #13316c;
    cursor: pointer;
}

.registrate-button:hover {
    background-color: #d19411;
    cursor: pointer;
}
</style>
  
