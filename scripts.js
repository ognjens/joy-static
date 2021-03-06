
(function ($) {
setTimeout(function( ) {
    $('.scroll-link').css({visibility: 'visible'})
}, 2000 )

$('.scroll-link').on('click', function() {
    console.log('scroll')
})


var menu = {
    "standard": [ 
     {
         "id": 1,
         "name": "Margherita",
         "prices": [890, 640, 430],
         "eng": "Pelat, sir"
     },
     {
         "id": 2,
         "name": "Funghi",
         "prices": [900,660,460],
         "eng": "Pelat,sir,pečurke"
     },
     {
         "id": 3,
         "name": "Vesuvio",
         "prices": [920,700,490],
         "eng": "Pelat, sir, šunka"
     },
     {
         "id": 4,
         "name": "Capricciosa",
         "prices": [950,720,520],
         "eng": "Pelat, sir, šunka, pečurke, oregano, masline"
     },
     {
         "id": 5,
         "name": "Peperoni",
         "prices": [1000,740,550],
         "eng": "Pelat, sir, kulen"
     },
     {
         "id": 6,
         "name": "Quattro formaggi",
         "prices": [1060,820,570],
         "eng": "Neutralna pavlaka, sir, gorgonzola, čedar, parmezan"
     },
     {
         "id": 7,
         "name": "Tuna",
         "prices": [1140,820,630],
         "eng": "Pelat, sir, tunjevina, luk, masline"
     },
     {
         "id": 8,
         "name": "Quattro carne",
         "prices": [1140,850,630],
         "eng": "Pelat, sir, šunka, kulen, pančeta, pršuta"
     },
     {
         "id": 9,
         "name": "Parma",
         "prices": [1100,890,650],
         "eng": "Pelat,sir,pršuta,rukola, čeri, parmezan"
     },
     {
         "id": 10,
         "name": "Palermo",
         "prices": [1050,830,580],
         "eng": "Pelat, sir, pršuta, parmezan"
     },
     {
         "id": 12,
         "name": "Sicilia",
         "prices": [1050,810,550],
         "eng": "Pelat, sir, pančeta, parmezan"
     },
     {
         "id": 13,
         "name": "Vege",
         "prices": [1020,790,520],
         "eng": "Pelat, crni luk, paprika, kukurz, sir, rukola, čeri, masline"
     },
     {
         "id": 14,
         "name": "Torino",
         "prices": [980,770,550],
         "eng": "Pelat, pečenica, sir, feta, jaja, feferone, oregano"
     },
     {
         "id": 15,
         "name": "Carbonara",
         "prices": [1050,800,580],
         "eng": "Neutralna pavlaka, pančeta, beli luk, sir, parmezan"
     },
     {
         "id": 16,
         "name": "Fiora",
         "prices": [950,750,550],
         "eng": "Pelat, sir, spanac, pecurke, feta, čeri"
     }
 ],
 "special": [
 {
     "id": 17,
     "name": "Spicy chicken",
     "prices": [1190,900,690],
     "eng": "Pelat, sir, piletina, luk, paprika, pančeta, feferone, parmezan"
 },
 {
     "id": 18,
     "name": "Cesar",
     "prices": [1190,900,700],
     "eng": "Neutralna pavlaka, sir, piletina, pančeta, iceberg, parmezan, cezar dresing, čeri"
 },
 {
     "id": 19,
     "name": "Chicken cheddar",
     "prices": [1170, 880,690],
     "eng": "Neutralna pavlaka, piletina, čedar, bbq sos"
 },
 {
     "id": 20,
     "name": "Monza",
     "prices": [1190,880,690],
     "eng": "Pelat, pančeta, sir, suve sljive, parmezan, čeri"
 },
 {
     "id": 21,
     "name": "Peperoni cheddar",
     "prices": [1170,890,700],
     "eng": "Pelat, kulen, pecurke, paprika, čedar sir"
 },
 {
     "id": 63,
     "name": "Mexicana",
     "prices": [1190,900,700],
     "eng": "Pelat, Pasulj, Kukuruz, Piletina, Luk, Sir, Ljuta Papričica, Čedar"
 },
 {
     "id": 64,
     "name": "Milano",
     "prices": [1170,890,690],
     "eng": "Pelat, Sir, Pančeta, Piletina, Pečurke, Parmezan"
 }
 ],
 
 "slatke": [
 {
     "id": 55,
     "name": "Nutela",
     "prices": [450]
 },
 {
     "id": 56,
     "name": "Eurokrem",
     "prices": [450]
 },
 {
     "id": 65,
     "name": "Jabuka-cimet",
     "eng": "Namaz jabuka, cimet, Šećer u prahu, Suvo groždje",
     "prices": [500]
 },
 {
     "id": 66,
     "name": "Višnja",
     "eng": "Namaz višnja, Šećer u prahu",
     "prices": [450]
 }
 ],
 
 
 "paste": [
 
 
 {
     "id": 22,
     "name": "Carbonara",
     "prices": [530],
     "eng": "Fusilli, Neutralna pavlaka, sir, pančeta, beli luk, parmezan"
 },
 {
     "id": 23,
     "name": "Pršuta",
     "prices": [590],
     "eng": "Fusilli, pršuta, sir, gorgonzola, parmezan, čeri"
 },
 {
     "id": 24,
     "name": "Pesto piletina",
     "prices": [480],
     "eng": "Fusilli, Neutralna pavlaka, piletina, pesto, parmezan"
 },
 {
     "id": 25,
     "name": "Piletina kari",
     "prices": [480],
     "eng": "Tagliatelle, Neutralna pavlaka, piletina, kari, parmezan, čeri"
 },
 {
     "id": 26,
     "name": "Alfredo",
     "prices": [530],
     "eng": "Tagliatelle, Pavlaka, piletina, maslac, parmezan"
 },
 {
     "id": 27,
     "name": "Alfredo",
     "prices": [480],
     "eng": "Fusilli, Pelat, crni luk, paprika, zacini, parmezan, rukola, čeri."
 },
 {
     "id": 28,
     "name": "Vege",
     "prices": [480],
     "eng": "Fusilli, Pelat,crni luk, paprika, zacini, parmezan, rukola, čeri."
 },
 {
     "id": 29,
     "name": "Amatricana",
     "prices": [550],
     "eng": "Fusilli, Pelat, pančeta, crni luk, zacini, ljuta paprika, parmezan"
 },
 {
     "id": 30,
     "name": "Piletina fungi",
     "prices": [550],
     "eng": "Fusilli, Pavlaka, piletina, pecurke, pančeta, parmezan"
 },
 {
     "id": 31,
     "name": "Bologneze",
     "prices": [550],
     "eng": "Fusilli, Bolonjez sos, parmezan"
 },
 {
     "id": 32,
     "name": "Quattro formaggi",
     "prices": [530],
     "eng": "Fusilli, Pavlaka, sir, gorgonzola, parmezan"
 },
 {
     "id": 33,
     "name": "Piletina Tartufi",
     "prices": [590],
     "eng": "Fusilli, pavlaka, piletina, ulje tartufa, parmezan"
 },
 {
     "id": 34,
     "name": "Piletina Tartufi",
     "prices": [590],
     "eng": "Fusilli, pavlaka, piletina, ulje tartufa, parmezan"
 }
 ],
 "rizoto": [
 
 {
     "id": 35,
     "name": "Jaja I pecurke",
     "prices": [430],
     "eng": "Rižoto, maslac, jaja, pecurke, začini, parmezan"
 },
 {
     "id": 36,
     "name": "Vege",
     "prices": [450],
     "eng": "Rižoto, crni luk, paprika, kukuruz, parmezan, čeri, rukola"
 },
 {
     "id": 37,
     "name": "Piletina tartufi",
     "prices": [590],
     "eng": "Rižoto, piletina, tarufi, parmezan, čeri"
 }
 ],
 "sendvic": [
 
 {
     "id": 38,
     "name": "Cezar",
     "prices": [490],
     "eng": "Piletina, pančeta, cezar dressing, iceberg salata, cheddar sir"
 },
 {
     "id": 39,
     "name": "Pečenica jaje",
     "prices": [440],
     "eng": "Feta sir ,pečenica jaje, kisela pavlaka, zelena salata, paradajz"
 },
 {
     "id": 40,
     "name": "Pršuta",
     "prices": [360],
     "eng": "Namaz, pršuta, sir, kiseli krastavac"
 },
 {
     "id": 41,
     "name": "Šunka",
     "prices": [330],
     "eng": "Namaz, šunka, sir, zelena salata"
 },
 {
     "id": 42,
     "name": "Vege",
     "prices": [340],
     "eng": "Namaz, sir, crni luk, paprika, čeri, iceberg"
 }
 ],
 "salate": [
 {
     "id": 43,
     "name": "Cezar",
     "prices": [550],
     "eng": "Iceberg salata, pančeta, piletina, parmezan, cezar dressing, krutoni"
 },
 {
     "id": 44,
     "name": "Cezar",
     "prices": [560],
     "eng": "Iceberg salata, pančeta, piletina, parmezan, cezar dressing, krutoni."
 },
 {
     "id": 45,
     "name": "Tuna",
     "prices": [560],
     "eng": "Pasta, mix zeleni, kukuruz, crveni luk, paprika, masline, kapar, čeri, limun dresing"
 },
 {
     "id": 46,
     "name": "Kus kus sa povrćem",
     "prices": [520],
     "eng": "kus kus, feta sir, paprika, crni luk, čeri paradajz, krastavac, limun dresing, masline, zacini"
 }
 ],
 
 "slane_palacinke": [
 
 {
     "id": 47,
     "name": "Pečenica",
     "prices": [290],
     "eng": "pavlaka, kačkavalj, pečenica"
 },
 {
     "id": 48,
     "name": "Kulen",
     "prices": [310],
     "eng": "pavlaka,kačkavalj, kulen"
 },
 {
     "id": 49,
     "name": "Pršuta",
     "prices": [350],
     "eng": "Pavlaka, kačkavalj ,pršuta"
 },
 {
     "id": 50,
     "name": "Pohovana palacinka",
     "prices": [440],
     "eng": "Pavlaka, kačkavalj, šunka, pecurke, tartar sos"
 },
 {
     "id": 51,
     "name": "Pohovana Palačinka Piletina",
     "prices": [490],
     "eng": "piletina, gorgonzola, sir"
 }
 ],
 "slatke_palacinke": [
 
 {
     "id": 52,
     "name": "Eurokrem",
     "prices": [200]
 },
 {
     "id": 53,
     "name": "Nutela",
     "prices": [200]
 },
 {
     "id": 54,
     "name": "Dzem",
     "prices": [200]
 },
 {
    "id": 60,
    "name": "Jabuka Cimet",
    "eng": "Namaz jabuka cimet, suvo groždje",
    "prices": [220]
},
{
   "id": 61,
   "name": "Višnja",
   "prices": [200]
}
 ],
 "drink": [
 
 {
     "id": 57,
     "name": "Koka Kola",
     "prices": [100]
 },
 {
     "id": 58,
     "name": "Rosa",
     "prices": [70]
 },
 {
     "id": 59,
     "name": "Zaječarsko pivo",
     "prices": [140]
 }
 ]
 }


$.each(menu, function (key, val) {
            var data = [];
            $.each(val, function (subkey, r) {
                    data += `<div class="item-wrapper">
            <div class="center-text mb-30">
                    <div class="${key != 'palacinke' ? `ïmg-200x` : `img-small`}  mlr-auto pos-relative">
                            ${r.new ? `<h6 class="ribbon-cont"><div class="ribbon primary"></div><b>NOVO</b></h6>` : ''}
                            ${r.posno ? `<h6 class="ribbon-cont"><div class="ribbon secondary"></div><b>POSNO</b></h6>` : ''}
                    </div>
                    <h4 class="item-name">${r.name}</h4>
                    <h6 class="item-eng">${r.eng != undefined ? r.eng : ''}</h6>
                    <h5 class="item-price">
                            <b>${r.prices ? r.prices.toString().replace(/,/g, "<span class='highlight'> / </span>") : ''} rsd</b>
                    </h5>
            </div>
    </div>`
            });
            $(data).appendTo(`#${key} .row`);
});


})(jQuery);