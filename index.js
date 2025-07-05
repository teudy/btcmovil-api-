const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simulador de base de datos en memoria
const usuarios = {};

// Ruta principal
app.get("/", (req, res) => {
  res.send("🚀 Bienvenido al Backend de BTCMovil");
});

// Ruta para simular minería
app.post("/minar", (req, res) => {
  const { wallet, cantidad } = req.body;
  if (!wallet || !cantidad) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  if (!usuarios[wallet]) usuarios[wallet] = 0;
  usuarios[wallet] += cantidad;
  res.json({ wallet, nuevoSaldo: usuarios[wallet] });
});

// Ruta para consultar saldo
app.get("/saldo/:wallet", (req, res) => {
  const wallet = req.params.wallet;
  const saldo = usuarios[wallet] || 0;
  res.json({ wallet, saldo });
});

// Ruta para simular retiro
app.post("/retiro", (req, res) => {
  const { wallet, monto } = req.body;
  if (!wallet || !monto) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  if (!usuarios[wallet] || usuarios[wallet] < monto) {
    return res.status(400).json({ error: "Fondos insuficientes" });
  }

  usuarios[wallet] -= monto;
  res.json({ wallet, saldoRestante: usuarios[wallet], mensaje: "Retiro procesado (simulado)" });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor iniciado en puerto ${PORT}`);
});