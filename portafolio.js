var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Descripción de la imagen",
    title: "Nekton",
    about: "Examen final Taller Producto 2018. Producto patra el deporte inclusivo. Natación para parapéjicos.",
    url: "https://www.youtube.com/watch?v=nyxjLTwvb9w&feature=youtu.be"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Descripción de la imagen",
    title: "Encrucijada",
    about: "Banca fabricada a partir de terciado 3mm y amarracables",
    url: "https://www.instagram.com/p/B1Fsqo_lRgUf0t7T3k4hKKOb4H99oZZZN7KraU0/"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Descripción de la imagen",
    title: "PROTECTION",
    about: "Tapa para ollas. Trabajo colaborativo con Ilko. Taller TIDE I 2019.",
    url: "https://www.instagram.com/p/B1Fsqo_lRgUf0t7T3k4hKKOb4H99oZZZN7KraU0/"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "TOB",
    about: "Kit lúdico de investigación para la creación de proyectos. Taller Producto 2018",
    url: "https://www.instagram.com/p/Bp8OrX4hHip/"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "Modelado 3D",
    about: "Examen Diseño por Computación, I Semestre 2018",
    url: "https://www.instagram.com/p/B1Fsqo_lRgUf0t7T3k4hKKOb4H99oZZZN7KraU0/"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "Encajado",
    about: "Packaging de cartón para flores. Trabajo de Co-Diseño con artesanos de Maipú. Taller TIDE I 2018",
    url: "https://www.instagram.com/p/BzgfVY8lTIu/"
}, {
    figure: "media/fotodagan.jpg",
    alt: "Descripción de la imagen",
    title: "Dagán",
    about: "Cobertor de hortalizas para protección de las heladas fabricado de PVC reciclado. Taller Producto 2018.",
    url: "https://youtu.be/V9_J0NnyDew"
  }, {
      figure: "media/trabajo-07-materiales.jpg",
      alt: "Descripción de la imagen",
      title: "SP",
      about: "Línea de carteras confeccionadas a partir de telar y crochet. Trabajo de Co-Diseño con artesanas de Maipú. Taller TIDE I 2018.",
      url: "https://www.instagram.com/p/B1Fsqo_lRgUf0t7T3k4hKKOb4H99oZZZN7KraU0/"
    }, {
        figure: "media/hermek1.jpg",
        alt: "Descripción de la imagen",
        title: "Hermek",
        about: "Producto para prevenir el ingreso de agua en contexto de inundaciones para puertas mal selladas, fabricado a partir de PVC reciclado. Taller Producto 2018.",
        url: "https://www.instagram.com/p/B1Fsqo_lRgUf0t7T3k4hKKOb4H99oZZZN7KraU0/"
      }, {
          figure: "media/fgn.jpg",
          alt: "Descripción de la imagen",
          title: "Fritangana",
          about: "Culturas Gastronómicas. Trabajo de alimento, packaging y gráfica. Taller Producto 2018",
          url: "https://www.instagram.com/p/B1Fsqo_lRgUf0t7T3k4hKKOb4H99oZZZN7KraU0/"

}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '" >Ver +</a><p>';

    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
