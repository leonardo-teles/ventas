package com.ventas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ventas.model.Cliente;
import com.ventas.service.ClienteService;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

	@Autowired
	private ClienteService clienteService;
	
	@GetMapping
	public ResponseEntity<List<Cliente>> findAll() {
		return ResponseEntity.ok(clienteService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Cliente> findbyId(@PathVariable("id") Integer idCliente) {
		return clienteService.findById(idCliente).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

	}
}
