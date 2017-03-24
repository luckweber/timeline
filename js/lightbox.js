(function ($) {
    $(document).ready(function () {

        $.fn.lightbox = function () {
            
            var settings = $.extend({
                animation: "animationfadeIn" // animationfadeIn, animationSlider
            });

            var self = $(this);

            currentItem = 1;
			currentItem2 = 1;
			arrayElements2 = [];
			arrayElements2_title = [];

            var bodyElements = document.getElementsByClassName("lightbox");
			
			
			 var idlightbox = document.getElementById("lightbox");

            var arrayItem = document.getElementsByClassName("panel-lightbox");


            var background = $("<div/>", {id: "lightbox-background"});
            var lightbox = $("<div/>", {id: "lightbox"});
            var img = $("<img/>", {id: "lightbox-image", class: "image"});
            var buttont = $("<a/>", {class: "lightbox-button"});
            var menu = $("<div/>", {id: "lightbox-menu"});
            var textt = $("<h6/>", {id: "lightbox-text"});
			
			var number = $("<p/>", {class: "lightbox-number"});
			var number_total;

            var arrowRight = $("<div/>", {id: "lightbox-arrow-right"});
            var arrowLeft = $("<div/>", {id: "lightbox-arrow-left"});


            background.append(menu);
            background.append(lightbox);
           

            $("body").append(background);

            background.hide();



            $("body").on("click", '.' + self.attr("class"), function (event) {
                event.preventDefault();
				
				//alert($(this).attr("data-lightbox-gallery-full"));

				//LiGHTBOX SIMPLES------------------------------------------------------------------
                if ($(this).attr("data-lightbox-gallery") == undefined && $(this).attr("data-lightbox-gallery-full") == undefined) {

                    $(this).each(function () {
                        menu.empty();
                        menu.append(buttont);
                        lightbox.empty();

                        img.attr("src", $(this).attr("href"));
                        textt.html($(this).attr("title"));

                        menu.append(textt);


                        var linkImage = img.attr("src");

                        lightbox.append(img);

                        background.fadeIn(800);

                        lightbox.start();
                        

                    });
				//LIGHTBOX FULL COM UMA IMAGEM--------------------------------------------------------	
                }else if($(this).attr("data-lightbox-gallery") == undefined && $(this).attr("data-lightbox-gallery-full") != undefined){
					
					$(this).each(function () {
						
					menu.empty();
                    menu.append(buttont);
                    background.append(arrowRight);
                    background.append(arrowLeft);
                    var numItem = $(".lightbox").index(this);

                    lightbox.empty();

                    var n = 0;

                    for (var i = 0; i < bodyElements.length; i++) {

                        if (bodyElements[i].getAttribute("data-lightbox-gallery-full") == $(this).attr("data-lightbox-gallery-full")) {
							arrayElements2[n] = bodyElements[i].getAttribute("href");
							arrayElements2_title[n] = bodyElements[i].getAttribute("title");
                            
                            ++n;
                        }

                    }
					
					currentItem = 1;
					var countSlider = arrayElements2.length - 1;
					
					number_total =countSlider;
					
					nn = --n;
					
					if(nn > 1){
						number.html("1/"+nn);
					}
					

                    for (var i = 0; i < nn; i++) {
                        var panel = $("<div/>", {class: "panel-lightbox"});
                        var imgs = $("<img/>", {class: "image"});
                        var texts = $("<h6/>", {class: "lightbox-text"});
						
						

                        imgs.attr("src", arrayElements2[i]);


                        menu.append(texts);
						
						

                        panel.append(imgs);
                        lightbox.append(panel);
                    }

						move(countSlider);
						background.fadeIn(800);
						lightbox.start();

                    });	
					
					
					menu.append(number);
					
				}else {
                    menu.empty();
                    menu.append(buttont);
                    background.append(arrowRight);
                    background.append(arrowLeft);
                    var numItem = $(".lightbox").index(this);

                    lightbox.empty();

                    var arrayElements = [];


                    var n = 0;

                    for (var i = 0; i < bodyElements.length; i++) {

                        if (bodyElements[i].getAttribute("data-lightbox-gallery") == $(this).attr("data-lightbox-gallery")) {
                            arrayElements[n] = bodyElements[i];
                            
                            ++n;
                        }

                    }
					
					
					
					currentItem += $(arrayElements).index(this);
					
					number_total = 1;
					
                    for (var i = 0; i < arrayElements.length; i++) {
                        var panel = $("<div/>", {class: "panel-lightbox"});
                        var imgs = $("<img/>", {class: "image"});
                        var texts = $("<h6/>", {class: "lightbox-text"});

                        imgs.attr("src", arrayElements[i].getAttribute("href"));
                        texts.html(arrayElements[i].getAttribute("title"));


                        menu.append(texts);

                        panel.append(imgs);
                        lightbox.append(panel);
                    }

                    move();
					 lightbox.start();


                }

            });
			
			

            function move(n) {

                var texxt = document.getElementsByClassName("lightbox-text");

                if (currentItem > arrayItem.length) {
                    currentItem = arrayItem.length;
                }
                
                if (currentItem <= 1) {
                    currentItem = 1;
                }
                
                

                for (var i = 0; i < arrayItem.length; i++) {

                    arrayItem[i].style.display = "none";
                    texxt[i].style.display = "none";


                }

                arrayItem[currentItem - 1].style.display = "block";
                texxt[currentItem - 1].style.display = "block";

                setInterval(function(){
		
                    if(currentItem <= 1){
                            arrowLeft.hide();
                    }else{
                            arrowLeft.show();
                    }
                    if(currentItem >= arrayItem.length){
                            arrowRight.hide();
                    }else{
                            arrowRight.show();
                    }
		
                }, 1);

                background.fadeIn(800);
            }


            arrowRight.click(function () {
                move(currentItem += 1);
				
				number.html(currentItem+"/"+number_total);
            });

            arrowLeft.click(function () {
                move(currentItem -= 1);
				number.html(currentItem+"/"+number_total);
            });
			
			
			


            $("#lightbox-background").click(function (event) {
                if (event.target.id === "lightbox-background") {
                    background.fadeOut(600);
                    currentItem = 1;
					
                }

            });

            $("body").on("click", ".lightbox-button", function (event) {
                background.fadeOut(600);
                    currentItem = 1;

            });

            $(document).keyup(function (e) {
                if (e.which === 27 && img.length >= 1) {
                    background.fadeOut(600);
                } else if (e.which === 39) {
                    e.preventDefault();
                }

            });

        },
                $.fn.start = function () {

                    return this.each(function () {
                        var $this = $(this),
                                parent = $this.parent(),
                                topPos,
                                topMargin,
                                leftMargin,
                                resizeTimeout,
                                topPos1
                                ;

                        if (parent.is("body:not(.root-height-set)")) {
                            $("html,body").css("height", "100%").addClass("root-height-set");
                        }
                        if ($this.css("position") === "absolute" || $this.css("position") === "fixed") {


                            if ($(window).width() > 1900) {
                                topPos = "100%";
                            } else if ($(window).width() > 800 && $(window).width() < 1900) {
                                topPos = "70%";
                            } else {
                                topPos = "50%";
                            }

                            topMargin = "-" + Math.round($this.outerHeight() / 2) + "px";
                            leftMargin = "-" + Math.round($this.outerWidth() / 2) + "px";
                            $this.css({"left": "50%", "margin-left": leftMargin});
                            


                        } else {
                            topPos = Math.floor((parent.height() - $this.outerHeight()) / 2);
                            topPos1 = "auto";
                            topMargin = "auto";
                            $this.css({"position": "relative", "margin-left": "auto", "margin-right": "auto"});
                        }

                        $this.css({"top": topPos1, "margin-top": topMargin});


                        $(window).resize(function () {
                            if (resizeTimeout) {
                                clearTimeout(resizeTimeout);
                            }
                            resizeTimeout = setTimeout(function () {
                                if ($this.css("position") === "absolute") {
                                    topMargin = "-" + Math.round($this.outerHeight() / 2) + "px";
                                    leftMargin = "-" + Math.round($this.outerWidth() / 2) + "px";
                                    $this.css({"margin-left": leftMargin, "margin-top": topMargin});
                                } else {
                                    topPos = Math.floor((parent.height() - $this.outerHeight()) / 2);
                                    $this.css("top", topPos1);
                                }
                            }, 150);
                        });
                    });
                }


    });
})(jQuery);