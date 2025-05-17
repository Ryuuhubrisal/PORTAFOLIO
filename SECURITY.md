# 🛡️ **Política de Seguridad – Portafolio Profesional de Ryuuhubrisal**

Este proyecto ha sido creado siguiendo **estándares modernos de desarrollo frontend**, con un enfoque en rendimiento, estética y **seguridad básica del lado del cliente**. Aunque no maneja datos sensibles, se aplican buenas prácticas para mitigar posibles riesgos y malas implementaciones derivadas del uso del portafolio.

---

## 📬 **Reporte de Vulnerabilidades**

Si encuentras alguna vulnerabilidad o comportamiento inseguro, puedes ayudar a mejorar el proyecto **reportándolo** directamente:

- **📧 Correo de contacto:** [ryuuhubrisal@proton.me](mailto:ryuuhubrisal@proton.me)  
- **🧾 Asunto sugerido:** `[Vulnerabilidad] - Portafolio Ryuuhubrisal`  
- **📎 Incluir:** Descripción detallada, pasos para reproducirlo, entorno (navegador/SO), y capturas de pantalla si es posible.

---

## 🔍 **Áreas Sensibles y Consideraciones**

### ⚙️ 1. **Dependencias de terceros**
Este portafolio utiliza **librerías externas** que están sujetas a sus propias políticas de seguridad. A continuación, se detallan las dependencias más relevantes:

| Librería         | Uso                 | Licencia |
|------------------|---------------------|----------|
| `particles.js`    | Fondo animado       | MIT      |
| `animate.css`     | Transiciones        | MIT      |

✅ **Fuente oficial**: Todas las librerías se obtienen de **fuentes oficiales** (CDNs verificadas o versiones locales auditadas).

---

### 🧠 2. **Persistencia local**
- El portafolio guarda la **preferencia de tema** (claro/oscuro) utilizando `localStorage`.
- **No se guarda ningún dato personal**, ni información de navegación o métricas de usuario.

**Consejo para forks**: Si decides agregar formularios o almacenamiento de datos en tu fork, asegúrate de implementar las siguientes prácticas:
- **Sanitización y validación de entradas**: Asegura que todos los datos introducidos por el usuario sean verificados.
- **Protección contra ataques XSS (Cross-Site Scripting)**: Usa medidas para evitar que scripts maliciosos se inyecten en el contenido de tu página.
- **Revisión de contenido cargado dinámicamente**: Verifica cualquier contenido que provenga de fuentes externas.

---

### 🧱 3. **Integridad del código**
- **No se utiliza ofuscación ni minificación automática** que oculte funciones críticas.
- El código es **transparente, modular y está documentado** adecuadamente.
- Se alienta el uso **educativo o personal**, pero **no se debe utilizar como base comercial sin autorización** (ver licencia).

---

## 🔐 **Recomendaciones para Forks o Reutilización**

Si deseas reutilizar este proyecto o realizar un fork, te recomiendo seguir estas buenas prácticas:

- **Actualiza las dependencias** regularmente para asegurar que tu proyecto esté protegido contra vulnerabilidades conocidas.
- Si implementas **formularios** o **backends**, aplica las reglas de seguridad básicas de **OWASP**.
- **No expongas variables sensibles** en el front-end (por ejemplo, claves de API, rutas protegidas, etc.).
- Si estás utilizando este proyecto como plantilla, evita copiar **datos de contacto reales**.

---

## 🔒 **Buenas Prácticas Aplicadas**

✅ Arquitectura HTML **semántica**  
✅ Separación de **estilos** y **lógica JS**  
✅ Uso limitado de `localStorage` para preferencias de tema  
✅ Efectos **no bloqueantes**, optimizados para el rendimiento  
✅ No requiere conexión a servidores externos propios  
✅ **Libre de recopilación de datos personales**

---

## 🔁 **Ciclo de Actualizaciones y Revisión**

Este portafolio se mantiene y actualiza **periódicamente**. Si detectas que alguna dependencia se ha quedado obsoleta o insegura, puedes contribuir **con una sugerencia o pull request**.

---

## ❌ **Exclusión de Responsabilidad**

Este software se proporciona **“tal cual”**, sin garantías de ningún tipo. No se asume ninguna responsabilidad por su uso incorrecto, adaptaciones inseguras ni modificaciones que alteren su propósito original.

---

## 📃 **Licencia y Uso**

Este proyecto está licenciado bajo **MIT con Restricción Comercial**.

Puedes:
- Usarlo y modificarlo con fines **personales**, **educativos** o **demostrativos**.

No puedes:
- Usarlo con fines **comerciales**, revenderlo o incluirlo en productos o servicios pagos **sin autorización expresa del autor**.

🔗 **Contacto para licencias extendidas**: [ryuuhubrisal@proton.me](mailto:ryuuhubrisal@proton.me)

---

Gracias por contribuir a un desarrollo **seguro y ético**. 🙌  
**Ryuuhubrisal** – [GitHub](https://github.com/Ryuuhubrisal)
