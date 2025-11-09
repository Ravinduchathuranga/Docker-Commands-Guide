# this is layerd architecture for docker image

FROM node

WORKDIR /app

#this will be cached if package.json does not change. this improves build time and efficiency.
COPY package.json /app

RUN npm install 

COPY . /app

EXPOSE 80

CMD ["node","server.js"]



# docker build -t mynodeapp .
# docker run -p 80:80 mynodeapp