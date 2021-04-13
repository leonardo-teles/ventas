package com.ventas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ventas.model.Cliente;

public interface IClienteRepository extends JpaRepository<Cliente, Integer> {

}
