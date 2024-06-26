package net.javaguides.recom.repository;

import net.javaguides.recom.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
