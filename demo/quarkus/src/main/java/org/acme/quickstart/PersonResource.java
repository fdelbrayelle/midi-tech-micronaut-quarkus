package org.acme.quickstart;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/persons")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PersonResource {

    @GET
    public List<Person> findAlive() {
        return Person.findAlive();
    }

    @POST
    @Transactional
    public Response add(Person person) {
        person.persist();
        return Response.ok(person).status(201).build();
    }
}
