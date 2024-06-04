package org.example.Model;

import jakarta.persistence.*;

import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "task")
public class Task {
    Integer id;
    String name;
    String description;
    String status;
    Integer userId;
    String created;
    String finished;

    public Task(String name, String description, Integer userId) {
        this.name = name;
        this.description = description;
        this.status = "created";
        this.userId = userId;
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
        this.created = java.time.LocalDateTime.now().format(formatter);

    }

    public Task() {
        id = 0;
        name = description = finished = "";
        status = "created";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
        this.created = java.time.LocalDateTime.now().format(formatter);
        userId = 0;
    }

    public Task(String name, String description, String status, Integer userId, String created, String finished) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.userId = userId;
        this.created = created;
        this.finished = finished;
    }

    public Task(Integer id, String name, String description, String status, Integer userId, String created, String finished) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.userId = userId;
        this.created = created;
        this.finished = finished;
    }



    @Id
    @GeneratedValue(generator = "increment")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "status")
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Column(name = "userId")
    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Column(name = "created")
    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
    }

    @Column(name = "finished")
    public String getFinished() {
        return finished;
    }

    public void setFinished(String finished) {
        this.finished = finished;
    }
}
