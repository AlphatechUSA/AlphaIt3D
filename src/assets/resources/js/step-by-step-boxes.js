/*---sets size to container (parameter(we are giving class name only))automaticaly,it sets max height of its absolite positioned childs---*/
    function maxHeight(container){
        var biggestHeight = 0;
        var containerr= ("."+container);
        var everything_in_container = (containerr+" *");
        
        // Loop through elements children to find & set the biggest height
        $(everything_in_container).each(function(){
         // If this elements height is bigger than the biggestHeight
         if ($(this).height() > biggestHeight ) {
           // Set the biggestHeight to this Height
           biggestHeight = $(this).height();
         }
        });
        
        // Set the container height
        $(containerr).height(biggestHeight);        
    }
    function autoHeight(container,clicked_stage){
        var biggestHeight = 0;
        var containerr= ("."+container);
        var everything_in_container = (containerr+" *");
        
//        // Loop through elements children to find & set the biggest height
//        $(everything_in_container).each(function(){
//         // If this elements height is bigger than the biggestHeight
//         if ($(this).height() > biggestHeight ) {
//           // Set the biggestHeight to this Height
//           biggestHeight = $(this).height();
//         }
//        });
        
        /*element shat should appear*/
        var stage_to_show = $("."+clicked_stage);
        biggestHeight=stage_to_show.height();

        // Set the container height
        $(containerr).height(biggestHeight);        
    }
    /*--------js for round boxes step like view--------*/
    function modifyRoundBoxes(){
        var length = $(".stages-phase-1-container").find(".box").length;
        var left_part;

        if(length%2==1){
            left_part=(length+1)/2;
        }
        else{
            left_part=(length)/2;
        }

        for(var i=0;i<left_part;i++){
            var z_index=i;
            var selector=$(".stages-phase-1-container").find(".box:eq("+i+")");
            selector.css({
                '-webkit-transform' : 'scale(' + (1+i/7) + ')',
                '-moz-transform'    : 'scale(' + (1+i/7) + ')',
                '-ms-transform'     : 'scale(' + (1+i/7) + ')',
                '-o-transform'      : 'scale(' + (1+i/7) + ')',
                'transform'         : 'scale(' + (1+i/7) + ')'
            }).css('z-index',z_index);
        }

        for(var i=left_part;i<length;i++){
            var z_index=length-1-i;
            var selector=$(".stages-phase-1-container").find(".box:eq("+i+")");
            selector.css({
                '-webkit-transform' : 'scale(' + (1+z_index/7) + ')',
                '-moz-transform'    : 'scale(' + (1+z_index/7) + ')',
                '-ms-transform'     : 'scale(' + (1+z_index/7) + ')',
                '-o-transform'      : 'scale(' + (1+z_index/7) + ')',
                'transform'         : 'scale(' + (1+z_index/7) + ')'
            }).css('z-index',z_index);
        }
    }
/*--------end of js for round boxes step like view--------*/


$(document).ready(function(){
    modifyRoundBoxes();
        
    /*action that appears on clicking stage*/
    $(".stage").on("click",function(){
        /*id of clicked ellements parrent(its id has same name as class("element")that should opend on clicking it)*/
        var clicked_stage = $(this).parent().attr("id");
        
        /*container of stage that was clicked*/
        var clicked_stages_parrent_container = $(this).parent().parent();
        
        /*element shat should appear*/
        var stage_to_show = $("."+clicked_stage);
        
        /*sets height of container automatically*/
        autoHeight(stage_to_show.parent().attr('class'),clicked_stage);
        
        /*set heighyt to container that includes element that should appear(its important becauze this container has absolute positioned childs so it cant set height automaticaly without js(help))*/
        //        maxHeight(stage_to_show.parent().attr('class'));
        
        /*close current opened element*/
        stage_to_show.parent().children().each(function(){
            $(this).css('display','none').css('z-index','0');
        });
                        
        /*show clicked element*/
        stage_to_show.css('display','inline-block').css('z-index','1');
        
        /*its to give default color to all elemnt of newly opened container 
        the purpose is to delete opened mark(color) if element was
        clicked when its container was opeed last time*/
        $(stage_to_show).find(".box").each(function(){
            $(this).css("background-color","rgba(0, 152, 208, 0.81)");
        });

        /*---change color of clicked element and set default color to all its neigbours---*/
        
        /*make all boxes to default color(as not opened mark(blue))*/
        $(clicked_stages_parrent_container).find(".box").each(function(){
            $(this).css("background-color","rgba(0, 152, 208, 0.81)");
        });
        
        /*add different(red) color to clicked element*/
        $(this).find(".box").each(function(){
            $(this).css("background-color","#9d2b2b");
        });
        
        /*---end of change color of clicked element and set default color to all its neigbours---*/
    });
});