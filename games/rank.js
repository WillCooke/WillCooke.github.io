var elements = [550, 550, 550, 550, 550, 550, 550, 550, 550, 550];
var names = ["Will", "Tommy", "Gashy", "Lillith", "TK", "Cuntlin", "Anna", "Archie", "Rosie 1", "Rosie 2"];
var currentElements = [0, 1];

function Probability(rating1,rating2)
{
    return (
        1.0 / (1 + Math.pow(10, (rating1 - rating2) / 400))
    );
}
function EloRating(Ra, Rb, K, d) {
    let Pb = Probability(Ra,Rb);
    let Pa = Probability(Rb,Ra);
    if(d==true)
    {
        Ra+=K*(1-Pa);
        Rb+=K*(-Pb);
    }
    else
    {
        Ra+=K*(-Pa);
        Rb+=K*(1-Pb);
    }
    return [Ra,Rb];
}
function generateSelection()
{
    var newA = Math.floor(Math.random() * elements.length);
    var newB = Math.floor(Math.random()*elements.length);
    console.log("A: " + newA + " B: " + newB);
    if(newA==newB){generateSelection();}
    else
    {
        currentElements = [newA, newB];
        console.log(currentElements);
        document.getElementById("imgA").src = currentElements[0]+".jpg";
        document.getElementById("imgB").src = currentElements[1]+".jpg";
        var ranks="";
        for (let i = 0; i < elements.length; i++) { ranks+=names[i]+ ": " +Math.round(elements[i])/100+" inches<br>"; } 
        document.getElementById("ranks").innerHTML = ranks;
    }
}

function chooseA()
{
    var newRank = EloRating(elements[currentElements[0]], elements[currentElements[1]], 100, true);
    elements[currentElements[0]] = newRank[0];
    elements[currentElements[1]] = newRank[1];
    generateSelection();
}

function chooseB()
{
    var newRank = EloRating(elements[currentElements[0]], elements[currentElements[1]], 100, false);
    elements[currentElements[0]] = newRank[0];
    elements[currentElements[1]] = newRank[1];
    generateSelection();
}