import express from "express";

const app = express();

// Configura o EJS como motor de views
app.set("view engine", "ejs");

// pasta onde ficam os arquivos .ejs
app.set("views", "./views");

const times = [
  { id: 1, nome: "Grêmio", estadio: "Arena", cidade: "Porto Alegre" },
  { id: 2, nome: "Inter", estadio: "Beira-Rio", cidade: "Porto Alegre" },
  { id: 3, nome: "Flamengo", estadio: "Maracanã", cidade: "Rio de Janeiro" }
];

app.get("/", (req, res) => {
  res.render("index", { mensagem: "Bem-vindo ao Catálogo de Times!" });
});

app.get("/times", (req, res) => {
  res.render("times", { times });
});

app.get("/times/:id", (req, res) => {
  // o parâmetro da URL chega como texto, por isso é convertido para número
  const id = Number(req.params.id);
  const time = times.find(t => t.id === id);

  if (!time) {
    res.send("Time não encontrado.");
  } else {
    res.render("detalhe", { time });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
