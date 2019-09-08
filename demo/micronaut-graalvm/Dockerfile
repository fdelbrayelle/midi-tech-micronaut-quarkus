FROM oracle/graalvm-ce:19.0.0 as graalvm
COPY . /home/app/micronaut-graalvm
WORKDIR /home/app/micronaut-graalvm
RUN gu install native-image
RUN native-image --no-server -cp target/micronaut-graalvm-*.jar

FROM frolvlad/alpine-glibc
EXPOSE 8080
COPY --from=graalvm /home/app/micronaut-graalvm .
ENTRYPOINT ["./micronaut-graalvm"]
