package org.example.Persistence;

import org.example.Model.Task;
import org.example.Model.User;
import org.hibernate.Session;
import java.util.Objects;

import java.util.List;

public class TaskOrmDBRepository {
    public Task findOne(Integer id) {
        try (Session session = HibernateUtils.getSessionFactory().openSession()) {
            return session.createSelectionQuery("from Task where id=:idM ", Task.class)
                    .setParameter("idM", id)
                    .getSingleResultOrNull();
        }
    }

    public List<Task> findAll() {
        try( Session session=HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from Task ", Task.class).getResultList();
        }
    }

    public List<Task> findAllForUSer(Integer id) {
        try( Session session=HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from Task where userId=:idM", Task.class)
                    .setParameter("idM", id)
                    .getResultList();
        }
    }


    public void save(Task entity) {
        HibernateUtils.getSessionFactory().inTransaction(session -> session.persist(entity));
    }

    public void delete(Integer id) {
        HibernateUtils.getSessionFactory().inTransaction(session -> {
            Task task = session.find(Task.class, id);
            if (!Objects.isNull(task)) {
                session.delete(task);
                session.flush();
            }
        });

    }

    public void update(Task entity) {
        HibernateUtils.getSessionFactory().inTransaction(session -> {
            if (!Objects.isNull(session.find(Task.class, entity.getId()))) {
                System.out.println("In update, am gasit mesajul cu id-ul "+entity.getId());
                session.merge(entity);
                session.flush();
            }
        });
    }
}
