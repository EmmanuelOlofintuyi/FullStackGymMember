package com.example.gymMember.service;

import com.example.gymMember.model.GymMember;

import java.util.List;

public interface GymMemberService {
    public GymMember saveGymMember(GymMember gymMember);

    public List<GymMember> getAllGymMembers();
}
