package com.neightec.neightecavserver.repositories;

import com.neightec.neightecavserver.models.neightec_data.NeightecUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface NeightecUserRepository extends JpaRepository<NeightecUsers, UUID> {

    NeightecUsers findByFirstName(String firstname);
}
