function inicio() {
    location.href = "index.html";
}

const contenidoFooter = `
<a href="https://www.facebook.com/" target="_blank"><img src="./img/face-t.png" alt="facebook"> </a>
        <a href="https://www.instagram.com/" target="_blank"><img src="./img/insta-t.png" alt="instagram"></a>
        <a href="https://www.youtube.com/" target="_blank"><img src="./img/youtube-t.png" alt="youtube"></a>
        <a href="https://www.twitter.com/" target="_blank"><img src="./img/twitter-t.png" alt="twitter"></a>
        <a href="https://www.linkedin.com/" target="_blank"><img src="./img/linkedin-t.png" alt="linkedin"></a>
`

document.querySelector('.footer').innerHTML = contenidoFooter;

const contenidoHeader = `
<img onclick="inicio()" src="./img/logo3.png" alt="logo" />
<h1>Club Deportivo y Cultural Barrio Unido</h1>
<nav>
  <ul>
    <li><a href="./actividades.html">Actividades</a></li>
    <li><a href="./mision.html">Misión</a></li>
    <li><a href="./logros.html">Logros</a></li>
    <li><a href="./nosotros.html">Nosotros</a></li>
    <li><a href="./contacto.html">Contacto</a></li>
  </ul>
</nav>
`
document.querySelector('.header').innerHTML = contenidoHeader;