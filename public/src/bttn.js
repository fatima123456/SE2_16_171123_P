//
$a=0;
$b=1;

$(document).ready(function(){
    
    $("#TrentoBttn").click(function(){
        
        if($a == 1 || $b == 0){
            $("#TrentoBttn").css("background-color","blue");
            $a=1;
        }
        //else{
        //    $("#TrentoBttn").css("background-color","red");
        //    $a=0;
        //}
        
    });
    
});