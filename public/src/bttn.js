//
$a=0;
$b=1;

$(document).ready(function(){
    
    $("#bttn").click(function(){
        
        if($a == 1 || $b == 0){
            $("#bttn").css("background-color","blue");
            $a=1;
        }
        else{
            $("#bttn").css("background-color","red");
            $a=0;
        }
        
    });
    
});