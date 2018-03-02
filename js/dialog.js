$(".btn_cta_hero").click(function(e) {
    $(".cui_button").removeClass("cui_dialog_display");
    $(".cui_button").addClass("cui_dialog_hide");
    $(".cui_after_cta").removeClass("cui_dialog_hide");
    $(".cui_after_cta").addClass("cui_dialog_display");
    $(".cui_after_cta_message").addClass("bubble_displayed");
    $(".cui_loader").removeClass("remove_loader");
    $(".cui_loader").addClass("display_loader");
    $(".cui_dialog_buttons_after_cta").removeClass("cui_dialog_buttons_hidden");
    $(".cui_dialog_buttons_after_cta").addClass("cui_dialog_buttons_displayed");
    $(".svg-logo").addClass("svg-happyfreshlogo_thinking");
    $("#canvasZone").removeClass("display");
   $("#canvasZone").addClass("no-display");
    $("#clr").removeClass("display");
   $("#clr").addClass("no-display");
   $("#fiction").removeClass("no-display");
   $("#fiction").addClass("display");
    $(".progress-bar-red").addClass("progress-bar-red-75");
    $(".rap_casquette").addClass("casquette_active");
    $(".rap_mic").addClass("rap_mic_active");
    $(".seventy").addClass("percent_nodisplay");
    $(".seventyfive").removeClass("percent_nodisplay");
     $(".seventyfive").addClass("percent_display");
    
    setTimeout(function() {
       $(".cui_loader").removeClass("display_loader");
       $(".cui_loader").addClass("remove_loader");
       $(".svg-logo").removeClass("svg-happyfreshlogo_thinking");
   }, 1800);
    });

    $(".triangle").click(function(e) {
    $(".loader-container").addClass("loader-container_active");
    $(".rap_vinyl").addClass("rap_vinyl_active");
    $(".rec").addClass("rec_active");
    $(".triangle").addClass("triangle_inactive");
    });

