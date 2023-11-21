FROM node:18.16.0
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@9.7.1
RUN yarn
COPY . .
EXPOSE 3001
# 개발 단계에서 변경사항을 반영을 위해 build가 아닌 dev 명령을 사용
CMD ["yarn", "dev"]