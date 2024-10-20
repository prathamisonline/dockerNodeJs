docker build -t nodeapp .
docker run  --name nodeapp -p 9999:9999 nodeapp
<!-- run multiple port -->

docker run -d  -p 8000:9999 nodeapp
docker run -d  -p 8001:9999 nodeapp
docker run -d  -p 8002:9999 nodeapp


<!-- to stop docker nodeapp -->

docekr stop nodeapp
docker rm nodeapp

