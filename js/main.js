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

/* Carousel de misión */

const imagesCarouselNuestraMision = ['./img/animacion-ajedrez.jpg', './img/animacion-basket.jpg', './img/animacion-canto.jpg', './img/animacion-futbol.jpg', './img/animacion-lectura.jpg', './img/animacion-pingpong.jpg', './img/animacion-yudo.jpg'];
let index = Math.floor(Math.random() * 8);
function carousel() {
  const carouselImg = document.querySelector('#carouselNuestraMision');
  carouselImg.src = imagesCarouselNuestraMision[index];
  index += 1;
  if (index === imagesCarouselNuestraMision.length) {
    index = 0;
  }
}
if (location.pathname.endsWith('mision.html')) {
  setInterval(carousel,2000);
}


/*  Display de Noticias, nav en el Index */

const noticia01 = 'Fútbol: El equipo de fútbol del Club Barrio Unido se consagra campeón del torneo barrial En una emocionante final, el equipo de fútbol del Club Barrio Unido logró imponerse y ganar el título de campeones del torneo barrial. Con un juego sólido y un esfuerzo incansable, los jugadores demostraron su habilidad y determinación en cada partido, llevando la gloria al club.'
const noticia02 = 'Báskelball: El equipo de Báskelball del Club Barrio Unido alcanza el segundo lugar en la liga local En una temporada llena de intensidad y competencia, el equipo de Báskelball del Club Barrio Unido logró llegar a la final, quedando en un destacado segundo lugar. Los jugadores demostraron un gran desempeño en cada partido, dejando en alto el nombre del club.'
const noticia03 = 'Voley: El equipo de Voley del Club Barrio Unido obtiene el tercer puesto en el torneo regional Después de una serie de partidos reñidos, el equipo de Voley del Club Barrio Unido logró asegurar el tercer puesto en el torneo regional. Con su pasión por el deporte y su dedicación en los entrenamientos, los jugadores demostraron su talento y espíritu de equipo.'
const noticia04 = 'Artes marciales: Destacada participación de los practicantes de karate del Club Barrio Unido en torneo interbarrial Los talentosos practicantes de karate del Club Barrio Unido participaron en un torneo interbarrial, obteniendo destacados resultados y demostrando sus habilidades en las diferentes categorías. Su dedicación y entrenamiento constante les permitieron competir al más alto nivel, dejando una gran impresión en el evento.'
const noticia05 = 'Yoga: El Club Barrio Unido organiza talleres de yoga para promover el bienestar en la comunidad Con el objetivo de promover el bienestar físico y mental en la comunidad, el Club Barrio Unido ha organizado una serie de talleres gratuitos de yoga. Estas sesiones brindan a los participantes la oportunidad de relajarse, conectarse consigo mismos y disfrutar de los beneficios de esta milenaria práctica.'
const noticia06 = 'Ajedrez: Jóvenes promesas del ajedrez representarán al Club Barrio Unido en torneo local El Club Barrio Unido seleccionó a sus jóvenes promesas del ajedrez para representar al club en un torneo local. Estos talentosos jugadores han demostrado habilidades estratégicas y un gran potencial en competiciones anteriores. El club les brinda su apoyo y confía en su éxito en el torneo.'
const noticia07 = 'Ping Pong: Torneo amistoso de ping pong fortalece lazos entre clubes barriales El Club Barrio Unido organizó un torneo amistoso de ping pong, reuniendo a jugadores de diferentes clubes barriales. El evento fue una oportunidad para promover la amistad y el espíritu deportivo entre los participantes, quienes compitieron con entusiasmo y disfrutaron de una sana competencia.'
const noticia08 = 'Taller de pintura: Exposición de arte del Club Barrio Unido cautiva a la comunidad El talento artístico de los participantes del taller de pintura del Club Barrio Unido se hizo evidente en una emocionante exposición de arte. La comunidad pudo apreciar las obras únicas y creativas creadas por los artistas locales, quienes encontraron en el club un espacio para desarrollar su pasión por la pintura.'
const noticia09 = 'Teatro: Grupo de teatro del Club Barrio Unido brinda una emotiva actuación El grupo de teatro del Club Barrio Unido sorprendió a la audiencia con una cautivadora actuación en una obra teatral. Los actores demostraron su talento y dedicación, logrando transmitir emociones y contar una historia conmovedora. El club se enorgullece de tener un grupo de teatro comprometido y lleno de talento.'
const noticia10 = 'Lectura y poesía: Club Barrio Unido celebra encuentro literario En un ambiente lleno de letras y poesía, el Club Barrio Unido organizó un encuentro literario para los amantes de la lectura y la poesía. Los participantes compartieron sus creaciones, recitaron poemas y disfrutaron de la magia de las palabras. El evento resaltó la importancia de la literatura y la expresión artística en la comunidad.'
const noticia11 = 'Canto: Noche musical en el Club Barrio Unido La música llenó el ambiente en el Club Barrio Unido durante una noche de talento vocal. Los miembros del coro y otros artistas locales deleitaron a la audiencia con sus voces melódicas y su pasión por el canto. Fue una velada inolvidable llena de armonía y emociones.'
const noticia12 = 'Festival: Club Barrio Unido organiza festival deportivo y cultural El Club Barrio Unido reunió a la comunidad en un emocionante festival deportivo y cultural. Durante el evento, se realizaron competencias deportivas en distintas disciplinas, se presentaron actuaciones artísticas y se disfrutó de comidas típicas. Fue una jornada llena de diversión y camaradería para todos los asistentes.'
const noticia13 = 'Fútbol: Empate emocionante en el clásico barrial entre Club Barrio Unido y su rival histórico El estadio se llenó de pasión y emoción en el clásico barrial entre el Club Barrio Unido y su rival histórico. El partido estuvo lleno de momentos intensos y grandes jugadas, resultando en un empate que reflejó la calidad y el equilibrio entre ambos equipos. Los aficionados disfrutaron de un emocionante encuentro futbolístico.'
const noticia14 = 'Báskelball: Equipo de Báskelball del Club Barrio Unido muestra mejoras significativas en la nueva temporada El equipo de Báskelball del Club Barrio Unido ha demostrado un notable progreso en la nueva temporada. Los jugadores han trabajado arduamente en los entrenamientos, mejorando sus habilidades y estrategias de juego. El club se enorgullece de los logros alcanzados y confía en un desempeño destacado en los próximos partidos.'
const noticia15 = 'Voley: Participación destacada del equipo de Voley del Club Barrio Unido en torneo regional El equipo de Voley del Club Barrio Unido ha dejado una huella impresionante en el reciente torneo regional. A pesar de ser un equipo amateur, lograron destacarse y alcanzar una destacada posición en la competencia. Con una combinación de habilidad, trabajo en equipo y determinación, se enfrentaron a equipos experimentados y demostraron su valía en cada partido. El club se enorgullece de la dedicación y el esfuerzo demostrado por sus jugadores de Voley.'
const noticia16 = 'Artes marciales: Éxito en el campeonato de karate del Club Barrio Unido Los practicantes de karate del Club Barrio Unido brillaron en el campeonato local. Mostrando destreza, técnica y disciplina, se llevaron varios podios en diferentes categorías. Sus habilidades marciales y su espíritu competitivo demostraron el arduo trabajo y la dedicación que han puesto en su entrenamiento.'
const noticia17 = 'Yoga: Clase de yoga al aire libre del Club Barrio Unido atrae a entusiastas del bienestar Una mañana de paz y equilibrio se vivió en el parque del Club Barrio Unido con una clase de yoga al aire libre. Los participantes disfrutaron de una sesión relajante y revitalizante, conectando con su cuerpo y mente en armonía con la naturaleza. El club promueve el bienestar y la salud integral de sus miembros a través de actividades como esta.'
const noticia18 = 'Ajedrez: Jugadores del Club Barrio Unido participan en emocionante torneo de ajedrez Los talentosos jugadores de ajedrez del Club Barrio Unido se enfrentaron a rivales de todo el barrio en un emocionante torneo. A medida que avanzaban las partidas, demostraron su astucia y estrategia en cada movimiento. Aunque no se llevaron el primer lugar, su participación destacada y su amor por el juego los convierte en verdaderos campeones.'
const noticia19 = 'Ping Pong: Torneo amistoso de ping pong en el Club Barrio Unido promueve la camaradería La mesa de ping pong fue el escenario de un torneo amistoso en el Club Barrio Unido. Los participantes compitieron con habilidad y entusiasmo, pero más allá de los resultados, el evento fortaleció los lazos de amistad y camaradería entre los jugadores. El club celebra el espíritu deportivo y la diversión compartida en cada encuentro.'
const noticia20 = 'Actividades culturales: Club Barrio Unido destaca en festival de talentos local El Club Barrio Unido se destacó en el festival de talentos local, donde los miembros del club exhibieron sus habilidades artísticas en diversas disciplinas. Desde bailes folklóricos hasta interpretaciones musicales y actuaciones teatrales, los talentos del club impresionaron al público con su pasión y creatividad. El club se enorgullece de ser un semillero de talento en la comunidad y promover la expresión cultural en todas sus formas.'
const noticia21 = 'Equipo femenino infantil de fútbol del Club Barrio Unido se posiciona en el top 3 del torneo local El talentoso equipo femenino infantil de fútbol del Club Barrio Unido demostró su habilidad y determinación al alcanzar una destacada posición en el torneo barrial. A pesar de su corta edad, estas jóvenes futbolistas mostraron un juego excepcional y dejaron en alto el nombre del club.'
const noticia22 = 'Equipo senior de vóley del Club Barrio Unido gana el campeonato regional La experiencia y destreza del equipo senior de vóley del Club Barrio Unido los llevaron a la cima del campeonato regional. Con una combinación de técnica y trabajo en equipo, se coronaron como los campeones, dejando en claro que el talento no tiene edad.'
const noticia23 = 'Torneo de tenis de mesa en el Club Barrio Unido reúne a los mejores jugadores locales El Club Barrio Unido fue sede de un emocionante torneo de tenis de mesa que atrajo a los mejores jugadores locales. Con intensos enfrentamientos y jugadas espectaculares, el evento demostró la pasión y la habilidad de los amantes de este deporte en el barrio.'
const noticia24 = 'Equipo de Báskelball juvenil del Club Barrio Unido se destaca en la liga escolar Los talentosos jugadores del equipo juvenil de Báskelball del Club Barrio Unido brillaron en la liga escolar, logrando una sólida posición en la clasificación general. Su dedicación y esfuerzo en los entrenamientos se reflejaron en cada partido, dejando claro que el futuro del Báskelball está en buenas manos.'
const noticia25 = 'Participante de taekwondo del Club Barrio Unido gana medalla de plata en el torneo regional Un joven y prometedor participante de taekwondo del Club Barrio Unido se destacó en el torneo regional al ganar una merecida medalla de plata. Su disciplina, técnica y determinación lo llevaron a brillar en el tatami, demostrando que el esfuerzo y la dedicación tienen grandes recompensas.'
const noticia26 = 'Equipo de fútbol sala del Club Barrio Unido se clasifica para el torneo nacional El equipo de fútbol sala del Club Barrio Unido logró una destacada actuación en el torneo regional y consiguió su pase al torneo nacional. Los jugadores mostraron un juego rápido y habilidades excepcionales, dejando en claro que el fútbol sala es una de las especialidades del club.'
const noticia27 = 'Destacada participación del Club Barrio Unido en el torneo de natación local Los nadadores del Club Barrio Unido se lanzaron al agua con determinación y valentía en el torneo de natación local. A pesar de la dura competencia, varios miembros del club lograron podios en diferentes estilos y distancias, destacando el esfuerzo y la técnica que han desarrollado en sus entrenamientos.'
const noticia28 = 'Equipo de béisbol del Club Barrio Unido muestra su potencial en amistoso contraun equipo de béisbol de renombre. A pesar de no conseguir la victoria, el Club Barrio Unido dejó una excelente impresión gracias a su juego táctico y su habilidad para conectar batazos sólidos. Los jugadores demostraron su compromiso y pasión por este deporte, dejando claro que están listos para enfrentar cualquier desafío.'
const noticia29 = 'Equipo de hockey sobre césped del Club Barrio Unido participa en torneo interclubes El equipo de hockey sobre césped del Club Barrio Unido tuvo una destacada participación en el torneo interclubes de la región. Aunque no lograron alcanzar el primer puesto, sus habilidades técnicas y su espíritu de equipo les permitieron competir de igual a igual con otros clubes de renombre, dejando en alto el nombre de la institución.'
const noticia30 = 'Destacado desempeño del corredor de atletismo del Club Barrio Unido en la carrera local Un talentoso corredor del Club Barrio Unido se destacó en una emocionante carrera local. A pesar de la dura competencia, logró mantener un ritmo constante y cruzar la meta en una excelente posición. Su dedicación y entrenamiento constante se vieron recompensados, inspirando a otros miembros del club a seguir sus pasos.'
const noticia31 = 'Equipo de ajedrez del Club Barrio Unido se destaca en el torneo por equipos El equipo de ajedrez del Club Barrio Unido demostró su destreza estratégica en el torneo por equipos de la ciudad. Con movimientos calculados y jugadas sorprendentes, lograron una destacada posición en la clasificación general, dejando claro que el ajedrez es una disciplina fuerte en el club.'
const noticia32 = 'Participante de gimnasia artística del Club Barrio Unido sorprende con su rutina en la competencia regional Una talentosa gimnasta del Club Barrio Unido dejó a todos boquiabiertos con su impresionante rutina en la competencia regional. Sus acrobacias, saltos y giros perfectamente ejecutados le valieron una gran ovación del público y el reconocimiento de los jueces, consolidando su lugar como una de las promesas de la gimnasia artística en el club.'
const noticia33 = 'Equipo de fútbol femenino del Club Barrio Unido se consolida como referente en la liga local El equipo de fútbol femenino del Club Barrio Unido continúa su ascenso en la liga local, consolidándose como un referente en la categoría. Con un juego dinámico, habilidoso y una gran cohesión de equipo, han logrado una serie de victorias que los posicionan entre los mejores, inspirando a más chicas a unirse al club.'
const noticia34 = 'Participante de karate del Club Barrio Unido obtiene el cinturón negro tras años de dedicación Después de años de entrenamiento y dedicación en el arte marcial del karate, un talentoso participante del Club Barrio Unido finalmente alcanzó el tan ansiado cinturón negro. Su perseverancia, disciplina y constancia en los entrenamientos le permitieron superar cada desafío y convertirse en un verdadero ejemplo para otros miembros del club.'
const noticia35 = 'Equipo de natación sincronizada del Club Barrio Unido brilla en una exhibición acuática local. El talentoso equipo de natación sincronizada del Club Barrio Unido dejó al público sin aliento con sus elegantes movimientos y perfecta sincronización. Sus rutinas acuáticas, acompañadas de música cautivadora, capturaron la atención de todos los presentes y les valieron una ovación de pie al finalizar su presentación.'
const noticia36 = 'Equipo de rugby del Club Barrio Unido deja todo en el campo en emocionante encuentro amistoso El equipo de rugby del Club Barrio Unido demostró su valentía y espíritu de lucha en un emocionante encuentro amistoso contra un equipo local. A pesar de la derrota, los jugadores dejaron todo en el campo, mostrando una defensa sólida y ataques contundentes. Su compromiso con el juego limpio y la camaradería entre los equipos resaltaron los valores del deporte.'
const noticia37 = 'Participante de gimnasia rítmica del Club Barrio Unido deslumbra con su gracia y destreza Una talentosa gimnasta rítmica del Club Barrio Unido deslumbró al público con su gracia y destreza en una competencia regional. Sus elegantes movimientos, combinados con la manipulación de diferentes implementos, cautivaron la atención de los espectadores y le valieron una destacada posición en la clasificación general.'
const noticia38 = 'Equipo de balonmano del Club Barrio Unido participa en emocionante torneo interbarrial El equipo de balonmano del Club Barrio Unido se enfrentó a otros equipos locales en un emocionante torneo interbarrial. Aunque no lograron alcanzar el podio, su espíritu de lucha y trabajo en equipo fueron reconocidos por los espectadores y sus adversarios. Su participación dejó en claro que el balonmano tiene un lugar especial en el club.'
const noticia39 = 'Participante de artes marciales del Club Barrio Unido obtiene medalla de bronce en torneo estatal Un dedicado participante de artes marciales del Club Barrio Unido se destacó en un desafiante torneo estatal al obtener una merecida medalla de bronce. Su habilidad técnica, mentalidad competitiva y constante entrenamiento le permitieron enfrentar a oponentes de alto nivel, dejando en alto el nombre del club en la disciplina.'
const noticia40 = 'Equipo de vóley mixto del Club Barrio Unido disfruta de un amistoso encuentro con otro club de la ciudad El equipo de vóley mixto del Club Barrio Unido se reunió con entusiasmo para un amistoso encuentro con otro club de la ciudad. A pesar de no haber ganado, los jugadores disfrutaron de la experiencia de jugar juntos, fortaleciendo los lazos de amistad y la pasión por el vóley. El espíritu deportivo y la camaradería prevalecieron durante todo el encuentro.'

