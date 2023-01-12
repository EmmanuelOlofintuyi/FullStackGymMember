package com.example.gymMember.service;

import com.example.gymMember.model.GymMember;
import com.example.gymMember.repository.GymMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GymMemberServiceImpl implements GymMemberService{

    @Autowired
    private GymMemberRepository gymMemberRepository;

    @Override
    public List<GymMember> getAllGymMembers() {
        return gymMemberRepository.findAll();
    }

    @Override
    public GymMember saveGymMember(GymMember gymMember) {
        return gymMemberRepository.save(gymMember);
    }
}
