package com.example.drycleaning.controller;

import com.example.drycleaning.model.*;
import com.example.drycleaning.repository.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApiController {

    private final ServiceRepository serviceRepo;
    private final PickupRequestRepository pickupRepo;

    public ApiController(ServiceRepository serviceRepo, PickupRequestRepository pickupRepo) {
        this.serviceRepo = serviceRepo;
        this.pickupRepo = pickupRepo;
    }

    @GetMapping("/services")
    public List<Service> getServices() {
        return serviceRepo.findAll();
    }

    @PostMapping("/pickup")
    public PickupRequest createPickup(@RequestBody PickupRequest request) {
        return pickupRepo.save(request);
    }
}