package org.example.Controller;

import org.example.Model.Task;
import org.example.Model.User;
import org.example.Persistence.TaskOrmDBRepository;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.Objects;

@CrossOrigin
@RestController
@RequestMapping("/task")
public class TaskController {

    TaskOrmDBRepository taskRepository = new TaskOrmDBRepository();

    @PostMapping("/user")
    public Task[] getAllForUser(@RequestBody User user){
        System.out.println("Get all tasks ...");
        return taskRepository.findAllForUSer(user.getId()).toArray(new Task[0]);
    }

    @PostMapping
    public Task create(@RequestBody Task task){
        System.out.println(task);
        taskRepository.save(task);
        return task;
    }

    @PutMapping
    public Task update(@RequestBody Task task) {
        System.out.println("Updating task ...");
        if(Objects.equals(task.getStatus(), "finished")){
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
            task.setFinished(java.time.LocalDateTime.now().format(formatter));
        }
        taskRepository.update(task);
        return task;
    }

    @DeleteMapping
    public Task delete(@RequestBody Task task){
        System.out.println("Deleting task ...");
        taskRepository.delete(task.getId());
        return task;
    }
}
