FROM gradle:8.5-jdk17 AS build
WORKDIR /app

COPY . .

RUN gradle clean build -x test --no-daemon

FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8092

ENTRYPOINT [ "java", "-jar", "app.jar" ]