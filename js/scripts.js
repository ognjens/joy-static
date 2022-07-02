(function ($) {
    setTimeout(function () {
        $('.scroll-link').css({ visibility: 'visible' })
    }, 2000)

    if (window.innerWidth > 768) {
        $('.home-banner').css("height", window.innerHeight)
      }



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
                "prices": [900, 660, 460],
                "eng": "Pelat,sir,pečurke"
            },
            {
                "id": 3,
                "name": "Vesuvio",
                "prices": [920, 700, 490],
                "eng": "Pelat, sir, šunka"
            },
            {
                "id": 4,
                "name": "Capricciosa",
                "prices": [950, 720, 520],
                "eng": "Pelat, sir, šunka, pečurke, oregano, masline"
            },
            {
                "id": 5,
                "name": "Pepperoni",
                "prices": [1000, 740, 550],
                "eng": "Pelat, sir, kulen"
            },
            {
                "id": 6,
                "name": "Quattro formaggi",
                "prices": [1060, 820, 570],
                "eng": "Neutralna pavlaka, sir, gorgonzola, čedar, parmezan"
            },
            {
                "id": 7,
                "name": "Tuna",
                "prices": [1140, 820, 630],
                "eng": "Pelat, sir, tunjevina, luk, masline"
            },
            {
                "id": 8,
                "name": "Quattro carne",
                "prices": [1140, 850, 630],
                "eng": "Pelat, sir, šunka, kulen, pančeta, pršuta"
            },
            {
                "id": 9,
                "name": "Parma",
                "prices": [1100, 890, 650],
                "eng": "Pelat,sir,pršuta,rukola, čeri, parmezan"
            },
            {
                "id": 10,
                "name": "Palermo",
                "prices": [1050, 830, 580],
                "eng": "Pelat, sir, pršuta, parmezan"
            },
            {
                "id": 12,
                "name": "Sicilia",
                "prices": [1050, 810, 550],
                "eng": "Pelat, sir, pančeta, parmezan"
            },
            {
                "id": 13,
                "name": "Vege",
                "prices": [1020, 790, 520],
                "eng": "Pelat, crni luk, paprika, kukurz, sir, rukola, čeri, masline"
            },
            {
                "id": 14,
                "name": "Torino",
                "prices": [980, 770, 550],
                "eng": "Pelat, pečenica, sir, feta, jaja, feferone, oregano"
            },
            {
                "id": 15,
                "name": "Carbonara",
                "prices": [1050, 800, 580],
                "eng": "Neutralna pavlaka, pančeta, beli luk, sir, parmezan"
            },
            {
                "id": 16,
                "name": "Fiora",
                "prices": [950, 750, 550],
                "eng": "Pelat, sir, spanac, pecurke, feta, čeri"
            }
        ],
        "special": [
            {
                "id": 17,
                "name": "Spicy chicken",
                "prices": [1190, 900, 690],
                "eng": "Pelat, sir, piletina, luk, paprika, pančeta, feferone, parmezan"
            },
            {
                "id": 18,
                "name": "Cesar",
                "prices": [1190, 900, 700],
                "eng": "Neutralna pavlaka, sir, piletina, pančeta, iceberg, parmezan, cezar dresing, čeri"
            },
            {
                "id": 19,
                "name": "Chicken cheddar",
                "prices": [1170, 880, 690],
                "eng": "Neutralna pavlaka, piletina, čedar, bbq sos"
            },
            {
                "id": 20,
                "name": "Monza",
                "prices": [1190, 880, 690],
                "eng": "Pelat, pančeta, sir, suve sljive, parmezan, čeri"
            },
            {
                "id": 21,
                "name": "Pepperoni cheddar",
                "prices": [1170, 890, 700],
                "eng": "Pelat, kulen, pecurke, paprika, čedar sir"
            },
            {
                "id": 63,
                "name": "Mexicana",
                "prices": [1190, 900, 700],
                "eng": "Pelat, Pasulj, Kukuruz, Piletina, Luk, Sir, Ljuta Papričica, Čedar"
            },
            {
                "id": 64,
                "name": "Matilda",
                "prices": [1170, 890, 690],
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
                "name": "Carbonara Pasta",
                "prices": [530],
                "eng": "Fusilli, Neutralna pavlaka, sir, pančeta, beli luk, parmezan"
            },
            {
                "id": 24,
                "name": "Pesto Piletina Pasta",
                "prices": [480],
                "eng": "Fusilli, Neutralna pavlaka, piletina, pesto, parmezan"
            },
            {
                "id": 25,
                "name": "Piletina Kari Pasta",
                "prices": [480],
                "eng": "Tagliatelle, Neutralna pavlaka, piletina, kari, parmezan, čeri"
            },
            {
                "id": 27,
                "name": "Alfredo Pasta",
                "prices": [480],
                "eng": "Fusilli, Pelat, crni luk, paprika, zacini, parmezan, rukola, čeri."
            },
            {
                "id": 28,
                "name": "Vege Pasta",
                "prices": [480],
                "eng": "Fusilli, Pelat,crni luk, paprika, zacini, parmezan, rukola, čeri."
            },
            {
                "id": 29,
                "name": "Amatriciana Pasta",
                "prices": [550],
                "eng": "Fusilli, Pelat, pančeta, crni luk, zacini, ljuta paprika, parmezan"
            },
            {
                "id": 30,
                "name": "Piletina Funghi Pasta",
                "prices": [550],
                "eng": "Fusilli, Pavlaka, piletina, pecurke, pančeta, parmezan"
            },
            {
                "id": 31,
                "name": "Bolognese Pasta",
                "prices": [550],
                "eng": "Fusilli, Bolonjez sos, parmezan"
            },
            {
                "id": 23,
                "name": "Pršuta Pasta",
                "prices": [590],
                "eng": "Fusilli, pršuta, sir, gorgonzola, parmezan, čeri"
            },
            {
                "id": 32,
                "name": "Quattro Formaggi Pasta",
                "prices": [530],
                "eng": "Fusilli, Pavlaka, sir, gorgonzola, parmezan"
            },
            {
                "id": 33,
                "name": "Piletina Tartufi Pasta",
                "prices": [590],
                "eng": "Fusilli, pavlaka, piletina, ulje tartufa, parmezan"
            }
        ],
        "rizoto": [

            {
                "id": 35,
                "name": "Jaja I pecurke Rižoto",
                "prices": [430],
                "eng": "Rižoto, maslac, jaja, pecurke, začini, parmezan"
            },
            {
                "id": 36,
                "name": "Vege Rižoto",
                "prices": [450],
                "eng": "Rižoto, crni luk, paprika, kukuruz, parmezan, čeri, rukola"
            },
            {
                "id": 37,
                "name": "Piletina tartufi Rižoto",
                "prices": [590],
                "eng": "Rižoto, piletina, tarufi, parmezan, čeri"
            }
        ],
        "sendvic": [

            {
                "id": 38,
                "name": "Cezar Sendvič",
                "prices": [490],
                "eng": "Piletina, pančeta, cezar dressing, iceberg salata, cheddar sir"
            },
            {
                "id": 39,
                "name": "Torino Sendvič",
                "prices": [440],
                "eng": "Feta sir ,pečenica jaje, kisela pavlaka, zelena salata, paradajz"
            },
            {
                "id": 40,
                "name": "Pršuta Sendvič",
                "prices": [360],
                "eng": "Namaz, pršuta, sir, kiseli krastavac"
            },
            {
                "id": 41,
                "name": "Šunka Sendvič",
                "prices": [330],
                "eng": "Namaz, šunka, sir, zelena salata"
            },
            {
                "id": 42,
                "name": "Vege Sendvič",
                "prices": [340],
                "eng": "Namaz, sir, crni luk, paprika, čeri, iceberg"
            }
        ],
        "salate": [
            {
                "id": 43,
                "name": "Cezar Salata",
                "prices": [550],
                "eng": "Iceberg salata, pančeta, piletina, parmezan, cezar dressing, krutoni"
            },
            {
                "id": 45,
                "name": "Tuna Salata",
                "prices": [560],
                "eng": "Pasta, mix zeleni, kukuruz, crveni luk, paprika, masline, kapar, čeri, limun dresing"
            },
            {
                "id": 46,
                "name": "Kus kus sa povrćem Salata",
                "prices": [520],
                "eng": "kus kus, feta sir, paprika, crni luk, čeri paradajz, krastavac, limun dresing, masline, zacini"
            }
        ],

        "slane_palacinke": [

            {
                "id": 47,
                "name": "Pečenica Palačinka",
                "prices": [290],
                "eng": "pavlaka, kačkavalj, pečenica"
            },
            {
                "id": 48,
                "name": "Kulen Palačinka",
                "prices": [310],
                "eng": "pavlaka,kačkavalj, kulen"
            },
            {
                "id": 49,
                "name": "Pršuta Palačinka",
                "prices": [350],
                "eng": "Pavlaka, kačkavalj ,pršuta"
            },
            {
                "id": 50,
                "name": "Pohovana Palačinka",
                "prices": [440],
                "eng": "Pavlaka, kačkavalj, šunka, pecurke, tartar sos"
            },
            {
                "id": 51,
                "name": "Pohovana Piletina Palačinka",
                "prices": [490],
                "eng": "piletina, gorgonzola, sir"
            }
        ],
        "slatke_palacinke": [

            {
                "id": 52,
                "name": "Eurokrem Palačinka",
                "prices": [200]
            },
            {
                "id": 53,
                "name": "Nutela Palačinka",
                "prices": [200]
            },
            {
                "id": 54,
                "name": "Džem Palačinka",
                "prices": [200]
            },
            {
                "id": 60,
                "name": "Jabuka Cimet Palačinka",
                "eng": "Namaz jabuka cimet, suvo groždje",
                "prices": [220]
            },
            {
                "id": 61,
                "name": "Višnja Palačinka",
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

    function sortNumbers(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    }


    $.each(menu, function (key, val) {
        console.log('keys?', key)
        var data = [];
        $.each(val, function (subkey, r) {
            data += `
                    <div class="col-md-4 text-center">
                    <div class="menu-wrap">
                        <a href="#" class="menu-img img mb-4" style="background-image: url(images/products/${r.name.replace(/\s+/g, '-').toLowerCase()}.png);"></a>
                        <div class="text">
                            <h3><a href="#">${r.name}</a></h3>
                            <p>${r.eng ? r.eng : ''}</p>
                            <p class="price"><span>${r.prices ? r.prices.sort((a, b) => a - b).toString().replace(/,/g, "<span class='highlightDark'> / </span>") : ''} rsd</span></p>
                        </div>
                    </div>
                </div>
                    `
        });
        $(data).appendTo(`.${key}.row.render`);
    });
    // $.each(menu, function (key, val) {
    //             var data = [];
    //             $.each(val, function (subkey, r) {
    //                     data += `<div class="item-wrapper">
    //             <div class="center-text mb-30">
    //                     <div class="${key != 'palacinke' ? `ïmg-200x` : `img-small`}  mlr-auto pos-relative">
    //                             ${r.new ? `<h6 class="ribbon-cont"><div class="ribbon primary"></div><b>NOVO</b></h6>` : ''}
    //                             ${r.posno ? `<h6 class="ribbon-cont"><div class="ribbon secondary"></div><b>POSNO</b></h6>` : ''}
    //                     </div>
    //                     <h4 class="item-name">${r.name}</h4>
    //                     <h6 class="item-eng">${r.eng != undefined ? r.eng : ''}</h6>
    //                     <h5 class="item-price">
    //                             <b>${r.prices ? r.prices.toString().replace(/,/g, "<span class='highlight'> / </span>") : ''} rsd</b>
    //                     </h5>
    //             </div>
    //     </div>`
    //             });
    //             $(data).appendTo(`#${key}.render`);
    // });

    function renderSpecific(key) {
        var data = [];
        $.each(menu.key, function (subkey, r) {
            data += `<p>${subkey}</p>`
        });

        return data
    }

    $(".nav-link").on("click", function () {
        if (window.innerWidth < 768) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".tab-content").offset().top - 100
            }, 600);
        }
    });


    if ($('#menu-page').length) {



        setTimeout(function () {
            if (window.pageYOffset == 0) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".menu-start").offset().top - 100
                }, 500);
            }
        }, 3000)

        $.each(menu, function (key, val) {
            var data = [];
            sorter = 0;
            $.each(val, function (subkey, r) {
                if (sorter == 6) {
                    sorter = 0
                }
                data += `
                        <div class="col-lg-4 d-flex ftco-animate item-display">
                            <div class="services-wrap d-flex">
                                <a class="img ${sorter < 3 ? 'order-lg-last' : ''}" style="background-size: contain; background-image: url(images/products/${r.name.replace(/\s+/g, '-').toLowerCase()}.png);"></a>
                                <div class="text p-4">
                                    <h3>${r.name}</h3>
                                    <p>${r.eng ? r.eng : ''}</p>
                                    <p class="price"><span>${r.prices ? r.prices.sort((a, b) => a - b).toString().replace(/,/g, "<span class='highlightDark'> / </span>") : ''} rsd</span></a></p>
                                </div>
                            </div>
                        </div>
                    `
                sorter++
            });
            $(data).appendTo(`.${key}.row`);
        });

        var contentWayPoint = function () {
            var i = 0;
            $('.ftco-animate').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                    i++;

                    $(this.element).addClass('item-animate');
                    setTimeout(function () {

                        $('body .ftco-animate.item-animate').each(function (k) {
                            var el = $(this);
                            setTimeout(function () {
                                var effect = el.data('animate-effect');
                                if (effect === 'fadeIn') {
                                    el.addClass('fadeIn ftco-animated');
                                } else if (effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft ftco-animated');
                                } else if (effect === 'fadeInRight') {
                                    el.addClass('fadeInRight ftco-animated');
                                } else {
                                    el.addClass('fadeInUp ftco-animated');
                                }
                                el.removeClass('item-animate');
                            }, k * 50, 'easeInOutExpo');
                        });

                    }, 100);

                }

            }, { offset: '95%' });
        };
        contentWayPoint();

    }


})(jQuery);