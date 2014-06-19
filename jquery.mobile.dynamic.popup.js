/**
    Copyright (c) 2012-2014 Serban Ghita <serbanghita@gmail.com>
    jQuery Mobile dynamic popup. MIT Licensed
*/

(function($){

    function dynamicPopup(){

        var settings,
            $popup,
            $popupMain,
            $popupContent,
            $popupCloseBtn,
            $activePage = $.mobile.activePage;

        this.init = function( options ){

            // Extend the general settings.
            settings = $.extend({
                                    content: '',
                                    popupId: 'popup' + $activePage.attr('id'),
                                    'data-theme': 'a',
                                    'data-overlay-theme': 'none',
                                    'data-position-to': 'window',
                                    'data-rel': 'back',
                                    'data-dismissible': true,
                                    'data-transition': 'none',
                                    'data-arrow': false
                                },
                                options);

            // Sending a plain text or HTML message.
            if(typeof options === 'string'){
                settings.content = options;
            }

            this.createPopupElements();
            this.populatePopupContent();
            this.putPopupInDOM();
            this.openPopup();

            return $popup;

        }

        // Create the popup objects without the actual contents.
        // If the popup container exists return it's objects.
        this.createPopupElements = function(){

            $popup = $('#' + settings.popupId);

            // New popup, it doesn't exist.
            if( !$popup.length ){

                // Create the generic popup elements.
                $popupMain =  $('<div></div>').attr({
                                                    'id': settings.popupId,
                                                    'data-role': 'popup',
                                                    'data-theme': settings['data-theme'],
                                                    'data-overlay-theme': settings['data-overlay-theme'],
                                                    'data-position-to': settings['data-position-to'],
                                                    'data-dismissible': settings['data-dismissible'],
                                                    'data-transition': settings['data-transition'],
                                                    'data-arrow': settings['data-arrow']
                                            })
                                            .addClass('ui-popup-main');

                $popupContent = $('<div></div>').attr({
                                                        'data-role': 'content'
                                                    })
                                                    .addClass('ui-content ui-popup-content');

                $popupCloseBtn = $('<a></a>').attr({
                                                'href': '#',
                                                'data-role': 'button',
                                                'data-rel': settings['data-rel']
                                            })
                                            .addClass('ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right ui-popup-close-btn');

            } else {

                // Find the existing HTML wrappers.
                $popupMain = $popup;
                $popupContent = $popup.find('.ui-popup-content');
                $popupCloseBtn = $popup.find('.ui-popup-close-btn');

            }


        }

        // Populate the popup's content.
        this.populatePopupContent = function(){

            // 1. Static HTML string.
            if(typeof settings.content === 'string'){
                $popupContent.html( settings.content );
            }

            // 2. jQuery object.
            if(settings.content instanceof jQuery){
                // Grab the content inside the wrapper.
                $popupContent.html( settings.content.html() );
            }

        }

        this.putPopupInDOM = function(){

            // Remove the existing popup from DOM.
            $popup.remove();

            // Tie together the HTML elements.
            $popupMain.append( $popupCloseBtn ).append( $popupContent );

            // Append the popup to the current page.
            $activePage.append( $popupMain );

        }

        this.openPopup = function(){

            // Init.
            $popup = $('#' + settings.popupId);
            $popup.popup( settings );

            // Open.
            $popup.popup('open');

        }

    }

    // Register the plugin.
    $.dynamic_popup = function( options ){

        var popup = new dynamicPopup();
        return popup.init( options );

    }


})(jQuery);
