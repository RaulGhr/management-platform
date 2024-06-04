package org.example.Controller;
import org.example.Model.ActiveLog;
import org.example.Model.User;
import org.example.Persistence.ActiveLogOrmDBRepository;
import org.example.Persistence.UserOrmDBRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    private UserOrmDBRepository userRepository = new UserOrmDBRepository();
    private ActiveLogOrmDBRepository activeLogRepository = new ActiveLogOrmDBRepository();

    @RequestMapping("/active")
    public User[] getAllActiveUsers(){
        System.out.println("Get all active users ...");
        ArrayList<ActiveLog> activeLogs = activeLogRepository.findAllActives();
        ArrayList<User> users = new ArrayList<>();
        for (ActiveLog activeLog : activeLogs) {
            System.out.println(activeLog.getUserId());
            User user = userRepository.findOne(activeLog.getUserId());
            user.setLastActive(activeLog.getLogIn());
            users.add(user);
        }
        User[] usersArray = new User[users.size()];
        return users.toArray(usersArray);
    }

    @PostMapping("/logOut")
    public ResponseEntity<?> logOut(@RequestBody User user){
        if(user.getPermission() == 1){
            return new ResponseEntity<String>("log out successful", HttpStatus.OK);
        }
        ActiveLog activeLog = activeLogRepository.findOneByUserId(user.getId());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
        if(activeLog != null){

            activeLog.setLogOut(LocalDateTime.now().format(formatter));
            activeLogRepository.update(activeLog);
            return new ResponseEntity<String>("log out successful", HttpStatus.OK);
        }
        return new ResponseEntity<String>("User not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/register")
    public User create(@RequestBody User user){
        System.out.println(user);
        User newUser = userRepository.save(user);
        return newUser;
    }

    @PostMapping("/logIn")
    public ResponseEntity<?> logIn(@RequestBody User user){
        User userFinded = null;
        for (User user1 : userRepository.findAll()) {
            if (user1.getUsername().equals(user.getUsername()) && user1.getPassword().equals(user.getPassword())) {
                userFinded = user1;
                break;
            }
        }
        if(userFinded == null){
            return new ResponseEntity<String>("Trip not found", HttpStatus.NOT_FOUND);
        }
        if(userFinded.getPermission() == 0) {
            ActiveLog latestActiveLog = activeLogRepository.findOneByUserId(userFinded.getId());
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
            if (latestActiveLog != null && latestActiveLog.getLogOut() == null) {

                latestActiveLog.setLogOut(formatter.format(LocalDateTime.now()));
                activeLogRepository.update(latestActiveLog);
            }
            ActiveLog activeLog = new ActiveLog(userFinded.getId(), LocalDateTime.now().format(formatter), null);
            activeLogRepository.save(activeLog);
        }
        return new ResponseEntity<User>(userFinded, HttpStatus.OK);
    }






}
