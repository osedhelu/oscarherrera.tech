# Diagramas de Secuencias

## Cliente Diagrama

```mermaid
---
title: Cliente 
---

sequenceDiagram
 actor Cliente
 participant Sistema
 Cliente->>+Sistema: Ingresar al sistema
 Sistema-->>-Cliente: Mostrar pantalla de inicio
 Cliente->>+Sistema: Buscar servicios
 Sistema-->>-Cliente: Mostrar servicios disponibles
 Cliente->>+Sistema: Seleccionar un servicio
 Sistema-->>-Cliente: Mostrar detalles del servicio
 Cliente->>+Sistema: Ver disponibilidad del médico
 Sistema-->>-Cliente: Mostrar disponibilidad del médico
 Cliente->>+Sistema: Seleccionar una fecha
 Sistema-->>-Cliente: Confirmar disponibilidad de la fecha
 Cliente->>+Sistema: Reservar una cita
 Sistema-->>-Cliente: Confirmar reserva de cita
 Cliente->>+Sistema: Pagar
 Sistema-->>-Cliente: Confirmar pago
 Cliente->>+Sistema: Confirmar cita
 Sistema-->>-Cliente: Confirmar confirmación de cita
 Cliente->>+Sistema: Finalizar
 Sistema-->>Cliente: Confirmar finalización
 Sistema-->>-Cliente: Mostrar pantalla de agradecimiento



```

```mermaid
sequenceDiagram
   actor Doctor
   participant Sistema
   Doctor->>+Sistema: Iniciar sesión
   Sistema-->>-Doctor: Mostrar calendario de citas
   Doctor->>+Sistema: Seleccionar cita para atender
   Sistema->>-Doctor: Mostrar detalles de la cita
   Doctor->>+Sistema: Finalizar cita
   Sistema->>-Doctor: Notificar finalización de la cita
   Doctor->>+Sistema: Solicitar agregar nueva cita
   Sistema->>-Doctor: Mostrar opciones para agregar nueva cita
   Doctor->>+Sistema: Solicitar eliminar cita
   Sistema->>-Doctor: Notificar solicitud de eliminación de cita

```

## Administrador Diagrama

```mermaid
---
title: Administrador 
---
sequenceDiagram
 actor Administrador
 participant Sistema

 Administrador->>+Sistema: Iniciar sesión con credenciales
 Sistema-->>-Administrador: Mostrar lista de usuarios
 Administrador->>+Sistema: Seleccionar usuario
 Sistema-->>-Administrador: Mostrar detalles del usuario
 Administrador->>+Sistema: Actualizar o eliminar usuario
 Sistema-->>-Administrador: Confirmar acción
 Administrador->>+Sistema: Verificar pagos
 Sistema-->>-Administrador: Mostrar estado de pagos



```

## Profecional de la Salud Diagrama

```mermaid
---
title: Profecional de la salud
---
sequenceDiagram
    actor ProfesionalSalud
    participant Sistema
    ProfesionalSalud->>+Sistema: RF01 Registrar servicios a ofrecer
    Sistema-->>-ProfesionalSalud: Confirmación RF01
    ProfesionalSalud->>+Sistema: RF02 Registrar disponibilidad de agenda
    Sistema-->>-ProfesionalSalud: Confirmación RF02
    ProfesionalSalud->>+Sistema: RF03 Consultar información de usuarios
    Sistema-->>-ProfesionalSalud: Resultado RF03
#Sistema-->> Sistema: actualizcion

```

# Diagrama  De estados

## Diagrama de Cliente

```mermaid
---
title: Cliente
---
stateDiagram-v2
   Inicio --> Buscando_servicios: Ingresar a la plataforma
   Buscando_servicios --> Seleccionando_servicio: Seleccionar un servicio
   Seleccionando_servicio --> Reservando_cita: Seleccionar fecha y hora
   Reservando_cita --> Pagando: Confirmar detalles de la cita
   Pagando --> Confirmando_cita: Completar pago
   Confirmando_cita --> Finalizando: Confirmar cita
   Finalizando --> Fin: Cita reservada


```

