MANUAL PARA DESPLEGAR El PROYECTO 
 
 
•	Primer Paso: Instalar Composer 
La instalación de composer es sencillo solo basta seguir las instrucciones del instalador. 
  
 
•	Segundo Paso: Instalar Laragon 
Laragon es suite de desarrollo para PHP, igual que el paso anterior solo basta seguir los pasos del instalador.   
•	Tercer Paso: Iniciar todo 
Iniciar todos los procesos del servidor local, solo dando clic en el botón Iniciar Todo. 
 
 
•	Cuarto Paso: Abrir motor de base de datos 
Usamos el software determinado de laragon (HeidiSQL), solo dando clic en el botón de Base de Datos, sin modificar nada damos en Abrir.  
 
 
•	Quinto Paso: Crear Base de datos 
Damos clic derecho en el administrador de base de datos, crear nuevo y luego base de datos, nombramos la base de datos adminalumns, y seleccionamos en collation latin1_spanish_ci.
    
 
•	Sexto Paso: Abrir la terminal 
En la terminal vamos ha ejecutar algunos comandos para el funcionamiento de la página web, solo dando clic en el botón de Terminal. 
 
 
•	 Septimo Paso: Copiar Carpeta del código 
Nos dirigimos a la carpeta C:\laragon\www. , desde la terminal y clonamos el repositorio de GitHub con el siguiente link https://github.com/LoquilloDuvan/administradorAlumnos.git.
 
 
•	Octavo Paso: Descargar e instalar depencias 
Se necesita descargar e instalar dependencias de composer, nos dirigimos a la carpeta del proyecto con el comando cd administradorAlumnos, y enseguida el comando composer install y npm install, este proceso puede tardar un poco (dependiendo del internet).  
 

•	Noveno Paso: Configurar .env
Vamos a copiar el contenido del archivo .env.example en un archivo que crearemos como .env, con esto vamos a cambiar el acceso a nuestra base de datos ya creada.


•	Decimo Paso: Correr migraciones 
Ejecutamos el comando php artisan migrate:fresh –seed para correr las migraciones, que son las encargadas de crear las tablas en la base de datos automaticamente. 
 
 
•	Onceavo Paso: Iniciar proyecto 
Damos clic derecho, en www y por último en administradorAlumnos, se nos abrirá la pagina en nuestro navegador y listo para realizar pruebas. 
