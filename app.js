import express from "express";
import * as url from "url";
import "dotenv/config.js";
import hbs from 'hbs';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));


const app = express();
const port = process.env.PORT;

/* clase:
// Servir contenido estático: (middleware) //ruta principal: /
app.use(express.static('public'));

app.get("/", (req, res) => {
    // res.send("Hello World"); => esto ya no funciona por el middleware de arriba. El mensaje que aparece es el del index.html
});

// los archivos hello.html, 404.html e index.html deben ser creados en la carpeta public
app.get("/hello-world", (req, res) => {
    // res.send("Hello World II"); => se mostrará el html hello.html
    res.sendFile(__dirname + '/public/hello.html');
});

app.get("*", (req, res) => {
    // res.send("Pege not found"); => se mostrará el html 404.html
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
*/



/*
* tarea: servir un sitio web completo:
const run = () => {
    app.use(express.static("public_II"));

    app.get("/", (req, res) => {});
    app.get("/generic", (req, res) => {
        res.sendFile(__dirname + "/public_II/generic.html");
    });
    app.get("/elements", (req, res) => {
        res.sendFile(__dirname + "/public_II/elements.html");
    });

    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
};

run();
*/




// * handlebars

const runserver = () => {
    // crear la carpeta back y colocar aquí los archivos: index.html, 404.html y hello.html para no generar conflictos con la renderización del hbs:
    
    app.set('view engine', 'hbs'); // por defecto handlebar buscar la carpeta views por lo cual hay que crearla
    
    // partials de handlebars:
    hbs.registerPartials(__dirname + '/views/partials')
    
    app.use(express.static('public'));
    
    let datos = {
        nombre: 'David Baila',
        titulo: 'Curso de Node'
    }
    
    app.get('/', (req,res) =>{
        // renderizar handlebars:
        res.render('home', datos);
    });
    
    app.get('/generic', (req,res) => {
        res.render('generic', datos)
    })
    
    app.get('/elements', (req,res) => {
        res.render('elements', datos)
    })
    
    app.listen(port, () => {
        console.log(`Server running successfully in port: ${port}`);
    });
}

runserver();