package org.acme.quickstart;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import java.util.List;

@Entity
public class Person extends PanacheEntity {
    public String name;
    public Integer age;

    public static Person findByName(final String name){
        return find("name", name).firstResult();
    }

    public static List<Person> findAlive(){
        return list("age", 32);
    }

    public static void deleteHuberts(){
        delete("name", "Hubert");
    }
}