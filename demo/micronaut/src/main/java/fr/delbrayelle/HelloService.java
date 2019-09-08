package fr.delbrayelle;

import javax.inject.Singleton;

@Singleton
public class HelloService {

    public String sayHelloTo(String name) {
        return "Hello " + name + "!";
    }
}
