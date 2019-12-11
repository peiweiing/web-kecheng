window.onload = function() {
    window.onkeydown = function() {
        if (event.code == "Backspace") {
            var eles = document.getElementsByClassName("hello");
            for (var i = 0; i < eles.length; i++) {
                if (eles[i] == document.activeElement) {
                    if (i == 0) {
                        break;
                    }
                    console.log(eles[i].value)
                    if (eles[i].value == "") {
                        eles[i - 1].value = "";
                        eles[i - 1].name = "";
                        eles[i - 1].focus();
                    }
                    break;
                }
            }
        }
    }

    var eles = document.getElementsByClassName("hello");
    for (var i = 0; i < eles.length; i++) {
        var ele = eles[i];
        ele.onfocus = function() {
            var str = this.id
            var vv = str.substr(1, str.length);
            var a = parseInt(vv);
            if (this.name == "") {
                jumHead(a);
            } else if (this.name != "") {
                jumEnd(a)
            }
        }
    }
}

function jumHead(n) {
    for (var j = 1; j < n; j++) {
        var v1 = document.getElementById("p" + j);
        if (v1.name == "") {
            console.log(this)
            v1.focus();
            break;
        }
    }
}

function jumEnd(n) {
    for (var j = n; j < 7; j++) {
        var v1 = document.getElementById("p" + j);
        if (j == 6) {
            v1.focus();
            break;
        }
        if (v1.value == "") {
            v1.focus();
            break;
        }
    }
}

function keypress(val) {
    var ev = window.event;
    var nowindex = val
    var nextindex = val + 1;
    if (nextindex == 7) {
        var inputele = document.getElementById("p" + nowindex);
        inputele.value = ev.key;
        inputele.blur();
        return;
    }

    var inputelenow = document.getElementById("p" + nowindex);
    inputelenow.name = ev.key;
    var inputele = document.getElementById("p" + nextindex);
    inputele.focus();
}

function copyText() {
    console.log("copyText");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    console.log(ctx);
    // 		ctx.rect(20,20,150,100);
    // 		ctx.stroke();
    var hh = 20;
    for (var i = 0; i < 6; i++) {

        var xx = 20 * i + hh;

        ctx.rect(20 * i + 20, 10, 20, 20);
        ctx.stroke();
    }

}

function drawrect() {
    console.log("drawrect");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillrect(0, 0, 100, 100);

}