(function($) {

    var trustechJS = {

        init : function(){

            this.tabSLider();
            this.popin();

        },


        popin : function(){
            $(".video-item").click(function(){
                var videoName = $(this).data('videoname');
                $("#"+videoName).addClass('popin-open');
                $("body").addClass('noscroll');
            });
            $(".popin-close, .popin-overlay").click(function(){
                $(".popin").removeClass('popin-open');
                $('.popin-video iframe').attr("src", $(".popin-video iframe").attr("src"));
                $("body").removeClass('noscroll');
            });
        },


        tabSLider : function(){

            var gallery = $('.tabSlider-imgs'),
                items   = gallery.find('li'),
                nbItems = items.length,
                current = 1,
                first   = items.filter(':first'),
                last    = items.filter(':last'),
                triggers = $('.tabSlider-nav-item');

            // Cloning first and last item 
            first.before(last.clone(true)); 
            last.after(first.clone(true)); 

            // Set button handlers
            triggers.click(function(){

                var clickedTab = $(this).data( "tab" );
                
                //Show active tab
                $('.tabSlider-nav-item.active').removeClass('active');
                $(this).addClass('active');

                //Show active text
                $('.tabSlider-texts li.active').removeClass('active');
                $('.tabSlider-texts .' + clickedTab).addClass('active');




                if (gallery.is(':not(:animated)')) {


                    var cycle = false,
                        delta = (this.id === "prev")? -1 : 1;
                        

                    gallery.animate({ left: "+=" + (-730 * delta) }, function() {
    
                        current += delta;

                        console.log('Delta : '+ delta);
                        console.log('Current : '+ current);
                    
                        /** 
                         * we're cycling the slider when the the value of "current" 
                         * variable (after increment/decrement) is 0 or when it exceeds
                         * the initial gallery length
                         */          
                        cycle = !!(current === 0 || current > nbItems);
                    
                        if (cycle) {
                            /* we switched from image 1 to 4-cloned or 
                                from image 4 to 1-cloned */
                            current = (current === 0)? nbItems : 1; 
                            gallery.css({left:  -730 * current });
                        }
                    });  


                }

            });

        }

    }
    trustechJS.init();

})(jQuery);
