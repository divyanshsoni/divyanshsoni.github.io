function trigger(){
    
    
            var person = prompt("Please enter your name");
            var caption=prompt("Add Caption");
            var user_image=prompt("Add image");
            var image=prompt("Add User image");

            $a=$("#First_card").clone();
            $(".name_1",$a).text(person);
            $("#cap_1",$a).text(caption);
            $("#img_1",$a).attr("src",image);
            $("#bg_img",$a).css("background-image","url("+user_image+")");
            $a.appendTo("#first-row");
           
    
            
    
    
};



function value_1(){
    var a=$("#search-1").val();
    $(".page-title").text(a);
};


