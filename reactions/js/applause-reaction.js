$(".trigger-applause").on("click", function() {
    $('.applauses').removeClass("d-none")
    var b = Math.floor((Math.random() * 100) + 1);
    var d = ["flowOne", "flowTwo", "flowThree"];
    var a = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"];
    var c = (Math.random() * (1.6 - 1.2) + 1.2).toFixed(1);
    $('<div class="heart part-' + b + " " + a[Math.floor((Math.random() * 6))] + '" style="font-size:' + Math.floor(Math.random() * (50 - 22) + 22) + 'px;"><img src="imgs/reactions/decolou.png" alt="" class="img-fluid"></div>').appendTo(".applauses").css({
        animation: "" + d[Math.floor((Math.random() * 3))] + " " + c + "s linear"
    });
    $(".part-" + b).show();
    setTimeout(function() {
        $(".part-" + b).remove()
    }, c * 900)

});

$(".trigger-applause").mouseout(function(){
    setTimeout(function() {
        $('.applauses').addClass("d-none")
    }, 2000)
});

/*setInterval(function(){ 
    var b = Math.floor((Math.random() * 100) + 1);
    var d = ["flowOne", "flowTwo", "flowThree"];
    var a = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"];
    var c = (Math.random() * (1.6 - 1.2) + 1.2).toFixed(1);
    $('<div class="heart part-' + b + " " + a[Math.floor((Math.random() * 6))] + '" style="font-size:' + Math.floor(Math.random() * (50 - 22) + 22) + 'px;"><img src="imgs/applause-reaction.svg" alt="" class="img-fluid"></div>').appendTo(".applauses").css({
        animation: "" + d[Math.floor((Math.random() * 3))] + " " + c + "s linear"
    });
    $(".part-" + b).show();
    setTimeout(function() {
        $(".part-" + b).remove()
    }, c * 900)
}, 2500);*/