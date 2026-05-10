## Student
- Name: Єжов Вадим Олександрович
- Group: 232.1

## Практичне заняття №4 — DTO + class-validator + Pipes

### Структура репозиторію
```
.
├── src/
│   ├── categories/
│   │   ├── dto/
│   │   │   ├── create-category.dto.ts
│   │   │   └── update-category.dto.ts
│   │   ├── category.entity.ts
│   │   ├── categories.module.ts
│   │   ├── categories.service.ts
│   │   └── categories.controller.ts
│   ├── products/
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   └── update-product.dto.ts
│   │   ├── product.entity.ts
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   │   └── products.controller.ts
│   ├── common/
│   │   └── pipes/
│   │   	└── trim.pipe.ts
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

app-1  | [4:41:12 PM] Found 0 errors. Watching for file changes.
app-1  | 
app-1  | [Nest] 34  - 05/10/2026, 4:41:13 PM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +67ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] CacheModule dependencies initialized +19ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +57ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] CategoriesModule dependencies initialized +2ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [InstanceLoader] ProductsModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RoutesResolver] AppController {/}: +7ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/, GET} route +5ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RoutesResolver] CategoriesController {/api/categories}: +0ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/categories, GET} route +2ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, GET} route +3ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/categories, POST} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, PATCH} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/categories/:id, DELETE} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RoutesResolver] ProductsController {/api/products}: +1ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/products, GET} route +0ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/products/:id, GET} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/products, POST} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/products/:id, PATCH} route +1ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [RouterExplorer] Mapped {/api/products/:id, DELETE} route +0ms
app-1  | [Nest] 34  - 05/10/2026, 4:41:14 PM     LOG [NestApplication] Nest application successfully started +3ms

```

### Тест валідації — порожнє ім'я категорії
```text
PS C:\Users\Vadim> Invoke-RestMethod `
>>   -Method POST `
>>   -Uri http://localhost:3000/api/categories `
>>   -ContentType "application/json" `
>>   -Body '{"name":""}'
Invoke-RestMethod : {"message":["name must be longer than or equal to 2 characters"],"error":"Bad Request","statusCode"
:400}
At line:1 char:1
+ Invoke-RestMethod `
+ ~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-RestMethod], WebExc
   eption
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeRestMethodCommand
```

### Тест валідації — від'ємна ціна продукту
```text
PS C:\Users\Vadim> Invoke-RestMethod `
>>   -Method POST `
>>   -Uri http://localhost:3000/api/products `
>>   -ContentType "application/json" `
>>   -Body '{"name":"Bad Product","price":-5}'
Invoke-RestMethod : {"message":["price must not be less than 0.01"],"error":"Bad Request","statusCode":400}
At line:1 char:1
+ Invoke-RestMethod `
+ ~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-RestMethod], WebExc
   eption
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeRestMethodCommand
```

### Тест валідації — зайве поле
```text
PS C:\Users\Vadim> Invoke-RestMethod `
>>   -Method POST `
>>   -Uri http://localhost:3000/api/categories `
>>   -ContentType "application/json" `
>>   -Body '{"name":"Test","isAdmin":true}'
Invoke-RestMethod : {"message":["property isAdmin should not exist"],"error":"Bad Request","statusCode":400}
At line:1 char:1
+ Invoke-RestMethod `
+ ~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-RestMethod], WebExc
   eption
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeRestMethodCommand
```

### Тест TrimPipe
```text
PS C:\Users\Vadim> Invoke-RestMethod -Method Post `
>>   -Uri "http://localhost:3000/api/categories" `
>>   -ContentType "application/json" `
>>   -Body '{"name": "  "}'
Invoke-RestMethod : {"message":["name must be longer than or equal to 2 characters"],"error":"Bad Request","statusCode"
:400}
At line:1 char:1
+ Invoke-RestMethod -Method Post `
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-RestMethod], WebExc
   eption
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeRestMethodCommand
```

### Тест валідне створення продукту
```text
PS C:\Users\Vadim> Invoke-RestMethod `
>>   -Method POST `
>>   -Uri http://localhost:3000/api/products `
>>   -ContentType "application/json" `
>>   -Body '{"name":"iPhone 16","price":999.99,"stock":50,"categoryId":1}'


id          : 1
name        : iPhone 16
description :
price       : 999,99
stock       : 50
isActive    : True
category    : @{id=1}
createdAt   : 2026-05-10T16:15:23.539Z
updatedAt   : 2026-05-10T16:15:23.539Z
```
