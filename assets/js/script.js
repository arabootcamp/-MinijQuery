$(function () {
  // Handler for .ready() called.
  let cont = 0;
  $('#menu').hide();
  $('#menu').removeClass('invisible');

  /*Al hacer click sobre la caja que dice "haz click", aumenta el tamaño y el color de la caja que dice "cambiame" (sólo utiliza jQuery). Siente la libertad de agregar las clases o ids que sean necesarios (no modificar estructura html entregada).*/
  $('#haz-click').click(function () {
    console.log()
    if (cont == 0) {
      $(this).css({
        width: 400,
        height: 400
      });
      $('#cambiame').css('background-color', 'tomato');
      cont++;
    } else {
      $(this).css({
        width: 200,
        height: 200
      });
      $('#cambiame').css('background-color', 'yellow');
      cont--;
    }
  });

  /*2. Dar vida al menú, incorporando la funcionalidad de que se oculte y muestre las opciones a partir de un click en el icono de la hamburguesa, utiliza algún efecto para que el cambio sea suave.*/
  $('#click-bars').click(function () {
    $('#menu').toggle();
  });

  /*3. Dar un estilo a los elementos pares e impares de la lista al pasar el mouse sobre la caja roja y que vuelva a la normalidad cuando el mouse deje la caja (hint: mouseover(), mouseleave())*/
  $('#caja-estilos-lista').on('mouseover', function () {
    $('ul li:odd').css({
      'font-weight': 700,
      color: 'red'
    });
    $('ul li:even').css({
      'font-weight': 700,
      color: 'blue'
    });
  });

  $('#caja-estilos-lista').on('mouseleave', function () {
    $('ul li').css({
      'font-weight': 400,
      color: '#212529'
    });
  });

});