const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith(".ladis")) {
     message.channel.send("k onda perris");
   } 
   if(message.content.startsWith(".sorteo")) {
       message.channel.send("toy chikita pero te dejo una página https://www.sortea2.com/sorteos");
   }
   // acá empieza enviar a otros canales
   if(message.content.startsWith(".pelis")) {
     let texto = message.content.slice(7)

     client.channels.resolve("703845151671320638").send(texto);
   }
   if(message.content.startsWith(".general")) {
    let texto = message.content.slice(9)

    client.channels.resolve("806945431724359701").send(texto);
  }
  if(message.content.startsWith(".musikita")) {
    let texto = message.content.slice(10)

    client.channels.resolve("886441715219714048").send(texto);
  }
  if(message.content.startsWith(".series")) {
    let texto = message.content.slice(8)

    client.channels.resolve("750125792729497651").send(texto);
  }
  if(message.content.startsWith(".recetas")) {
    let texto = message.content.slice(9)

    client.channels.resolve("749071129087443074").send(texto);
  }
  if(message.content.startsWith(".bandas")) {
    let texto = message.content.slice(8)

    client.channels.resolve("771941146929791018").send(texto);
  }
  if(message.content.startsWith(".videosyt")) {
    let texto = message.content.slice(10)

    client.channels.resolve("793894202991443968").send(texto);
  }
  if(message.content.startsWith(".cursos")) {
    let texto = message.content.slice(8)

    client.channels.resolve("880250115837804544").send(texto);
  }
  if(message.content.startsWith(".costura")) {
    let texto = message.content.slice(9)

    client.channels.resolve("891877433505112076").send(texto);
  }
  //listo (?)
  if(message.content.startsWith(".comandos")) {
    message.channel.send("Esto es lo que tenemos hasta ahora: | .ladis | .comandos | .sorteo | Mandar mensaje a otro canal: .general .musikita .pelis .series .recetas .bandas .videosyt .cursos .costura |");
  }
 });

 
 client.login("OTgyODM3NzAxNTE2NTkxMTg0.GMFM2h.Ng9_1idknogbx9SPYTEuOFVBr419jUssAvijcI");