const {WebClient } = require ('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET || '563d2caf49bdcb1e2818f6e434df65df';
const slackToken = process.env.SLACK_TOKEN || 'xoxb-1410845224962-1498589771638-x16b4ydVMjOQ94D4w41A4Vuv';
const port = process.env.PORT || 3000;
const slackEvents = createEventAdapter(slackSigningSecret);
const slackClient = new WebClient(slackToken);
const webhooks= process.env.webhooks||'https://hooks.slack.com/services/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';
const token=process.env.TOKEN|| 'GTE95dxmwGjashtV40zTbSy8';
const messages = require('./messages.js');

    slackClient.chat.postMessage({
        channel: 'pomoc',
        text: 'Witaj przywitaj sie z @Bot za pomocą "siema" , "hello" ,"hey" lub "hej". Wypróbuj też śmieszne kawały lub suchary wpisująć HUMOR a bot przyśle ci ciekawy tekst :hugging_face:'
        
    })
 

slackEvents.on('app_mention',(event) => {
    console.log(`Got message from user ${event.user}: ${event.text}`);
   
     
    if (event.text.includes('siema') + event.text.includes('hello') + event.text.includes('hey') + event.text.includes('hej')) {
   
        const emojis = [':smile:', ':smiley:']; 
        const emoji = Math.floor(Math.random() * emojis.length);
        
        (async () => {
            try {

                await slackClient.chat.postMessage({
                    channel: event.channel,
                    text: `Hello <@${event.user}>! Podaj co cię dręczy , jaka choroba lub problem ? A spróbuje ci doradzić co masz zrobić  ${emojis[emoji]}`,
                     
                   
                })
               
                   
            } catch(error) {
                console.error.data
            }
                  
            
        })();
     
    }
   
       
if (event.text.includes('Mam depresje') + event.text.includes('mam depresje') + event.text.includes('może mam  depresje')) {
    
    messages.depresja();
}

if (event.text.includes('depresja moja jest ') + event.text.includes('moim problemem jest depresja')){
   messages.pytanie_depresja();
}
    if (event.text.includes('zadowolony')) {
        messages.zadowolony();
    }
    if (event.text.includes('jestem nie zadowolony')) {
        messages.nie_zadowolony();
    }
  if(event.text.includes('smutek') + event.text.includes('smutno mi') + event.text.includes('mam smuteczek')){
    messages.pytanie_smutek();
  }
  if(event.text.includes('odczuwam go po stracie bliskiej osoby')){
    messages.smutek_1();
  }
  if(event.text.includes('rozstałam się z kimś') + event.text.includes('rozstałem się z kimś')){
    messages.smutek_2();
  }
  if(event.text.includes('moim problemem jest samotność')){
    messages.pytanie_samotnosc();
  }
    if (event.text.includes('tak nie mam dziewczyny') + event.text.includes('nie znalazłem jeszcze dziewczyny') + event.text.includes('nie mam  dziewczyny')){
        messages.samotnosc();
    }
            if (event.text.includes('Tak')) {
                messages.tak();
            
                 }
                 if (event.text.includes('Nie')) {
                    messages.nie();
                
                     }
if(event.text.includes('dziś mam zły dzień')){
    messages.pytanie_kiepskihumor();
}

if(event.text.includes('powód brzydka pogoda za oknem')){
    messages.pogoda_humor();
}
if(event.text.includes('wkurzające są nauczyciele w szkole') + event.text.includes('wkurzające są nauczyciele w budzie')){
    messages.nauczyciel_humor();
}

  if (event.text.includes('HUMOR')) {
      messages.humor();
      
  }
           
 
    
    
    
  })
  
  slackEvents.on('app_mention',(event) => {

    if (event.text.includes('przeklinam cię') + event.text.includes('spadaj') + event.text.includes('kurde')  + event.text.includes('bujaj się') + event.text.includes('kurwa')) {
    
    
        (async () => {
            try {
    
                await slackClient.chat.postMessage({
                    channel: event.channel,
                    text: `<@${event.user}>! proszę się wyrażać !! `,
                     
                   
                })
               
                   
            } catch(error) {
                console.error.data
            }
                  
            
        })();
        
    } 
    
  })
    
    
    slackEvents.on('error', console.error);
    slackEvents.start(port).then(() => {

            console.log(`Serwer wystartowal na porcie ${port}`)

        });

        
    
      
    




        

        

