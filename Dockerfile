FROM openjdk:21

ADD /backend/target/app.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=dev", "app.jar"]