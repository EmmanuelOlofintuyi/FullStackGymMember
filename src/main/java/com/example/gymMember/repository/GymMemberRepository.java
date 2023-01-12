package com.example.gymMember.repository;

import com.example.gymMember.model.GymMember;
import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GymMemberRepository extends JpaRepository<GymMember, Long> {

}
