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
