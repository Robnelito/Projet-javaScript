//validation d'un nombre
function validerNombre() {
    if (event.keyCode < 43 || event.keyCode > 57) {
        event.returnValue = false;
    }
}
//resolution du systeme
function reso(fn) {
    var a1 = document.fn.a1.value;
    var b1 = document.fn.b1.value;
    var c1 = document.fn.c1.value;
    var d1 = document.fn.d1.value;
    var w = document.fn.w.value;

    var a2 = document.fn.a2.value;
    var b2 = document.fn.b2.value;
    var c2 = document.fn.c2.value;
    var d2 = document.fn.d2.value;
    var x = document.fn.x.value;

    var a3 = document.fn.a3.value;
    var b3 = document.fn.b3.value;
    var c3 = document.fn.c3.value;
    var d3 = document.fn.d3.value;
    var y = document.fn.y.value;

    var a4 = document.fn.a4.value;
    var b4 = document.fn.b4.value;
    var c4 = document.fn.c4.value;
    var d4 = document.fn.d4.value;
    var z = document.fn.z.value;

    //Champ de calcul
    if (a1, b1, c1, d1, w, a2, b2, c2, d2, x, a3, b3, c3, d3, y, a4, b4, c4, d4, z == '') {
        alert("Veuillez entrer un nombre dans chaque case");
    } else {
        //Calcul de Delta
        var Delta = (a1 * ((b2 * c3 * d4) + (c2 * d3 * b4) + (d2 * b3 * c4) - (b4 * c3 * b2) - (c4 * d3 * b2) - (d4 * b3 * c2))) -
            (b1 * ((a2 * c3 * d4) + (c2 * d3 * a4) + (d2 * a3 * c4) - (a4 * c3 * d2) - (c4 * d3 * a2) - (d4 * a3 * c2))) +
            (c1 * ((a2 * b3 * d4) + (b2 * d3 * a4) + (d2 * a3 * b4) - (a4 * b3 * d2) - (b4 * d3 * a2) - (d4 * a3 * b2))) -
            (d1 * ((a2 * b3 * c4) + (b2 * c3 * a4) + (c2 * a3 * b4) - (a4 * b3 * c2) - (b4 * c3 * a2) - (c4 * a3 * b2)));
        //document.getElementById("Delta") . innerHTML=Delta;
        document.getElementById("D").value = Delta;

        //Avec condition
        if (Delta != 0) {

            //Calcul de Deltax1
            var Deltax1 = (w * ((b2 * c3 * d4) + (c2 * d3 * b4) + (d2 * b3 * c4) - (b4 * c3 * d2) - (c4 * d3 * b2) - (d4 * b3 * c2))) -
                (b1 * ((x * c3 * d4) + (c2 * d3 * z) + (d2 * y * c4) - (z * c3 * d2) - (c4 * d3 * x) - (d4 * y * c2))) +
                (c1 * ((x * b3 * d4) + (b2 * d3 * z) + (d2 * y * b4) - (z * b3 * d2) - (b4 * d3 * x) - (d4 * y * b2))) -
                (d1 * ((x * b3 * c4) + (b2 * c3 * z) + (c2 * y * b4) - (z * b3 * c2) - (b4 * c3 * x) - (c4 * y * b2)));
            //document.getElementById("Deltax1") . innerHTML=Deltax1;

            //Calcul de Deltax2
            var Deltax2 = (a1 * ((x * c3 * d4) + (c2 * d3 * z) + (d2 * y * c4) - (z * c3 * d2) - (c4 * d3 * x) - (d4 * y * c2))) -
                (w * ((a2 * c3 * d4) + (c2 * d3 * a4) + (d2 * a3 * c4) - (a4 * c3 * d2) - (c4 * d3 * a2) - (d4 * a3 * c2))) +
                (c1 * ((a2 * y * d4) + (x * d3 * a4) + (d2 * a3 * z) - (a4 * y * d2) - (z * d3 * a2) - (d4 * a3 * x))) -
                (d1 * ((a2 * y * c4) + (x * c3 * a4) + (c2 * a3 * z) - (a4 * y * c2) - (z * c3 * a2) - (c4 * a3 * x)));
            //document.getElementById("Deltax2") . innerHTML=Deltax2; 

            //Calcul de Deltax3
            var Deltax3 = (a1 * ((b2 * y * d4) + (x * d3 * b4) + (d2 * b3 * z) - (b4 * y * d2) - (z * d3 * b2) - (d4 * b3 * x))) -
                (b1 * ((a2 * y * d4) + (x * d3 * a4) + (d2 * a3 * z) - (a4 * y * d2) - (z * d3 * a2) - (d4 * a3 * x))) +
                (w * ((a2 * b3 * d4) + (b2 * d3 * a4) + (d2 * a3 * b4) - (a4 * b3 * d2) - (b4 * d3 * a2) - (d4 * a3 * b2))) -
                (d1 * ((a2 * b3 * z) + (b2 * y * a4) + (x * a3 * b4) - (a4 * b3 * x) - (b4 * y * a2) - (z * a3 * b2)));
            //document.getElementById("Deltax3") . innerHTML=Deltax3;


            //Calcul de Deltax4
            var Deltax4 = (a1 * ((b2 * c3 * z) + (c2 * y * b4) + (x * b3 * c4) - (b4 * c3 * x) - (c4 * y * b2) - (z * b3 * c2))) -
                (b1 * ((a2 * c3 * z) + (c2 * y * a4) + (x * a3 * c4) - (a4 * c3 * x) - (c4 * y * a2) - (z * a3 * c2))) +
                (c1 * ((a2 * b3 * z) + (b2 * y * a4) + (x * a3 * b4) - (a4 * b3 * x) - (b4 * y * a2) - (z * a3 * b2))) -
                (w * ((a2 * b3 * c4) + (b2 * c3 * a4) + (c2 * a3 * b4) - (a4 * b3 * c2) - (b4 * c3 * a2) - (c4 * a3 * b2)));
            //document.getElementById("Deltax4") . innerHTML=Deltax4;          

            //Calcul de x1
            var x1 = Deltax1 / Delta;
            //document.getElementById("x1") .innerHTML=x1;
            document.getElementById("x1").value = x1.toFixed(2);

            //Calcul de x2
            var x2 = Deltax2 / Delta;
            document.getElementById("x2").value = x2.toFixed(2);

            //Calcul de x3
            var x3 = Deltax3 / Delta;
            document.getElementById("x3").value = x3.toFixed(2);

            //Calcul de x4
            var x4 = Deltax4 / Delta;
            document.getElementById("x4").value = x4.toFixed(2);
        }
        if (Delta == 0) {
            alert("Vous avez une infinité de solutions car le Determinant est nul");
        }
    }
}