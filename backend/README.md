# Documentación de API

Bienvenido a la documentación de la API de GymMate App. Aquí encontrarás información sobre los endpoints disponibles en la API y cómo utilizarlos.

## Tabla de Contenidos

- [Endpoints](#endpoints)
    - [Usuario](#usuario)
        - [Registro de Usuario](#registro-de-usuario)
        - [Inicio de Sesión](#inicio-de-sesión)
        - [Información del usuario con sesión iniciada](#información-del-usuario-con-sesión-iniciada)
        - [Editar detalles del usuario con sesión iniciada](#editar-detalles-del-usuario)
        - [Ver el perfil de un usuario](#ver-el-perfil-de-un-usuario)
        - [Seguir a un usuario](#seguir-a-un-usuario)
        - [Dejar de seguir a un usuario](#dejar-de-seguir-a-un-usuario)
        - [Cerrar Sesión](#cerrar-sesión)

    - [Usuarios-coachs](#usuario-coachs)

    - [Posts](#posts)
        - [Publicar un post](#publicar-un-post)
        - [Editar un post](#editar-un-post)
        - [Eliminar un post](#eliminar-un-post)
        - [Comentar un post](#comentar-un-post)
        - [Editar/Eliminar un comentario](#editar-o-eliminar-un-comentario)
        - [Likear un post](#likear-un-post)
        - [Repostear un post](#repostear-un-post)

    - [Rutinas](#rutinas)
    

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

### Editar detalles del usuario

- **URL**: `/api/me/`
- **Método HTTP**: `PUT`, `PATCH`
- **Descripción**: Este endpoint permite a los usuarios autenticados editar sus datos de perfil.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"message": "Update successfully!", "user": {"id": 1, "username": "usuario123_update", "email": "usuario_update@example.com", ...}}`

### Ver el perfil de un usuario

- **URL**: `/api/user/<int:pk>`
- **Método HTTP**: `GET`
- **Descripción**: Este endpoint permite a los usuarios ver el perfil de otros usuarios.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"user": {"id", "username": "test1" , "photo_image": "img/", "posts": [], "followers_users": 10}}`
- **Respuesta en Caso de Error**:
  - Codigo de estado: 404 (Not found)
  - Cuerpo de respuesta: `{"error": "User not found"}`

### Seguir a un usuario
- **URL**: `/api/user/<int:pk>/follow/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios seguir a otro usuario.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"message": "User Antonella follow!"}`


### Dejar de seguir a un usuario
- **URL**: `/api/user/<int:pk>/unfollow/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios dejar de seguir a otro usuario.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"message": "User Antonella unfollow!"}`

### Cerrar Sesión

- **URL**: `/api/logout/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios cerrar su sesión en la plataforma.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"message": "Logout successfully!"}`


## Posts

### Publicar un post
- **URL**: `/post/post/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios crear una publicación.
- **Parámetros de Entrada**:
  - `content` (text): Contenido de la publicación.
  - `user` (integer): Id del usuario que está realizando la publicación.
  - `image_url` (file) [ OPCIONAL ]: Imagen que acompaña la publicación.
  - `video_url` (file) [ OPCIONAL ]: Video que acompaña la publicación.
- **Respuesta Exitosa**:
  - Código de estado: 201 (Created)
  - Cuerpo de respuesta: `{"message": "Post created successfully!", "Post": `Contenido del post`}`
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).

### Editar un post
- **URL**: `/post/post/<int:pk>`
- **Método HTTP**: `PUT/PATCH`
- **Descripción**: Este endpoint permite a los usuarios editar una publicación en particular.
- **Parámetros de Entrada**:
  - `content` (text): Contenido de la publicación.
  - `user` (integer): Id del usuario que está realizando la publicación.
  - `image_url` (file) [ OPCIONAL ]: Imagen que acompaña la publicación.
  - `video_url` (file) [ OPCIONAL ]: Video que acompaña la publicación.
- **Respuesta Exitosa**:
  - Código de estado: 200 (Ok)
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).

### Eliminar un post
- **URL**: `/post/post/<int:pk>`
- **Método HTTP**: `DELETE`
- **Descripción**: Este endpoint permite a los usuarios eliminar una publicación en particular.
- **Parámetros de Entrada**:- **Respuesta Exitosa**:
  - Código de estado: 204 (No content)
    - Cuerpo de respuesta: `{"message": "Post succesfully deleted"}`
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).

### Comentar un post
- **URL**: `/post/comments/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios crear un comentario.
- **Parámetros de Entrada**:
  - `comment_content` (text): Contenido del comentario.
  - `comment_post` (integer): Id del post del que está realizando el comentario.
  - `comment_user` (integer): Id del usuario que está realizando el comentario.
- **Respuesta Exitosa**:
  - Código de estado: 201 (Created)
  - Cuerpo de respuesta: `{"message": "Comment created", "Comment": `Contenido del comentario`}` 
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).

### Editar o eliminar un comentario
- **URL**: `/post/comments/<int:pk>`
- **Método HTTP**: `PUT/PATCH`
- **Descripción**: Este endpoint permite a los usuarios editar un comentario en particular.
- **Parámetros de Entrada**:
  - `comment_content` (text): Contenido del comentario.
  - `comment_post` (integer): Id del post del que está realizando el comentario.
  - `comment_user` (integer): Id del usuario que está realizando el comentario.
  - `hide_comment` (boolean): Si es True, el comentario está escondido, sino el comentario se encuentra visible. Default es falso.
- **Respuesta Exitosa**:
  - Código de estado: 200 (Ok)
  - Cuerpo de respuesta (CASO QUE SE ELIMINE): `{"message": "Comment succesfully deleted"}`
  (CASO QUE SE ESCONDA / SE TOME COMO VISIBLE): `{"message": "Comment is no longer hidden!"}` / `{"message": "Comment succesfully hidden!"}`
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).

### Likear un post
- **URL**: `/post/likes/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios dar like a un post.
- **Parámetros de Entrada**:
  - `likes_post` (integer): Id del post que se está likeando.
  - `likes_user` (integer): Id del usuario que está realizando el like.
- **Respuesta Exitosa**:
  - Código de estado: 201 (Created)
  - Cuerpo de respuesta: `{"message": "Liked successfully!"}` 
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).

### Repostear un post
- **URL**: `/post/reposts/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios dar repost a un post.
- **Parámetros de Entrada**:
  - `repost_post` (integer): Id del post que se está reposteando.
  - `repost_user` (integer): Id del usuario que está realizando el repost.
- **Respuesta Exitosa**:
  - Código de estado: 201 (Created)
  - Cuerpo de respuesta: `{"message": "Reposted successfully!"}` 
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).
