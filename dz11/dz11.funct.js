function f_mult() {
    let a = document.getElementById("mlt1").value;
    let b = document.getElementById("mlt2").value;
    let c = a * b;
    console.log("Результат умножения: " + c);
}
function f_multnum() {
    let d = document.getElementById("mltnum").value;
    if (d % 4 == 0) {
        console.log("Число является кратным 4");
    } else {
        console.log("Число не является кратным 4");
    }
}
function f_vgod() {
    let year = document.getElementById("year").value;
    if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0)) {
        console.log("Год високосный");
    } else {
        console.log("Год не високосный");
    }
}

function f_otdo() {
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += i + " ";
    }
    console.log("Числа от 1 до 10: " + res);
}

function f_blk() {
    for (let i = 0; i < 4; i++) {
        let elem = document.createElement('p');
        elem.style.cssText = "display:inline-block; width: 100px; height: 100px; background:blue; margin: 5px; border: 1px solid black;";
        zd5.append(elem);
    }
}

