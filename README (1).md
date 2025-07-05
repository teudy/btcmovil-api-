# BTCMovil API v2 🟠

Este es el backend oficial de la plataforma **BTCMovil**, con minería real desde navegador, historial, persistencia de datos y retiros automáticos o manuales (incluyendo vía Qik Banco).

---

## 🚀 Características

- Minería simulada conectada a la wallet del usuario
- Balance guardado por dirección BTC
- Historial completo por wallet (minado y retiros)
- Retiros reales vía API (BTC) o manuales vía Qik Banco RD
- Notificación por correo al administrador
- Dockerfile listo para Render

---

## 📦 Rutas de la API

### `POST /minar`

Minar una cantidad específica para una wallet.

```json
{
  "wallet": "1ABC...",
  "cantidad": 0.00001
}
```

---

### `GET /saldo/:wallet`

Consultar saldo de una wallet.

---

### `POST /retiro`

Solicitar retiro en BTC.

```json
{
  "wallet": "1ABC...",
  "monto": 0.000075
}
```

---

### `GET /historial/:wallet`

Ver historial completo (minado y retiros).

---

### `POST /retiro-qik`

Enviar solicitud de retiro en pesos DOP a Qik Banco (se procesa manualmente).

```json
{
  "wallet": "1ABC...",
  "montoDOP": 1000,
  "cuentaQik": "8291234567"
}
```

---

## 🛠️ Cómo desplegar en Render

1. Sube este proyecto a GitHub
2. Crea un nuevo Web Service en Render
3. Tipo de build: Docker
4. Root directory: (vacío)
5. Start Command: `npm start`

¡Y listo!

---

## 📧 Notificaciones

Para habilitar el envío de correos automáticos:
- Crea una clave de aplicación en tu cuenta de Gmail
- Modifica `index.js` en la parte de `nodemailer`:
```js
auth: {
  user: "tucorreo@gmail.com",
  pass: "clave-de-app"
}
```

---

## ✨ Creado por Teudy Marte y asistido por ChatGPT
