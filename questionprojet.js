var question = document.getElementById("question");
var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");
var boutonTop = document.getElementById("boutonTop");
var questRep =[
{
	quest:"Quel joueur a marqué un but surnommé la main de Dieu?",
	rep:"maradona"
},
{
	quest:"Qui a gagné le ballon d'or en 2012?",
	rep:"messi"
},
{
	quest:"Quelle équipe a gagné la coupe du monde 1998?",
	rep:"france"
},
{
	quest:"Quelle équipe le Barça a t-il battu lors de la fameuse remontada en 2017?",
	rep:"psg"
},
{
	quest:"Quel est le montant du transfert de Neymar au PSG en milions d'euros?",
	rep:"222"
},
{
	quest:"Combien de ligues des champions a gagné le Real Madrid?",
	rep:"13"
},
{
	quest:"Quelle pays a remporté le plus de Coupe du Monde?",
	rep:"bresil"
},
{
	quest:"Quelle équipe a remporté la Ligue des Champions en 2019?",
	rep:"liverpool"
},
{
	quest:"Dans combien de club Lionel Messi a-t-il évolué dans sa carrière?",
	rep:"2"
},
{
	quest:"Quel joueur est connu sous le surnom El Matador?",
	rep:"cavani"
}
]

var n = 0 ;
question.textContent=questRep[n].quest;


var juste= document.getElementById("juste");//
var faux= document.getElementById("faux");//
var nbJuste=0;
var timer=document.getElementById("countdown");
var counter=50;

function startTimer(){
    var countdown=setInterval(function(){
        console.log(counter);;
        timer.innerText=counter;
        counter--;
        if(counter===0){
            timer.innerText="Fin";
            console.log("Fin");
            clearInterval(countdown);
        }
    }, 1000);
      }

      function questionSuivante () { 
        if (n < (questRep.length-1)) { 
             n+=1;
         } 
         else {n=0;}
             question.textContent= questRep[n].quest;	
         }

boutonValider.onclick = function () {
	    if (reponse.value.toLowerCase() === questRep[n].rep){      		
	        setTimeout (questionSuivante,1000);
	        nbJuste += 1; 		    
	   	} else {
               if (counter!=0){ 
                timer.innerText="Erreur";
                console.log("Erreur")
                clearInterval(countdown);
            }
           }
           juste.textContent = nbJuste ; 
		setTimeout (function () {reponse.value=""}, 1000);	
        if (counter===0){
            boutonValider.onclick = function(){}
        }	
}
 
function validationEnter (e) {
		 if (e.key ==="Enter") {boutonValider.onclick()}
};

reponse.addEventListener("keydown", validationEnter);

function toggle_text() {
    var span = document.getElementById("span_txt");
    if(span.style.display == "none") {
      span.style.display = "inline";
    } else {
      span.style.display = "none";
    }
}