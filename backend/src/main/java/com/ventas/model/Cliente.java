package com.ventas.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "cliente")
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idCliente;
	
	@NotNull(message = "El nombre no puede ser nulo")
	@NotBlank(message = "El nombre es obligatorio")
	@Size(min = 3, max = 70, message = "El nombre debe ser mayor a 3 caracteres")	
	@Column(name = "nombre", nullable = false, length = 70)
	private String nombre;

	@NotNull(message = "El apellido no puede ser nulo")
	@NotBlank(message = "El apellido es obligatorio")
	@Size(min = 3, max = 150, message = "El apellido debe ser mayor a 3 caracteres")	
	@Column(name = "apellido", nullable = false, length = 150)
	private String apellido;
	
	@Size(max = 150, message = "La dirección no debe superar los 150 caracteres")
	@Column(name = "direccion", nullable = true, length = 150)
	private String direccion;
	
	@Size(min = 8, message = "La teléfono debe tener al menos 8 caracteres")
	@Column(name = "telefono", nullable = true, length = 10)
	private String telefono;

	@NotNull(message = "El e-mail no puede ser nulo")
	@NotBlank(message = "El e-mail es obligatorio")
	@Size(min = 10, message = "El e-mail debe ser al menos de 10 caracteres")
	@Email(message = "El e-mail enviado no es un formato válido")
	@Column(nullable = false, length = 150)
	private String email;

	public Integer getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(Integer idCliente) {
		this.idCliente = idCliente;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
