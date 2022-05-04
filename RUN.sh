docker build -t deployestatico-sd .
docker run -d -p 8081:80 --name prod-atividade deployestatico-sd
docker ps
