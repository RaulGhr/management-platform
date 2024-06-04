package org.example.Persistence;

import org.example.Model.ActiveLog;
import org.example.Model.Task;
import org.hibernate.Session;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ActiveLogOrmDBRepository {
    public ActiveLog findOne(Integer id) {
        try (Session session = HibernateUtils.getSessionFactory().openSession()) {
            return session.createSelectionQuery("from ActiveLog where id=:idM ", ActiveLog.class)
                    .setParameter("idM", id)
                    .getSingleResultOrNull();
        }
    }

    public ActiveLog findOneByUserId(Integer id) {
        try( Session session=HibernateUtils.getSessionFactory().openSession()) {
            List<ActiveLog> activeLogs =  session.createQuery("from ActiveLog ", ActiveLog.class).getResultList();
            ActiveLog max = activeLogs.get(0);
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm");
            for (ActiveLog activeLog : activeLogs) {
                if(LocalDateTime.parse(activeLog.getLogIn(), formatter).isAfter(LocalDateTime.parse(max.getLogIn(), formatter)))
                    max = activeLog;
            }
            return max;
        }
        catch (Exception e){
            return null;
        }

    }

    public List<ActiveLog> findAll() {
        try( Session session=HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from ActiveLog ", ActiveLog.class).getResultList();
        }
    }

    public ArrayList<ActiveLog> findAllActives() {
        List<ActiveLog> activeLogs;
        try( Session session=HibernateUtils.getSessionFactory().openSession()) {
            activeLogs =  session.createQuery("from ActiveLog where logOut IS NULL ", ActiveLog.class).getResultList();
        }
        return new ArrayList<>(activeLogs);
    }


    public void save(ActiveLog entity) {
        HibernateUtils.getSessionFactory().inTransaction(session -> session.persist(entity));
    }

    public void delete(Integer id) {
        HibernateUtils.getSessionFactory().inTransaction(session -> {
            ActiveLog activeLog = session.find(ActiveLog.class, id);
            if (!Objects.isNull(activeLog)) {
                session.delete(activeLog);
                session.flush();
            }
        });

    }

    public void update(ActiveLog entity) {
        HibernateUtils.getSessionFactory().inTransaction(session -> {
            if (!Objects.isNull(session.find(ActiveLog.class, entity.getId()))) {
                System.out.println("In update, am gasit mesajul cu id-ul "+entity.getId());
                session.merge(entity);
                session.flush();
            }
        });
    }
}
