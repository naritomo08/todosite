# 公式Node.jsイメージをベースにする
FROM node:14

# 作業ディレクトリを設定する
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピーする
COPY package*.json ./

# 依存関係をインストールする
RUN npm install

# アプリケーションのソースコードをコピーする
COPY . .

# 開発用サーバーを実行する
CMD ["npm", "start"]
