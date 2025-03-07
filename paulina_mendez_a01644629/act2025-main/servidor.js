//Escribe un comentario explicando para qué sirve http
import http from 'http';
//http nos sirve para crear y gestionar servidores web, permitiendo la comunicación entre el navegador y el servidor
//Escribe un comentario explicando para qué sirve fs
import fs from 'fs';
//Nos sirve para leer y modificar archivos y directorios del sistema

    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       //Agrega un enlace en bienvenida a la página de escuelas 
       //Agrega un enlace en bienvenida a la página de donantes 
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 
           //El 500 significa que ocurrió un error interno en el servidor 
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        //El 200 significa que el servidor esta funcionando correctamente y la solicitud se procesó bien
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de las escuelas
    function getEscuelas(req, res) {
        //Esto representa un objeto JSON de una escuela
        //Agrega otra escuela
        const escuelas = {
          "escuelas": [
          {
            "nombre": "Escuela Benito Juárez",
            "direccion": "Av. Principal 123, Ciudad de México",
          }, 
          {
            "nombre": "Escuela Primaria Vicente Guerrero",
            "direccion": "San Juan de Ocotán, Jalisco"
          }
        ]
      };  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      /*stringify convierte un objeto de js a una cadena de texto
      En este caso se debe de usar porque se debe enviar la respuesta como un string de JSON*/
      res.end(JSON.stringify(escuelas));
    }
    //Esta función deberá enviar un json con los datos de las donantes
    function getDonantes(req, res) {
        const donantes= [
        {
            "nombre": "Tecnológico de Monterrey",
            "direccion":"Av. Eugenio Garza Sada 2501, Monterrey, Nuevo León"
        },
        {
            "nombre": "Mexicanos, Primero Jalisco",
            "direccion":"Av. Nogaless 742, Guadalajara"
        }];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(donantes));
    }


     //Agrega un enlace a bienvenida y a donantes en escuelas.html 
    function mostrarEscuelas(req, res) {
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      //Agrega un enlace a bienvenida y a escuelas en donantes.html
      function mostrarDonantes(req, res) {
        //Construye una página básica donantes.html
        fs.readFile('donantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      function mostrarEquipo(req, res) {
        fs.readFile('equipo.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      function mostrarOpinion(req, res) {
        fs.readFile('opinion.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Te perdiste en los backrooms.');
    }

    //incluye el enlace a la documentación de createServer
    //https://nodejs.org/api/http.html#class-httpserver
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/escuelas') {
        getEscuelas(req, res);
      } else if (url === '/api/donantes') {
        getDonantes(req, res);
      } 
      else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
      } 
      else if (url === '/donantes') {
        mostrarDonantes(req, res);
      } 
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      }
      else if (url === '/opinion') {
        mostrarOpinion(req, res);
      }
      //Haz una página equipo.html correspondiente
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Haz una página opinion.html
      //Agrega una ruta /opinion
      //Trata de agregar una imagen a opinion.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesional?
      //Sí, porque depender de grandes empresas de tecnología puede frenar la innovación y hacer que todo gire en torno a sus reglas, limitando oportunidades.
      //¿Para tu vida personal?
      //Sí, porque afecta la privacidad, usan tus datos como quieren y los algoritmos terminan decidiendo qué ves y qué no.
      //¿Qué es el freedombox?
      //Es un proyecto de software libre que permite a los usuarios alojar servicios digitales propios, como VPN y mensajería segura. Su objetivo es reducir la dependencia de servicios centralizados y proteger la privacidad en internet.
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html