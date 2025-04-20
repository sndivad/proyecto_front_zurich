Feature: Solicitud de cita desde Zurich Empresas

  Scenario: Mostrar error si se omite el teléfono de contacto
    Given EL usuario accede a la pagina principal
    And acepta todas las cookies si se muestran
    When hace clic en el boton Te llamamos gratis
    And introduce el nombre
    And acepta los términos legales
    And hace clic en el botón para pedir cita
    Then se muestra el mensaje de error que falta el telefono

  Scenario: Mostrar error si se omite el checkbox de los terminos legales
    Given EL usuario accede a la pagina principal
    And acepta todas las cookies si se muestran
    When hace clic en el boton Te llamamos gratis
    And introduce el nombre
    And introduce el telefono de contacto
    And selecciona la hora en la sección ¿Cuándo?
    And deja por aceptar los términos legales
    And hace clic en el botón para pedir cita
    Then se muestra el mensaje de error que faltan los terminos legales