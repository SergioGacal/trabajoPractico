Proyecto realizado por el equipo 15 del curso FullStack Python comisión 23020

Integrantes:

Sergio Gacal. DNI 23.407.178 gacalsergio@gmail.com

Matias Ferraro

Nahuel Dimuro

Camila


Mayo 2023.
Sitio realizado colaborativamente.

Es la página de un club de barrio "Club Social y Deportiva Barrio Unido". El mismo no existe, la información fue inventada, se trata de un proyecto ficticio y las imágenes y datos utilizados son solo para fines ilustrativos.
Las imágenes se descargaron de https://unsplash.com/ donde se indica que pueden ser utilizadas retribuyendo derechos de autor que corresponden a: https://unsplash.com/es/@judesaf y a https://unsplash.com/es/@create4eyes

Se incluyó un formulario de contacto que cuenta con validaciones JS en los campos definidos como obligatorios. 

Se utilizó un frame con un video de youtube, en el footer se incluyeron íconos descargados de Flaticon y 4 tipos distintos de fuentes de Google Fonts.

El sitio cuenta con 6 páginas 100% responsivas en la mayoría de los disposivos en los que se probaron.

Al navegar el sitio se puede acceder al índex haciendo clic en el logo, en el nombre del club  como también en el menú "Inicio"

Cuenta una animación @keyframes: en nosotros se incluyó un botón animado "Asociarme" que también tiene programación JS. 
También se utilizó en algunas oportunidades el efecto :hover en menúes y botones.

El maquetado se realizó con Flexbox.

Se utlizó API de https://randomuser.me/api. 

No se utlizaron Bootstrap u otros Frameworks de CSS.

El situo está disponible en GitHub desde donde fue desarrollado colaborativamente. Asimismo puede ser navegado desde Netlify.


Navegación del sitio. Aspectos más importantes. Asimismo mencionamos los conocimientos que aplicamos.

- Comunes a todas las páginas: header y footer fueron incorpoarados utilizando JS. El header cuenta con un logo creado con la versión gratuita de canva.com 
- index.html: Cuenta con ímagenes del club y su historia.
- noticias.html: Cada 5 segundos van cambiando las últimas noticias del club. Estas abarcan distintos aspectos: deportivos, sociales y culturales. Para ellos se generó la función mostrarNoticiaActual() mediante JS.
- mision.html: Cuenta la misión del club y tiene un iframe de youtube con un video realizado con imágenes de actividades realizadas en el club
- logros.html: tiene distintas cards que muestran imágenes e historias de los logros del club.
- nosotros.html: Es una página de reconocimiento a los miembros del club. Se explota la API de randomuser.me/API. Se realiza una consulta y se piden 10 resultados. Se agregó la opción de país España para que los nombres nos resulten familiares. Se muestra para cada uno una tarjeta con el nombre, la primer letra del apellido, la edad (entre paréntesis), el año desde el que es socio del club. Asimismo en función de la antiguedad en el club y a la edad del socio se inventaron categorías como "honorario", "activo", "Vitalicio" o "Juvenil". Además de mostrar la categoría en la tarjeta se muestra esta con distintos colores. Esta página también tiene un enlace al formulario ofreciendo "asociarse".
- contacto.html: cuenta con un formulario de registro. Se incluyeron validaciones con JS para el ingreso de nombre, mail, teléfono y motivo de la consulta. Al presionar el botón "enviar formulario" genea un "alert" con el resultado exitoso o con mensaje de error.








