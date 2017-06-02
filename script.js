$(start);

function start() {
    var maxH = 0;
    $(".work").each(function (index) {
        maxH = $(this).height() > maxH ? $(this).height() : maxH;
    });

    $(".work").each(function (index) {
       $(this).height(maxH);
    });

    $("ul").each(function (index){
        $(this).children("li").sort(function (a,b){return ($(b).text()) < ($(a).text()) ? 1 : -1;}).appendTo($(this));
    });
}