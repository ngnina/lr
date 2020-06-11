let c = document.createElement('p');
c.innerHTML='<b>Ответ верный</b>';
c.style.cssText = "color: green; font-size: 1em;";

let d = document.createElement('p');
d.innerHTML='<b>Ответ неверный</b>';
d.style.cssText = "color: red; font-size: 1em;";

function res_1(a){
    a  =  document.getElementById('a').value;
    if(a==0.9||a=="9/10"||a=="0,9"){
        result_1.append(c);
    }
    else{
        result_1.append(d);
    }
}

function dec_1(){
    let e = "<p>Правильное решение задачи 1: </p><p>MRS = 9/10 = 0,9</p>";
    document.getElementById('decision_1').innerHTML = e;
}

function res_2(a){
    a  =  document.getElementById('b').value;
    if(a==1){
        result_2.append(c);
    }
    else{
        result_2.append(d);
    }
}

function dec_2(){
    let e="<p>Правильное решение задачи 2:</p><p>Ed I = (dQ/dI)* I/Q = 3*1/3 = 1 </p>";
    document.getElementById('decision_2').innerHTML = e;
}

function res_3(a){
    a  =  document.getElementById('c').value;
    if(a==5||a=="5 кг помидор"||a=="5 кг"){
        result_3.append(c);
    }
    else{
        result_3.append(d);
    }
}

function dec_3(){
    let e="<p>Правильное решение задачи 3: </p><p>Согласно данным задачи получаем: (30-2X)/(19-3Y)=2/1. Выбор потребителя зависит от бюджетного ограничения: 2X+Y=13. Решив систему указанных двух уравнений, получим, что Х = 5, а Y = 3. Это означает, что рациональный потребитель будет покупать 5 кг помидор в неделю.</p>";
    document.getElementById('decision_3').innerHTML = e;
}