var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Imagen del trabajo, traje de agua negro en mnaiquí con logo azul.",
    title: "Nekton",
    about: "Examen final Taller Producto 2018. Producto patra el deporte inclusivo. Natación para parapéjicos. - Josefina Cerda y Josefa Ladrón de Guevara",
    url: "https://www.youtube.com/watch?v=nyxjLTwvb9w&feature=youtu.be/"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Imagen de la banca, gris agarrada por Josefina y Josefa.",
    title: "Encrucijada",
    about: "Banca fabricada a partir de terciado 3mm y amarracables. - Josefina Cerda y Josefa Ladrón de Guevara.",
    url: "https://www.instagram.com/p/B1mpdIFhUX5/"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Imagen del producto en uso. Tapa sobre olla en una cocina.",
    title: "PROTECTION",
    about: "Tapa para ollas. Trabajo colaborativo con Ilko. Taller TIDE I 2019. - Josefina Cerda.",
    url: "https://www.youtube.com/watch?v=G_rN4yiLrh4&feature=youtu.be"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Imagen del kit desplegado mostrando todas sus partes.",
    title: "TOB",
    about: "Kit lúdico de investigación para la creación de proyectos. Taller Producto 2018. - Josefina Cerda y Josefa Ladrón de Guevara.",
    url: "https://www.instagram.com/p/B1moKgVBhoR/"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "DImagen vista frontal del teléfono.",
    title: "Modelado 3D",
    about: "Teléfono anitguo. Modelado 3D en Rhinoceros. Examen Diseño por computación 2018 - Josefina Cerda",
    url: "https://www.instagram.com/p/B1m4wDOhjEG/"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Imagen producto en uso. Ramo de flores astormelias rojas.",
    title: "Encajado",
    about: "Packaging de cartón para flores. Trabajo de Co-Diseño con artesanos de Maipú. Taller TIDE I 2018. - Josefina Cerda.",
    url: "https://www.instagram.com/p/B1m4qGuBFKn/"
}, {
    figure: "media/fotodagan.jpg",
    alt: "Imagen producto en uso. Un módulo sobre hortalizas, persona instalándolo.",
    title: "Dagán",
    about: "Cobertor de hortalizas para protección de las heladas fabricado de PVC reciclado. Taller Producto 2018. - Josefina Cerda.",
    url: "https://youtu.be/V9_J0NnyDew"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Imagen de una de las carteras sobre una modelo.",
    title: "SP",
    about: "Línea de carteras confeccionadas a partir de telar y crochet. Trabajo de Co-Diseño con artesanas de Maipú. Taller TIDE I 2018. - Josefa Ladrón de Guevara.",
    url: "https://www.instagram.com/p/B1mmhi_hVoj/"
}, {
    figure: "media/hermek1.jpg",
    alt: "Imagen producto desplegado sobre el pasto.",
    title: "Hermek",
    about: "Producto para prevenir el ingreso de agua en contexto de inundaciones para puertas mal selladas, fabricado a partir de PVC reciclado. Taller Producto 2018. - Josefa Ladrón de Guevara.",
    url: "https://www.instagram.com/p/B1mjKpthSMo/"
}, {
    figure: "media/fgn.jpg",
    alt: "Imagen personas comiendo el producto.",
    title: "Fritangana",
    about: "Culturas Gastronómicas. Trabajo de alimento, packaging y gráfica. Taller Producto 2018. - Josefa Ladrón de Guevara.",
    url: "https://www.instagram.com/p/B1mh5vaByis/"
}, {
    figure: "media/iglesia.jpg",
    alt: "Imagen de vista frontal de la Iglesia.",
    title: "Modelado 3D",
    about: "Iglesia Hallgrimskirkja. Modelado 3D en Rhinoceros. Examen Diseño por computación 2018 - Josefa Ladrón de Guevara",
    url: "https://www.instagram.com/p/B1mmTk3BIWB/"
}, {
    figure: "media/cflip.jpeg",
    alt: "Imagen producto en packaging.",
    title: "CleanFlip",
    about: "Es un producto que filtra el agua sin dejar pasar los pelos al desagüe de la tina, que luego se saca y permite botar los pelos de forma fácil e higiénica. Exámen Taller Interacción 2018. - Josefa Ladrón de Guevara",
    url: "https://www.instagram.com/p/B1mp_FcBQOF/"



}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '" >Ver +</a><p>';

    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
