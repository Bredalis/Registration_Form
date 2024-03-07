
// Modulo
const sqlite3 = require('sqlite3').verbose();

// Conectar a la bbdd
const db = new sqlite3.Database('Datos_Del_Formulario.db');

// Contenedores de datos
var nombre, nacimiento, telefono, correo;

nombre = document.getElementById('nombre');
nacimiento = document.getElementById('nacimiento');
telefono = document.getElementById('telefono');
correo = document.getElementById('correo');

function guardar_datos(){
	console.log(nombre.value);

	// Insertar datos
	const instruccion = `
		INSERT INTO Formulario(Nombre, Nacimiento, Telefono, Correo)
		VALUES(#{nombre.value} , #{nacimiento.value}, #{telefono.value}, #{correo.value})`;

	// Ejecutar
	db.serialize(() => {
		db.run(instruccion, (err) => {

			if (err){
				console.error('Error al insertar datos:', err.message);
			}
		});
	});

	// Cerrar bbdd
	db.close();
}