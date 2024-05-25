const { Client ,AuthStrategy, LocalAuth ,MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        args: [ '--no-sandbox', '--disable-gpu', ],
    },
    webVersionCache: { type: 'remote', remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html', }
});

client.on('ready', () => {
    console.log('Client is ready!');
});
 
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('message_create', message => {
	var mensagem = message.body;
    if (mensagem.toUpperCase() === ".OI"){
        console.log(message.body);
        client.sendMessage(message.from, 'Olá, eu sou o Bot do Fx e meu dono já vai te responder ^^');
        message.reply('Você me mandou essa mensage e estou respondendo ela');
    }

});

client.on('message_create', message => {
    var mensagem = message.body;
    if (mensagem.toUpperCase() === ".GOSTOSO"){
        console.log(message.body);
        client.sendMessage(message.from, 'Gostosa é vc delicia :9');
        client
    }
});
client.on('message_create', message => {
    var mensagem = message.body;
    if (mensagem.toUpperCase() === ".OPA"){
        console.log(message.body);
        client.sendMessage(message.from, 'Olá, eu sou o Bot do Fx e meu dono já vai te responder ^^');
        message.reply('Você me mandou essa mensage e estou respondendo ela');
    }
});
client.on('local_session_saved', () => {
    client.sendMessage('Sessão Salva com sucesso! ');
    console.log('Sessão salva com sucesso!');
});

client.on('message_create', message => {
    var mensagem = message.body;
    if (mensagem.toUpperCase() === ".QUEM E VOCE"){
        console.log(message.body);
        client.sendMessage(message.from, `Olá meu Nome é Fabricius tenho 27 anos e sou Desenvolvedor FullStack .Net.
                 Tenho vivencia de projetos web envolvendo .Net do 3.1 ao 8 e Frameworks Front-end como Angular.
                  Possuo também amplos conhecimentos de padrões arquiteturais e Design Patterns que proporcionam qualidade e reusabilidade de código.
                  Estou disponível para consultorias e desenvolvimentos de sites, sistemas web e automações.`);
    }
});
client.on('message_create', async (msg) => { 
    let mensagem = msg.body;
    if (mensagem.toUpperCase()  === ".FIG"){
        console.log("Comando .fig Executado")
        const chat = await  msg.getChat(); //Ler o chat da pessoa que enviou a mensagem
        console.log("Chat" + chat);
        let user =  await msg.getContact(); //Obter COntato da Mensagem
        console.log("User" + chat);
        console.log(`Comando .Fig Executado Cliente id: @${user.id.user}` );
        if (msg.hasMedia) {
            const media =  await msg.downloadMedia();
            // do something with the media data here
            await msg.reply(media ,undefined, {"sendMediaAsSticker": true});
        }
    }
    
});
//Mencionar todos os usuários do grupo
    client.on('message_create',async  (msg) => {
    let mensagem = msg.body;
    if (mensagem === '.todos') {
        console.log("Comando !todos Executado");
        const chat = await  msg.getChat();
        console.log("Chat" + chat);
        console.log("Participantes: " + chat.participants.lenght());
        console.log("Participantes: " + chat.participants);
        let text = '';
        let mentions = [];

        for (let participant of chat.participants) {
            mentions.push(`${participant.id.user}@c.us`);
            text += `@${participant.id.user} `;
        }

        await chat.sendMessage(text, { mentions });
    }
});

client.initialize();