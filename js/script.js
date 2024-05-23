$(document).ready(function () {
    $('#sliders').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        // margin:10,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        // autoplay:true,


    })

    $('#portfolio').owlCarousel({
        center: true,
        items: 4,
        loop: true,
        dots: false,
        margin: 10,
        nav: false,
        autoplay: true,
    })
});


$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;
        console.log(increment);

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
