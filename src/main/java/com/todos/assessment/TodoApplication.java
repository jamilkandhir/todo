package com.todos.assessment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"com.todos"})
@EntityScan("com.todos.entities")
@EnableJpaRepositories("com.todos")
public class TodoApplication extends SpringBootServletInitializer{

	 @Override
	    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	        return application.sources(TodoApplication.class);
	    }

	    public static void main(String[] args) throws Exception {
	        SpringApplication.run(TodoApplication.class, args);
	    }
}