const noticias = [noticia01, noticia02, noticia03, noticia04, noticia05, noticia06, noticia07, noticia08, noticia09, noticia10, noticia11, noticia12, noticia13, noticia14, noticia15, noticia16, noticia17, noticia18, noticia19, noticia20, noticia21, noticia22, noticia23, noticia24, noticia25, noticia26, noticia27, noticia28, noticia29, noticia30, noticia31, noticia32, noticia33, noticia34, noticia35, noticia36, noticia37, noticia38, noticia39, noticia40];
const fotos = ['./img/animacion-ajedrez.jpg', './img/animacion-basket.jpg', './img/animacion-canto.jpg', './img/animacion-futbol.jpg', './img/animacion-lectura.jpg', './img/animacion-pingpong.jpg', './img/animacion-yudo.jpg','./img/animacion-ajedrez.jpg', './img/animacion-basket.jpg', './img/animacion-canto.jpg', './img/animacion-futbol.jpg', './img/animacion-lectura.jpg', './img/animacion-pingpong.jpg', './img/animacion-yudo.jpg','./img/animacion-ajedrez.jpg', './img/animacion-basket.jpg', './img/animacion-canto.jpg', './img/animacion-futbol.jpg', './img/animacion-lectura.jpg', './img/animacion-pingpong.jpg', './img/animacion-yudo.jpg','./img/animacion-ajedrez.jpg', './img/animacion-basket.jpg', './img/animacion-canto.jpg', './img/animacion-futbol.jpg', './img/animacion-lectura.jpg', './img/animacion-pingpong.jpg', './img/animacion-yudo.jpg','./img/animacion-ajedrez.jpg', './img/animacion-basket.jpg', './img/animacion-canto.jpg', './img/animacion-futbol.jpg', './img/animacion-lectura.jpg', './img/animacion-pingpong.jpg', './img/animacion-yudo.jpg']

let indiceNoticiaActual = 0;

function mostrarNoticiaActual() {
  const desplazaTexto = document.getElementById('textoNoticias');
  const desplazaImagen = document.getElementById('imagenNoticias');

  desplazaTexto.textContent = noticias[indiceNoticiaActual];
  desplazaImagen.src = fotos[indiceNoticiaActual];
}

function desplazarNoticia() {
  indiceNoticiaActual++;

  if (indiceNoticiaActual === noticias.length) {
    indiceNoticiaActual = 0;
  }

  mostrarNoticiaActual();
}

mostrarNoticiaActual();
setInterval(desplazarNoticia, 3000);
