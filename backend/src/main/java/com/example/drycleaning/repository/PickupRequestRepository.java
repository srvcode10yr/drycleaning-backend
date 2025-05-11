package com.example.drycleaning.repository;

import com.example.drycleaning.model.PickupRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PickupRequestRepository extends JpaRepository<PickupRequest, Long> {}