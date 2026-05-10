## Student
- Name: Єжов Вадим Олександрович
- Group: 232.1

## Практичне заняття №3 — CRUD REST API для MiniShop

### Структура репозиторію
```
.
├── src/
│   ├── categories/
│   │   ├── category.entity.ts
│   │   ├── categories.module.ts
│   │   ├── categories.service.ts
│   │   └── categories.controller.ts
│   ├── products/
│   │   ├── product.entity.ts
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   │   └── products.controller.ts
│   ├── migrations/
│   │   ├── 1700000001-CreateTables.ts
│   │   └── <timestamp>-AddIsActiveToProducts.ts
│   ├── data-source.ts
│   └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md
```

### Запуск проекту
```bash
 [2:54:48 PM] Found 0 errors. Watching for file changes.
```

### API Endpoints
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +69ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] CacheModule dependencies initialized +14ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +44ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] CategoriesModule dependencies initialized +2ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [InstanceLoader] ProductsModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RoutesResolver] AppController {/}: +4ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/, GET} route +2ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RoutesResolver] CategoriesController {/api/categories}: +1ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/categories, GET} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, GET} route +3ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/categories, POST} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, PATCH} route +2ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, DELETE} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RoutesResolver] ProductsController {/api/products}: +0ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/products, GET} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/products/:id, GET} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/products, POST} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/products/:id, PATCH} route +0ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [RouterExplorer] Mapped {/api/products/:id, DELETE} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 2:54:50 PM     LOG [NestApplication] Nest application successfully started +2ms


### Перевірка міграцій
```text
           List of relations
 Schema |    Name    | Type  |  Owner   
--------+------------+-------+----------
 public | categories | table | nestuser
 public | migrations | table | nestuser
 public | products   | table | nestuser
(3 rows)

```

### Тест створення категорії
```text
id name        description         createdAt
-- ----        -----------         ---------
 3 Electronics Gadgets and devices 2026-05-10T14:34:03.770Z
```

### Тест створення продукту
```text
id          : 1
name        : iPhone 15
description :
price       : 999,99
stock       : 50
isActive    : True
category    : @{id=5}
createdAt   : 2026-05-10T14:39:41.653Z
updatedAt   : 2026-05-10T14:39:41.653Z
```

### Тест отримання продуктів
```text
PS C:\Users\Vadim> Invoke-RestMethod `
>>   -Method GET `
>>   -Uri http://localhost:3000/api/products


id          : 1
name        : iPhone 15
description :
price       : 999.99
stock       : 50
isActive    : True
category    : @{id=5; name=Electronics; description=Gadgets and devices; createdAt=2026-05-10T14:37:59.951Z}
createdAt   : 2026-05-10T14:39:41.653Z
updatedAt   : 2026-05-10T14:39:41.653Z

id          : 2
name        : USB Cable
description :
price       : 9.99
stock       : 200
isActive    : True
category    :
createdAt   : 2026-05-10T14:40:39.788Z
updatedAt   : 2026-05-10T14:40:39.788Z
```

### Тест 404
```text
PS C:\Users\Vadim> Invoke-RestMethod `
>>   -Method GET `
>>   -Uri http://localhost:3000/api/products/999
Invoke-RestMethod : {"message":"Product #999 not found","error":"Not Found","statusCode":404}
At line:1 char:1
+ Invoke-RestMethod `
+ ~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-RestMethod], WebExc
   eption
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeRestMethodCommand
```
