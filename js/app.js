// создаём фнкцию для взаимодействия со средой
$(function(){   

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
});