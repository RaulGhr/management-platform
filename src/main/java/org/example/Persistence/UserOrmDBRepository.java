package org.example.Persistence;

import org.hibernate.Session;

import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

import org.example.Model.User;

public class UserOrmDBRepository {

    public User findOne(Integer id) {
        try (Session session = HibernateUtils.getSessionFactory().openSession()) {
            return session.createSelectionQuery("from User where id=:idM ", User.class)
                    .setParameter("idM", id)
                    .getSingleResultOrNull();
        }
    }


    public List<User> findAll() {
        try( Session session=HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from User ", User.class).getResultList();
        }
    }


    public User save(User entity) {
//        AtomicReference<User> newUser = null;
        HibernateUtils.getSessionFactory().inTransaction(session -> {
            session.persist(entity);
//            newUser.set(entity);
        });
        return entity;
    }

//    public void delete(Long aLong) {
//
//    }
//
//    public void update(User entity) {
//        HibernateUtils.getSessionFactory().inTransaction(session -> {
//            if (!Objects.isNull(session.find(User.class, entity.getId()))) {
//                System.out.println("In update, am gasit mesajul cu id-ul "+entity.getId());
//                session.merge(entity);
//                session.flush();
//            }
//        });
//    }

}
