npm init

npm i sequelize mysql2 sequelize-cli
npx sequelize init

npm i express cookie-parser express-session morgan multer dotenv nunjucks
npm i -D nodemon

npx sequelize db:create // config.json을 읽어 데이터베이스를 생성함

npm i passport passport-local passport-kakao bcrypt // Passport 관련 패키지 설치

npm i multer // 이미지 업로드 구현하기 

npm i -D jest

npm i -D supertest // auth.js의 라우터들을 테스트하기 위함

npx sequelize db:create --env test //  데이터베이스 생성

npm i -D artillery // 부하 테스트

npx artillery quick --count 100 -n 50 http://localhost:8001