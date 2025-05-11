# Podemos ejecutar esto en un Git Bash para ver la calculadora en: http://localhost:8080 
docker build -t calculadora-web .
docker run -d -p 8080:80 calculadora-web
