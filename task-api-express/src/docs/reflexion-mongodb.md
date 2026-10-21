### 1. ¿Qué diferencia existe entre tu cuenta de Atlas y el usuario de base de datos?  
La cuenta de Atlas es tu acceso administrativo al servicio en la nube, mientras que el usuario de base de datos es la credencial específica que tu aplicación usa para conectarse y operar sobre una base.  

### 2. ¿Por qué MONGODB_URI se considera un secreto aunque el repositorio sea privado?  
Porque contiene usuario, contraseña y host; si se filtra, incluso desde un repo privado, expone acceso directo a tu base de datos.  

### 3. ¿Qué riesgo introduce permitir 0.0.0.0/0 en la lista de acceso?  
Abre la base a cualquier IP del mundo, lo que facilita ataques y accesos no autorizados.  

### 4. ¿Por qué la API espera connectDatabase antes de ejecutar app.listen?  
Para garantizar que la conexión esté lista antes de aceptar peticiones y evitar fallos en tiempo de ejecución.  

### 5. ¿Qué comprueba readyState y qué añade el comando ping?  
`readyState` indica el estado de la conexión (conectado, desconectado, etc.) y `ping` valida que el servidor responda activamente.  

### 6. ¿Por qué una falla de MongoDB corresponde a infraestructura y no a validación HTTP?  
Porque depende de red/servidor y no de reglas de negocio ni de validación de datos en la capa HTTP.  

### 7. ¿Cómo llega un AppError lanzado por getDatabaseHealth al manejador central en Express 5?  
Se propaga con `next(error)` y llega automáticamente al manejador central de errores configurado en Express.  

### 8. ¿Qué pruebas demuestran que la incorporación de Atlas no rompió la API anterior?  
Las pruebas de endpoints previos siguen respondiendo igual, confirmando que la integración con Atlas no afectó la API existente.  

### 9. ¿Por qué el arreglo en memoria se conserva todavía en esta actividad?  
Porque aún sirve como almacenamiento temporal paralelo a la base, útil para pruebas o respaldo inmediato.  

### 10. ¿Qué información debe ocultarse al cliente cuando ocurre un error de conexión?  
Usuario, contraseña, URI completa y detalles internos del servidor; solo se debe mostrar un mensaje genérico de error.  