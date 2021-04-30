let body = document.querySelector(".list");
let number = -1;

for ( n = 0 ; n <= 20; n++ ) {
    let newRow = document.createElement("tr");
    let newNumber = document.createElement("td");
    number++;
    let newItem = document.createElement("td");
    body.appendChild (newRow);
    newNumber.textContent = number + "!";
    newRow.appendChild (newNumber);
    newItem.textContent = fac(n);
    newRow.appendChild (newItem);
    
    function fac(n){
        
        return(n<2)?1:fac(n-1)*n;
    }
}