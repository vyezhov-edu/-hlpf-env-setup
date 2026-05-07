## Student
- Name: Єжов Вадим Олександрович
- Group: 232.1

## Практичне заняття №2 — NestJS + PostgreSQL + Redis

## Структура репозиторію
```
.
├── src/              	# NestJS source code
├── Dockerfile
├── docker-compose.yml
├── .env.example      	# шаблон змінних оточення
└── README.md
```

## Запуск проекту
```bash
cp .env.example .env   # налаштувати значення
docker compose up --build
```

## Перевірка сервісів
```text
NAME                        IMAGE                COMMAND                  SERVICE    CREATED         STATUS                   PORTS
hlpf-env-setup-app-1        hlpf-env-setup-app   "docker-entrypoint.s…"   app        2 minutes ago   Up 2 minutes             0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp
hlpf-env-setup-postgres-1   postgres:16-alpine   "docker-entrypoint.s…"   postgres   7 minutes ago   Up 2 minutes (healthy)   0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp
hlpf-env-setup-redis-1      redis:7-alpine       "docker-entrypoint.s…"   redis      7 minutes ago   Up 2 minutes (healthy)   0.0.0.0:6379->6379/tcp, [::]:6379->6379/tcp
```

## Перевірка PostgreSQL
```text
                                                      List of databases
   Name    |  Owner   | Encoding | Locale Provider |  Collate   |   Ctype    | ICU Locale | ICU Rules |   Access privileges   
-----------+----------+----------+-----------------+------------+------------+------------+-----------+-----------------------
 nestdb    | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | 
 postgres  | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | 
 template0 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/nestuser          +
           |          |          |                 |            |            |            |           | nestuser=CTc/nestuser
 template1 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/nestuser          +
           |          |          |                 |            |            |            |           | nestuser=CTc/nestuser
(4 rows)
```

## Перевірка Redis
```text
PONG
```

## Перевірка застосунку
```text
StatusCode        : 200
StatusDescription : OK
Content           : Hello World!
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 12
                    Content-Type: text/html; charset=utf-8
                    Date: Thu, 07 May 2026 09:56:27 GMT
                    ETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"...
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 12], [Content-Type, text/html; charset=utf-8]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 12



```

## Логи NestJS (фрагмент)
```text
[9:40:09 AM] Starting compilation in watch mode...
app-1  | 
app-1  | [9:40:13 AM] Found 0 errors. Watching for file changes.
app-1  | 
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +124ms
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [InstanceLoader] CacheModule dependencies initialized +42ms
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +87ms
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [RoutesResolver] AppController {/}: +15ms
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [RouterExplorer] Mapped {/, GET} route +7ms
app-1  | [Nest] 34  - 05/07/2026, 9:40:15 AM     LOG [NestApplication] Nest application successfully started +13ms
```
