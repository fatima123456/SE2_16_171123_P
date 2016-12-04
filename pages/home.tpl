<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        <title>UniInfo</title>
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="../css/styleHome.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="../src/bttn.js"></script>

    </head>
    <body>
        <div class="navbar navbar-deafault" id="nav" >
            <div class="navbar-header">
                <a href="/" class="navbar-brand" style="color:white">InfoUni</a>
            </div>
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1024px-Flag_of_the_United_Kingdom.svg.png" class="flag" id="EngFlag">
            </a>
            <a href="/ita">
                <img src="http://www.clipartkid.com/images/94/free-clipart-italian-flag-flags-XIBpzg-clipart.png" class="flag" id="ItaFlag">
            </a>
        </div>
        
        <div class="row" id="container">
            
            <div class="col-md-4" id="canvasContainer">
                <img src="../images/italia.gif" id="ItaliaImage" >
                <button class="UniBttn" id="Trento"></button>
                <button class="UniBttn" id="Roma"></button>
            </div>
            
            <div class="col-md-8" >
                
                <div id="welcomeContainer">
                    (:if[englishHome] ~
                        [:then ~ <h1>Welcome!</h1>:]
                    :)
                    (:if[italianHome] ~
                        [:then ~ <h1>Benvenuto!</h1>:]
                    :)
                    (:if[englishHome] ~
                        [:then ~ <h3>Here you can find informations about your future University in Italy.<br>
                        Just click on the circle near the city of the university you're interested in.</h3>:]
                    :)
                    (:if[italianHome] ~
                        [:then ~ <h3>Qui puoi trovare le informazioni della tua futura università in Italia. <br> Clicca sul bollino vicino alla città che ti interessa per visualizzare i dati riguardanti l'università.</h3>:]
                    :)
                </div>
                
                <div id="infoUnicaUni">
                    
                    <p>Teaching</p>
                    <table>
                        <th></th>
                    </table>
                    
                </div>
                    
            </div>
            
        </div>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        
    </body>
</html>