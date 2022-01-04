
//var table = +prompt("Enter any number of Table ");

function table() {

    document.getElementById("tble").innerHTML = "";

    var inp = document.getElementById("txt").value
    
    //document.write("Multiplication Table is : " + inp);
    
    
    
    for (let i = 1; i < 11; i++) {
        
        //document.getElementById("tble").innerHTML += `<br>${inp} x ${i} = ${inp * i}`
        //document.write(`${inp} x ${i} = ${inp * i} <br>`)

        document.getElementById("tble").innerHTML += `${inp} x ${i} = ${inp * i} <br>`
    }


}
