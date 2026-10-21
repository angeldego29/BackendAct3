# Pruebas de Task API

| Método | Ruta                  | Datos enviados      | Esperado | Obtenido | Resultado |
|--------|-----------------------|---------------------|----------|----------|-----------|
| GET    | /api/tasks            | No aplica           | 200      | 200      | Aprobada  |
| POST   | /api/tasks            | No aplica           | 201      | 201      | Aprobada  |
| GET    | /api/tasks/3           | Datos enviados      | 200      | 20       | Aprobada  |
| DELETE  | /api/tasks/1         | Datos enviados         | 204      | 204      | Aprobada  |
| GET    | /api/tasks/3          | Datos enviados          | 404      | 404      | Aprobada  |
| PATCH  | /api/tasks/1          | Datos enviados           | 200      | 200      | Aprobada  |
| PATCH | /api/tasks/-1          | Datos enviados           | 400      | 400      | Aprobada  |
| PATCH    | /api/tasks/4       | Datos enviados           | 400      | 400      | Aprobada  |
| PATCH    | /api/tasks/999     | Datos enviados           | 404      | 404      | Aprobada  |
| DELETE  | /api/tasks/2         | Datos enviados         | 204      | 204      | Aprobada  |
| POST   | /api/tasks            | No aplica           | 201      | 201      | Aprobada  |
| POST   | /api/tasks            | No aplica           | 201      | 201      | Aprobada  |
| DELETE  | /api/tasks/4         | Datos enviados         | 204      | 204      | Aprobada  |

 Método | Ruta                  | Datos enviados      | Esperado | Obtenido | Resultado |
|--------|-----------------------|---------------------|----------|----------|-----------|
| GET    | /api/tasks            | No aplica           | 200      | 200      | Aprobada  |
| POST   | /api/tasks            | No aplica           | 201      | 201      | Aprobada  |
| GET    | /api/tasks/3           | Datos enviados      | 200      | 20       | Aprobada  |
| DELETE  | /api/tasks/1         | Datos enviados         | 204      | 204      | Aprobada  |
| GET    | /api/tasks/3          | Datos enviados          | 404      | 404      | Aprobada  |
| PATCH  | /api/tasks/1          | Datos enviados           | 200      | 200      | Aprobada  |
| PATCH | /api/tasks/-1          | Datos enviados           | 400      | 400      | Aprobada  |
| PATCH    | /api/tasks/4       | Datos enviados           | 400      | 400      | Aprobada  |
| PATCH    | /api/tasks/999     | Datos enviados           | 404      | 404      | Aprobada  |
| DELETE  | /api/tasks/2         | Datos enviados         | 204      | 204      | Aprobada  |
| POST   | /api/tasks            | No aplica           | 201      | 201      | Aprobada  |
| POST   | /api/tasks            | No aplica           | 201      | 201      | Aprobada  |
| DELETE  | /api/tasks/4         | Datos enviados         | 204      | 204      | Aprobada  |


