Instale as dependencias com node 
execute node . 



# Enviando media como Sticker 
```
const sticker = MessageMedia.fromFilePath('/path/to/image.png');
chat.sendMessage(sticker, { sendMediaAsSticker: true });
``` 
Animated stickers are also supported, but it's worth noting that conversion to webp is done through ffmpeg. You'll need to have it installed if you want to send animated stickers that are not already in webp format. By default the ffmpeg path is set to ffmpeg, but if you have it installed in a different path, you can set it manually when creating the client like so:
``` 
const client = new Client({
    ffmpegPath: '/path/to/ffmpeg.exe'
});

```
`https://stackoverflow.com/questions/67913061/how-can-i-send-stickers-from-whatsapp-web-js-library` 