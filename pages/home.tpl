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
            <ul class= "nav navbar-nav">
                <li><a href="/" class="navText">home</a></li>
                <li>
                    (:if[englishHome] ~
                        [:then ~ <a class="navText" id="Italia">Italian average</a>:]
                    :)
                    (:if[italianHome] ~
                        [:then ~ <a class="navText" id="Italia">Media Italiana</a>:]
                    :)
                </li>
                <li>
                    (:if[englishHome] ~
                        [:then ~ <a class="navText" id="filterNav">Filter Parameters</a>:]
                    :)
                    (:if[italianHome] ~
                        [:then ~ <a class="navText" id="filter">Filtra parametri</a>:]
                    :)
                </li>
                <li>
                    (:if[englishHome] ~
                        [:then ~ <a class="navText" id="rank">ranking</a>:]
                    :)
                    (:if[italianHome] ~
                        [:then ~ <a class="navText">classifica</a>:]
                    :)
                </li>
            </ul>
            
            <a href="/">
                <img src="../images/1024px-Flag_of_the_United_Kingdom.svg.png" class="flag" id="EngFlag">
            </a>
            <a href="/ita">
                <img src="../images/free-clipart-italian-flag-flags-XIBpzg-clipart.png" class="flag" id="ItaFlag">
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
                
                <div id="depInsertedShow">
                    <p> 
                        You can also choose to view the informaions about the single departments: 
                    </p>
                    <div class="row" id="Departments">
                        <button id="average" style="background-color:orange" class="dip">Average between the faculties</button>
                        <button id="engineering" class="dip">Engineering</button>
                        <button id="languages" class="dip">Languages</button>
                        <button id="medicine" class="dip">Medicine</button>
                        <button id="sociology" class="dip">Sociology</button>
                    </div>
                </div>
                
                <div id="infoUni" style="display:none">
                
                    
                    
                    <p>Teaching:</p>
                    <table>
                        <tr id="teachInfo">
                            <th></th>
                            <th id="tit0">Reputation survey<br> (0-10)</th>
                            <th id="tit1">Staff/student ratio</th>
                            <th id="tit2">dovtorate/bachelor ratio</th>
                            <th id="tit3">doctorate-awarded-to-bachelor<br> ratio</th>
                            <th id="tit4">job in 3 months<br>(after graduating)</th>
                        </tr>
                        
                    </table>
                
                    <p></p>
                    <p>Research:</p>
                    <table>
                        <tr id="researchInfo">
                            <th></th>
                            <th id="tit5">Reputation survey (0-10)</th>
                            <th id="tit6">Research income(0-10)</th>
                            <th id="tit7">Research productivity<br>(0-10)</th>
                            <th id="tit8">Research influence(0-10)</th>
                        </tr>
                        
                    </table>
                
                    <p></p>
                    <p>International Outlook:</p>
                    <table>
                        <tr id="interInfo">
                            <th></th>
                            <th id="tit9">Students who studied abroad ratio</th>
                            <th id="tit10">International-to-domestic student ratio</th>
                            <th id="tit11">international collaboration</th>
                        </tr>
                    </table>
                
                    <p></p>
                    <p>Financial support and services:</p>
                    <table>
                        <tr id="ecoInfo">
                            <th></th>
                            <th id="tit12">Scholarschip(average)</th>
                            <th id="tit13">possibility to work in the university</th>
                            <th id="tit14">Reputation survey (0-10)</th>
                            <th id="tit15">Accomodation</th>
                            <th id="tit16">Transport</th>
                        </tr>
                    </table>
                
                </div>
                    
            </div>
            
        </div>
        
        <div id="filterContainer" style="display:none">
            
            
                <p>Teaching:</p>
                <input type="checkbox" name="par0" class="par" value="" checked>Reputation survey
                <br>
                <input type="checkbox" name="par1" class="par" value="" checked>Staff to student ratio
                <br>
                <input type="checkbox" name="par2" class="par" value="" checked>Doctorates to bachelors ratio
                <br>
                <input type="checkbox" name="par3" class="par" value="" checked>Doctorate awarded to accademic staff ratio
                <br>
                <input type="checkbox" name="par4" class="par" value="" checked>job in 3 months(after graduating)
                <br><br><br>
            
                <p>Research:</p>
                <input type="checkbox" name="par5" class="par" value="" checked>Reputation survey
                <br>
                <input type="checkbox" name="par6" class="par" value="" checked>Research income
                <br>
                <input type="checkbox" name="par7" class="par" value="" checked>Research productivity
                <br>
                <input type="checkbox" name="par8" class="par" value="" checked>Research influence (citations)
                <br><br><br>
            
                <p>International outlook:</p>
                <input type="checkbox" name="par9" class="par" value="" checked>Student who studied abroad ratio
                <br>
                <input type="checkbox" name="par10" class="par" value="" checked>International to domestic ratio
                <br>
                <input type="checkbox" name="par11" class="par" value="" checked>International collaboration
                <br><br><br>
            
                <p>Services and financial support:</p>
                <input type="checkbox" name="par12" class="par" value="" checked>Scholarschip
                <br>
                <input type="checkbox" name="par13" class="par" value="" checked>Possibility to work in the University
                <br>
                <input type="checkbox" name="par14" class="par" value="" checked>Reputational survey(for the services)
                <br>
                <input type="checkbox" name="par15" class="par" value="" checked>Accomodation(average if present)
                <br>
                <input type="checkbox" name="par16" class="par" value="" checked>transport
                <br><br>
            
                <button id="filterBttn">SUBMIT</button>
                
            
        </div>
        
        <div id="tableRanking" style="display:none">
            <table>
                <tr>
                    <td>1</td>
                    <td>Trento</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Roma</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Firenze</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>...</td>
                </tr>
            </table>
        </div>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        
    </body>
</html>