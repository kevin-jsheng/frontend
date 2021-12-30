docker build -f Dockerfile.dev .

docker run -p 3000:3000 -v $(pwd):/app kevinjsheng/frontend

docker run -p 3000:3000 -v /app/mode_modules -v $(pwd):/app kevinjsheng/frontend

# run npm run test in the container
docker run -it kevinjsheng/frontend npm run test


