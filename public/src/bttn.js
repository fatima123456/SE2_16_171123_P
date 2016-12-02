//
$TrentoClicked=0;
$RomaClicked=0;

$(document).ready(function(){
    
    $(".UniBttn").click(function(){
        
        //$(this).css("background-color","blue");
        
        //if the city buttons are both not clicked, then when the user click one of them it sends a post request with the name of the city in which the user is interested
        if($TrentoClicked==0 && $RomaClicked==0){
            //it sets the color of the clicked button to blue 
            $(this).css("background-color","blue");
            //$.post("http://127.0.0.1:1337/tab")
            //{
                //city: this.id
            //}
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