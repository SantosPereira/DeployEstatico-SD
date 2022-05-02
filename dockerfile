FROM nginx:latest
WORKDIR /home/prod
COPY ./src/* .
COPY ./Servidor.config .
RUN cat Servidor.config > /etc/nginx/conf.d/default.conf