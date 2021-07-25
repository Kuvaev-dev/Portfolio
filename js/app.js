// создаём фнкцию для взаимодействия со средой
$(function(){   
    var filter = $("[data-filter]");    // сохраняем элемент сайта в переменную
    filter.on("click", function(){      // подвязываем событие клика
        console.log(1);
    })
})