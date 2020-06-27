var noOfRows = 8;
var noOfCol = 8;
var diamondPos = ['05', '07', '13', '26', '45','61','77','71'];
var noOfDiamondFound = 0;
var maxScore = noOfRows*noOfCol;
window.addEventListener('load', function() {
    createBord();
});
function createBord(){
    var cont = document.getElementById("container");
    for(var i =0; i<noOfRows; i++){
        var currentRow = document.createElement("div");
        currentRow.id = "row"+i;
        currentRow.classList += " row";

        for(var j=0; j<noOfCol; j++){
            var currCell = document.createElement("div");
            currCell.id = ("cell" + i) + j;
            currCell.classList += " cell";
            currCell.innerHTML = "?";
            currentRow.append(currCell);
        }   
             
        cont.append(currentRow);
    }
};

function updateStatus(event){
    if(event.target.innerHTML == ""){
        return;
    }
    
    var currIndex = event.target.id.substr(4)
    event.target.innerHTML = "";
    maxScore--;
if(diamondPos.includes(currIndex)){
    event.target.classList.add("diamond");
    noOfDiamondFound++;
    if(noOfDiamondFound==diamondPos.length){
       var scoreDiv = document.getElementById("score-container");
       scoreDiv.classList.remove("hidden");
       var scoreVal = document.getElementById("score");
       scoreVal.innerHTML = maxScore--;
       var cont = document.getElementById("container");
       cont.classList.add("hidden");
    }
} 

}

