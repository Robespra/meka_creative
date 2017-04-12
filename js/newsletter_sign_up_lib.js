$(document).ready(function () {
    $('#newsletter').submit(function () {
        var $this     = $(this),
            $response = $('#response'),
            $mail     = $('#signup-email'),
            testmail  = /^[^0-9][A-z0-9._%+-]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/,
            hasError  = false,
            $btn = $('#signup-button');

        $response.find('p').remove();

        if (!testmail.test($mail.val())) {
            $response.html('<p class="error">Err... it seems that the email is unvalid.</p>');
            hasError = true;
        }

        if (hasError === false) {

            $response.find('p').remove();
            $response.addClass('nwslttr_loading');

            $.ajax({
                type: "POST",
                dataType: 'json',
                cache: false,
                url: $this.attr('action'),
                data: $this.serialize()
            }).done(function (data) {
                $response.removeClass('nwslttr_loading');
                $btn.addClass('cui_dialog_greyed');
                $response.html('<p>'+data.message+'</p>');

            }).fail(function() {
                $response.removeClass('nwslttr_loading');
                $response.html('<p>error, please try again</p>');
            })
        }


        return false;
    });
    $('#newsletter_pro').submit(function () {
        var $this     = $(this),
            $response = $('#response_pro'),
            $mail     = $('#signup-email_pro'),
            testmail  = /^[^0-9][A-z0-9._%+-]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/,
            hasError  = false,
            $btn = $('#signup-button_pro');

        $response.find('p').remove();

        if (!testmail.test($mail.val())) {
            $response.html('<p class="error">Err... it seems that the email is unvalid.</p>');
            hasError = true;
        }

        if (hasError === false) {

            $response.find('p').remove();
            $response.addClass('nwslttr_loading_pro');

            $.ajax({
                type: "POST",
                dataType: 'json',
                cache: false,
                url: $this.attr('action'),
                data: $this.serialize()
            }).done(function (data) {
                $response.removeClass('nwslttr_loading_pro');
                $response.html('<p>'+data.message+'</p>');

            }).fail(function() {
                $response.removeClass('nwslttr_loading_pro');
                $response.html('<p>error, please try again</p>');
            })
        }


        return false;
    });

});