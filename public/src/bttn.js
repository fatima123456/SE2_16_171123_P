//
$TrentoClicked=0;
$RomaClicked=0;
$ItaliaClicked=0;
//
$indexInTab=[-1,-1,-1];
//
$countUniClicked=0;
//
$nUniCurrentlyClicked=0;

$parametersChecked={par0:1, par1:1, par2:1, par3:1, par4:1, par5:1, par6:1, par7:1, par8:1, par9:1, par10:1, par11:1, par13:1, par14:1, par15:1, par16:1, par17:1};

//$parChk=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

$.insertInTable=function($data,$cit){
    alert("sono in insert");
    //
    $nUniCurrentlyClicked+=1;
    
    var $html='<tr id="teachData'+$countUniClicked+'">';
    $html+='<th>'+$cit+': </th>';
    for(var i=0; i<5;i++){
        if($parametersChecked['par'+i]==1){
            $html+='<th>'+$data[i]+'</th>';
        }
    }
    $html+="</tr>";
    $("#teachInfo").after($html);
    
    $html='<tr id="researchData'+$countUniClicked+'">';
    $html+='<th>'+$cit+': </th>';
    for(var i=5; i<9;i++){
        if($parametersChecked['par'+i]==1){
            $html+='<th>'+$data[i]+'</th>';
        }
    }
    $html+="</tr>";
    $("#researchInfo").after($html);
    
    var $html='<tr id="interInfo'+$countUniClicked+'">';
    $html+='<th>'+$cit+': </th>';
    for(var i=9; i<12;i++){
        if($parametersChecked['par'+i]==1){
            $html+='<th>'+$data[i]+'</th>';
        }
    }
    $html+="</tr>";
    $("#interInfo").after($html);
    
    var $html='<tr id="ecoData'+$countUniClicked+'">';
    $html+='<th>'+$cit+': </th>';
    for(var i=12; i<17;i++){
        if($parametersChecked['par'+i]==1){
            $html+='<th>'+$data[i]+'</th>';
        }
    }
    $html+="</tr>";
    $("#ecoInfo").after($html);
    $countUniClicked+=1;
}

$.resetPage = function(){
    $("#welcomeContainer").css("display","block");
    $("#infoUni").css("display","none");
}

$.deleteRow = function($index){
    $nUniCurrentlyClicked-=1;
    $("#teachData"+$index).remove();
    $("#researchData"+$index).remove();
    $("#interInfo"+$index).remove();
    $("#ecoData"+$index).remove();
    if($nUniCurrentlyClicked==0){
        $.resetPage();
    }
}

$.qwerf=function($c){alert($c);}

//useless
/*$.updateArrayCheckedParameters= function(){
    
}*/

$.deleteColumn = function(){
    alert("deleto");
    for(var i=0; i<17; i++){
        if($parametersChecked['par'+i]==0){
            alert("deleto "+i);
            $("#tit"+i).css("display","none");
        }
    }
}

$(document).ready(function(){
    alert("sono in doc");
    alert($parametersChecked['par0']);
    $(".UniBttn").click(function(){
        //if the button was already clicked, then it sets its color to red then it removes the rows in the table with its informations, and then it updates the variable that tells wether it is clicked or not
        //in this case it is Trento, in the other it is Rome
        if(this.id == "Trento" && $TrentoClicked==1)
        {
            $(this).css("background-color","red");
            $.deleteRow($indexInTab[0]);
            $TrentoClicked=0;
        }
        else if(this.id == "Roma" && $RomaClicked==1){
            $(this).css("background-color","red");
            $.deleteRow($indexInTab[1]);
            $RomaClicked=0;
            
        }
        //if the button was not already clicked then it changes its color and sends a post request to have the info, and it updates the table
        else{
            
            //it sets the color of the clicked button to blue 
            $(this).css("background-color","blue");
            
            //the welcome message is canceled, to do if it is the first time!!
            $("#welcomeContainer").css("display","none");
            $("#infoUni").css("display","block");
            
            //if Trento is clicked sets the variable TrentoClicked to 1, else it sets the variable RomaClicked to 1
            if(this.id == "Trento")
            {
                $TrentoClicked=1;
                $indexInTab[0]=$countUniClicked;
            }
            else{
                $RomaClicked=1;
                $indexInTab[1]=$countUniClicked;
            }
            
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
            
            
        }
        
    });
    
    $("#Italia").click(function(){
        alert("sono in ita");
        if($ItaliaClicked == 1){
            $.deleteRow($indexInTab[2]);
            $ItaliaClicked = 0;
        }
        else{
            alert("prima");
            $("#welcomeContainer").css("display","none");
            $("#infoUni").css("display","block");
            
            $ItaliaClicked=1;
            $indexInTab[2]=$countUniClicked;
            
            var cit=this.id;
            
            $.post("http://localhost:1337/tab",
            {
                city: this.id
            },
            function(data,status){
                //insert the data in the table
                alert("prima di insert");
                $.insertInTable(data.info,cit);
            });
        }
    });
    
    $("#filterNav").click(function(){
        alert("entro");
        $("#container").css("display","none");
        $("#filterContainer").css("display","block");
    });
    
    $(".par").click(function(){
        //alert(this.name);
        if($parametersChecked[this.name]==0){
            //alert("lo chekko");
            $parametersChecked[this.name]=1;
        }
        else{
            //alert("lo NNNNN chekko");
            $parametersChecked[this.name]=0;
        }
        //alert($parametersChecked[this.name]);
    });
    
    $("#filterBttn").click(function(){
        //alert("torno");
        $.deleteColumn();
        $("#container").css("display","block");
        $("#filterContainer").css("display","none");
    });
});
