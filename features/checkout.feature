# language: es
@shopping
Característica: Gestión del Carrito de Compras
  Como un cliente de Sauce Demo,
  Quiero agregar productos al carrito y completar una compra
  Para poder adquirir los productos que necesito

  Antecedentes:
    Dado que el usuario ha iniciado sesión correctamente

  @carrito
  Escenario: Agregar un producto al carrito exitosamente
    Cuando el usuario hace clic en "Add to cart" del producto "Sauce Labs Backpack"
    Entonces el icono del carrito debe mostrar un indicador de "1" producto agregado

  @carrito
  Escenario: Visualizar productos en el carrito
    Dado que el usuario ha agregado el producto "Sauce Labs Backpack" al carrito
    Cuando el usuario navega hacia el carrito de compras
    Entonces debería ver el producto "Sauce Labs Backpack" en la lista de artículos seleccionados

  @checkout @smoke
  Escenario: Completar el proceso de compra exitosamente
    Dado que el usuario tiene productos en el carrito
    Y se encuentra en la pantalla de revisión del carrito
    Cuando completa el formulario de envío con sus datos
    Y confirma la orden en el paso final
    Entonces debería visualizar el mensaje de confirmación "Thank you for your order!"