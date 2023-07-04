document.addEventListener('DOMContentLoaded', function() {
  //searching for the img class:
    const img = document.querySelector('.imgvertical');
    const urlParams = new URLSearchParams(window.location.search);
    //is getting the id from the url:
    const id = urlParams.get('id');
    //corresponding img path to id
    const imageSources = {
        '1': {
          src: './Img/horizontalphotos/1633988828139-cropped.jpg',
          bg:"#141311", h1:"Urban Exploration", p:"Twee mannen zaten op een trap in het midden van een verlaten gebouw, omringd door graffiti die in de loop der jaren werd geschilderd. De lucht was muf en het geluid van hun voetstappen galmde door de lege ruimte. In de stilte van het gebouw lieten ze zichzelf aanwezig zijn in het moment en namen ze elk detail van hun omgeving in zich op.\n\n De ramen lieten genoeg licht binnen om de graffiti te verlichten en ze konden de duisternis onder aan de trap zien. De mannen zaten daar, in gedachten verzonken, totdat ze werden onderbroken door het geluid van een verre sirene. Het was een herinnering dat ze niet alleen waren en dat ze moesten vertrekken voordat ze betrapt werden op verboden terrein.", creator:"In samenwerking met Loek Lutgens"
        },
        '2': {
          src: './Img/horizontalphotos/Queen Endgame_11.jpg',
          bg:"#141311", h1:"De val van de koningin", p:"Het schaakbord op de achtergrond, onscherp, vertegenwoordigt het grotere spel van het leven en de worstelingen waarmee men wordt geconfronteerd. De zwarte koningin en het paard, die in het midden van de foto staan, symboliseren het individu en de keuzes die zij maakt. De koningin valt op de grond en vertegenwoordigt een nederlaag of een tegenslag in het spel van het leven. De gebogen voorgrond, veroorzaakt door de gebruikte lens, vertegenwoordigt het vervormde en onzekere perspectief van de situatie. \n\nDeze foto herinnert ons eraan dat we in het leven, net als bij schaken, allemaal te maken krijgen met nederlagen en tegenslagen, maar het is hoe we ervoor kiezen om erop te reageren, hoe we weer opstaan en blijven vechten, wat ons  definieert. \n\n Het onzeker perspectief verwijst in deze context naar het vervormde en onduidelijke beeld van de situatie veroorzaakt door de lens die op de foto is gebruikt. De voorgrond van de foto is licht gebogen, wat een gevoel van desoriëntatie en verwarring kan creëren, omdat het afwijkt van de typische rechte lijnen en hoeken die we op een foto verwachten. Dit kan een visuele weergave zijn van het idee dat het perspectief van een situatie vervormd en onduidelijk kan zijn, vooral wanneer we moeilijke tijden doormaken. ", creator:""
        },

        '5': {
          src: './Img/horizontalphotos/Sunset-cropped.jpg',
          bg:"#141311", h1: "De rook van herinnering",  p:"De man op de foto staat aan de rand van een kleine klif met een blauwe rookbom in zijn hand. De ondergaande zon werpt een gouden gloed op de rook, waardoor er een prachtig scene ontstaat. \n\nDe man is een bewaarder van herinneringen en traditie en gebruikt de blauwe rook om overledenen te eren en te herinneren. De bladerloze bomen symboliseren de hardheid van het verlies, maar de aanwezigheid van de man en de rook die hij uitstraalt herinneren eraan dat de overledenen niet worden vergeten. De wolken op de achtergrond, gecreëerd door de zonsondergang, symboliseren de schoonheid die te vinden is in het herinneren en eren van het verleden. Het licht dat op de rook schijnt, staat symbool voor de herinneringen en tradities die levend worden gehouden door de acties van de man. Hij herinnert ons eraan dat, ook al is het leven vluchtig, herinneringen en tradities voortleven.", creator:'In samenwerking met: Luca Kessing'
        },
        '7': {
          src: './Img/verticalphotos/Straydog-cropped.jpg',
          bg:"#576827", h1:"De hoop van een verdwaalde", p:"De zwerfhond dwaalt door de straten, altijd op zoek naar zijn volgende maaltijd. Op dit moment kijkt hij langs de camera, zijn blik gericht op de persoon achter de lens. Hij denkt dat ze misschien iets te eten hebben, een sprankje hoop in zijn anders zo moeilijke leven.\n\n Ondanks de strijd om een zwerver te zijn, heeft hij nog steeds de wil om te leven en het vermogen om te vertrouwen op de vriendelijkheid van vreemden. ", creator:""
        },
        '8': {
          src: './Img/verticalphotos/RedPill-BluePill.jpg',
          bg:"#141311", h1:"De dualiteit van emotie", p:"De man op de foto staat voor een zwarte achtergrond, met een roze licht aan zijn linkerzijde en een blauw licht aan zijn rechterzijde. Het roze licht symboliseert passie en intensiteit, terwijl het blauwe licht kalmte en gerustheid vertegenwoordigt. Het gezicht van de man, scherp en met krullend haar, vertegenwoordigt het idee dat de geportretteerde emoties intern en persoonlijk zijn.\n\n Deze foto vertegenwoordigt de dualiteit van menselijke emoties, dat we een scala aan emoties tegelijkertijd kunnen voelen, en dat ze naast elkaar kunnen bestaan in één persoon. De zwarte achtergrond vertegenwoordigt het idee dat deze emoties niet afhankelijk zijn van externe factoren, ze komen van binnenuit. De uitdrukking van de man is neutraal, wat aangeeft dat deze emoties naast elkaar kunnen bestaan zonder dat de een de ander overheerst. \n\nDeze foto herinnert ons eraan dat het scala aan menselijke emoties enorm is en dat het belangrijk is om het volledige spectrum van emoties te erkennen en te accepteren, niet alleen de positieve of negatieve. Deze foto kan ook een persoon vertegenwoordigen die een overgangsperiode in zijn leven doormaakt, waarin hij zowel opgewonden als bang is voor de toekomst, waarbij het rode licht de opwinding vertegenwoordigt en het blauwe licht de angst.",
           creator:"In samenwerking met Loek Lutgens"
        },
        '9': {
          src: './Img/verticalphotos/0_jesse_1-cropped.jpg',
          bg:"#585439", h1:"Blijf doorgaan", p:"De man zat op de koude metalen rails, zijn blauwe jas en broek vormden een sterk contrast met de gruizige, industriële setting. Zijn armen rusten op zijn knieën en hij staarde recht in de camera met een kalme en veelbetekenende uitdrukking. \n\nHij wist dat hij op een reis was, een reis die hem zowel door duisternis als door licht zou leiden, maar hij stond klaar om het hoofd te bieden aan wat hem te wachten stond. De vroege stadia van de natuur die de ruimte rond de tunnel heroverde, wezen op de kracht van groei en verandering, en herinnerde de man eraan dat niets voor altijd hetzelfde blijft. Hij was vastbesloten om vooruit te gaan, de uitdagingen van het onbekende aan te gaan en aan de andere kant een sterker en wijzer persoon te worden.", creator:"In samenwerking met Jesse de Vries"
        },
        '10': {
          src: './Img/verticalphotos/longboard-cropped.jpg',
          bg:"6a5c5c", h1:"De vrijheids weg", p:"Het longboard midden op de weg in het bos vertegenwoordigt de vrijheid en opwinding van de openbare weg. De witte strepen van de weg symboliseren het pad naar avontuur en het onbekende. Het longboard, dat volledig in focus is, benadrukt de focus en vastberadenheid van de rijder.\n\n De zon die door de bomen schijnt en de zonnestralen symboliseren de schoonheid en vreugde van de reis. De rijder op het longboard is op zoek naar vrijheid en zelfontdekking, de bosweg is de perfecte plek om die te vinden. De lege weg voor hem vertegenwoordigt de eindeloze mogelijkheden en kansen die voor hem liggen. Hij is klaar om de uitdaging aan te gaan en de vrijheid van de open weg te omarmen.", creator:""
        },
        '11': {
          src: './Img/verticalphotos/chillings2_1.0-cropped.jpg',
          bg:"#141311", h1:"De mooheid van het nu", p:"Het meisje zit ontspannen op een bankje in de tuin van een groots kasteel. Ze neemt even de tijd om te genieten van de schoonheid van de omgeving, het rijke groen en het rustige pad dat naar het kasteel leidt. De blauwe lucht met zachte wolken erboven draagt bij aan het sprookjesachtige tafereel. Deze foto legt een moment vast van de schoonheid van in het heden zijn.", creator:"In samenwerking met Nikita Körver"
        },
        '12': {
          src: './Img/verticalphotos/natuur-cropped.jpg',
          bg:"#585439", h1:"De omhelzing van de natuur", p:"De man zit midden in de natuur, neergestreken op een boomstronk en kijkt neer op de toeschouwer. De achtergrond is gevormd met grote bomen. Op de voorgrond beginnen kleine blaadjes en babyboompjes net te groeien, wat staat voor een nieuw begin.\n\n De witte bekleding van de man steken af tegen de natuurlijke omgeving en hij heeft zijn armen op zijn benen om zijn omgeving te omarmen. De foto toont een moment van grote introspectie in verbinding met de natuur, het unieke perspectief gezien het feit dat hij er middenin leefde. De foto vertegenwoordigt de schoonheid van de natuur te waarderen, en hoe het zijn in de aanwezigheid van het, een gevoel van vrede en sereniteit kan geven.", creator:"In samenwerking met Melvin Scheidt"
        },
        '13': {
          src: './Img/verticalphotos/tovenares-cropped.jpg',
          bg:"#141311", h1:"De lichtbewaarder", p:"Het meisje op de foto is een machtige tovenaar, die naar het bos is gekomen om gebruik te maken van de eeuwenoude magie die erin schuilt. \n\nDe donkere omgeving vertegenwoordigt het mysterie en de kracht van het bos, terwijl de boomnaalden op de grond de natuurlijke elementen symboliseren waaruit ze put voor haar magie. De sprankelende krullende lijn die licht en cirkels in de palm van haar hand geeft, vertegenwoordigt de magie die ze hanteert en het licht dat ze in de duisternis brengt.", creator:"In samenwerking met Loes Cremers"
        },
        '16': {
          src: './Img/verticalphotos/Wizard-cropped.jpg',
          bg:"#141311", h1:"De toverstokkenmakers reis", p:"De man op de foto is een toverstokmaker, een bekwame vakman die toverstokken maakt voor degenen die de gave van magie bezitten. Hij leunt tegen een boom, diep in gedachten terwijl hij de toverstok in zijn hand onderzoekt. De zwarte en rode patronen op zijn sjaal vertegenwoordigen de balans tussen donkere en lichte magie die bij de creatie van elke toverstok hoort.\n\n Het spoor van vonken dat uit de punt van de toverstaf komt, symboliseert het onbeperkte potentieel en de kracht die in elke toverstaf ligt. Het pad in de verte vertegenwoordigt de reis die elke toverstokmaker moet ondernemen, zowel fysiek als figuurlijk, om zijn vak onder de knie te krijgen en de perfecte toverstaf te maken.", creator:"In samenwerking met Thy Schmitz"
        },
        '17': {
          src: './Img/verticalphotos/FireBender_1.jpg',
          bg:"#000000", h1:"Meester van de vlam", p:"Hij staat lang en zelfverzekerd, zijn arm hoog geheven alsof hij het vuur wil besturen dat fel in zijn hand brandt. De zwarte achtergrond vormt een hard contrast met de dansende vlammen, waardoor ze er des te betoverender uitzien. \n\nHet vuur lijkt gehoorzaam te zijn aan elk wens, ronddraaiend om zijn hand. Alsof het een verlengstuk van zijn wil is. Het gezicht van de man is zichtbaar door de uiteindelijke splitsing van de vlam, zijn blik strak gericht op het heet inferno voor hem. Hij is niet bang, want hij is de meester van de vlam. Hij beheerst het vuur met gemak, en het is een symbool van zijn kracht, zijn kracht en zijn meesterschap over het element.", creator:"In samenwerking met phil Berghof, Narek Manukjan en Jason knubben"
        },
        '18': {
          src: './Img/verticalphotos/Lost-Girl.jpg',
          bg:"#817038", h1:"Eenzaamheid in de velden", p:"Ze staat alleen in het uitgestrekte korenveld, haar rode jurk vormt een opvallend contrast met de gouden stengels om haar heen. De zachte bries doet haar schouderlange bruine haar door de war, waardoor haar gezicht aan het zicht wordt onttrokken. Ze staart in de verte, naar de weelderige bossen voorbij de overvloed aan graan. De lucht erboven is een meesterwerk van kleuren en wolken, een natuurlijk canvas voor het vredige tafereel voor haar. Ze vindt troost in de eenzaamheid van de velden, neemt de schoonheid van de natuur in zich op en vindt rust in de eenvoud van het moment.", creator:"In samenwerking met Enola Körver"
        },
      
    
      };
/*
      //sends an ajax request to the flask api, gives the url id to the api
        $.ajax({
          url: 'http://192.168.2.3:5000/photo/' + id,
          type: 'GET',
          dataType: 'json',
          success: function(data) {
            // Handle the data returned from the Flask api
            let title = data.title;
            let content = data.content;
            let creator = data.creator;
            
            // Do something with the data,looks for the element. and assigns the json data to it.
            document.querySelector('h1').textContent  = title;
            document.querySelector('p').textContent = content;
            p.innerHTML = myObj.p.replace(/\n/g, "<br>");
            document.querySelector('.creator').textContent  = creator;
          },
          error: function(xhr, textStatus, errorThrown) {
            // Handle any errors that occur during the AJAX request
            console.log('Error: ' + errorThrown);
          }
});*/
    //if the id is found, change the img soure matching the id path
    if (id in imageSources) {
      const imageInfo = imageSources[id];
      img.src = imageInfo.src;
      document.body.style.backgroundColor = imageInfo.bg;
      document.querySelector('h1').textContent = imageInfo.h1
      document.querySelector('p').textContent = imageInfo.p
      const p = document.querySelector('p');
      p.innerHTML = p.innerHTML.replace(/\n/g, "<br>");
      document.querySelector('.creator').textContent = imageInfo.creator
    } else {
      document.querySelector('h1').textContent = 'Sorry, we don\'t have that image.';
    }
    
      //if the id is one of the following, change the img style. this is for horizontal imgs
      if ([1, 2, 3, 4, 5, 6].includes(parseInt(id))) {
        if (window.innerWidth < 1500) {
          img.style.width = "850px";
          img.style.height = "100vh";
          img.style.borderRadius = "0px";
          document.querySelectorAll('.tekst').forEach(function(tekst) {
          tekst.style.margin = "15px 10px 0px 30px";
          tekst.style.overflow = "auto";
        
          });
          document.querySelectorAll('.item').forEach(function(item) {
            item.style.margin = "0px 0px 0px 0px";
            });
            document.querySelectorAll('.creator').forEach(function(item) {
              item.style.margin = "10px 102px 0px 0px";
              });
        } else {
          img.style.width = "1300px";
          img.style.height = "100vh";
          img.style.margin = "0px 0px 0px 0px";
          img.style.borderRadius = "0px";
        }
        document.querySelectorAll('.btn').forEach(function(btn) {
          btn.style.margin = "10px 0px";
        });
        document.querySelectorAll('.item').forEach(function(item) {
          item.style.margin = "0px 0px 0px 0px";
          });
      }
      if (id == 17 && window.innerWidth < 450){
        document.querySelectorAll('.creator').forEach(function(creator) {
          creator.style.margin = "0px";
          creator.style.overflow = "auto";
        
          })

      }
    
      
  });




