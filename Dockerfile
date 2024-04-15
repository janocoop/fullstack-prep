FROM openjdk:21
LABEL authors="DREI7"

ADD backend/target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 808

ENTRYPOINT ["java", "-jar", "-Dspring.profile.active=dev", "app.jar"]