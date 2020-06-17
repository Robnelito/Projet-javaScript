function validerNombre(){
    if (event.keyCode<43 || event.keyCode>57)
    {
        event.returnValue=false;
    }
}
function resolution(ha) {  

    var a = document.ha.a.value;
    var b = document.ha.b.value;
    var c = document.ha.c.value;

    if (a == '' || b == '' || c == '')
    {
        alert("Veullez insérer des nombres dans chaque case!");
        return false;
    }
    else if (a == 0)
    {
        alert("Ce n'est pas une équation du second degré\n Entrer un nombre autre que 0");
        document.getElementById("a").value=null;
        return false;
    }
    else 
    {
        var d = Math.pow(b, 2) - (4 * a * c);
        document.getElementById("d").value = d;

        if (d < 0) 
        {
            alert("L'équation n'admet pas de solution");
            document.getElementById("x").value = '';
            document.getElementById("x1").value = '';
            document.getElementById("x2").value = '';

        } 
        else if (d == 0) 
        {
            alert("L'équation admet une solution");
            var x = (-b) / (2 * a);
            document.getElementById("x").value = x.toFixed(2);
            document.getElementById("x1").value = '';
            document.getElementById("x2").value = '';

        } 
        else if (d > 0) 
        {
            alert("L'équation admet deux solutions");
            var x1 = ((-b - (Math.sqrt(d))) / (2 * a));
            document.getElementById("x1").value = x1.toFixed(2);

            var x2 = ((-b + (Math.sqrt(d))) / (2 * a));
            document.getElementById("x2").value = x2.toFixed(2);
            document.getElementById("x").value = '';
        }
    }
}