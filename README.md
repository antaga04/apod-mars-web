# Web App using NASA's APIs

En este repositorio encontrarás el código fuente de una aplicación web desarrollada con Vite y React que utiliza las APIs oficiales de la NASA para consultar la fotografía astronómica del día, así como imágenes del Mars Rover.

## Estructura

La aplicación consta las siguientes partes:

- **Home:** En la página principal, encontrarás una introducción a la web así como dos targetas que enlazan a las páginas dinámicas para ver las imágenes.

- **Imagen astronómica del día (APOD):** Aquí encontrarás la imagen astronómica del día proporcionada por la NASA, junto con su título, descripción y detalles de la fecha y el copyright.

- **Fotos de los Rovers de Marte (MRP):** Aquí verás una galería de imágenes obtenidas por los Rovers de la NASA en Marte.

- **About:** En esta página se explica el contenido de la web y doy más información sobre cómo contactarme. También doy crédito a lo elementos desarrollados por otras personas que uso en el proyecto.

## Características

- **Cambio de API:** La aplicación te permite ver información de las APIs APOD (Astronomic Picture of the Day) y Mars Rover Photos.

- **Selección de fecha:** Puedes utilizar un input de tipo fecha para seleccionar una fecha específica y ver la imagen correspondiente a esa fecha. Podrás escoger una fecha disponible; como máximo la fecha actual o la de la última imagen recogida y como mínimo la de comienzo.

- **Botón de fecha aleatoria:** En ambas páginas encontrás un botón '🔀 Date' que escogerá una fecha al azar y te presentará su información.

- **Selección del Mars Rover** En la página MRP también tendrás la opción de seleccionar el Mars Rover del cual ver las imágenes. Los Rovers existentes son: Curiosity, Spirit y Opportunity.

- Se presenta un loading mientras carga el contenido de la API.

- Presenta un diseño moderno y acorde a la temática, con un botón para cambiar el modo (claro u oscuro).

- La aplicación está desplegada en Netlify y se puede acceder fácilmente.

## Configuración del proyecto

Si te interesa modificar este proyecto, ya sea para practicar o hacer un pull request con cambios o sugerencias, asegúrate de seguir estos pasos:

1. Genera una API Key en la [página oficial de NASA Open APIs](https://api.nasa.gov/). Esta clave será necesaria para realizar las peticiones a la API de la NASA.

2. Clona este repositorio a tu computadora local usando el siguiente comando:

```bash
git clone git@github.com:antaga04/apod-mars-web.git
```

3. Accede al directorio del proyecto:

```bash
cd apod-mars-web
```

4. Crea un archivo `.env` en el directorio raíz del proyecto y agrega tu API Key de la NASA de la siguiente manera:

```env
VITE_PUBLIC_NASA_API_KEY=TU_API_KEY
```

5. Instala las dependencias del proyecto ejecutando:

```bash
npm install
```

6. Una vez que hayas configurado el proyecto, puedes iniciar la aplicación localmente utilizando el siguiente comando:

```bash
npm run dev
```

La aplicación estará disponible en localhost en tu navegador.
