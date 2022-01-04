
//var table = +prompt("Enter any number of Table ");

function table() {

    document.getElementById("tble").innerHTML = "";

    var inp = document.getElementById("txt").value
    var rnge = document.getElementById("txt1").value
    
    //document.write("Multiplication Table is : " + inp);
    
    
    
    for (let i = 1; i < rnge; i++) {
        
        //document.getElementById("tble").innerHTML += `<br>${inp} x ${i} = ${inp * i}`
        //document.write(`${inp} x ${i} = ${inp * i} <br>`)

        document.getElementById("tble").innerHTML += `${inp} x ${i} = ${inp * i} <br>`
    }


}
