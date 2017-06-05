
function initMap(){


  var laboratoriaMexico = {lat: 19.417704, lng: -99.164886};

  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 18,
    center:laboratoriaMexico
  });

  var marker = new google.maps.Marker({
    position:laboratoriaMexico,
    map: map
  });

}

var contactos = [
	{
		"nombre": "Le Pain Quotidien Roma",
    "comida": "Comida Internacional",
		"ubicacion": "Monterrey 104, Roma Nte., 06700 Ciudad de México, CDMX",
		"foto": "http://www.lepainquotidien.mx/wp-content/uploads/sites/7/2016/04/1.jpg"
	},
];

var plantillaContacto = '<article class="row contact">' +
        '<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
          '<div class="row valign-wrapper">' +
            '<div class="col s3">' +
              '<img src="__foto__" alt="Contact" class="circle responsive-img">' +
            '</div>' +
            '<div class="col s9">' +
            	'<h5 class="name">__nombre__</h5>' +
              '<p class="food">__comida__</p>' +
              '<span class="black-text">' +
                'Dirección: __ubicacion__' +
              '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
	'</article>';

var cargarPagina = function () {
	$("#search-form").submit(filtrarContactos);
};

var filtrarContactos = function (e) {
	e.preventDefault();
	var criterioBusqueda = $("#search").val().toLowerCase();
	var contactosFiltrados = contactos.filter(function (contacto) {
		return contacto.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
	});
	mostrarContactos(contactosFiltrados);
};

var mostrarContactos = function (contactos) {
	var plantillaFinal = "";
	contactos.forEach(function (contacto) {
		plantillaFinal += plantillaContacto.replace("__nombre__", contacto.nombre)
			.replace("__comida__", contacto.comida)
      .replace("__ubicacion__", contacto.ubicacion)
			.replace("__foto__", contacto.foto);
	});
	$(".contacts").html(plantillaFinal);
};

$(document).ready(cargarPagina);
