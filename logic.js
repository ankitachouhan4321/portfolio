$(window).ready(function () {
    $(document).scroll(function () {
        w = $(window).scrollTop();



        if (w >= 0 && w <= 350) {

            $(".prog").removeClass("progress-bar");

        }

        else if (w >= 350 ) {

            $(".prog").addClass("progress-bar");


        }
        

        console.log(w);
    });

});


$(window).ready(function () {
    $(document).scroll(function () {
        e = $(window).scrollTop();



        if (e >= 0 && e <= 1000) {

            $(".exp-box-1").removeClass("ani-1");
            $(".exp-box-2").removeClass("ani-2");
            $(".exp-box-3").removeClass("ani-3");


        }

        else if (e >= 1000 && e <= 2000) {

            $(".exp-box-1").addClass("ani-1");
            $(".exp-box-2").addClass("ani-2");
            $(".exp-box-3").addClass("ani-3");



        }
        else if (e >= 2000) {

            $(".exp-box-1").removeClass("ani-1");
            $(".exp-box-2").removeClass("ani-2");
            $(".exp-box-3").removeClass("ani-3");


        }

        console.log(e);
    });

});
