# Reflexión — EC1 F1 A2

**Nombre:** Angel Armando Degollado Mada  
**Grupo:** 01  

## 1. ¿Cuál es la función de Node.js dentro de esta aplicación?  
Node.js permite ejecutar JavaScript en el servidor. En esta aplicación se encarga de correr la lógica backend, manejar las tareas y coordinar los módulos sin necesidad de un navegador.

## 2. ¿Qué ventajas ofrece TypeScript frente a JavaScript?  
TypeScript agrega tipado estático, lo que ayuda a detectar errores antes de ejecutar el código. También mejora la organización, la autocompletación en el editor y la mantenibilidad del proyecto.

## 3. ¿Para qué sirven las importaciones y exportaciones?  
Sirven para dividir el código en módulos y reutilizarlo. Con **export** se comparte una función, clase o variable, y con **import** se puede usar en otro archivo, manteniendo el proyecto ordenado.

## 4. ¿Qué responsabilidad tiene cada módulo del proyecto?  
- **models**: Definen las estructuras y tipos de datos (ej. Task).  
- **data**: Contienen la información inicial o persistente.  
- **services**: Implementan la lógica de negocio (crear, actualizar, eliminar tareas).  
- **utils**: Guardan funciones auxiliares reutilizables (ej. delay, env).  

## 5. ¿Cuál es la diferencia entre una operación síncrona y una asíncrona?  
- **Síncrona**: Se ejecuta paso a paso y bloquea el flujo hasta terminar.  
- **Asíncrona**: Permite continuar la ejecución mientras espera un resultado, evitando bloqueos.

## 6. ¿Para qué se utilizan async y await?  
Se usan para manejar operaciones asíncronas de forma más clara.  
- **async** convierte una función en asíncrona y devuelve una promesa.  
- **await** pausa la ejecución hasta que la promesa se resuelva, simplificando el código.

## 7. ¿Por qué las variables sensibles no deben escribirse directamente en el código?  
Porque exponen información privada (ej. contraseñas, claves de API). Guardarlas en `process.env` permite protegerlas y cambiarlas según el entorno sin modificar el código fuente.

## 8. ¿Qué errores controla la aplicación y cómo responde ante ellos?  
La aplicación controla errores como:  
- Búsqueda de tareas inexistentes (devuelve `undefined`).  
- Operaciones inválidas (ej. eliminar un id que no existe).  
Responde de forma segura sin romper la ejecución, devolviendo valores controlados o mensajes claros.


para empezar el programa 
pnpm start 