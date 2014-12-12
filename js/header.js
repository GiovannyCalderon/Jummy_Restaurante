

            jQuery(function($) {
                var open = false;

                function resizeMenu() {
                    if ($(this).width() < 480) {
                        if (!open) {
                            $("#menu-restaurant").hide();
                        }
                        $("#menu-button").show();
                    
                    }
                    else if ($(this).width() >= 480) {
                        if (!open) {
                            $("#menu-restaurant").show();
                        }
                        $("#menu-button").hide();
                    
                    }
                }

                function setupMenuButton() {
                    $("#menu-button").click(function(e) {
                        e.preventDefault();

                        if (open) {
                            $("#menu-restaurant").fadeOut();
                            $("#menu-button").toggleClass("selected");
                        }
                        else {
                            $("#menu-restaurant").fadeIn();
                            $("#menu-button").toggleClass("selected");
                        }
                        open = !open;
                    });
                }


                $(window).resize(resizeMenu);

                resizeMenu();
                setupMenuButton();
            });