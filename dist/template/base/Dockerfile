FROM node:20-alpine


WORKDIR {Your_dir}

COPY package*.json ./
RUN npm install


COPY . .


EXPOSE 5000

CMD ["npm", "run", "dev"]