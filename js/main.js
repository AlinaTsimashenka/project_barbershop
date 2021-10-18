$(document).ready(() => {


    $('#master-general').slick({
        centerMode: true,
        centerPadding: false,
        slidesToShow: 3,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    centerPadding: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $('#burger').click(() => {
        $('#header-container').toggleClass('menu-open');
        $('body').css('overflow', 'hidden')
    });

    $('#header-container #menu a').click(() => {
        $('#header-container').removeClass('menu-open')
        $('body').css('overflow', 'visible')
    });


    $('#header-container #menu > *').click(() => {
        $('#header-container').removeClass('menu-open')
        $('body').css('overflow', 'visible')
    });


    $('.open-modal').click(() => {
        $('#sale-popup-container').css('display', 'flex')
        $('body').css('overflow', 'hidden')
    });

    $('#sale-popup-cancel,#sale-popup-container').click((e) => {
        if (e.target.id === 'sale-popup-container' || e.target.id === 'sale-popup-cancel-close') {
            $('#sale-popup-container').hide()
            $('body').css('overflow', 'visible')
        }
    });

    $('.open-popUp').click(() => {
        $('#reservation-container').css('display', 'flex');
        $('body').css('overflow', 'hidden')
    });


    $('#reservation-cancel, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide()
            $('.master').css('display', 'flex');
            $('body').css('overflow', 'visible')

        }
    });

    $('.open-form').click(() => {
        $('#reservation-container').css('display', 'flex').addClass("btn-onl");
        $('body').css('overflow', 'hidden')
    });


    $('#reservation-cancel, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide().removeClass("btn-onl");
            $('body').css('overflow', 'visible')
        }
    });



    $('#reserve-button > button').click(() => {

        let name = $('#name');
        let service = $('#service');
        let date = $('#date');
        let phone = $('#phone');
        let serviceName = $('#serviceName');
        let serviceTime = $('#serviceTime');
        let reservationSent = $('#reservation-sent')
        let hasError = false;

        $('.error-input').hide();

        name.css('border-color', '#AE8959');
        service.css('border-color', '#AE8959');
        date.css('border-color', '#AE8959');
        phone.css('border-color', '#AE8959');
        serviceName.css('border-color', '#AE8959');
        serviceTime.css('border-color', '#AE8959');


        if (!name.val()) {
            name.siblings('.error-input').show();
            name.css('border-color', 'red');
            hasError = true;

        }

        if (!service.val()) {
            service.siblings('.error-input').show();
            service.css('border-color', 'red');
            hasError = true;

        }

        if (!date.val()) {
            date.siblings('.error-input').show();
            date.css('border-color', 'red');
            hasError = true;

        }

        if (!phone.val()) {
            phone.siblings('.error-input').show();
            phone.css('border-color', 'red');
            hasError = true;

        }
        if (!serviceName.val()) {
            serviceName.siblings('.error-input').show();
            serviceName.css('border-color', 'red');
            hasError = true;

        }
        if (!serviceTime.val()) {
            serviceTime.siblings('.error-input').show();
            serviceTime.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {

            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: {name: name.val(), service: service.val(), date: date.val(), phone: phone.val(),
                    serviceName: serviceName.val(), serviceTime: serviceTime.val()},

                success: () => {
                    $('#reservation-content').hide();
                    $(reservationSent).css('display', 'block');
                    $(reservationSent).show();

                },

                error: () => {
                    $('#reservation-content').hide();
                    $(reservationSent).css('display', 'block');
                    $(reservationSent).show();
                }
            });
        }

    })

})