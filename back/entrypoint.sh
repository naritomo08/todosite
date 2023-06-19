#!/bin/bash

# DB migrationを実行する
poetry run python -m api.migrate_cloud_db

# uvicornのサーバーを立ち上げる
poetry run uvicorn api.main:app --host 0.0.0.0
