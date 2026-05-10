## Student
- Name: Єжов Вадим Олександрович
- Group: 232.1

## Практичне заняття №5 — JWT Authentication + Guards + RBAC

### Структура репозиторію
```
.
├── src/
│   ├── auth/
│   │   ├── dto/
│   │   │   ├── register.dto.ts
│   │   │   └── login.dto.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   └── auth.controller.ts
│   ├── users/
│   │   ├── user.entity.ts
│   │   ├── users.module.ts
│   │   └── users.service.ts
│   ├── common/
│   │   ├── enums/
│   │   │   └── role.enum.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   └── pipes/
│   │   	└── trim.pipe.ts
│   ├── categories/ ...
│   ├── products/ ...
│   ├── migrations/
│   ├── data-source.ts
│   ├── main.ts
│   └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md
```

### Запуск проекту
```bash
app-1  | [8:27:48 PM] Found 0 errors. Watching for file changes.
app-1  | 
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +69ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] AppModule dependencies initialized +2ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] JwtModule dependencies initialized +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] CacheModule dependencies initialized +15ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +70ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] UsersModule dependencies initialized +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] AuthModule dependencies initialized +2ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] CategoriesModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [InstanceLoader] ProductsModule dependencies initialized +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RoutesResolver] AppController {/}: +6ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/, GET} route +6ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RoutesResolver] CategoriesController {/api/categories}: +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/categories, GET} route +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, GET} route +2ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/categories, POST} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, PATCH} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, DELETE} route +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RoutesResolver] AuthController {/auth}: +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/auth/register, POST} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/auth/login, POST} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RoutesResolver] ProductsController {/api/products}: +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/products, GET} route +3ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/products/:id, GET} route +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/products, POST} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/products/:id, PATCH} route +0ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [RouterExplorer] Mapped {/api/products/:id, DELETE} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 8:27:49 PM     LOG [NestApplication] Nest application successfully started +3ms
```

### API Endpoints
| Method | URL | Auth | Role |
|--------|-----|------|------|
| POST | /auth/register | - | - |
| POST | /auth/login | - | - |
| GET | /api/categories | - | - |
| POST | /api/categories | JWT | admin |
| GET | /api/products | - | - |
| POST | /api/products | JWT | admin |
| PATCH | /api/products/:id | JWT | admin |
| DELETE | /api/products/:id | JWT | admin |

### Тест реєстрації
```text
id        : 2
email     : user@test.com
name      : Test User
role      : user
createdAt : 2026-05-10T20:33:26.304Z
```

### Тест логіну
```text
accessToken
-----------
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoidXNlckB0ZXN0LmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc4NDQ1MjUwLCJleHAiOjE3Nzg0NDg4NTB9.VtaKk9rJQ7vKZBWROM4m3UTcr92L1_Q4T8xpz_h7-OQ
```

### Тест 401 — запит без токена
```text
Invoke-RestMethod : {"message":"Missing authorization token","error":"Unauthorized","statusCode":401}
At line:1 char:1
+ Invoke-RestMethod -Method Post `
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-RestMethod], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeRestMethodCommand
```

### Тест 403 — запит з роллю user
```text
Invoke-RestMethod : {"message":"Insufficient permissions","error":"Forbidden","statusCode":403}
At line:1 char:1
+ Invoke-RestMethod -Method Post `
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-RestMethod], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeRestMethodCommand
```

### Тест успішного створення від admin
```text
id          : 2
name        : MacBook Pro
description :
price       : 2499,99
stock       : 10
isActive    : True
createdAt   : 2026-05-10T20:40:55.920Z
updatedAt   : 2026-05-10T20:40:55.920Z
```
