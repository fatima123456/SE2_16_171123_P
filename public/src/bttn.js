//
$TrentoClicked=0;
$RomaClicked=0;

$.insertInTable=function($data,$cit){
    alert("sono in insert");
    var $html='<tr id="teachData">';
    $html+='<th>'+$cit+': </th>';
    for(var i=0; i<5;i++){
        $html+='<th>'+$data[i]+'</th>';
    }
    $html+="</tr>";
    $("#teachInfo").after($html);
    
    $html='<tr id="researchData">';
    $html+='<th>'+$cit+': </th>';
    for(var i=5; i<9;i++){
        $html+='<th>'+$data[i]+'</th>';
    }
    $html+="</tr>";
    $("#researchInfo").after($html);
    
    var $html='<tr id="interInfo">';
    $html+='<th>'+$cit+': </th>';
    for(var i=9; i<12;i++){
        $html+='<th>'+$data[i]+'</th>';
    }
    $html+="</tr>";
    $("#interInfo").after($html);
    
    var $html='<tr id="ecoData">';
    $html+='<th>'+$cit+': </th>';
    for(var i=12; i<14;i++){
        $html+='<th>'+$data[i]+'</th>';
    }
    $html+="</tr>";
    $("#ecoInfo").after($html);
    
    var $html='<tr id="servData">';
    $html+='<th>'+$cit+': </th>';
    for(var i=14; i<17;i++){
        $html+='<th>'+$data[i]+'</th>';
    }
    $html+="</tr>";
    $("#servInfo").after($html);
    
    
}

$.qwerf=function($c){alert($c);}

$(document).ready(function(){
    
    $(".UniBttn").click(function(){
        
        //if the city buttons are both not clicked, then when the user click one of them it sends a post request with the name of the city in which the user is interested
        if($TrentoClicked==0 && $RomaClicked==0){
            //it sets the color of the clicked button to blue 
            $(this).css("background-color","blue");
            //the welcome message is canceled
            $("#welcomeContainer").css("display","none");
            $("#infoUni").css("display","block");
            //it sends the post request with the name of the city
            var cit = this.id;
            $.post("http://localhost:1337/tab",
            {
                city: this.id
            },
            function(data,status){
                //insert the data in the table
                $.insertInTable(data.info,cit);
            });
            
            //if Trento is clicked sets the variable TrentoClicked to 1, else it sets the variable RomaClicked to 1
            if(this.id == "Trento")
            {
                $TrentoClicked=1;
            }
            else{
                $RomaClicked=1;
            }
        }
        //if they are both already clicked, then it sends a post request with the city just clicked
        else if($TrentoClicked==1 && $RomaClicked==1)
        {
            //if Trento is clicked then Roma is "unclicked", and vice-versa
            if(this.id == "Trento")
            {
                $RomaClicked=0;
                $("#Roma").css("background-color","red");
            }
            else{
                $TrentoClicked=0;
                $("#Trento").css("background-color","red");
            }
        }
        //if one of the two is already clicked, then if the button clicked is already clicked nothing happens, otherwise it sends a post request to obtain the info of both cities 
        else 
        {
            if((this.id == "Trento" && $TrentoClicked==1)||(this.id == "Roma" && $RomaClicked==1))
            {
                ;
            }
            else{
                //if the button clicked wasn't already clicked then it sets its color to blue, and the variable that takes track if it is clicked or not is updated (to clicked)
                $(this).css("background-color","blue");
                if(this.id == "Trento")
                {
                    $TrentoClicked=1;
                }
                else{
                    $RomaClicked=1;
                }
            }
        }
    });
    
});
