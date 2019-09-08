package fr.delbrayelle.graalvm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class GraalvmApplication {

	public static void main(String[] args) {
		SpringApplication.run(GraalvmApplication.class, args);
	}

}
