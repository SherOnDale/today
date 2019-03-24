docker build -t sherondale/today-client:latest -t sherondale/today-client:$SHA -f ./client/Dockerfile ./client
docker build -t sherondale/today-server:latest -t sherondale/today-server:$SHA -f ./server/Dockerfile ./server
docker push sherondale/today-client:latest
docker push sherondale/today-server:latest

docker push sherondale/today-client:$SHA
docker push sherondale/today-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/today-server-deployment today-server=sherondale/today-server:$SHA
kubectl set image deployments/today-client-deployment today-client=sherondale/today-client:$SHA