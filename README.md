# TODOサイト

TODOサイトを立ち上げることができます。

## 展開方法

```bash
git clone https://github.com/naritomo08/todosite.git
cd todosite
docker-compose build
docker-compose run --entrypoint "poetry install" fastapi-app
docker-compose up -d
docker-compose exec fastapi-app poetry run python -m api.migrate_db
```

### サイト確認

以下のURLにアクセスし、ToDoサイトAPI管理画面が出てくること。

http://localhost:8000/docs

以下のURLにアクセスし、ToDoアプリトップ画面が出てくること。

http://localhost:3000/

### Reactコンテナログイン

```bash
docker-compose exec react-app bash
```

### FastAPIコンテナログイン

```bash
docker-compose exec fastapi-app bash
```
