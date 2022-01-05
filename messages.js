const {WebClient } = require ('@slack/web-api');
const slackToken = process.env.SLACK_TOKEN || 'xoxb-1410845224962-1498589771638-x16b4ydVMjOQ94D4w41A4Vuv';
const slackClient = new WebClient(slackToken);
const link = new URL(`https://www.sympatia.onet.pl`);
const link_2 = new URL(`https://www.idates.com/pl-PL`);
const link_3 = new URL(`https://pl-pl.facebook.com/`);
const ksiazka =new URL(`https://www.empik.com/samo-sedno-niesmialosc-zmien-myslenie-i-odwaz-sie-byc-soba-staniek-magdalena,p1080053915,ksiazka-p`);
const link_4 = new URL(`https://www.netflix.com/pl`);
const link_5 = new URL(`https://onlinewideo.pl/film/caly-on/`);
const tab = ['Przychodzi baba do lekarza: - Panie doktorze, czy ja wyzdrowieję ?   A wie pani, że sam jestem ciekawy.','Co robi lekarz na polu minowym ?? ... Witaminy','Co mówi terrorysta do dziecka ?? ...Wysadzę cię pod szkoła.','Po co idzie ubezpieczyciel do lasu ?? ...  Polisa','Jaka jest ulubiona zemsta cukiernika ?? ... Słodka',];
const random = Math.floor(Math.random() * tab.length);

function humor(){
 
    slackClient.chat.postMessage({
        channel:'pomoc',
        text:`${tab[random]}`,
    })
    
}


function depresja(){
  
       slackClient.chat.postMessage({
        channel: 'pomoc',
        text: `czym jest spowodowana twoja depresja ? :thinking_face: `,
         
       
    })   

}

function pytanie_depresja() {
    slackClient.chat.postMessage({
        channel: 'pomoc',
        text: `Musisz odnaleźć w sobie dobre wspomnienia które dają radość , wyjśc na zewnątrz do ludzi  porozmawiać z nimi. Czy taka porada cię satysfakconuje ?? Odpisz że jesteś zadowolony chyba że nie to postaram się inaczej ująć słowa. :smirk:   `,
         
       
    })
       
   }
   function zadowolony(){
    slackClient.chat.postMessage({
        channel: 'pomoc',
        text:`Dziękuje że postarałem ci pomóc w tym małym stopniu . :relaxed: `,
    })
   }
   function nie_zadowolony(){
    slackClient.chat.postMessage({
        channel: 'pomoc',
        text:`Aby wyjść z depresji trzeba z nią walczyć, trzeba zająć się jakimś hobby albo czymś co cie interesuje najbardziej :smirk:`,
    })
   }

function pytanie_smutek() {
    slackClient.chat.postMessage({
        channel: 'pomoc',
        text:`Dlaczego smutno ci ? Czemu odczuwasz smutek ?? :thinking_face: :unamused: `,
    })
    
}
function smutek_1(){
    slackClient.chat.postMessage({
        channel: 'pomoc',
        text:`Ojej to współczuje ci musi być tobie ciężko  :frowning:  , polecam porozmawiać z kimś z rodziny albo udać się do psychologa.Dziękuje że skontaktowałeś się ze mną służe pomocną dłonią :wave:  `,
    })


    
}
function smutek_2(){
    slackClient.chat.postMessage({
        channel: 'pomoc',
        text:`O kurcze  to przykro mi :sleepy: , może nie wszystko stracone  przemyśl jeszcze to  hmm . :confused: `,
    })

}


function pytanie_samotnosc(){
    
    slackClient.chat.postMessage({
            channel: 'pomoc',
            text:` Czy twoja samotność spowodowana jest brakiem dziewczyn czy strachem przed ludźmi ??  `,
        })
       
      
}
function samotnosc() {
    slackClient.chat.postMessage({
        channel: 'pomoc',
        text:`Polecam tą stronkę ${link}  albo tą ${link_2} Czy ta odpowiedź cię zatysfakcjonuje odpisz tak lub nie ?? `,
        
    })
    
}
function tak() {
    slackClient.chat.postMessage({
        channel:'pomoc',
        text: 'Dziękuje ze ci pomogłem :smile:'
    })

}
function nie(){
    slackClient.chat.postMessage({
        channel:'pomoc',
        text:`Hmm polecam ci także  grupy spoełecznościowe na ${link_3} albo przeczytać książkę  jeśli masz problem z nieśmiałośćią ${ksiazka}   :wink:`,

    })

}
function pytanie_kiepskihumor() {
    slackClient.chat.postMessage({
        channel:'pomoc',
        text:'Czemu masz zły lub kiepski dzień . Co jest powodem takiego samopoczucia ?? :thinking_face:',
    })
}
function pogoda_humor(){
    slackClient.chat.postMessage({
        channel:'pomoc',
        text:`Hmm na pogode nie poradzimy nic :neutral_face: ale na poprawę humoru polecam komedie na ${link_4} lub ${link_5} . Myślę że tym poprawi ci się humor :smile: :+1:`,
    })
}
function nauczyciel_humor(){
    slackClient.chat.postMessage({
        channel:'pomoc',
        text:'No wiem rozumiem cię ale trzeba stawiać czoło wymaganiom. Głowa do góry kolejny dzień będzie lepszy . ',
    })
}

module.exports={depresja,pytanie_depresja,pytanie_smutek,smutek_1,smutek_2,pytanie_samotnosc,samotnosc,tak,nie,humor,pytanie_kiepskihumor,nauczyciel_humor,pogoda_humor,zadowolony,nie_zadowolony}