```mermaid
---
title: Profecional de la Salud 
---
stateDiagram
   [*] --> Disponible: Verificar disponibilidad
   Disponible --> VerAgenda: Ver agenda
   VerAgenda --> AgregarCita: Agregar nueva cita
   AgregarCita --> ModificarCita: Modificar cita
   ModificarCita --> EliminarCita: Eliminar cita
   EliminarCita --> ConsultarHistorial: Consultar historial clínico del paciente
   ConsultarHistorial --> GenerarInforme: Generar informe de citas
   GenerarInforme --> [*]: Cerrar sesión

```

```mermaid
---
title: Administrador
---
stateDiagram
  [*] --> Inicio: Iniciar sesión como administrador
  Inicio --> ConsultarProfesionales: Consultar profesionales registrados
  ConsultarProfesionales --> ModificarProfesional: Modificar un profesional
  ModificarProfesional --> EliminarProfesional: Eliminar un profesional
  EliminarProfesional --> ConsultarClientes: Consultar clientes registrados
  ConsultarClientes --> ModificarCliente: Modificar un cliente
  ModificarCliente --> EliminarCliente: Eliminar un cliente
  EliminarCliente --> ConsultarAgendaProfesional: Consultar agenda de un profesional
  ConsultarAgendaProfesional --> ConsultarAgendaCliente: Consultar agenda de un cliente
  ConsultarAgendaCliente --> ConsultarServicios: Consultar servicios solicitados
  ConsultarServicios --> GenerarInforme: Generar informe de profesionales, clientes y servicios más solicitados
  GenerarInforme --> CerrarSesion: Cerrar sesión
```

```teniendo en cuenta esto```Un sistema de reserva de citas médicas debe tener una serie de funcionalidades para cumplir con los requerimientos de los usuarios y mejorar la eficiencia y la experiencia del cliente. Aquí te presento algunas funcionalidades que podrías considerar:

Registro de citas y pacientes: Los usuarios deben poder crear, eliminar y modificar las citas de sus pacientes de manera rápida y sencilla 1.
Cita online: Los pacientes deben poder reservar sus citas directamente desde la web, lo que facilita el acceso y la comodidad para los usuarios 1.
Módulo de agendas: Los profesionales de la salud deben poder crear agendas para cada servicio, así como establecer diferentes permisos. Esto permite a los usuarios ver la disponibilidad de los profesionales y reservar citas en los horarios que les convengan 1.
Historiales médicos: Los sistemas deben permitir el almacenamiento y la consulta de los historiales médicos de los pacientes de manera segura 1.
Caja y facturación: Los sistemas deben ser capaces de generar facturas y presupuestos, y llevar al día toda la contabilidad de la clínica 1.
Análisis estratégicos: Los sistemas deben transformar todos los datos de la aplicación en información que sea útil para la toma de decisiones en la clínica 1.
Módulo de marketing: Los sistemas deben permitir la realización de campañas de mailing y fidelización de los clientes 1.
Gestión de la base de datos de pacientes: Los sistemas deben permitir el agregado automático de pacientes que reservan citas a la lista de pacientes, lo que facilita la administración y el seguimiento de los pacientes 2.
Recordatorios automáticos: Los sistemas deben ser capaces de enviar recordatorios automáticos a los pacientes para reducir la tasa de inasistencias 3.
Sistema de caja: Los sistemas deben permitir revisar el estado de las finanzas en tiempo real y sin errores 3.
Estas son solo algunas de las funcionalidades que podrías considerar para tu sistema de reserva de citas médicas. Recuerda que las necesidades específicas pueden variar dependiendo de los requerimientos de tu clínica o hospital.
quiero que tengas en cuenta el al celecionar la citas el medico debe mostrar en el sistema que dia tiene disponible  y el cliente debe saber cuendo el puede el debe seleccionar la fecha  

```
