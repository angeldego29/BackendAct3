1. ¿Qué responsabilidad cumple Express y qué responsabilidad conserva el servicio?
Express se encarga de recibir las solicitudes HTTP, enrutar las peticiones a la ruta correcta y devolver una respuesta al cliente.

El servicio conserva la lógica de negocio: cómo se crean, validan, actualizan o eliminan las tareas. Es decir, Express solo es el “mensajero”, mientras que el servicio decide qué hacer con los datos.

2. ¿Por qué no conviene escribir toda la lógica dentro de task.routes.ts?
Porque ese archivo debería limitarse a definir las rutas y delegar la lógica. Si metes toda la lógica ahí:

Se vuelve difícil de mantener.

No puedes reutilizar funciones en otros lugares.

Rompes la separación de responsabilidades (routing vs. negocio).
Lo correcto es que las rutas llamen a funciones del servicio.

3. ¿Qué diferencia existe entre req.params y req.body?
req.params: contiene valores que vienen en la URL, por ejemplo /api/tasks/123 → req.params.id = "123".

req.body: contiene datos enviados en el cuerpo de la petición, normalmente en formato JSON, por ejemplo { "title": "Nueva tarea" }.

4. ¿Por qué el título recibido desde un cliente se considera unknown antes de validarlo?
Porque cualquier dato que llega desde fuera puede ser incorrecto, malicioso o incompleto. Antes de validarlo, no sabemos si realmente es un string válido. Por eso se trata como unknown y luego se valida para convertirlo en el tipo correcto.

5. ¿Qué ventaja ofrece centralizar los errores en un middleware?
Permite manejar todos los errores en un solo lugar. Así:

No repites código de manejo de errores en cada ruta.

Tienes respuestas consistentes para el cliente.

Facilita el mantenimiento y la depuración.

6. ¿Cuándo debe utilizarse 201 en lugar de 200?
200 (OK): cuando devuelves información existente o confirmas una operación sin crear nada nuevo.

201 (Created): cuando se crea un recurso nuevo en el servidor (por ejemplo, una tarea nueva con POST).

7. ¿Por qué DELETE responde 204 sin un objeto JSON?
Porque al eliminar un recurso ya no queda nada que devolver.

204 (No Content) indica que la operación fue exitosa pero no hay contenido en la respuesta.

No tiene sentido devolver un objeto vacío.

8. ¿Qué ocurrirá con las tareas cuando el servidor se reinicie y por qué?
Si las tareas solo están en memoria (arrays en el código), se perderán al reiniciar el servidor porque esa información no se guarda en disco ni en una base de datos. La memoria se borra al apagar.

9. ¿Qué archivos podrán conservarse cuando se incorpore MongoDB Atlas?
Cuando uses MongoDB Atlas, las tareas se guardarán en la base de datos en la nube. Eso significa que:

Los datos persistirán aunque reinicies el servidor.

Los archivos de tu proyecto (código, rutas, servicios) seguirán igual, pero ahora la información de las tareas estará en la base de datos y no en memoria.