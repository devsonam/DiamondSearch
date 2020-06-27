var noOfRows = 8;
var noOfCol = 8;
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