$(".cui_first_button1").click(function(e) {
    $(".cui_after_cta").removeClass("cui_dialog_display");
    $(".cui_after_cta").addClass("cui_dialog_hide");
    $(".cui_first_non").removeClass("cui_dialog_display");
    $(".cui_first_non").addClass("cui_dialog_hide");
    $(".cui_first_oui").removeClass("cui_dialog_hide");
    $(".cui_first_oui").addClass("cui_dialog_display");
    $(".cui_first_oui_message").addClass("bubble_displayed");
    $(".cui_loader").removeClass("remove_loader");
    $(".cui_loader").addClass("display_loader");
    $(".cui_dialog_buttons_first_oui").removeClass("cui_dialog_buttons_hidden");
    $(".cui_dialog_buttons_first_oui").addClass("cui_dialog_buttons_displayed");
    $(".cui_first_button1").addClass("btn_selected");
    $(".svg-logo").addClass("svg-happyfreshlogo_thinking");
       $("#fiction").removeClass("display");
   $("#fiction").addClass("no-display");
         $("#music_combs").removeClass("no-display");
   $("#music_combs").addClass("display");
   $(".progress-bar-red").removeClass("progress-bar-red-75");
   $(".progress-bar-red").addClass("progress-bar-red-80");
   $(".rap_casquette").removeClass("casquette_active");
   $(".rap_casquette").addClass("casquette_inactive");
   $(".seventyfive").addClass("percent_nodisplay");
   $(".eighty").removeClass("percent_nodisplay");
     $(".eighty").addClass("percent_display");
   setTimeout(function() {
       $(".rap_casquette").addClass("casquette_inactive_nodisplay");
   }, 1000);

    setTimeout(function() {
       $(".cui_loader").removeClass("display_loader");
       $(".cui_loader").addClass("remove_loader");
       $(".svg-logo").removeClass("svg-happyfreshlogo_thinking");
       $(".rap_casquette").addClass("casquette_inactive_nodisplay");
   }, 2000);
    });


    $(".triangle_comb1").click(function(e) {
    $(".box1").addClass("box_active");
    });

    $(".triangle_comb2").click(function(e) {
    $(".box2").addClass("box_active");
    });

    $(".triangle_comb3").click(function(e) {
    $(".box3").addClass("box_active");
    });

    $(".triangle_comb4").click(function(e) {
    $(".box4").addClass("box_active");
    });




    $(".cui_first_oui_button2").click(function(e) {
    $(".cui_first_oui").removeClass("cui_dialog_display");
    $(".cui_first_oui").addClass("cui_dialog_hide");
    $(".cui_first_non").removeClass("cui_dialog_hide");
    $(".cui_first_non").addClass("cui_dialog_display");
    $(".cui_first_non_message").addClass("bubble_displayed");
    $(".cui_loader").removeClass("remove_loader");
    $(".cui_loader").addClass("display_loader");
    $(".cui_dialog_buttons_first_non").removeClass("cui_dialog_buttons_hidden");
    $(".cui_dialog_buttons_first_non").addClass("cui_dialog_buttons_displayed");
    $(".svg-logo").addClass("svg-happyfreshlogo_thinking");
    setTimeout(function() {
       $(".cui_loader").removeClass("display_loader");
       $(".cui_loader").addClass("remove_loader");
       $(".svg-logo").removeClass("svg-happyfreshlogo_thinking");
   }, 2000);
    });


    $(".cui_first_oui_button1").click(function(e) {
    $(".cui_first_oui").removeClass("cui_dialog_display");
    $(".cui_first_oui").addClass("cui_dialog_hide");
    $(".cui_second_email").removeClass("cui_dialog_hide");
    $(".cui_second_email").addClass("cui_dialog_display");
    $(".cui_second_email_message").addClass("bubble_displayed");
    $(".cui_loader").removeClass("remove_loader");
    $(".cui_loader").addClass("display_loader");
    $(".cui_dialog_buttons").removeClass("cui_dialog_buttons_hidden");
    $(".cui_dialog_buttons").addClass("cui_dialog_buttons_displayed");
    $(".svg-logo").toggleClass("svg-happyfreshlogo_thinking");
    setTimeout(function() {
       $(".cui_loader").removeClass("display_loader");
       $(".cui_loader").addClass("remove_loader");
       $(".svg-logo").removeClass("svg-happyfreshlogo_thinking");
   }, 2000);
    });


    $(".cui_first_non_button_yes").click(function(e) {
    $(".cui_first_non").removeClass("cui_dialog_display");
    $(".cui_first_non").addClass("cui_dialog_hide");
    $(".cui_second_email").removeClass("cui_dialog_hide");
    $(".cui_second_email").addClass("cui_dialog_display");
    $(".cui_second_email_message").addClass("bubble_displayed");
    $(".cui_first_oui").addClass("cui_dialog_greyed");
    $(".cui_loader").removeClass("remove_loader");
    $(".cui_loader").addClass("display_loader");
    $(".cui_dialog_buttons_second_email").removeClass("cui_dialog_buttons_hidden");
    $(".cui_dialog_buttons_second_email").addClass("cui_dialog_buttons_displayed");
    $(".svg-logo").toggleClass("svg-happyfreshlogo_thinking");
    setTimeout(function() {
       $(".cui_loader").removeClass("display_loader");
       $(".cui_loader").addClass("remove_loader");
       $(".svg-logo").removeClass("svg-happyfreshlogo_thinking");
   }, 2000);
    });

    $(".category_bottom").click(function(e) {
    $(".cui_button").removeClass("cui_dialog_display");
    $(".cui_button").addClass("cui_dialog_hide");
    $(".cui_after_cta").removeClass("cui_dialog_display");
    $(".cui_after_cta").addClass("cui_dialog_hide");
    $(".cui_second_email").removeClass("cui_dialog_display");
    $(".cui_second_email").addClass("cui_dialog_hide");
    $(".cui_first_non").removeClass("cui_dialog_display");
    $(".cui_first_non").addClass("cui_dialog_hide");
    $(".cui_first_oui").removeClass("cui_dialog_hide");
    $(".cui_first_oui").addClass("cui_dialog_display");
    $(".cui_first_oui_message").addClass("bubble_displayed");
    $(".cui_loader").removeClass("remove_loader");
    $(".cui_loader").addClass("display_loader");
    $(".cui_dialog_buttons_first_oui").removeClass("cui_dialog_buttons_hidden");
    $(".cui_dialog_buttons_first_oui").addClass("cui_dialog_buttons_displayed");
    $(".cui_first_button1").addClass("btn_selected");
    $(".svg-logo").addClass("svg-happyfreshlogo_thinking");
    setTimeout(function() {
       $(".cui_loader").removeClass("display_loader");
       $(".cui_loader").addClass("remove_loader");
       $(".svg-logo").removeClass("svg-happyfreshlogo_thinking");
   }, 2000);
    });

    $(".cui_email_submit").click(function(e) {
    $(".confetti_container").removeClass("confetti_container_hidden");
    $(".confetti_container").addClass("confetti_container_displayed");
    $(".nwslttr_loading").addClass("success_pop");
    });