package com.ventas.service;

import java.util.List;
import java.util.Optional;

import com.ventas.model.Cliente;

public interface IClienteService {

	List<Cliente> findAll();
	
	Optional<Cliente> findById(Integer id);
}
