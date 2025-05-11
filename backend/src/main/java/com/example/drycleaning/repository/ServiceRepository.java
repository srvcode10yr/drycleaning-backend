package com.example.drycleaning.repository;

import com.example.drycleaning.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {}