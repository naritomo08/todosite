# TODOサイト

TODOサイトを立ち上げることができます。

## 展開方法

```bash
git clone https://github.com/naritomo08/todosite.git
cd todosite
touch front/.env.development.local
vi front/.env.development.local

以下の内容で作成する。
REACT_APP_BURL = "http://localhost:8000"

docker-compose build
docker-compose run --entrypoint "poetry install --no-root" fastapi-app
docker-compose up -d

5分ほど待ってから実施

docker-compose exec fastapi-app poetry run python -m api.migrate_db
```

### サイト確認

以下のURLにアクセスし、ToDoサイトAPI管理画面が出てくること。

http://localhost:8000/docs

以下のURLにアクセスし、ToDoアプリトップ画面が出てくること。

http://localhost:3000/

## 各種コンテナログイン

### Reactコンテナログイン

```bash
docker-compose exec react-app bash
```

### FastAPIコンテナログイン

```bash
docker-compose exec fastapi-app bash

DBマイグレートコマンド
poetry run python -m api.migrate_db

APIユニットテストコマンド
poetry run pytest
```

### DBコンテナログイン

```bash
docker-compose exec db bash

DBバックアップ

cd /dump
mysqldump -u root -ppassword --single-transaction --all-databases --events > mysql_dump.sql

コンテナログインせず取得する場合

docker-compose exec db mysqldump -u root -ppassword --single-transaction --all-databases --events > mysql_dump.sql

DBリストア
db/dump内にバックアップファイルを置く。

cd /dump
mysql -u root -ppassword < mysql_dump.sql
```

## DB管理ツールログイン

### adminer(DB管理ツール)

http://127.0.0.1:8081

* ログイン情報
  - サーバ: db
  - ユーザ名: admin
  - パスワード: password
  - データベース: demo