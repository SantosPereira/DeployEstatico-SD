FROM nginx:latest
WORKDIR /home/prod
COPY ./build/ .
COPY ./Servidor.config .
RUN chown www-data:www-data .
RUN cat Servidor.config > /etc/nginx/conf.d/default.conf