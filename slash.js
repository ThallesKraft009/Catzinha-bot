const registrar = require("./registrarCmds/function.js")


const ping = {
  name: "ping",
  description: "Pong!",
  type: 1
}


const comandos = [ping]


registrar(comandos)