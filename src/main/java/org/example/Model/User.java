package org.example.Model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "user")
public class User implements Serializable {

    Integer id;
    String username;
    String password;
    Integer permission;
    String lastActive;

    public User() {
        id = 0;
        username = password = "";
        permission = 0;
    }

    public User(String username, String password, Integer permission) {
        this.username = username;
        this.password = password;
        this.permission = permission;
    }

    public User(Integer id, String username, String password, Integer permission) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.permission = permission;
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.permission = 0;
    }

    @Id
    @GeneratedValue(generator = "increment")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "permission")
    public Integer getPermission() {
        return permission;
    }

    public void setPermission(Integer permission) {
        this.permission = permission;
    }

    public String getLastActive() {
        return lastActive;
    }

    public void setLastActive(String lastActive) {
        this.lastActive = lastActive;
    }
}
