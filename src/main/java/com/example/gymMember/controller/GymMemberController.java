package com.example.gymMember.controller;

import com.example.gymMember.model.GymMember;
import com.example.gymMember.service.GymMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/gym_member")
@CrossOrigin
public class GymMemberController {
    @Autowired
    private GymMemberService gymMemberService;

    @PostMapping("/add")
    public String add(@RequestBody GymMember gymMember){
        gymMemberService.saveGymMember(gymMember);
        return "New gym member added";
    }

    @GetMapping("/getAll")
    public List<GymMember> getAllGymMembers(){
        return gymMemberService.getAllGymMembers();
    }
}
