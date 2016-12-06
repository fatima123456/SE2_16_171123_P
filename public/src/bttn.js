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

$parametersChecked={par0:1, par1:1, par2:1, par3:1, par4:1, par5:1, par6:1, par7:1, par8:1, par9:1, par10:1, par11:1,par12:1, par13:1, par14:1, par15:1, par16:1, par17:1};

$visible=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

$.appendToTable = function($idToInsert,$idToAppendTo,$data,$cit,$inizio,$finito){
    //alert("inserisco in "+$idToAppendTo);
    var $html='<tr id="'+$idToInsert+$countUniClicked+'">';
    $html+='<th>'+$cit+': </th>';
    for(var i=$inizio; i<$finito;i++){
        
        if($parametersChecked['par'+i]==1){
            //alert(i+"    "+$data[i]);
            $html+='<th>'+$data[i]+'</th>';
        }
        
    }
    $html+="</tr>";
    $($idToAppendTo).after($html);
    
}

$.insertInTable=function($data,$cit){
    //alert("creao la riga "+$countUniClicked);
    //
    $nUniCurrentlyClicked+=1;
    
    $.appendToTable("teachData","#teachInfo",$data,$cit,0,5);
    
    $.appendToTable("researchData","#researchInfo",$data,$cit,5,9);
    
    $.appendToTable("interData","#interInfo",$data,$cit,9,12);
    
    $.appendToTable("ecoData","#ecoInfo",$data,$cit,12,17);
    
    $countUniClicked+=1;
}

$.resetPage = function(){
    //alert("resetto la pagina");
    $("#welcomeContainer").css("display","block");
    $("#infoUni").css("display","none");
    $.resetTable();
    $(".UniBttn").css("background-color","red");
    $TrentoClicked=0;
    $RomaClicked=0;
    $ItaliaClicked=0;
}

$.resetTable = function(){
    //alert("ci sono "+$nUniCurrentlyClicked+" righe");
    var j=$countUniClicked-1;
    var n=$nUniCurrentlyClicked;
    //alert("resetto la tabella");
    for(var i=0; i<n; i++){
        $.deleteRow(j);
        j-=1;
    }
}

$.deleteRow = function($index){
    //alert("cancello la riga "+$index);
    $nUniCurrentlyClicked-=1;
    $("#teachData"+$index).remove();
    $("#researchData"+$index).remove();
    $("#interData"+$index).remove();
    $("#ecoData"+$index).remove();
    if($nUniCurrentlyClicked==0){
        $("#welcomeContainer").css("display","block");
        $("#infoUni").css("display","none");
    }
}

$.qwerf=function($c){alert($c);}

//useless
/*$.updateArrayCheckedParameters= function(){
    
}*/

$.precedente=function($n,$index){
    var res=-1;
    for(var i=$index; i>=$n;i--){
        if($visible[i]==1){
            res=i;
            break;
        }
    }
    return res;
}

$.addColumn=function(){
    for(var i=0; i<17; i++){
        //alert(i+": "+$parametersChecked['par'+i]+"    "+$visible[i]);
        if($parametersChecked['par'+i]==1 && $visible[i]==0){
            alert("aggiungo "+i);
            $a=$.precedente(i);
            
            $("#tit"+i).css("display","block");
            $visible[i]=1;
        }
    }
}

$.deleteColumn = function(){
    alert("deleto");
    for(var i=0; i<17; i++){
        if($parametersChecked['par'+i]==0 && $visible[i]==1){
            //alert("deleto "+i);
            $("#tit"+i).css("display","none");
<<<<<<< Updated upstream
=======
            $visible[i]=0;
>>>>>>> Stashed changes
        }
        else{
            $("#tit"+i).css("display","block");
        }
    }
    
}

$(document).ready(function(){
    alert("sono in document");
    //alert($parametersChecked['par0']);
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
            
            $.post("/tab",
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
        //alert("sono in ita");
        if($ItaliaClicked == 1){
            $.deleteRow($indexInTab[2]);
            $ItaliaClicked = 0;
        }
        else{
            //alert("prima");
            $("#welcomeContainer").css("display","none");
            $("#infoUni").css("display","block");
            
            $ItaliaClicked=1;
            $indexInTab[2]=$countUniClicked;
            
            var cit=this.id;
            
            $.post("/tab",
            {
                city: this.id
            },
            function(data,status){
                //insert the data in the table
                //alert("prima di insert");
                $.insertInTable(data.info,cit);
            });
        }
    });
    
    $("#filterNav").click(function(){
        //alert("entro");
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
        $.addColumn();
        $("#container").css("display","block");
        $("#filterContainer").css("display","none");
        $.resetPage();
    });
});
