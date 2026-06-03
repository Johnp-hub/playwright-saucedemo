# language: es
@auth
Característica: Autenticación de Usuario
  Como un cliente de Sauce Demo,
  Quiero poder iniciar sesión,
  Para acceder a las funcionalidades de la tienda

  Antecedentes:
    Dado que el usuario navega a la página de inicio de sesión

  @smoke @regresion
  Escenario: Inicio de sesión exitoso con credenciales válidas
    Cuando el usuario ingresa las credenciales de un "USUARIO_VÁLIDO"
    Y hace clic en el botón de ingresar
    Entonces debería ser redirigido a la página de productos
    Y debería visualizar el título de la sección "Products"

  @negativo
  Escenario: Intento de inicio de sesión con credenciales inválidas
    Cuando el usuario ingresa las credenciales de un "USUARIO_INVÁLIDO"
    Y hace clic en el botón de ingresar
    Entonces debería visualizar un mensaje de error que indica "Sorry, this user has been locked out"