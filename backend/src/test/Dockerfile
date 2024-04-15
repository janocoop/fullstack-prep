FROM openjdk:21
LABEL authors="DREI7"

ADD backend/target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["Java", "-jar", "app.jar"]