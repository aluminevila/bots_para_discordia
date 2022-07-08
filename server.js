const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const config = require("./config.json");

let prefix = config.prefix

client.on("ready", () => {
  console.log("listo!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if (command === 'ladis') {
    message.channel.send("k onda perris");
  } else
  
  if (command === 'comandos') {
    message.channel.send({embed: {
      color: 3447003,
      description: "Esto es lo que tenemos hasta ahora: | .ladis | .comandos | .sorteo | Mandar mensaje a otro canal: .general .musikita .pelis .series .recetas .bandas-artistas .videosyt .jueguitos .cursos .costura | .compatibilidad fulanito pepito |"
    }
    });
  } else

  if (command === 'compatibilidad') {
    let pepito = args[0];
    let fulanito = args[1];
    let numRandom = Math.floor(Math.random() * 99);

    message.channel.send(`La compatibilidad entre ${pepito} y ${fulanito} es de ${numRandom}%`);
  } else

  if (command === 'sorteo') {
    let rand = Math.floor(Math.random()*args.length);
    let rValue = args[rand];

    message.channel.send(rValue);
  } else 

  
  if (command === 'general') {
    let texto = args.join(" ");
    client.channels.resolve("806945431724359701").send(texto);
  } else
  if (command === 'musikita') {
    let texto = args.join(" ");
    client.channels.resolve("886441715219714048").send(texto);
  } else
  if (command === 'pelis') {
    let texto = args.join(" ");
    client.channels.resolve("703845151671320638").send(texto);
  } else
  if (command === 'series') {
    let texto = args.join(" ");
    client.channels.resolve("750125792729497651").send(texto);
  } else
  if (command === 'recetas') {
    let texto = args.join(" ");
    client.channels.resolve("749071129087443074").send(texto);
  } else
  if (command === 'bandas-artistas') {
    let texto = args.join(" ");
    client.channels.resolve("771941146929791018").send(texto);
  } else
  if (command === 'videosyt') {
    let texto = args.join(" ");
    client.channels.resolve("793894202991443968").send(texto);
  } else
  if (command === 'jueguitos') {
    let texto = args.join(" ");
    client.channels.resolve("857085467002535986").send(texto);
  } else
  if (command === 'cursos') {
    let texto = args.join(" ");
    client.channels.resolve("880250115837804544").send(texto);
  } else
  if (command === 'costura') {
    let texto = args.join(" ");
    client.channels.resolve("891877433505112076").send(texto);
  }
});




client.login(config.token);