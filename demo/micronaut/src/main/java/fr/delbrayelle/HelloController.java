package fr.delbrayelle;

import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Produces;
import io.micronaut.http.annotation.QueryValue;

import javax.annotation.Nullable;
import javax.inject.Inject;

@Controller("/hello")
public class HelloController {

    @Inject
    private HelloService helloService;

    @Get("/{?name}")
    @Produces(MediaType.TEXT_PLAIN)
    public String index(@Nullable String name) {
        return helloService.sayHelloTo(name == null ? "World" : name);
    }
}
