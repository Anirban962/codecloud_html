function OpenNav(){
    document.getElementById('mysidenav').style.width = '250px';
}

function CloseNav(){
    document.getElementById('mysidenav').style.width = '0';
}


$(document).ready(function(){
    $('.custm_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                 settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        dots: false,
                        arrows: false,
                        
                    }
            }
        ]
    });
  });


