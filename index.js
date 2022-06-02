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
let mensagem = ""


app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`)
)

const infoPokemons = [
  {
    id: 1,
    number: "4",
    name: "Charmander",
    type: "Fogo",
    image: "https://66.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif",
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
    image: "https://i.gifer.com/origin/d8/d80f886437ed5e505648c5c36ce17fcc_w200.gif",
    description: "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.",
    height: "0.8m",
    weight: "19.6kg",
    category: "Pato",
    ability: "Damp",
    weakness: "Grama"
  }, {
    id: 3,
    number: "1",
    name: "Bulbassauro",
    type: "Grama",
    image: "https://i.gifer.com/origin/fe/fe4ebd8a9c0547e94000a9c759acf591.gif",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    height: "0.7m",
    weight: "6.9",
    category: "Seed",
    ability: "Overgrow",
    weakness: "Fogo"
  },  {
    id: 4,
    number: "7",
    name: "Squirtle",
    type: "Water",
    image: "https://66.media.tumblr.com/tumblr_ma4ft6OXxw1rfjowdo1_500.gif",
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    height: "0.5m",
    weight: "9,0kg",
    category: "Tartaruga",
    ability: "Torrent",
    weakness: "Elétrico"
  },
]

let pokemon = undefined

app.get("/", (req, res) => {
  res.render('index.ejs', { infoPokemons, pokemon, mensagem })
})

app.get('/detalhes/:id/', (req, res) => {
  const id = +req.params.id;
  pokemon = infoPokemons.find((pokemon) => pokemon.id == id);
  res.redirect('/#banner_Cad')
})

app.post('/criar', (req, res) => {
  const pokemon = req.body
  pokemon.id = infoPokemons.length + 1
  infoPokemons.push(pokemon)

  mensagem = `Pokemon criado com sucesso!`

  res.redirect("/#card_poke")
})

app.post('/update/:id', (req, res) => {
  mensagem = `Pokemon editado com sucesso!`
  const id = +req.params.id - 1
  const novoPokemon = req.body
  novoPokemon.id = id + 1
  infoPokemons[id] = novoPokemon
  pokemon = undefined

  res.redirect('/#card_poke')
})

app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1

  delete infoPokemons[id]

  mensagem = `Pokemon deletado com sucesso!`
  console.log(infoPokemons)
  res.redirect('/#card_poke')
})

