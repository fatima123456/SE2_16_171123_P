//object to say wether a city is clicked or not
$clicked={Italia:0, Trento:0, Roma:0, Firenze:0};
$cities=["Italia", "Trento", "Roma", "Firenze"];

//object that saves the index of a city in the table
$indexInTab={Italia:-1, Trento:-1, Roma:-1, Firenze:-1};

//variable to save how many times the cities are clicked, it is used to give unic ids to the row of the tables
$countUniClicked=0;

//to store how many universities are clicked
$nUniCurrentlyClicked=0;

//object that stores if the i-th parameter (in the filter) is checked
$parametersChecked={par0:1, par1:1, par2:1, par3:1, par4:1, par5:1, par6:1, par7:1, par8:1, par9:1, par10:1, par11:1,par12:1, par13:1, par14:1, par15:1, par16:1, par17:1};

//array to say wether the i-th column is visible or not
$visible=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

/*
 *@brief Appends a row to a table
 *@param {string} idToInsert the id of the row that will be inserted
 *@param {string} idToAppendTo:the id of the row that the first param will be appended to
 *@param {array} data- the info that will be stored in the data
 *@param {string} cit- the element that will be inserted in the first cell of the row
 *@param {number} inizio- the index from which begin to pull the info from the param data
 *@param {number} finito- the index to which stop pulling the info from the param data
 *@return nothing
 */
$.appendToTable = function($idToInsert,$idToAppendTo,$data,$cit,$inizio,$finito){
    //alert("inserisco in "+$idToAppendTo);
    //initialize the variables html in which the html code for the row will be stored
    var $html='<tr id="'+$idToInsert+$countUniClicked+'">';
    $html+='<th>'+$cit+': </th>';
    for(var i=$inizio; i<$finito;i++){
        //if the parameter is not filtered from the user, so it is checked, then add a cell in the row storing in it its information
        if($parametersChecked['par'+i]==1){
            //alert(i+"    "+$data[i]);
            $html+='<th>'+$data[i]+'</th>';
        }
        
    }
    $html+="</tr>";
    //append the row created to the element passed in input
    $($idToAppendTo).after($html);
    
}
/*
 *@brief inserts the information in all the tables, appending a new row in all of them
 *@param {object} data- array with the informations to put in the tables
 *@param {string} cit- first element(city) that must be put in the rows of the tables
 *@return nothing
 */
$.insertInTable=function($data,$cit){
    //alert("creao la riga "+$countUniClicked);
    //increase the number of the cities clicked
    $nUniCurrentlyClicked+=1;
    
    //appends the row with the info to all the tables
    $.appendToTable("teachData","#teachInfo",$data,$cit,0,5);
    $.appendToTable("researchData","#researchInfo",$data,$cit,5,9);
    $.appendToTable("interData","#interInfo",$data,$cit,9,12);
    $.appendToTable("ecoData","#ecoInfo",$data,$cit,12,17);
    
    //increase of the clicks
    $countUniClicked+=1;
}
/*
 *@brief resets the homepage, to its initial look
 *@return nothing
 */
$.resetPage = function(){
    //alert("resetto la pagina");
    $("#container").css("display","block");
    $("#filterContainer").css("display","none");
    $("#welcomeContainer").css("display","block");
    $("#tableRanking").css("display","none");
    $("#infoUni").css("display","none");
    $.resetTable();
    $(".UniBttn").css("background-color","red");
    for(var i=0; i<$cities.length;i++){
        $clicked[$cities[i]]=0;
    }
}

/*
 *@brief resets the tables to their initial look
 *@return nothing
 */
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

/*
 *@brief
 *@param index- the index of the row that must be deleted
 *@return nothing
 */
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

//quite useless :)
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

/*
 *@brief adds a column in the table, if it "unfiltered" by the user
 *@return nothing
 */
