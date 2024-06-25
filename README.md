annotation-tool
Este proyecto es una herramienta de anotación basada en React, diseñada para ofrecer una experiencia sin interrupciones en la gestión de anotaciones. Incluye varias bibliotecas y herramientas para mejorar el desarrollo y la experiencia del usuario.

Tabla de Contenidos
Instalación
Scripts Disponibles
Dependencias
Dependencias de Desarrollo
Configuración
Uso
Desarrollo
Construcción
Pruebas
Eject
Licencia
Instalación
Para comenzar con este proyecto, clona el repositorio e instala las dependencias:

bash
Copiar código
git clone https://github.com/yourusername/annotation-tool.git
cd annotation-tool
npm install
Scripts Disponibles
En el directorio del proyecto, puedes ejecutar los siguientes comandos:

npm start
Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verlo en tu navegador.

La página se recargará cuando hagas cambios.
También puedes ver cualquier error de lint en la consola.

npm build
Construye la aplicación para producción en la carpeta build.
Agrupa correctamente React en modo de producción y optimiza la construcción para el mejor rendimiento.

La construcción está minificada y los nombres de los archivos incluyen hashes.
¡Tu aplicación está lista para ser desplegada!

npm test
Lanza el corredor de pruebas en modo interactivo.
Consulta la sección sobre ejecutar pruebas para más información.

npm eject
Nota: esta es una operación irreversible. ¡Una vez que ejectas, no puedes volver atrás!

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes eject en cualquier momento. Este comando eliminará la dependencia única de construcción de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto eject seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos. En este punto, estás por tu cuenta.

Dependencias
@testing-library/jest-dom: ^5.16.4
@testing-library/react: ^13.2.0
@testing-library/user-event: ^13.5.0
react: ^18.1.0
react-dom: ^18.1.0
react-icons: ^4.3.1
react-router-dom: ^6.3.0
react-scripts: 5.0.1
web-vitals: ^2.1.4
Dependencias de Desarrollo
autoprefixer: ^10.4.7
postcss: ^8.4.13
tailwindcss: ^3.0.24
Configuración
El proyecto utiliza ESLint para linting, con configuraciones extendidas de react-app y react-app/jest. El campo browserslist especifica las versiones de navegadores soportados tanto para los entornos de producción como de desarrollo.

Uso
Para utilizar esta herramienta de anotación, sigue estos pasos:

Instalar Dependencias: Asegúrate de que todas las dependencias estén instaladas ejecutando npm install.
Iniciar el Servidor de Desarrollo: Ejecuta npm start para lanzar el servidor de desarrollo.
Construir para Producción: Ejecuta npm build para crear una construcción de producción.
Ejecutar Pruebas: Utiliza npm test para ejecutar las pruebas.
Desarrollo
Durante el desarrollo, utiliza las siguientes características:

Recarga en Caliente de React: El servidor de desarrollo soporta recarga en caliente, por lo que tus cambios se reflejarán inmediatamente en el navegador.
TailwindCSS: El proyecto está configurado con TailwindCSS para el estilo. Personaliza tus estilos en el archivo tailwind.config.js y añade clases CSS personalizadas en los archivos de componentes.
ESLint: Analiza tu código en busca de errores y adhierete a los estándares de codificación utilizando ESLint.
Construcción
Para crear una construcción de producción, ejecuta:

bash
Copiar código
npm build
Esto generará archivos optimizados y minificados en el directorio build, listos para ser desplegados.

Pruebas
Ejecuta el siguiente comando para ejecutar el conjunto de pruebas:

bash
Copiar código
npm test
Esto lanzará el corredor de pruebas en modo interactivo. Utiliza esto para asegurarte de que tus componentes funcionen como se espera.

Eject
Si necesitas personalizar la configuración, puedes ejectar el proyecto ejecutando:

bash
Copiar código
npm eject
Nota: Ejectar es una operación irreversible y no puede deshacerse.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
