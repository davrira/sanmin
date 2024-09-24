1-----Crear una interfaz "Empleado" con los campos: nombre, apellido, telefono.

2------Crear un servicio de Empleados que incluya:
-->Lista de empleados de tipo Empleado(Interfaz)
-->Metodo para agregar nuevos usuarios y ordernarlos alfabeticamente ---
-->Metodo que retorne la lista de empleados (de preferencia como Observable)

3-----Crear Componente que:
-->Consuma el servicio de empleados para obtener la lista de empleados.
-->Muestre en una tabla la lista de empleados agregados. (Usar pipe async si se utilizó observable)

4-----En main.ts:
-->Consumir el servicio de empleados.
-->Crear un formulario que pida los datos del empleado.
-->Dar un valor inicial a los campos.
-->Agregar boton que al presionarlo utilice el servicio para agregar el nuevo empleado y limpie los campos del formulario.
-->Agregar en la interfaz el componente que muestra la lista de empleados.