# Documentación de API

Bienvenido a la documentación de la API de GymMate App. Aquí encontrarás información sobre los endpoints disponibles en la API y cómo utilizarlos.

## Tabla de Contenidos

- [Endpoints](#endpoints)
  - [Usuario](#usuario)
    - [Registro de Usuario](#registro-de-usuario)
    - [Inicio de Sesión](#inicio-de-sesión)
    - [Información del usuario con sesión iniciada](#información-del-usuario-con-sesión-iniciada)
    - [Cerrar Sesión](#cerrar-sesión)

  - [Post](#post) 
    - [Crear eventos](#crear-eventos)
    - [Mostrar eventos](#mostrar-eventos)
    - [Mostrar evento específico por ID](#mostrar-evento-específico-por-ID)
    - [Comprar entrada a evento](#comprar-entrada-a-evento)
    - [Ver mis tickets comprados](#ver-mis-tickets-comprados)
    - [Categorías disponibles](#categorías-disponibles)
    - [Filtrado por categoría](#filtrado-por-categoría)
    - [Filtrado por nombre de usuario de organizador](#filtrado-por-nombre-de-usuario-de-organizador)
    - [Filtrado por localidad](#filtrado-por-localidad)
    - [Filtrado por fecha y hora](#filtrado-por-fecha-y-hora)

    - **Organizador**
      - [Mostrar eventos creados](#mostrar-eventos-creados)
      - [Mostrar datos especificos del evento creado](#mostrar-datos-especificos-del-evento-creado)
      - [Editar TODAS las variables de un evento en específico](#editar-todas-las-variables-de-un-evento-en-específico)
      - [Editar una variable de un evento en específico](#editar-una-variable-de-un-evento-en-específico)
      - [Eliminar un evento](#eliminar-un-evento)


  - [Ticket](#ticket)
    - [Mostrar tickets](#mostrar-tickets-comprados)

# Endpoints 

## Usuario

### Registro de Usuario

- **URL**: `/api/register/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios registrarse en la plataforma.
- **Parámetros de Entrada**:
  - `first_name` (string): Nombre del usuario.
  - `last_name` (string): Apellido del usuario.
  - `username` (string): Nombre de usuario del usuario.
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.
- **Respuesta Exitosa**:
  - Código de estado: 201 (Created)
  - Cuerpo de respuesta: `{"token": `token`, "user":`Datos del usuario`, "message": "User created successfully!"}`
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).

### Inicio de Sesión

- **URL**: `/api/login/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios iniciar sesión en la plataforma.
- **Parámetros de Entrada**:
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.  
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"token":`Bearer token generado`, "user":`Datos del usuario`, "message": "Login successfully!"}`
- **Respuesta en Caso de Error**:
  - Codigo de estado: 401 (Unauthorized).

### Información del usuario con sesión iniciada

- **URL**: `/api/me/`
- **Método HTTP**: `GET`
- **Descripción**: Este endpoint permite a los usuarios autenticados obtener sus datos de perfil.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Datos del usuario (ejemplo: `{"id": 1, "username": "usuario123", "email": "usuario@example.com", ...}`)

### Cerrar Sesión

- **URL**: `/api/logout/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios cerrar su sesión en la plataforma.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"message": "Logout successfully!"}`