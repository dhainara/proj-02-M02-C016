import express from "express"
import path from "path"

const __dirname = path.resolve(path.dirname(''))

console.log(__dirname)

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

const port = 3000

/*app.get("/", (req, res) => {
  res.send("Hello World");
});*/

app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`)
)

const infoPokemons = [
  {
    id: 1,
    number: "4",
    name: "Charmander",
    type: "Fogo",
    image: "charmander.gif",
    description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    height: "0.6m",
    weight: "8.5kg",
    category: "Lagarto",
    ability: "Water",
    weakness: "Água"
  }, {
    id: 2,
    number: "54",
    name: "Psyduck",
    type: "Água",
    image: "psyduck.gif",
    description: "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.",
    height: "0.8m",
    weight: "19.6kg",
    category: "Pato",
    ability: "Damp",
    weakness: "Grama"
  }, {
    id: 3,
    number: "1",
    type: "Grama",
    image: "bulbasaur.gif",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    height: "0.7m",
    weight: "6.9",
    category: "Seed",
    ability: "Overgrow",
    weakness: "Fogo"
  }, {
    id: 4,
    number: "48",
    name: "Gengar",
    type: "Inseto",
    image: "gengar.gif",
    description: "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
    height: "1.0m",
    weight: "30.0kg",
    category: "Insect",
    ability: "Compound Eyes, Tinted Lens",
    weakness: "Fogo"
  }, {
    id: 5,
    number: "74",
    name: "Steelix",
    type: "Pedra",
    image: "steelix.gif",
    description: "Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.",
    height: "0.4m",
    weight: "20.0kg",
    category: "Pedra",
    ability: "Cabeçada de pedra",
    weakness: "Aço"
  }, {
    id: 6,
    number: "7",
    name: "Squirtle",
    type: "Water",
    image: "squirtle.gif",
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    height: "0.5m",
    weight: "9,0kg",
    category: "Pequena Tartaruga",
    ability: "Torrent",
    weakness: "Elétrico"
  },
]

app.get("/", (req, res) => {
  res.render('index.ejs', { infoPokemons })
})

