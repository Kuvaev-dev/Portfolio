// создаём фнкцию для взаимодействия со средой
$(function(){   

    // ----------------------------------------------------------------------------------------
    // Filter

    var filter = $("[data-filter]");    // сохраняем элемент сайта в переменную

    filter.on("click", function(event){      // подвязываем событие клика

        event.preventDefault();     // убираем стандартное поведение элемента    

        var cat = $(this).data('filter');       // помещаем категорию в переменную

        if (cat == 'all'){      // если выбрана категория "all"

            $("[data-cat]").removeClass('hide');    // открываем все элементы

        }
        else{       // если выбрана другая категория
            $("[data-cat]").each(function(){    // делаем аналог foreach 

                var workCat = $(this).data('cat');      // проходим по всем элементам cat
    
                if (workCat != cat){     // если элемент не совпадает с категорией
    
                    $(this).addClass('hide');    // обращаемся к классу hide и скрываем элементы других категорий
    
                }
    
                else{
    
                    $(this).removeClass('hide');    // в противном случае открываем их
    
                }
            });
        }
    });
    // ----------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------
    // Modal
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

});