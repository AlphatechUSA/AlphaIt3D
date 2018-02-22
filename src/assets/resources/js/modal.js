//Its container that appears on clicking element with id "ripmap"
$(document).ready(function() {
    var modal1 = document.getElementById('ripModal');
//    var btn = $('#ripmap');

    $(".close").click(function() {
        modal1.style.display = "none";
    }); 

    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }
    
    //adding map information,location in apeerin container
    $('#ripmap').click(function(){
        modal1.style.display = "block";
        var map=new GMaps({
            div:'#rip-container',
            lat:39.742072,
            lng:-75.547221,
            zoom:18,
            scrollwheel:false
        });
        map.addMarker({
            lat:39.742072,
            lng:-75.547221
        });
    });
     
    $('.alertInfo').on( "click", function(){
        swal("For more info send email at info@alphait.us");
    });
});



