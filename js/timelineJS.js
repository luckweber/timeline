function Slider(nameClass, nameId) {
    var self = this;
    var documents =  window.document;
    this.currentItem = 1;
    this.nameClass = document.getElementsByClassName(nameClass);
    this.next = document.getElementById("next");
    this.prev = document.getElementById("prev");
    this.div = document.getElementById(nameId);
    
    
    this.xml = [
    function () {return new XMLHttpRequest()},
    function () {return new ActiveXObject("Msxml2.XMLHTTP")},
    function () {return new ActiveXObject("Msxml3.XMLHTTP")},
    function () {return new ActiveXObject("Microsoft.XMLHTTP")}
    ];
    
    
    this.data = null;
    this.nameId = "" || nameId;
	
	
	
	
};



Slider.prototype.setFillSlider = function(dataFont, time, filter_mes, filter_ano){
	
	
	$.each(dataFont, function( index, value ) {
		
		var itens  = $("<div/>", {class:"item"});
		var dataLength = dataFont.length;
		var dataSource = dataFont;
		var dataIndex = "";
		
		data_new = value.start;
		data_new_i  = index;
		dataIndex = index;
		
		var itens  = $("<div/>", {class:"item"});
		var pt  = $("<nav/>", {class:"nextItem"});
		var pt2  = $("<nav/>", {class:"prevItem"});
		var title  = $("<h1/>", {class:"title"});
		var info  = $("<h3/>");
		var data  = $("<div/>", {class:"data"});
		var dataYear = $("<p/>", {class:"dataYear"});
		var link = $("<a/>", {class:"lightbox"});
		var img  = $("<img/>", {class:"images"});
		var panel  = $("<div/>", {class:"panel"});
		var iFrame = $("<div/>",{class:"timeline-slider-content-gallery-div"});
			
		if(index == 0 ){
			pt.removeClass();
			pt.addClass("nextItem2");
		}else{
			pt.addClass("nextItem");
		}
		
			var  numero = index;
			
			
			
			if(++numero < dataLength){
				
				if(dataSource[numero].start.length == 4){
					pt.html("<p class='data_right_year'>"+dataSource[numero].start+"</p>  <p title='"+dataSource[numero].title+"' class='data_right_msn'>"+dataSource[numero].title+"</p>");
				
				}else{
					
					var d = new Date(dataSource[numero].start);
					var days = ["Domingo","Segunda","Ter&ccedil;a","Quarta","Quinta","Sexta","Sabado"];
					var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
				

					pt.html("<p class='data_right_year'>"+ days[d.getDay()]+", "+(d.getDate())+" do "+mes[d.getMonth()]+" de "+d.getFullYear()+"</p><p title='"+dataSource[numero].title+"' class='data_right_msn'>"+dataSource[numero].title+"</p>");
					
					
					$.each( filter_mes, function( key, value ) {
						
					  if(value == dataSource[numero].start){
						  
						var data_result = dataSource[numero].start;
						var d = new Date(data_result);
						var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
						pt.html("<p class='data_right_year'>"+mes[d.getMonth()]+" de "+d.getFullYear()+"</p><p title='"+dataSource[numero].title+"' class='data_right_msn'>"+dataSource[numero].title+"</p>");
					
					  }
					});
					
					
					$.each( filter_ano, function( key, value ) {
						
					  if(value == dataSource[numero].start){
						  
						var data_result = dataSource[numero].start;
						var d = new Date(data_result);
						var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
						pt.html("<p class='data_right_year'>"+d.getFullYear()+"</p><p title='"+dataSource[numero].title+"' class='data_right_msn'>"+dataSource[numero].title+"</p>");
					
					  }
					});
					
					
					
				}
			}else{
				pt.text("");
			}
			
			
			//pt.text("aa");
			
			var  numero2 = index;
			if(index === 0){
				pt2.text("");
			}else{
				var num = --numero2;
				
				if(dataSource[num].start.length == 4){
					pt2.html("<p class='data_right_year'>"+dataSource[num].start+"</p>  <p title='"+dataSource[num].title+"' class='data_right_msn'>"+dataSource[num].title+"</p>");
				}else{
					
					var d = new Date(dataSource[num].start);
					var days = ["Domingo","Segunda","Ter&ccedil;a","Quarta","Quinta","Sexta","Sabado"];
					var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
				

					pt2.html("<p class='data_right_year'>"+ days[d.getDay()]+", "+(d.getDate())+" do "+mes[d.getMonth()]+" de "+d.getFullYear()+"</p><p title='"+dataSource[num].title+"' class='data_right_msn'>"+dataSource[num].title+"</p>");
					
					
					
					$.each( filter_mes, function( key, value ) {
						
					  if(value == dataSource[num].start){
						  
						var data_result = dataSource[num].start;
						var d = new Date(data_result);
						var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
						pt2.html("<p  class='data_right_year'>"+mes[d.getMonth()]+" de "+d.getFullYear()+"</p><p title='"+dataSource[num].title+"' class='data_right_msn'>"+dataSource[num].title+"</p>");
						
					  }
					});
					
					$.each( filter_ano, function( key, value ) {
						
					  if(value == dataSource[num].start){
						  
						var data_result = dataSource[num].start;
						var d = new Date(data_result);
						var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
						pt2.html("<p  class='data_right_year'>"+d.getFullYear()+"</p><p title='"+dataSource[num].title+"' class='data_right_msn'>"+dataSource[num].title+"</p>");
						
					  }
					});
					
				
				}
			} 
			
			
			
			
		//----------------------ANO DOS EVENTOS-------------------------
		
		
		
		if(value.start.length == 4){
				data.html("<p class='dataYear'>"+value.start+"</p>");

			}else{
				
				if(value.end){
					
					 var d1 = new Date(value.start);
					 var d2 = new Date(value.end);
					 var days2 = ["Domingo","Segunda","Ter&ccedil;a","Quarta","Quinta","Sexta","Sabado"];
					 var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
					 var data_tag = d1.getFullYear()+"-"+d1.getMonth()+"-"+d1.getDay();
					 //data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d1.getDate()+" de "+mes[d1.getMonth()]+" de "+d1.getFullYear()+" - "+d2.getDate()+" de "+mes[d2.getMonth()]+" de "+d2.getFullYear()+"</p>"); 
					 data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d.getFullYear()+"</time></p><p class='dataYear_full'>"+(d1.getDate())+" a "+(d2.getDate())+" de "+mes[d2.getMonth()]+"</p>"); 

					
					$.each( filter_mes, function( key, value ) {
						
							
						  if(value == data_new){
									
								var data_result = dataSource[dataIndex].start;
								var d = new Date(data_result);
								var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
								var data_tag = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
								data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d.getFullYear()+" - "+d2.getFullYear()+"</p>");
								
						  }
					});
					
					
				}else{
					
					 var d = new Date(dataSource[dataIndex].start);
					 var days2 = ["Domingo","Segunda","Ter&ccedil;a","Quarta","Quinta","Sexta","Sabado"];
					 var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
					 var data_tag = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
					 data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d.getFullYear()+"</time></p><p class='dataYear_full'>"+ days2[d.getDay()]+", "+(d.getDate())+" de "+mes[d.getMonth()]+"</p>"); 
				  
					
					
					
					$.each( filter_mes, function( key, value ) {
						
					  if(value == data_new){
						  
							var data_result = dataSource[dataIndex].start;
								var d = new Date(data_result);
								var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
								var data_tag = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
								data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d.getFullYear()+"</time></p><p class='dataYear_full'>  "+mes[d.getMonth()]+"</p>");
								
					  }
					});
					
					
					$.each( filter_ano, function( key, value ) {
						
					  if(value == data_new){
						  
								var data_result = dataSource[dataIndex].start;
								var d = new Date(data_result);
								var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
								var data_tag = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
								data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d.getFullYear()+"</time></p>");
								
					  }
					});
					
				}
					
			}
		
		
		if(value.media == "slider-content-gallery"){
			var panel  = $("<div/>", {class: "conteudo-evento"});
			
			if(value.thumbs.length == 1){
				//--------------------------UMA IMAGEM--------------------------------------------------
				
				//VERIFICAR ERROR NO JSON-------------------------------------------------------------------
				if(value.thumbs[0].subTitle == undefined){
					alert("Error no Atributo = subTitle do OBJETO = thumbs"+"  ID = "+dataIndex);

				}else if(value.thumbs[0].menor == undefined){
					alert("Error no Atributo = menor do OBJETO = thumbs"+"  ID = "+dataIndex);

				}
				
			        //CRIAÇÂO DAS DIV--------------------------------------------------------------------------------
					var panel  = $("<div/>", {class: "conteudo-evento"});
					var wrapp  = $("<div/>",{class:"timeline-slider-content-gallery-wrapp"});
					var sideRight  = $("<div/>",{class:"timeline-slider-content-gallery-sideright"});
					var sideLeft  = $("<div/>",{class:"timeline-slider-content-gallery-sideleft"});
					var text121 = $("<div/>", {class:"timeline-slider-content-gallery-item1-div-content"});
					var panel2  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-image1"});
					var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-data"});
					var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-title"});
					var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-info"});
					var img1 = $("<img/>",{class:dataIndex, id:"image_"+dataIndex});
					var figure = $("<figure/>",{class:"cont_fig"});
					var figcaption = $("<figcaption/>",{class:"subtitle_fig", id:"subTitle_"+dataIndex});
					var links = $("<a/>",{class:"lightbox"});
					var subTitle = $("<h4/>");
					var title = $("<h1/>", {class:"timeline_title"});
					
					
					var sub1  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-sub"});
					var sub2 = $("<div/>", {class:"sub2"});
					var sub4 = $("<div/>", {class:"sub4"});
					var sub2_icon = $("<div/>", {class:"sub2_icon"});
					
					text121.append(sub2_icon);
					sub1.append(sub2_icon);
					sub1.append(sub2);
					
					sub2.append(dataSource[dataIndex].thumbs[0].subTitle);
					
					links.attr("href",dataSource[dataIndex].thumbs[0].url);
					img1.attr('src', dataSource[dataIndex].thumbs[0].menor);
					

					
					if(dataSource[dataIndex].thumbs[0].subTitle.length > 200){
	
						text121.html(dataSource[dataIndex].thumbs[0].subTitle);
					}else{
						figcaption.html(dataSource[dataIndex].thumbs[0].subTitle);
					}
					
					
					links.append(img1);
					figure.append(links);
					
					panel2.append(figure);
					
					var image_test =  new Image();
					image_test.src = dataSource[dataIndex].thumbs[0].menor;
					
					var image_width = image_test.width;
					var image_height = image_test.height;
				
					//CRIAÇÂO DA IMAGEM DA TIMELINE-----------------------------------------------------
					links.after(figcaption);
					panel7.append( dataSource[dataIndex].info);
					title.append(dataSource[dataIndex].title);
					panel6.append(title);
					
					
					//VERIFICAR TAMANHO DA TELA----------------------------------------------------------------------------------------------
					if($( window ).width() >= 780){
						//VERICAR SE A IMAGEM È VERTICAL-------------------------------------------------------------------
						if(image_width  < image_height ){
							panel6.append(sub1);
							figcaption.hide();
							sub1.show();
							sub4.hide();
						}else{
							
							sub1.hide();
							
							if(dataSource[dataIndex].thumbs[0].subTitle.length > 200){
								sub4.append(sub2_icon);
								
								sub4.append(text121);
								panel6.append(sub4);
							}else{
								figcaption.show();
								
							}
							
							
						}
						
						
						
						
					}else{
						figcaption.html(dataSource[dataIndex].thumbs[0].subTitle)
						figcaption.show();
					}
					
					
					
					panel5.append(data);
					
					sideLeft.append(panel2);
					sideRight.append(panel5);
					sideRight.append(panel6);
					
					
					
					if($( window ).width() <= 780){
						wrapp.append(sideRight);
						wrapp.append(sideLeft);
						
						
					}else{
						wrapp.append(sideLeft);
						wrapp.append(sideRight);
						
					}
					
				panel.append(wrapp);
				//ADCIONANDO DIVS NOS ITENS DA TIMELINE-----------------------------------------------------
				$(".item").eq(dataIndex).empty();
				$(".item").eq(dataIndex).append(panel);
				$(".item").eq(dataIndex).append(pt);
				$(".item").eq(dataIndex).append(pt2)	
				
				
			}else if(value.thumbs.length == 2){
				//slider-content-gallery COM 2 IMAGENS-------------------------------------------------------------------
				
				//CRIAÇÂO DAS DIVS--------------------------------------------------------------------------------
				var panel  = $("<div/>", {class: "conteudo-evento"});
				var wrapp  = $("<div/>",{class:"timeline-slider-content-gallery-wrapp"});
				var sideRight  = $("<div/>",{class:"timeline-slider-content-gallery-sideright"});
				var sideLeft  = $("<div/>",{class:"timeline-slider-content-gallery-sideleft"});
				var panel2  = $("<div/>",{class:"timeline-slider-content-gallery-item2-div-image1"});
				var panel3  = $("<div/>", {class:"timeline-slider-content-gallery-item2-div-image2"});
				var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-data"});
				var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-title"});
				var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-info"})
				var img1 = $("<img/>");
				var img2 = $("<img/>");
				var subTitle = $("<h4/>");
				var subTitle2 = $("<h4/>");
				var links = $("<a/>",{class:"lightbox"});
				var links2 = $("<a/>",{class:"lightbox"});
				var figure = $("<figure/>");
				var figcaption = $("<figcaption/>",{class:"subtitle_fig"});
				var figure2 = $("<figure/>");
				var figcaption2 = $("<figcaption/>",{class:"subtitle_fig"});
				var title = $("<h1/>", {class:"timeline_title"});
				var sub1  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-sub"});
				var sub2 = $("<div/>", {class:"sub2"});
				var sub2_icon = $("<div/>", {class:"sub2_icon"});
				var sub3 = $("<p/>", {class:"sub3"});
				
				//ADCIONANDO AS DIVS--------------------------------------------------------------------------------
				sub1.append(sub2_icon);
				sub1.append(sub2);
				sub1.append(sub3);
				panel5.append(data);
				panel7.append( dataSource[dataIndex].info);
				title.append(dataSource[dataIndex].title);
				panel6.append(title);
				panel6.append(sub1);
				
				//ADCIONANDO IMAGEM 1---------------------------------------------------------------------------------------
				links.attr("href",dataSource[dataIndex].thumbs[0].url);
				links.attr("data-lightbox-gallery",dataSource[dataIndex].id);
				img1.attr('src', dataSource[dataIndex].thumbs[0].menor);
				sub2.append(dataSource[dataIndex].thumbs[0].subTitle);
				figcaption.html(dataSource[dataIndex].thumbs[0].subTitle);
				links.append(img1);
				figure.append(links);
				panel2.append(figure);
				links.after(figcaption);
				
				//ADCIONANDO IMAGEM 2---------------------------------------------------------------------------------------
				links2.attr("href",dataSource[dataIndex].thumbs[1].url);
				
				//COLOCAR LEGENDA NA LIGTHBOX------------------------------------------------------------------------------------------------
				//links2.attr("title",dataSource[dataIndex].thumbs[1].subTitle);
				
				
				links2.attr("data-lightbox-gallery",dataSource[dataIndex].id);
				img2.attr('src', dataSource[dataIndex].thumbs[1].menor);
				sub3.append(dataSource[dataIndex].thumbs[1].subTitle);
				figcaption2.html(dataSource[dataIndex].thumbs[1].subTitle);
				links2.append(img2);
				figure2.append(links2);
				panel3.append(figure2);
				links2.after(figcaption2);
				
				//IMAGEM VALIDATE------------------------------------------------------------------
				myImage1 = new Image();
				myImage2 = new Image();
				myImage1.src = dataSource[dataIndex].thumbs[0].menor;
				myImage2.src = dataSource[dataIndex].thumbs[1].menor;
				
				//LEGENDAS-------------------------------------------------------------------------
				sub1.append(sub2);
				sub1.append(sub3);
				
				//POSITION------------------------------------------------------------------
				if($( window ).width() >= 780){
					//IMAGEM VERTICAL-------------------------------------------------------------------
					if(myImage1.height > myImage1.width && myImage2.height > myImage2.width){
						sideRight.removeClass();
						sideRight.addClass("timeline-slider-content-gallery-sideright");
						sideLeft.append(panel2);
						sideLeft.append(panel3);
						sideRight.append(panel5);
						sideRight.append(panel6);
						figcaption.hide();
						figcaption2.hide();
						sideLeft.show();
						sub1.show();
						
						//VERICAR TAMANHO DA LEGENDA--------------------------------------------------------------
						if(dataSource[dataIndex].thumbs[0].subTitle.length <= 120 || dataSource[dataIndex].thumbs[1].subTitle.length <= 120){
							sideRight.removeClass();
							sideRight.addClass("timeline-slider-content-gallery-sideright-2");
							sideRight.append(panel5);
							sideRight.append(panel6);
							sideRight.append(panel2);
							sideRight.append(panel3);
							sideLeft.hide();
							figcaption.show();
							figcaption2.show();
							sub1.hide();
						}
						
						
					//IMAGEM HORIZONTAL----------------------------------------------------------------------	
					}else if(myImage1.height < myImage1.width && myImage2.height < myImage2.width){
						//VERICAR TAMANHO DA LEGENDA--------------------------------------------------------------
						
						sideLeft.append(panel2);
						sideLeft.append(panel3);
						sideRight.append(panel5);
						sideRight.append(panel6);
						sub1.show();
						figcaption.hide();
						figcaption2.hide();
						
						if(dataSource[dataIndex].thumbs[1].subTitle.length <= 120 || dataSource[dataIndex].thumbs[0].subTitle.length <= 120){
							sideRight.removeClass();
							sideRight.addClass("timeline-slider-content-gallery-sideright-3");
							sideRight.append(panel5);
							sideRight.append(panel6);
							sideRight.append(panel2);
							sideRight.append(panel3);
							sideLeft.hide();
							sub1.hide();
							figcaption.show();
							figcaption2.show();
						}
						
					//IMAGEM HORIZONTAL E VERTICAL----------------------------------------------------------------------	
					}else{
						//VERICAR TAMANHO DA LEGENDA--------------------------------------------------------------
						
						sideLeft.append(panel2);
						sideLeft.append(panel3);
						sideRight.append(panel5);
						sideRight.append(panel6);
						sub1.show();
						//figcaption.hide();
						//figcaption2.hide();
						
						if(dataSource[dataIndex].thumbs[1].subTitle.length <= 120 || dataSource[dataIndex].thumbs[0].subTitle.length <= 120){
								
								sideLeft.append(panel2);
								sideLeft.append(panel3);
								sideRight.append(panel5);
								sideRight.append(panel6);
								sub1.hide();
								
						}
							
					}
				}else{
					sideLeft.append(panel2);
								sideLeft.append(panel3);
								sideRight.append(panel5);
								sideRight.append(panel6);
								sub1.hide();
				}
				
				
				//VERIFICAR TAMANHO DA JANELA---------------------------------------------------------
				if($( window ).width() <= 780){
					wrapp.append(sideRight);
					wrapp.append(sideLeft);
				}else{
					wrapp.append(sideLeft);
					wrapp.append(sideRight);
					
				}
				
				
				//PAINEL PRINCIPAL-----------------------------------------------------
				panel.append(wrapp);
				
				
				//ADCIONANDO DIVS NOS ITENS DA TIMELINE-----------------------------------------------------
				$(".item").eq(dataIndex).empty();
				$(".item").eq(dataIndex).append(panel);
				$(".item").eq(dataIndex).append(pt);
				$(".item").eq(dataIndex).append(pt2)
				
			}else if(dataSource[dataIndex].thumbs.length == 0){
					//ITEM SEM IMAGEM----------------------------------------------------------------------------
				
					//CRIAÇÂO DAS DIVS--------------------------------------------------------------------------------
					var panel  = $("<div/>", {class: "conteudo-evento"});
					var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item0-div-data"});
					var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item0-div-title"});
					var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item0-div-info"});
					
					
					//panel7.append( dataSource[dataIndex].info);
					
					panel6.append( "<h1 class='timeline_title2'>"+dataSource[dataIndex].title+"</h1>");
					
					panel5.append(data);
					
					panel.append(panel5);
					panel.append(panel6);
					panel.append(panel7);
					
					$(".item").eq(dataIndex).empty();
					$(".item").eq(dataIndex).append(panel);
					$(".item").eq(dataIndex).append(pt);
					$(".item").eq(dataIndex).append(pt2);
					
			
			}
			
			
		}else if(value.media == "slider-content-gallery-full"){
					
					//VERIFICAR ERROR NO JSON-------------------------------------------------------------------
					if(value.thumbs[0].subTitle == undefined){
						alert("Error no Atributo = subTitle do OBJETO = thumbs"+"  ID = "+dataIndex);

					}else if(value.thumbs[0].menor == undefined){
						alert("Error no Atributo = menor do OBJETO = thumbs"+"  ID = "+dataIndex);

					}
					
					//CRIAÇÂO DAS DIVS--------------------------------------------------------------------------------
					var wrapp  = $("<div/>",{class:"timeline-slider-content-gallery-wrapp"});
					var sideRight  = $("<div/>",{class:"timeline-slider-content-gallery-sideright"});
					var sideLeft  = $("<div/>",{class:"timeline-slider-content-gallery-sideleft"});
					var panel  = $("<div/>", {class: "conteudo-evento"});
					var text1 = $("<h4/>");
					var panel2  = $("<div/>",{class:"timeline-slider-content-gallery-full-div-image1"});
					var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-data"});
					var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-title"});
					var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-info"});
					var img1 = $("<img/>",{class:"imageThumb", id:"image_"+dataIndex});
					var figure = $("<figure/>",{class:"cont_fig"});
					var figcaption = $("<figcaption/>",{class:"subtitle_fig",id:"subTitle_"+dataIndex});
					var links = $("<a/>",{class:"lightbox"});
					var subTitle = $("<h4/>");
					var title = $("<h1/>", {class:"timeline_title"});
					var div2  = $("<div/>",{class:"lightbox-div-hide"});
					
					div2.attr("data-lightbox-gallery-full-name", "gallery"+dataIndex+"");
					
					
					var sub1  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-sub"});
					var sub2 = $("<div/>", {class:"sub2"});
					var sub2_icon = $("<div/>", {class:"sub2_icon"});
					
					sub1.append(sub2_icon);
					sub1.append(sub2);
					
					sub2.append(dataSource[dataIndex].thumbs[0].subTitle);
					
					
					$.each( dataSource[dataIndex].thumbs, function( key, value ) {
						var imgTemp = $("<img/>");
						var linkTemp = $("<a/>",{class:"lightbox"});
						imgTemp.attr('src', dataSource[dataIndex].thumbs[key].url);
						linkTemp.attr("data-lightbox-gallery-full", "gallery"+dataIndex+"");
						linkTemp.attr("href", dataSource[dataIndex].thumbs[key].url);
						linkTemp.attr("title", dataSource[dataIndex].thumbs[key].subTitle);
						linkTemp.append(imgTemp);
						div2.append(linkTemp);
						
					});

					
					links.attr("href",value.thumbs[0].url);
					links.attr("data-lightbox-gallery-full","gallery"+value.id);
					img1.attr('src', value.thumbs[0].menor);
					figcaption.html(value.thumbs[0].subTitle);
					
					links.append(img1);
					figure.append(links);
					
					panel2.append(figure);
					links.after(figcaption);
					
					
					panel7.append( value.info);
					
					title.append(value.title);
					panel6.append(title);
					panel6.append(sub1);
					
					var image_test =  new Image();
					image_test.src = value.thumbs[0].menor;
					
					var image_width = image_test.width;
					var image_height = image_test.height;
					
					//VERICAR O TAMANHO DA TELA----------------------------------------------------------------------------------------------
					if($(window).width() >= 780){
						//VERICAR SE A IMAGEM È VERTICAL-------------------------------------------------------------------
						if(image_width  < image_height ){
							figcaption.hide();
							sub1.show();
							
							
						}else{
							figcaption.show();
							sub1.hide();
						}
					}else{
						figcaption.show();
						sub1.hide();
					}	
					
					panel5.append(data);
					
					
					panel.append(div2);
					
					
					sideLeft.append(panel2);
					sideRight.append(panel5);
					sideRight.append(panel6);
					
					if($( window ).width() <= 780){
						wrapp.append(sideRight);
						wrapp.append(sideLeft);
						
						
					}else{
						wrapp.append(sideLeft);
						wrapp.append(sideRight);
						
					}
					
					
					panel.append(wrapp);
					//---------------------------
					$(".item").eq(dataIndex).empty();
					$(".item").eq(dataIndex).append(panel);
					$(".item").eq(dataIndex).append(pt);
					$(".item").eq(dataIndex).append(pt2);
			
		}else if(value.media == "slider-content-galleries-full"){
			
			if(value.galleries.gallery3){
				//TRÊS IMAGENS-------------------------------------------------------------------
				
				//VERIFICAR ERROR DO JSON-------------------------------------------------------------------
				if(dataSource[dataIndex].galleries.gallery2[0].subTitle == undefined || dataSource[dataIndex].galleries.gallery[0].subTitle == undefined || dataSource[dataIndex].galleries.gallery3[0].subTitle == undefined){
					if(dataSource[dataIndex].galleries.gallery[0].subTitle == undefined){
						alert("Error no Atributo = subTitle do OBJETO = gallery"+"  ID = "+dataIndex);
					}else if(dataSource[dataIndex].galleries.gallery2[0].subTitle == undefined){
						alert("Error no Atributo = subTitle do OBJETO =  gallery2"+"  ID ="+dataIndex);
					}else if(dataSource[dataIndex].galleries.gallery3[0].subTitle == undefined){
						alert("Error no Atributo = subTitle do OBJETO =  gallery3"+"  ID ="+dataIndex);

					}
				}else if(dataSource[dataIndex].galleries.gallery2[0].menor == undefined || dataSource[dataIndex].galleries.gallery[0].menor == undefined){
					if(dataSource[dataIndex].galleries.gallery[0].menor == undefined){
						alert("Error no Atributo = menor do OBJETO =  gallery"+"  ID ="+dataIndex);

					}else if(dataSource[dataIndex].galleries.gallery2[0].menor == undefined){
						alert("Error no Atributo = menor do OBJETO =  gallery2"+"  ID ="+dataIndex);

					}else if(dataSource[dataIndex].galleries.gallery3[0].menor == undefined){
						alert("Error no Atributo = menor do OBJETO =  gallery3"+"  ID ="+dataIndex);

					}
				}
				
				//CRIAÇÂO DAS DIVS--------------------------------------------------------------------------------
				var panel  = $("<div/>", {class: "conteudo-evento"});
				var wrapp  = $("<div/>",{class:"timeline-slider-content-gallery-wrapp"});
				var sideRight  = $("<div/>",{class:"timeline-slider-content-gallery-sideright"});
				var sideLeft  = $("<div/>",{class:"timeline-slider-content-gallery-sideleft"});
				var panel2  = $("<div/>",{class:"timeline-slider-content-gallery-galleries3-div-image1"});
				var panel3  = $("<div/>", {class:"timeline-slider-content-gallery-galleries3-div-image2"});
				var panel33  = $("<div/>", {class:"timeline-slider-content-gallery-galleries3-div-image3"});
				var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-data"});
				var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-title"});
				var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-info"})
				var img1 = $("<img/>");
				var img2 = $("<img/>");
				var img3 = $("<img/>");
				var subTitle = $("<h4/>");
				var subTitle2 = $("<h4/>");
				var subTitle3 = $("<h4/>");
				var links = $("<a/>",{class:"lightbox"});
				var links2 = $("<a/>",{class:"lightbox"});
				var links3 = $("<a/>",{class:"lightbox"});
				var figure = $("<figure/>");
				var figcaption = $("<figcaption/>",{class:"subtitle_fig"});
				var figure2 = $("<figure/>");
				var figcaption2 = $("<figcaption/>",{class:"subtitle_fig"});
				var figure3 = $("<figure/>");
				var figcaption3 = $("<figcaption/>",{class:"subtitle_fig"});
				var title = $("<h1/>", {class:"timeline_title"});
				var sub1  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-sub"})
				var sub2 = $("<p/>", {class:"sub2"});
				var sub3 = $("<p/>", {class:"sub3"});
				var sub4 = $("<p/>", {class:"sub4"});
				var div2  = $("<div/>",{class:"lightbox-div-hide"});
				div2.attr("data-lightbox-gallery-full-name", "gallery"+dataIndex+"");
				var div3  = $("<div/>",{class:"lightbox-div-hide"});
				div2.attr("data-lightbox-gallery-full-name", "gallerys"+dataIndex+"");
				var div4  = $("<div/>",{class:"lightbox-div-hide"});
				div2.attr("data-lightbox-gallery-full-name", "galleryss"+dataIndex+"");
				
				//LIGTHBOX DA IMAGEM 1--------------------------------------------------	
				$.each( dataSource[dataIndex].galleries.gallery, function( key, value ) {
					var imgTemp = $("<img/>");
					var linkTemp = $("<a/>",{class:"lightbox"});
					imgTemp.attr('src', value.url);
					linkTemp.attr("data-lightbox-gallery-full", "gallery"+dataIndex+"");
					linkTemp.attr("href", value.url);
					linkTemp.attr("title", value.subtitle);
					linkTemp.append(imgTemp);
					
					div2.append(linkTemp);
				});
				
				//LIGTHBOX DA IMAGEM 2---------------------------------------------------------------------------
				$.each( dataSource[dataIndex].galleries.gallery2, function( key, value ) {
					var imgTemp = $("<img/>");
					var linkTemp = $("<a/>",{class:"lightbox"});
					imgTemp.attr('src', value.url);
					linkTemp.attr("data-lightbox-gallery-full", "gallerys"+dataIndex+"");
					linkTemp.attr("href", value.url);
					linkTemp.attr("title", value.subtitle);
					linkTemp.append(imgTemp);
					div3.append(linkTemp);
					
				});
				
				//LIGTHBOX DA IMAGEM 3--------------------------------------------------------------------------------------
				$.each( dataSource[dataIndex].galleries.gallery3, function( key, value ) {
					var imgTemp = $("<img/>");
					var linkTemp = $("<a/>",{class:"lightbox"});
					imgTemp.attr('src', value.url);
					linkTemp.attr("data-lightbox-gallery-full", "galleryss"+dataIndex+"");
					linkTemp.attr("href", value.url);
					linkTemp.attr("title", value.subtitle);
					linkTemp.append(imgTemp);
					div4.append(linkTemp);
					
				});
				
				//ADCIONANDO DATA NA TIMELINE-----------------------------------------------------
				sub1.append(sub2);
				sub1.append(sub3);
				sub1.append(sub4);
				panel5.append(data);
				panel7.append(dataSource[dataIndex].info);
				title.append(dataSource[dataIndex].title);
				panel6.append(title);
				panel6.append(sub1);
				
				//CRIAÇÂO DA IMAGEM 1--------------------------------------------------
				links.attr("href",dataSource[dataIndex].galleries.gallery[0].menor);
				links.attr("data-lightbox-gallery-full","gallery"+dataSource[dataIndex].id);
				img1.attr('src', dataSource[dataIndex].galleries.gallery[0].menor);
				sub2.append(dataSource[dataIndex].galleries.gallery[0].subTitle);
				figcaption.html(dataSource[dataIndex].galleries.gallery[0].subTitle);
				links.append(img1);
				figure.append(links);
				panel2.append(figure);
				links.after(figcaption);
				
				//CRIAÇÂO DA IMAGEM 2--------------------------------------------------
				links2.attr("href",dataSource[dataIndex].galleries.gallery2[0].menor);
				links2.attr("data-lightbox-gallery-full","gallerys"+dataSource[dataIndex].id);
				img2.attr('src', dataSource[dataIndex].galleries.gallery2[0].menor);
				sub3.append(dataSource[dataIndex].galleries.gallery2[0].subTitle);
				figcaption2.html(dataSource[dataIndex].galleries.gallery2[0].subTitle);
				links2.append(img2);
				figure2.append(links2);
				panel3.append(figure2);
				links2.after(figcaption2);
				
				//CRIAÇÂO DA IMAGEM 3--------------------------------------------------
				links3.attr("href",dataSource[dataIndex].galleries.gallery3[0].menor);
				links3.attr("data-lightbox-gallery-full","galleryss"+dataSource[dataIndex].id);
				img3.attr('src', dataSource[dataIndex].galleries.gallery3[0].menor);
				sub4.append(dataSource[dataIndex].galleries.gallery3[0].subTitle);
				figcaption3.html(dataSource[dataIndex].galleries.gallery3[0].subTitle);
				links3.append(img3);
				figure3.append(links3);
				panel33.append(figure3);
				links3.after(figcaption3);
				
				//IMAGEM VALIDATE------------------------------------------------------------------
				myImage1 = new Image();
				myImage2 = new Image();
				myImage3 = new Image();
				myImage1.src = dataSource[dataIndex].galleries.gallery[0].menor;
				myImage2.src = dataSource[dataIndex].galleries.gallery2[0].menor;
				myImage3.src = dataSource[dataIndex].galleries.gallery3[0].menor;
				
				//LEGENDAS-------------------------------------------------------------------------
				sub1.append(sub2);
				sub1.append(sub3);
				
				//POSITION------------------------------------------------------------------
				if($( window ).width() > 780){
					//IMAGEM VERTICAL-------------------------------------------------------------------
					if(myImage1.height > myImage1.width && myImage2.height > myImage2.width && myImage1.width && myImage3.height > myImage3.width){
						//VERICAR TAMANHO DA LEGENDA--------------------------------------------------------------
						
						sideRight.removeClass();
						sideRight.addClass("timeline-slider-content-gallery-sideright");
						sideLeft.append(panel2);
						sideLeft.append(panel3);
						
						sideRight.append(panel33);
						
						sideRight.append(panel5);
						sideRight.append(panel6);
						figcaption.hide();
						figcaption2.hide();
						sideLeft.show();
						sub1.show();
						
						
						if(dataSource[dataIndex].galleries.gallery2[0].subTitle.length <= 120 || dataSource[dataIndex].galleries.gallery[0].subTitle.length <= 120){
							sideRight.removeClass();
							sideRight.addClass("timeline-slider-content-gallery-sideright-2");
							sideRight.append(panel5);
							sideRight.append(panel6);
							sideRight.append(panel2);
							sideRight.append(panel3);
							
							sideRight.append(panel33);
							
							sideLeft.hide();
							sub1.hide();
							
						}
						
					//IMAGEM HORIZONTAL----------------------------------------------------------------------	
					}else if(myImage1.height < myImage1.width && myImage2.height < myImage2.width){
						//VERICAR TAMANHO DA LEGENDA--------------------------------------------------------------
						if(dataSource[dataIndex].galleries.gallery2[0].subTitle.length <= 120 || dataSource[dataIndex].galleries.gallery[0].subTitle.length <= 120){
							sideRight.removeClass();
							sideRight.addClass("timeline-slider-content-gallery-sideright-3");
							sideRight.append(panel5);
							sideRight.append(panel6);
							sideRight.append(panel2);
							sideRight.append(panel3);
							
							sideRight.append(panel33);
							
							sideLeft.hide();
							sub1.hide();
						}
					//IMAGEM HORIZONTAL E VERTICAL----------------------------------------------------------------------	
					}else{
						
						
						//VERICAR TAMANHO DA LEGENDA--------------------------------------------------------------
						if(dataSource[dataIndex].galleries.gallery2[0].subTitle.length <= 120 || dataSource[dataIndex].galleries.gallery[0].subTitle.length <= 120){
								
								sideLeft.append(panel2);
								sideLeft.append(panel3);
								
								sideRight.append(panel33);
								
								sideRight.append(panel5);
								sideRight.append(panel6);
								
								sub1.hide();
								
								
						}
							
						sideRight.removeClass();
						sideRight.addClass("timeline-slider-content-gallery-sideright-2");
						sideRight.append(panel5);
						sideRight.append(panel6);
						sideRight.append(panel2);
						sideRight.append(panel3);
						
						sideRight.append(panel33);
						
						sideLeft.hide();
						sub1.hide();
							
					}
					
				}else{
					sideLeft.append(panel2);
					sideLeft.append(panel3);
					sideRight.append(panel5);
					sideRight.append(panel6);
					sideRight.append(panel33);
					sub1.hide();
				}
				
				
				
				//VERIFICAR TAMANHO DA JANELA---------------------------------------------------------
				if($( window ).width() <= 780){
					wrapp.append(sideRight);
					wrapp.append(sideLeft);
					
				}else{
					wrapp.append(sideLeft);
					wrapp.append(sideRight);
					
				}
				
				//ADCIONANDO DIVS NO PAINEL PRINCIPAL-----------------------------------------------------
				panel.append(div2);
				panel.append(div3);
				panel.append(div4);
				panel.append(wrapp);
				
				
				//ADCIONANDO DIV PAINEL PRINCIPAL NOS ITENS DA TIMELINE-----------------------------------------------------
				$(".item").eq(dataIndex).empty();
				$(".item").eq(dataIndex).append(panel);
				$(".item").eq(dataIndex).append(pt);
				$(".item").eq(dataIndex).append(pt2);

				
			}else if(value.galleries.gallery2 != undefined && value.galleries.gallery3 == undefined){
				//--II----------------------DUAS IMAGENS------------------------------
				

				//VERIFICAR ERROR NO JSON-------------------------------------------------------------------
				if(dataSource[dataIndex].galleries.gallery2[0].subTitle == undefined || dataSource[dataIndex].galleries.gallery[0].subTitle == undefined){
					if(dataSource[dataIndex].galleries.gallery2[0].subTitle == undefined){
						alert("Error no Atributo = subTitle do OBJETO = gallery2"+"  ID = "+dataIndex);
					}else if(dataSource[dataIndex].galleries.gallery[0].subTitle == undefined){
						alert("Error no Atributo = subTitle do OBJETO =  gallery"+"  ID ="+dataIndex);

					}
				}else if(dataSource[dataIndex].galleries.gallery2[0].menor == undefined || dataSource[dataIndex].galleries.gallery[0].menor == undefined){
					if(dataSource[dataIndex].galleries.gallery2[0].menor == undefined){
						alert("Error no Atributo = menor do OBJETO =  gallery2"+"  ID ="+dataIndex);

					}else if(dataSource[dataIndex].galleries.gallery[0].menor == undefined){
						alert("Error no Atributo = menor do OBJETO =  gallery"+"  ID ="+dataIndex);

					}
				}
				
				
				var panel  = $("<div/>", {class: "conteudo-evento"});
				var wrapp  = $("<div/>",{class:"timeline-slider-content-gallery-wrapp"});
				var sideRight  = $("<div/>",{class:"timeline-slider-content-gallery-sideright"});
				var sideLeft  = $("<div/>",{class:"timeline-slider-content-gallery-sideleft"});
				var panel2  = $("<div/>",{class:"timeline-slider-content-gallery-item2-div-image1"});
				var panel3  = $("<div/>", {class:"timeline-slider-content-gallery-item2-div-image2"});
				var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-data"});
				var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-title"});
				var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-info"})
				var img1 = $("<img/>");
				var img2 = $("<img/>");
				var subTitle = $("<h4/>");
				var subTitle2 = $("<h4/>");
				var links = $("<a/>",{class:"lightbox"});
				var links2 = $("<a/>",{class:"lightbox"});
				var figure = $("<figure/>");
				var figcaption = $("<figcaption/>",{class:"subtitle_fig"});
				var figure2 = $("<figure/>");
				var figcaption2 = $("<figcaption/>",{class:"subtitle_fig"});
				var title = $("<h1/>", {class:"timeline_title"});
				
				var sub1  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-sub"})
				var sub2 = $("<div/>", {class:"sub2"});
				var sub3 = $("<div/>", {class:"sub3"});
				var sub2_icon = $("<div/>", {class:"sub2_icon"});
				
				sub1.append(sub2_icon);
				
				var div2  = $("<div/>",{class:"lightbox-div-hide"});
				
				div2.attr("data-lightbox-gallery-full-name", "gallery"+dataIndex+"");
				
				
				var div3  = $("<div/>",{class:"lightbox-div-hide"});
				
				div2.attr("data-lightbox-gallery-full-name", "gallerys"+dataIndex+"");
				
				
				//LIGTHBOX-----------------------------------------------------------------------------------------------------
				$.each( dataSource[dataIndex].galleries.gallery, function( key, value ) {
					var imgTemp = $("<img/>");
					var linkTemp = $("<a/>",{class:"lightbox"});
					imgTemp.attr('src', value.url);
					linkTemp.attr("data-lightbox-gallery-full", "gallery"+dataIndex+"");
					linkTemp.attr("href", value.url);
					linkTemp.attr("title", value.subtitle);
					linkTemp.append(imgTemp);
					
					div2.append(linkTemp);
				});
				
				$.each( dataSource[dataIndex].galleries.gallery2, function( key, value ) {
					
					var imgTemp = $("<img/>");
					var linkTemp = $("<a/>",{class:"lightbox"});
					imgTemp.attr('src', value.url);
					linkTemp.attr("data-lightbox-gallery-full", "gallerys"+dataIndex+"");
					linkTemp.attr("href", value.url);
					linkTemp.attr("title", value.subtitle);
					linkTemp.append(imgTemp);
					
					
					
					div3.append(linkTemp);
					
				});
				
				
				//TITULO
				panel5.append(data);
				panel7.append(dataSource[dataIndex].info);
				title.append(dataSource[dataIndex].title);
				panel6.append(title);
				panel6.append(sub1);
				
				
				//IMAGE 1------------------------------------------------------------------
				links.attr("href",dataSource[dataIndex].galleries.gallery[0].menor);
				links.attr("data-lightbox-gallery-full","gallery"+dataSource[dataIndex].id);
				img1.attr('src', dataSource[dataIndex].galleries.gallery[0].menor);
				sub2.append(dataSource[dataIndex].galleries.gallery[0].subTitle);
				figcaption.html(dataSource[dataIndex].galleries.gallery[0].subTitle);
				
		
				links.append(img1);
				figure.append(links);
				panel2.append(figure);
				links.after(figcaption);
				panel2.append(subTitle);
				
				
				//IMAGEM 2------------------------------------------------------------------
				links2.attr("href",dataSource[dataIndex].galleries.gallery2[0].menor);
				links2.attr("data-lightbox-gallery-full","gallerys"+dataIndex);
				img2.attr('src', dataSource[dataIndex].galleries.gallery2[0].menor);
				sub3.append(dataSource[dataIndex].galleries.gallery2[0].subTitle);
				figcaption2.html(dataSource[dataIndex].galleries.gallery2[0].subTitle);
				
				links2.append(img2);
				figure2.append(links2);
				panel3.append(figure2);
				links2.after(figcaption2);
				
				//IMAGEM VALIDATE------------------------------------------------------------------
				myImage1 = new Image();
				myImage2 = new Image();
				myImage1.src = dataSource[dataIndex].galleries.gallery[0].menor;
				myImage2.src = dataSource[dataIndex].galleries.gallery2[0].menor;
				
				//LEGENDAS-------------------------------------------------------------------------
				sub1.append(sub2);
				sub1.append(sub3);
				
				//POSITION------------------------------------------------------------------
				if($( window ).width() > 780){
					//IMAGEM VERTICAL-------------------------------------------------------------------
					if(myImage1.height > myImage1.width && myImage2.height > myImage2.width){
						//VERICAR TAMANHO DA LEGENDA--------------------------------------------------------------
						if(dataSource[dataIndex].galleries.gallery2[0].subTitle.length <= 200 || dataSource[dataIndex].galleries.gallery[0].subTitle.length <= 200){
							sideRight.removeClass();
							sideRight.addClass("timeline-slider-content-gallery-sideright-2");
							sideRight.append(panel5);
							sideRight.append(panel6);
							sideRight.append(panel2);
							sideRight.append(panel3);
							sideLeft.hide();
							sub1.hide();
						}
						sideRight.removeClass();
						sideRight.addClass("timeline-slider-content-gallery-sideright");
						sideLeft.append(panel2);
						sideLeft.append(panel3);
						sideRight.append(panel5);
						sideRight.append(panel6);
						figcaption.hide();
						figcaption2.hide();
						sideLeft.show();
						sub1.show();
						
					//IMAGEM HORIZONTAL----------------------------------------------------------------------	
					}else if(myImage1.height < myImage1.width && myImage2.height < myImage2.width){
						//VERICAR TAMANHO DA LEGENDA--------------------------------------------------------------
						
						sideLeft.append(panel2);
						sideLeft.append(panel3);
						sideRight.append(panel5);
						sideRight.append(panel6);
						sub1.show();
						figcaption.hide();
						figcaption2.hide();
						
						if(dataSource[dataIndex].galleries.gallery2[0].subTitle.length <= 120 || dataSource[dataIndex].galleries.gallery[0].subTitle.length <= 120){
							sideRight.removeClass();
							sideRight.addClass("timeline-slider-content-gallery-sideright-3");
							sideRight.append(panel5);
							sideRight.append(panel6);
							sideRight.append(panel2);
							sideRight.append(panel3);
							sideLeft.hide();
							sub1.hide();
							figcaption.show();
							figcaption2.show();
							
							
						}
						
					//IMAGEM HORIZONTAL E VERTICAL----------------------------------------------------------------------	
					}else{
						//VERICAR TAMANHO DA LEGENDA--------------------------------------------------------------
						
						sideLeft.append(panel2);
						sideLeft.append(panel3);
						sideRight.append(panel5);
						sideRight.append(panel6);
						sub1.show();
						figcaption.hide();
						figcaption2.hide();
						
						if(dataSource[dataIndex].galleries.gallery2[0].subTitle.length <= 120 || dataSource[dataIndex].galleries.gallery[0].subTitle.length <= 120){
								
								sideLeft.append(panel2);
								sideLeft.append(panel3);
								sideRight.append(panel5);
								sideRight.append(panel6);
								
								//sub1.hide();
								
								
						}
							
						
						
						
							
					}
					
				}else{
					sideLeft.append(panel2);
					sideLeft.append(panel3);
					sideRight.append(panel5);
					sideRight.append(panel6);
					
					sub1.hide();
					
				}
				
				
				
				
				if($( window ).width() <= 780){
					wrapp.append(sideRight);
					wrapp.append(sideLeft);
					
					
				}else{
					wrapp.append(sideLeft);
					wrapp.append(sideRight);
					
				}
				
				
				panel.append(div2);
				panel.append(div3);
				panel.append(wrapp);
				
				
				$(".item").eq(dataIndex).empty();
				$(".item").eq(dataIndex).append(panel);
				$(".item").eq(dataIndex).append(pt);
				$(".item").eq(dataIndex).append(pt2);
				
				
			}else if(value.galleries.gallery2 == undefined && value.galleries.gallery != undefined){
				//UMA IMAGEM--------------------------------------------------
				
				//VERIFICAR ERROR NO JSON-------------------------------------------------------------------
				if(dataSource[dataIndex].galleries.gallery[0].subTitle == undefined){
					if(dataSource[dataIndex].galleries.gallery[0].subTitle == undefined){
						alert("Error no Atributo = subTitle do OBJETO = gallery"+"  ID = "+dataIndex);
					}
				}else if(dataSource[dataIndex].galleries.gallery[0].menor == undefined){
					if(dataSource[dataIndex].galleries.gallery[0].menor == undefined){
						alert("Error no Atributo = menor do OBJETO =  gallery"+"  ID ="+dataIndex);

					}
				}
				//CRIAÇÂO DAS DIV--------------------------------------------------------------------------------
					var wrapp  = $("<div/>",{class:"timeline-slider-content-gallery-wrapp"});
					var sideRight  = $("<div/>",{class:"timeline-slider-content-gallery-sideright"});
					var sideLeft  = $("<div/>",{class:"timeline-slider-content-gallery-sideleft"});
					var text121 = $("<p/>", {class:"timeline-slider-content-gallery-item1-div-content"});
					var panel2  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-image1"});
					var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-data"});
					var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-title"});
					var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-info"});
					var img1 = $("<img/>",{class:index, id:"image_"+index});
					var figure = $("<figure/>",{class:"cont_fig"});
					var figcaption = $("<figcaption/>",{class:"subtitle_fig", id:"subTitle_"+index});
					var links = $("<a/>",{class:"lightbox"});
					var subTitle = $("<h4/>");
					var title = $("<h1/>", {class:"timeline_title"});
					
					
					var sub1  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-sub"});
					var sub2 = $("<div/>", {class:"sub2"});
					var sub2_icon = $("<div/>", {class:"sub2_icon"});
					
					sub2(sub2_icon);
					sub1.append(sub2);
					
					sub2.append(dataSource[dataIndex].galleries.gallery[0].subTitle);
					
					//CRIAÇÂO DA IMAGEM--------------------------------------------------
					var div2  = $("<div/>",{class:"lightbox-div-hide"});
					div2.attr("data-lightbox-gallery-full-name", "gallery"+dataIndex+"");
					links.attr("href",dataSource[dataIndex].galleries.gallery[0].url);
					links.attr("data-lightbox-gallery-full","gallery"+dataSource[dataIndex].id);
					img1.attr('src', dataSource[dataIndex].galleries.gallery[0].menor);
					

					
					if(dataSource[dataIndex].galleries.gallery[0].subTitle.length > 200){

						text121.html(dataSource[dataIndex].galleries.gallery[0].subTitle);
					}else{
						figcaption.html(dataSource[dataIndex].galleries.gallery[0].subTitle);
					}
					
					//LIGTHBOX------------------------------------------------------------------------------------------------
					$.each( dataSource[dataIndex].galleries.gallery, function( key, value ) {
						var imgTemp = $("<img/>");
						var linkTemp = $("<a/>",{class:"lightbox"});
						imgTemp.attr('src', value.url);
						linkTemp.attr("data-lightbox-gallery-full", "gallery"+dataIndex+"");
						linkTemp.attr("href", value.url);
						linkTemp.attr("title", value.subtitle);
						linkTemp.append(imgTemp);
						
						div2.append(linkTemp);
					});
					
					
					links.append(img1);
					figure.append(links);
					
					panel2.append(figure);
					
					var image_test =  new Image();
					image_test.src = dataSource[dataIndex].galleries.gallery[0].menor;
					
					var image_width = image_test.width;
					var image_height = image_test.height;
				
					
					links.after(figcaption);
					
					panel7.append( value.info);
					
					title.append(value.title);
					
					
					
					panel6.append(title);
					
					
					
					//VERIFICAR TAMANHO DA LEGENDA--------------------------------------------------------------
					if(image_width  < image_height ){
						panel6.append(sub1);
						figcaption.hide();
						sub1.show();
						
					}else{
						
						sub1.hide();
						
						if(value.thumbs[0].subTitle.length > 120){
							panel6.append(text121);
						}else{
							figcaption.show();
							
						}
						
					}
					
					
					
					panel5.append(data);
					
					sideLeft.append(panel2);
					sideRight.append(panel5);
					sideRight.append(panel6);
					
					
					
					if($( window ).width() <= 780){
						wrapp.append(sideRight);
						wrapp.append(sideLeft);
						
						
					}else{
						wrapp.append(sideLeft);
						wrapp.append(sideRight);
						
					}
				panel.append(div2);	
				panel.append(wrapp);
					
				$(".item").eq(dataIndex).empty();
				$(".item").eq(dataIndex).append(panel);
				$(".item").eq(dataIndex).append(pt);
				$(".item").eq(dataIndex).append(pt2);
			}
			
		}	

		
		  
	});
	
	
}



