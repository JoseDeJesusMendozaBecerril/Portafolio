import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public icons:any[]=[
    "assets/img/herramientas/html.png",
    "assets/img/herramientas/javascript.png",
    "assets/img/herramientas/typescript.png",
    "assets/img/herramientas/angular.png",
    "assets/img/herramientas/spring.png",
    "assets/img/herramientas/java.png",
    "assets/img/herramientas/mysql.png",
    "assets/img/facebook.png",
    "assets/img/github.png",
    "assets/img/gmail.png",
    "assets/img/perfil.png",
    "assets/img/whatsapp.png",
    "assets/img/perfil.jpg"
  ]

  private projects:any[]=
    [
        {
          id: 0,
          nombre: "SPA Super Heroes",
          desc:`Pagina Web Diseñada con Angular 10, en la cual se cargan localmente informacion de superheroes en componentes
                tipo tarjeta de bootstrap, con la finalidad de mostrar informacion de los mismos, se crea un buscador y multiples
                componentes, al dar click en cualquier superheroe se mostrara una pantalla de detalle, esta aplicacion es tipo SPA.
                en el caso de que no se encuentre un superheroe se manda un mensaje al usuario de que no fue encontrado.
                Esta aplicacion se realizo para practicar la creacion de componentes de Angular, asi como el uso de servicios,rutas
                y directivas  `,
          imgs: [
            "assets/img/projects/superheroes/portada.jpg",
            "assets/img/projects/superheroes/home.png",
            "assets/img/projects/superheroes/superheroes.jpg",
            "assets/img/projects/superheroes/detalles.png",
            "assets/img/projects/superheroes/busqueda1.png",
            "assets/img/projects/superheroes/busqueda2.png",
            "assets/img/projects/superheroes/acerca.png", 
          ],
          herramientas:[
            "Angular 10",
            "Bootstrap",
            "HTML5",
            "CSS"
          ],
          url:"https://www.google.com"
        },

        {
          id:1,
          nombre: "Spotiapp",
          desc:`Pagina web creada en Angular 10 utilizando la API que provee el servicio de spotify para reproducir contenido
          de Streaming, en la cual se obtienen los albums mas populares del momento en la pagina principal, y cuenta con un
          apartado para buscar a los artistas , como tambien un reproductor de musica con el cual puedes disfrutar de este contenido
          ya sea que cuentes con una cuenta Premium o con la version de Prueba. `,
          imgs: [
            "assets/img/projects/spotiapp/portada.jpg",
            "assets/img/projects/spotiapp/principal.png",
            "assets/img/projects/spotiapp/busqueda.png",
            "assets/img/projects/spotiapp/reproductor1.png",
            "assets/img/projects/spotiapp/reproductor2.png" 
          ],
          herramientas:[
            "Angular 10",
            "Bootstrap",
            "HTML5",
            "CSS"
          ],
          url:"https://www.google.com"
        },
        {
          id:2,
          nombre: "Login Auth0",
          desc:`Login creado con herramienta Auth0, con el cual el usuario puede loguearse en la pagina, para ver paginas de ejemplo
                que deben estar protegidas, el logueo de los usuarios se puede realizar mediante las propias credenciales de la plataforma
                o con cuentas de google, facebook etc. `,
          imgs: [
            "assets/img/projects/Auth0/portada.png",
            "assets/img/projects/Auth0/home.png",
            "assets/img/projects/Auth0/protegida.png" 
          ],
          herramientas:[
            "Angular 10",
            "Bootstrap",
            "HTML5",
            "CSS",
            "Auth0 API"
          ],
          url:"https://www.google.com"
        },
        {
          id:3,
          nombre: "LoginApp",
          desc:`Login Personalizado utilizando las propias credenciales de la plataforma, realizada con Angular 10, cuenta con
          un formulario de registro para nuevos usuarios y otro para ingresar los datos y entrar a la plataforma. Asi como
          un ejemplo de Home o pagina protegida que no se puede visualizar a menos que se haya registrado y logueado correctamente,
          se realizo con el uso de Identity Toolkit Api de Google `,
          imgs: [
            "assets/img/projects/AuthApp/registro.png",
            "assets/img/projects/AuthApp/home.png",
            "assets/img/projects/AuthApp/ingresar.png" 
          ],
          herramientas:[
            "Angular 10",
            "Bootstrap",
            "HTML5",
            "CSS",
            "API Identity Toolkit Google"
          ],
          url:"https://www.google.com"
        },
        {
          id:4,
          nombre: "Registros Firebase",
          desc:`Pagina web con operaciones CRUD directamente a Firebase, que guarda registros de tipo superheroes, eliminar, modificar y visualizar,
                cuenta con formularios para el registro de los mismos.
                Se realizo con Angular 10, y usando la herramienta de Firebase Cloud Storage.
          `,
          imgs: [
            "assets/img/projects/crudHeroes/listHeroes.png",
            "assets/img/projects/crudHeroes/agregar.png",
            "assets/img/projects/crudHeroes/eliminado.png",
            "assets/img/projects/crudHeroes/eliminar.png" ,
            "assets/img/projects/crudHeroes/nuevo.png" 
          ],
          herramientas:[
            "Angular 10",
            "Bootstrap",
            "HTML5",
            "CSS"
          ],
          url:"https://www.google.com"
        },
        {
          id:5,
          nombre: "Peliculas App",
          desc:`Pagina web donde se hace uso de la API Movie DB con la cual se obtene informacion sobre Peliculas en Cines a lo
          largo del tiempo, cuenta con varias pantallas, la primera es la pagina principal donde se muestra un collage tipo 
          pinterest y se rellena con imagenes de varias peliculas, posteriormente se crea tambien un buscador para obtener
          informacion sobre cualquiera de las peliculas que existen, esta informacion se muestra en la pantalla de detalles.
          Esta informacion se refiere a una sinopsis de la pelicula, una calificacion de la misma y la imagen de la portada.
          Ets aplica.
          `,
          imgs: [
            "assets/img/projects/peliculasApp/home2.png",
            "assets/img/projects/peliculasApp/home1.png",
            "assets/img/projects/peliculasApp/home3.png",
            "assets/img/projects/peliculasApp/buscar2.png",
            "assets/img/projects/peliculasApp/detalles.png",
            "assets/img/projects/peliculasApp/detalles2.png",
            "assets/img/projects/peliculasApp/buscar.png"
            
          ],
          herramientas:[
            "Angular 10",
            "Bootstrap",
            "HTML5",
            "CSS"
          ],
          url:"https://www.google.com"
        },
        {
          id:6,
          nombre: "Subida Imagenes Fire Storage",
          desc:`Pagina web que permite subir imagenes a la base de datos en Firebase y con la cual, se pueden visualizar tambien
          recuperando el contenido de la plataforma y mostrandolas en formato de imagenes pinterest collage.
          `,
          imgs: [
            "assets/img/projects/imagenesFirebase/fotos2.png",
            "assets/img/projects/imagenesFirebase/fotos1.png",
            "assets/img/projects/imagenesFirebase/subida1.png",
            "assets/img/projects/imagenesFirebase/cargar1.png",
            
          ],
          herramientas:[
            "Angular 10",
            "Bootstrap",
            "HTML5",
            "CSS"
          ],
          url:"https://www.google.com"
        },
        {
          id:7,
          nombre: "Graficos Dinamicos",
          desc:`Pagina web donde se muestran la utilización de graficos dinamicos creados con la herramienta NGX CHARTS, se utiliza 
          data local para modificar la forma de las graficas y con las opciones que provee la herramienta se pueden manipular dinamicamente
          ya sea obteniendo los datos en tiempo real desde una base de datos.
          `,
          imgs: [
            "assets/img/projects/graficos/graficos1.png",
            "assets/img/projects/graficos/graficos2.png",
            "assets/img/projects/graficos/graficos3.png"
            
          ],
          herramientas:[
            "Ngx chart",
            "Angular 10",
            "Bootstrap",
            "HTML5",
            "CSS"
          ],
          url:"https://www.google.com"
        }
    ];


  constructor() { }


  getProjects(){
    return this.projects;
  }

  getProject(id:string){
    return this.projects[id];

  }

  searchProjects(termino:string):any[]{
      let projectsArr:any[] = [];
  
      termino = termino.toLowerCase();
      
      for (let i=0; i <this.projects.length;i++ ){ //los q coincidan
          let project = this.projects[i];
  
          let nombre = project.nombre.toLowerCase();
          if(nombre.indexOf(termino) >= 0){
            project.idx =i;
            projectsArr.push(project);
          }
      }
    return projectsArr;
    }
  }

