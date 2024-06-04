package org.example.Model;

import jakarta.persistence.*;

import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "activelog")
public class ActiveLog {
    Integer id;
    Integer userId;
    String logIn;
    String logOut;

    public ActiveLog() {
        id = userId = 0;
        logIn = logOut = "";
    }

    public ActiveLog(Integer userId, String logIn, String logOut) {
        this.userId = userId;
        this.logIn = logIn;
        this.logOut = logOut;
    }

    public ActiveLog(Integer id, Integer userId, String logIn, String logOut) {
        this.id = id;
        this.userId = userId;
        this.logIn = logIn;
        this.logOut = logOut;
    }

    @Id
    @GeneratedValue(generator = "increment")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "userId")
    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    @Column(name = "logIn")
    public String getLogIn() {
        return logIn;
    }

    public void setLogIn(String logIn) {
        this.logIn = logIn;
    }

    @Column(name = "logOut")
    public String getLogOut() {
        return logOut;
    }

    public void setLogOut(String logOut) {
        this.logOut = logOut;
    }
}