Slider.prototype.setLoop = function(data, time, filter_mes, filter_ano){
	
	var self = this;
	
	self.setFillSlider(data, time, filter_mes, filter_ano);
	
	setTimeout(function(){
		
		self.setFillSlider(data, time, filter_mes, filter_ano);
		
	},3000);
	
}



Slider.prototype.createSlider = function (n) {
    var i;
    
    if(this.currentItem > this.nameClass.length){this.currentItem = this.nameClass.length;};
    if(this.currentItem <= 1){ this.currentItem = 1;};
    
    for (i = 0; i < this.nameClass.length; i++) {
        this.nameClass[i].style.display = "none";
    }
    this.fade(this.nameClass[this.currentItem - 1]);
    
};



Slider.prototype.fade = function(el){
	
	
	
    var value = 0;
    el.style.opacity = value;
    el.style.display = "block";
    
    var time = setInterval(function(){
        if(value >=  1){
            clearInterval(time);
        }
        el.style.opacity = value;
        value += 0.1; 
    },40);
};

Slider.prototype.moveSlider = function (n) {
    this.createSlider(n);
	
	
};

Slider.prototype.json = function(result, filter_mes, filter_ano){
	
	
    var self = this;
    var data;
    var url = "json/data.json";
	
	
	
    
	
		var prev  = $("<div/>", {id:"prev"});
		var next  = $("<div/>", {id:"next"});
		
		//alert(filter.length);
	
	data_new_i =  0;	
	for(var i = 0 ; i < result.length; i++){
		
			
			data_new = result[i].start;
			data_new_i  = i;
			
			
			//alert(this.know);
			
		
			var itens  = $("<div/>", {class:"item"});
			var pt  = $("<nav/>", {class:"nextItem"});
			var pt2  = $("<nav/>", {class:"prevItem"});
			var title  = $("<h1/>", {class:"title"});
			var info  = $("<h3/>");
			var data  = $("<div/>", {class:"data"});
			var dataYear = $("<p/>", {class:"dataYear"});
			var link = $("<a/>", {class:"lightbox"});
			var img  = $("<img/>", {class:"images"});
			var panel  = $("<div/>", {class:"panel"});
			var iFrame = $("<div/>",{class:"timeline-slider-content-gallery-div"});
			
			
			if(i == 0 ){
				pt.removeClass();
				pt.addClass("nextItem2");
			}else{
				pt.addClass("nextItem");
			}
			
			
		
			
			
			img.attr('src', result[i].image);
			
			
			var  numero = i;
			
			
			if(++numero < result.length){
				if(result[numero].start.length == 4){
					pt.html("<p class='data_right_year'>"+result[numero].start+"</p>  <p title='"+result[numero].title+"' class='data_right_msn'>"+result[numero].title+"</p>");
				
				/*}else if(result[numero].start.length == 7){
					
					var data_result = result[numero].start+"/01";
					var d = new Date(data_result);
					var mes= ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
					pt.html("<p class='data_right_year'>"+mes[d.getMonth()]+" de "+d.getFullYear()+"</p><p class='data_right_msn'>"+result[numero].title+"</p>");
					*/
					
				}else{
					
					var d = new Date(result[numero].start);
					var days = ["Domingo","Segunda","Ter&ccedil;a","Quarta","Quinta","Sexta","Sabado"];
					var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
				

					pt.html("<p class='data_right_year'>"+ days[d.getDay()]+", "+(d.getDate())+" do "+mes[d.getMonth()]+" de "+d.getFullYear()+"</p><p title='"+result[numero].title+"' class='data_right_msn'>"+result[numero].title+"</p>");
					
					
					$.each( filter_mes, function( key, value ) {
						
					  if(value == result[numero].start){
						  
						var data_result = result[numero].start;
						var d = new Date(data_result);
						var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
						pt.html("<p class='data_right_year'>"+mes[d.getMonth()]+" de "+d.getFullYear()+"</p><p title='"+result[numero].title+"' class='data_right_msn'>"+result[numero].title+"</p>");
					
					  }
					});
					
					
					$.each( filter_ano, function( key, value ) {
						
					  if(value == result[numero].start){
						  
						var data_result = result[numero].start;
						var d = new Date(data_result);
						var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
						pt.html("<p class='data_right_year'>"+d.getFullYear()+"</p><p title='"+result[numero].title+"' class='data_right_msn'>"+result[numero].title+"</p>");
					
					  }
					});
					
					
					
				}
			}else{
				pt.text("");
			}
			
			
			var  numero2 = i;
			if(i === 0){
				pt2.text("");
			}else{
				var num = --numero2;
				
				if(result[num].start.length == 4){
					pt2.html("<p class='data_right_year'>"+result[num].start+"</p>  <p title='"+result[num].title+"' class='data_right_msn'>"+result[num].title+"</p>");
				}else{
					
					var d = new Date(result[num].start);
					var days = ["Domingo","Segunda","Ter&ccedil;a","Quarta","Quinta","Sexta","Sabado"];
					var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
				

					pt2.html("<p class='data_right_year'>"+ days[d.getDay()]+", "+(d.getDate())+" do "+mes[d.getMonth()]+" de "+d.getFullYear()+"</p><p title='"+result[num].title+"' class='data_right_msn'>"+result[num].title+"</p>");
					
					
					
					$.each( filter_mes, function( key, value ) {
						
					  if(value == result[num].start){
						  
						var data_result = result[num].start;
						var d = new Date(data_result);
						var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
						pt2.html("<p  class='data_right_year'>"+mes[d.getMonth()]+" de "+d.getFullYear()+"</p><p title='"+result[num].title+"' class='data_right_msn'>"+result[num].title+"</p>");
						
					  }
					});
					
					$.each( filter_ano, function( key, value ) {
						
					  if(value == result[num].start){
						  
						var data_result = result[num].start;
						var d = new Date(data_result);
						var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
						pt2.html("<p  class='data_right_year'>"+d.getFullYear()+"</p><p title='"+result[num].title+"' class='data_right_msn'>"+result[num].title+"</p>");
						
					  }
					});
					
				
				}
			}           
			
			
			
			if(result[i].start.length == 4){
				data.html("<p class='dataYear'>"+result[i].start+"</p>");

			}else{
				
				if(result[i].end){
					
					 var d1 = new Date(result[i].start);
					 var d2 = new Date(result[i].end);
					 var days2 = ["Domingo","Segunda","Ter&ccedil;a","Quarta","Quinta","Sexta","Sabado"];
					 var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
					 var data_tag = d1.getFullYear()+"-"+d1.getMonth()+"-"+d1.getDay();
					 data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d1.getDate()+" de "+mes[d1.getMonth()]+" de "+d1.getFullYear()+" - "+d2.getDate()+" de "+mes[d2.getMonth()]+" de "+d2.getFullYear()+"</p>"); 
				  
					
					
					
					$.each( filter_mes, function( key, value ) {
						
					  if(value == data_new){
						  
							var data_result = result[i].start;
								var d = new Date(data_result);
								var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
								var data_tag = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
								data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d.getFullYear()+" - "+d2.getFullYear()+"</p>");
								
					  }
					});
					
					
				}else{
					
					 var d = new Date(result[i].start);
					 var days2 = ["Domingo","Segunda","Ter&ccedil;a","Quarta","Quinta","Sexta","Sabado"];
					 var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
					 var data_tag = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
					 data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d.getFullYear()+"</time></p><p class='dataYear_full'>"+ days2[d.getDay()]+", "+(d.getDate())+" de "+mes[d.getMonth()]+"</p>"); 
				  
					
					
					
					$.each( filter_mes, function( key, value ) {
						
					  if(value == data_new){
						  
							var data_result = result[i].start;
								var d = new Date(data_result);
								var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
								var data_tag = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
								data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d.getFullYear()+"</time></p><p class='dataYear_full'>  "+mes[d.getMonth()]+"</p>");
								
					  }
					});
					
					
					$.each( filter_ano, function( key, value ) {
						
					  if(value == data_new){
						  
							var data_result = result[i].start;
								var d = new Date(data_result);
								var mes= ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
								var data_tag = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
								data.html("<p class='dataYear'><time datetime='"+data_tag+"'>"+d.getFullYear()+"</time></p>");
								
					  }
					});
					
				}
					
			}
			
			
			
			
			title.text(result[i].title);
			info.text(result[i].info);
			//data.text(result[i].start);
			
			
			
			//--------------TIMELINE DO TIPO SLIDER (COM APENAS IMAGENS)---------------------------- 
			if(result[i].media == "slider"){
				var panel4  = $("<div/>", {class:"timeline-slider-"+result[i].id});
				var panel5  = $("<h1/>", {class:"timeline-slider-title-"+result[i].id});
				
				panel5.html(result[i].title);
				
				panel4.append(panel5);
				itens.append(panel4);
				itens.append(pt2);
				itens.append(pt);
				
			//--------------TIMELINE DO TIPO SLIDER-CONTENT (MODELOS ANTIGO NÃO ESTÁ EM USO NO MOMENTO)---------------------------- 	
			}else if(result[i].media == "slider-content"){
				var panel2  = $("<div/>", {class:"panelTitle"});
				var panel3  = $("<div/>", {class:"panelInfo"});
				var panel1  = $("<div/>", {class:"panelImage"});
                                var panel5  = $("<div/>", {class:"panelData"});
				
				
				link.attr("href",result[i].image );
				link.attr("title",result[i].title );
				link.append(img);
				
				if(result[i].background.url != ""){
					
					if(result[i].background.repeat != ""){
						panel.css("background-repeat",result[i].background.repeat).css("background-image", "url("+result[i].background.url+")");
						if(result[i].background.size != ""){
							panel.css("background-size", result[i].background.size).css("background-repeat",result[i].background.repeat).css("background-image", "url("+result[i].background.url+")");

						}else{
							panel.css("background-repeat",result[i].background.repeat).css("background-image", "url("+result[i].background.url+")");
						}	
					}else{
						panel.css("background-image", "url("+result[i].background.url+")");
						if(result[i].background.size != ""){
							panel.css("background-size", result[i].background.size).css("background-repeat",result[i].background.repeat).css("background-image", "url("+result[i].background.url+")");

						}else{
							panel.css("background-repeat",result[i].background.repeat).css("background-image", "url("+result[i].background.url+")");
						}
					}
					
					panel1.append(link);
					panel3.append(info);
					panel2.append(title);
					panel5.append(data);
				
				
				
					itens.append(panel);
									//itens.append(pt3);
					itens.append(pt2);
					itens.append(pt);
                                
					panel.append(panel5);
					panel.append(panel1);
					panel.append(panel2);
					panel.append(panel3);
					
				}
				
				
				
				
                                
				//--------------TIMELINE DO TIPO SLIDER-CONTENT-GALLERY (MODELO COM VARIAÇÕES DE 5 TEMPLATES DIFERENTE UM DO OUTRO)---------------------------- 	
			}else if(result[i].media == "slider-content-gallery"){
				var panel  = $("<div/>", {class: "conteudo-evento"});
				var text1 = $("<h4/>");
				
				
				if(result[i].thumbs.length == 3){
					
					var wrapp  = $("<div/>",{class:"timeline-slider-content-gallery-wrapp"});
					var sideRight  = $("<div/>",{class:"timeline-slider-content-gallery-sideright"});
					var sideLeft  = $("<div/>",{class:"timeline-slider-content-gallery-sideleft"});
					
					var panel2  = $("<div/>",{class:"timeline-slider-content-gallery-item3-div-image1"});
					var panel3  = $("<div/>",{class:"timeline-slider-content-gallery-item3-div-image2"});
					var panel4  = $("<div/>",{class:"timeline-slider-content-gallery-item3-div-image3"});
					var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-data"});
					var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-title"});
					var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-info"});
					var img1 = $("<img/>");
					var img2 = $("<img/>");
					var img3 = $("<img/>");
					var subTitle = $("<h4/>");
					var subTitle2 = $("<h4/>");
					var subTitle3 = $("<h4/>");
					var title = $("<h1/>", {class:"timeline_title"});
					//var title = $("<h4/>");
					var links = $("<a/>",{class:"lightbox"});
					var links2 = $("<a/>",{class:"lightbox"});
					var links3 = $("<a/>",{class:"lightbox"});
					var figure = $("<figure/>");
					var figcaption = $("<figcaption/>",{class:"subtitle_fig"});
					var figure2 = $("<figure/>");
					var figcaption2 = $("<figcaption/>",{class:"subtitle_fig"});
					var figure3 = $("<figure/>");
					var figcaption3 = $("<figcaption/>",{class:"subtitle_fig"});
					
					
					
					panel7.append( result[i].info);
					
					title.append( result[i].title);
					panel6.append( title);
					
					panel5.append(data);
					
					links.attr("href",result[i].thumbs[0].url);
					//links.attr("title",result[i].thumbs[0].subTitle);
					links.attr("data-lightbox-gallery",result[i].id);
					img1.attr('src', result[i].thumbs[0].menor);
					//subTitle.text(result[i].thumbs[0].subTitle);
					figcaption.html(result[i].thumbs[0].subTitle);
					
					links.append(img1);
					figure.append(links);
					panel2.append(figure);
					links.after(figcaption);
					
					
					links2.attr("href",result[i].thumbs[1].url);
					//links2.attr("title",result[i].thumbs[1].subTitle);
					links2.attr("data-lightbox-gallery",result[i].id);
					img2.attr('src', result[i].thumbs[1].menor);
					//subTitle2.text(result[i].thumbs[1].subTitle);
					figcaption2.html(result[i].thumbs[1].subTitle);
					
					
					links2.append(img2);
					figure2.append(links2);
					panel3.append(figure2);
					links2.after(figcaption2);
					//panel3.append(subTitle2);
					
					links3.attr("href",result[i].thumbs[2].url);
					//links3.attr("title",result[i].thumbs[2].subTitle);
					links3.attr("data-lightbox-gallery",result[i].id);
					img3.attr('src', result[i].thumbs[2].menor);
					//subTitle3.text(result[i].thumbs[2].subTitle);
					figcaption3.html(result[i].thumbs[2].subTitle);
					
					links3.append(img3);
					figure3.append(links3);
					panel4.append(figure3);
					links3.after(figcaption3);
					//panel4.append(subTitle3);
					
					sideLeft.append(panel2);
					sideLeft.append(panel3);
					sideLeft.append(panel4);
					sideRight.append(panel5);
					sideRight.append(panel6);
					
					if($( window ).width() <= 780){
						wrapp.append(sideRight);
						wrapp.append(sideLeft);
						
						
					}else{
						wrapp.append(sideLeft);
						wrapp.append(sideRight);
						
					}
					
					
					panel.append(wrapp);
					
					//panel.append(panel5);
					//panel.append(panel6);
					//panel.append(panel2);
					//panel.append(panel3);
					//panel.append(panel4);
					
					
					
					
					//panel.append(panel7);
					
				}else if(result[i].thumbs.length == 2){
				
					var wrapp  = $("<div/>",{class:"timeline-slider-content-gallery-wrapp"});
					var sideRight  = $("<div/>",{class:"timeline-slider-content-gallery-sideright"});
					var sideLeft  = $("<div/>",{class:"timeline-slider-content-gallery-sideleft"});
					
					
					var panel2  = $("<div/>",{class:"timeline-slider-content-gallery-item2-div-image1"});
					var panel3  = $("<div/>", {class:"timeline-slider-content-gallery-item2-div-image2"});
					var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-data"});
					var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-title"});
					var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-info"})
					var img1 = $("<img/>");
					var img2 = $("<img/>");
					var subTitle = $("<h4/>");
					var subTitle2 = $("<h4/>");
					var links = $("<a/>",{class:"lightbox"});
					var links2 = $("<a/>",{class:"lightbox"});
					var figure = $("<figure/>");
					var figcaption = $("<figcaption/>",{class:"subtitle_fig"});
					var figure2 = $("<figure/>");
					var figcaption2 = $("<figcaption/>",{class:"subtitle_fig"});
					var title = $("<h1/>", {class:"timeline_title"});
					
					var sub1  = $("<div/>",{class:"timeline-slider-content-gallery-item1-div-sub"})
					var sub2 = $("<p/>", {class:"sub2"});
					var sub3 = $("<p/>", {class:"sub3"});

					
					
					
					sub1.append(sub2);
					sub1.append(sub3);
					
					panel5.append(data);
					//panel6.append( "<h1>"+result[i].title+"</h1");
					panel7.append( result[i].info);
					
					
					title.append(result[i].title);
					
					panel6.append(title);
					panel6.append(sub1);
					
					
					links.attr("href",result[i].thumbs[0].url);
					//links.attr("title",result[i].thumbs[0].subTitle);
					links.attr("data-lightbox-gallery",result[i].id);
					img1.attr('src', result[i].thumbs[0].menor);
					//subTitle.text(result[i].thumbs[0].subTitle);
					
					
					
					
						sub2.append(result[i].thumbs[0].subTitle);
					
						figcaption.html(result[i].thumbs[0].subTitle);
					
					
					//figcaption.html(result[i].thumbs[0].subTitle);
					
					links.append(img1);
					figure.append(links);
					panel2.append(figure);
					links.after(figcaption);
					
					
					panel2.append(subTitle);
					
					links2.attr("href",result[i].thumbs[1].url);
					//links2.attr("title",result[i].thumbs[1].subTitle);
					links2.attr("data-lightbox-gallery",result[i].id);
					img2.attr('src', result[i].thumbs[1].menor);
					//subTitle2.text(result[i].thumbs[1].subTitle);
					
					
					
						sub3.append(result[i].thumbs[1].subTitle);
					
						figcaption2.html(result[i].thumbs[1].subTitle);
					
					
					//figcaption2.html(result[i].thumbs[1].subTitle);
					
					links2.append(img2);
					figure2.append(links2);
					panel3.append(figure2);
					links2.after(figcaption2);
					
					myImage1 = new Image();
					
					myImage2 = new Image();
					
					myImage1.src = result[i].thumbs[0].url;
					myImage2.src = result[i].thumbs[1].url;
			
					
					if($( window ).width() <= 780){
						wrapp.append(sideRight);
						wrapp.append(sideLeft);
						
						
					}else{
						wrapp.append(sideLeft);
						wrapp.append(sideRight);
						
					}
					
					
						
					
					panel.append(wrapp);
					
					
				}else if(result[i].thumbs.length == 0){
					
					
					var panel5  = $("<div/>",{class:"timeline-slider-content-gallery-item0-div-data"});
					var panel6  = $("<div/>",{class:"timeline-slider-content-gallery-item0-div-title"});
					var panel7  = $("<div/>",{class:"timeline-slider-content-gallery-item0-div-info"});
					
					
					panel7.append( result[i].info);
					
					panel6.append( "<h1 class='timeline_title2'>"+result[i].title+"</h1");
					
					panel5.append(data);
					
					panel.append(panel5);
					panel.append(panel6);
					panel.append(panel7);

					
					
				}
				itens.append(panel);
					itens.append(pt2);
					itens.append(pt);
				
					
			}
			
			
			
            $("#slider").append(itens);
			
			//$(itens).insertAfter($('#one'));
			self.moveSlider(self.currentItem);
			
			
	
			
			
	}
	
	var nav = $("<nav/>");
	var slider = $("#slider");
	
	//$("#slider").append(prev);
	//$("#slider").append(next);
	
	nav.append(prev);
	nav.append(next);
	
	slider.append(nav);
	
	
	
	
	setInterval(function(){
		
		
		var hashTag;
		
		
                
		if(window.location.hash){
			var x = window.location.hash;
			
			
			var array = x.split("/");
			
			hashTag = array[1];
			
		};
		
		
		if(hashTag == 1){
			
			$(".prevItem").hide();
			
		}else{
			$(".prevItem").show();
			
		};
		
		if(hashTag == 0 || hashTag == null){
			
			$("body").attr("id", "body_background_1");
			$("#timeline").removeClass();
			$("#timeline").addClass("timeline_body_1");
			
			
			$("#language").removeClass();
			$("#language").addClass("language_1");
			
			
		}else{
			
			$("body").attr("id", "body_background_2");
			$("#timeline").removeClass();
			$("#timeline").addClass("timeline_body_2");
			
			
			$("#language").removeClass();
			$("#language").addClass("language");
		}
		
		
		
			
		
		
		if(self.currentItem <= 1){
			prev.hide();
		}else{
			prev.show();
		}
		if(self.currentItem >= result.length){
			next.hide();
		}else{
			next.show();
		}
	}, 100);
	
	
	
	setInterval(function(){
		
		
		self.setLoop()
		
	},2000);
	
	
	var color;
	
    $("#next").on('mouseover',function(){
		
		$(".nextItem").css("opacity","1")
		
		$(".nextItem .data_right_msn").each(function(){
			$(this).css("opacity","1").css("color", "#3e3e3e");
		});
		
		
		$(".nextItem .data_right_year").each(function(){
			$(this).css("opacity","1").css("color", "#f45c06");
		});
		
	});
	
	
	$("#next").on('mouseout',function(){
		
		//$(".nextItem").css("opacity",".15");
		
		$(".nextItem .data_right_msn").each(function(){
			$(this).css("opacity",".15").css("color", "#919191");
		});
		
		
		$(".nextItem .data_right_year").each(function(){
			$(this).css("opacity",".15").css("color", "#919191");
		});
		
		
	});
	
	
	$("#prev").on('mouseover',function(){
		
		$(".prevItem").css("opacity","1")
		
		$(".prevItem .data_right_msn").each(function(){
			$(this).css("opacity","1").css("color", "#3e3e3e");
		});
		
		
		$(".prevItem .data_right_year").each(function(){
			$(this).css("opacity","1").css("color", "#f45c06");
		});	

		
	});
	
	
	$("#prev").on('mouseout',function(){
		
		//$(".prevItem").css("opacity",".15");
		
		$(".prevItem .data_right_msn").each(function(){
			$(this).css("opacity",".15").css("color", "#919191");
		});
		
		
		$(".prevItem .data_right_year").each(function(){
			$(this).css("opacity",".15").css("color", "#919191");
		});
		
	});
	
	
	//SETA ESQUERDA---------------------------------------------
	$("body").on('mouseover','.prevItem',function(){
		$(this).css("opacity","1")
		
		$(".prevItem .data_right_msn").each(function(){
			$(this).css("opacity","1").css("color", "#3e3e3e");
		});
		
		
		$(".prevItem .data_right_year").each(function(){
			$(this).css("opacity","1").css("color", "#f45c06");
		});
		
		
	});
	
	$("body").on('mouseout','.prevItem',function(){
		
		//$(this).css("opacity",".15");
		
		$(".prevItem .data_right_msn").each(function(){
			$(this).css("opacity",".15").css("color", "#919191");
		});
		
		
		$(".prevItem .data_right_year").each(function(){
			$(this).css("opacity",".15").css("color", "#919191");
		});
		
	});
	
	//SETA DREITA---------------------------------------------
	$("body").on('mouseover','.nextItem',function(){
		
		$(this).css("opacity","1")
		
		$(".nextItem .data_right_msn").each(function(){
			$(this).css("opacity","1").css("color", "#3e3e3e");
		});
		
		
		$(".nextItem .data_right_year").each(function(){
			$(this).css("opacity","1").css("color", "#f45c06");
		});
	});
	
	
	$("body").on('mouseout','.nextItem',function(){
		
		//$(this).css("opacity",".15");
		
		$(".nextItem .data_right_msn").each(function(){
			$(this).css("opacity",".15").css("color", "#919191");
		});
		
		
		$(".nextItem .data_right_year").each(function(){
			$(this).css("opacity",".15").css("color", "#919191");
		});
		
	});
	
};