$.addColumn=function(){
    for(var i=0; i<17; i++){
        //alert(i+": "+$parametersChecked['par'+i]+"    "+$visible[i]);
        //if it is not visible and it is checked, then sets the display to block
        if($parametersChecked['par'+i]==1 && $visible[i]==0){
            //alert("aggiungo "+i);
            //$a=$.precedente(i);
            
            $("#tit"+i).css("display","block");
            $visible[i]=1;
        }
    }
}
/*
 *@brieg deletes the columns with the parameters filtered by the user 
 *@return nothing
 */
$.deleteColumn = function(){
    //alert("deleto");
    for(var i=0; i<17; i++){
        //if the i-th parameter is not checked and the i-th column is visible, then it must be deleted, that is its display property must be set to none
        if($parametersChecked['par'+i]==0 && $visible[i]==1){
            //alert("deleto "+i);
            $("#tit"+i).css("display","none");
            //now it is not visible
            $visible[i]=0;

        }
    }
    
}
/*
 *@brief when a city(or Italy) is clicked it updates its "cliclked" value in the object $clicked and deletes (or adds) rows in the table
 *@param $id: the id of the element clicked(namely the name of the city clicked)
 *@return nothing
 */
$clickCity = function($id){
     //if the city was already clicked, it removes the rows in the table with its informations, and then it updates the variable that tells wether it is clicked or not
        if($clicked[$id] == 1){
            alert("rimuovo"+$id);
            
            $.deleteRow($indexInTab[$id]);
            $clicked[$id]=0;
            if($nUniCurrentlyClicked==0){
                $.resetPage();
            }
        }
        
        //if the button was not already clicked then it changes its color and sends a post request to have the info, and it updates the table
        else{
            alert("aggiungo"+$id);
            //the welcome message is canceled, to do if it is the first time that a uni is clicked
            if($nUniCurrentlyClicked==0){
                $("#welcomeContainer").css("display","none");
                $("#infoUni").css("display","block");
            }
            
            //saves that it is clicked, and its index in the table
            $clicked[$id]=1;
            $indexInTab[$id]=$countUniClicked;
            
            //it sends the post request with the name of the city requested to get the info
            var cit = $id;
            
            $.post("/tab",
            {
                city: cit
            },
            function(data,status){
                //insert the data in the table
                $.insertInTable(data.info,cit);
            });
            
        }
}

$(document).ready(function(){
    alert("sono in document");
    //alert($parametersChecked['par0']);
    $(".UniBttn").click(function(){
        //alert("click");
        //it sets the color of the clicked button to red if it was already clicked
        if($clicked[this.id] == 1){
            alert("color");
            $(this).css("background-color","red");
        }
        //it sets the color of the clicked button to blue if it was not clicked
        else{
            $(this).css("background-color","blue");
        }
        $clickCity(this.id);
        
    });
    
    $("#Italia").click(function(){
        $("#container").css("display","block");
        $("#tableRanking").css("display","none");
        $("#filterContainer").css("display","none");
        //italia is clicked, so it calls the clickCity procedure
        $clickCity(this.id);
    });
    
    $("#filterNav").click(function(){
        //alert("entro");
        //when the user wants to filter, then the italian map and the welcome message disappears, and appears the form in which he can filter the parameters
        $("#container").css("display","none");
        $("#filterContainer").css("display","block");
        $("#tableRanking").css("display","none");
    });
    
    $(".par").click(function(){
        //alert(this.name);
        //saves in the object if a determined parameter is checked or not: if it wasn't checked,then it puts 1(true) in $parametersChecked[this.name] and vice versa
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
        //when the submit button of filtering is clicked the column filtered must be deleted, the ones reinserted must be added.
        $.deleteColumn();
        $.addColumn();
        //it resets the page
        $.resetPage();
    });
    
    $("#rank").click(function(){
        //it shows the table with the ranking of the universities... the table is not really calculated, because for lack of time I didn't afford to develop this feature...
        $("#container").css("display","none");
        $("#tableRanking").css("display","block");
        $("#filterContainer").css("display","none");
    });
});
