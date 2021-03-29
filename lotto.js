//var allNum = Array(45); 
//빈 배열 / 45개가 비어있음 (45개의 undefined) / 여기에 1~ 45개의 숫자후보를 넣어줘야한다.

/* 
빈배열은 반복문이 불가능 하다.
allNum.forEach(function(elem){
    console.log(elem)
})
//결과 - undefined
*/

//var fill = allNum.fill(); //fill 메서드는 IE에서는 불가능
/*
fill.forEach(function(elem, index){
    //console.log(elem, index);// undefined, 0 ~ undefined, 44 (index+1 =  1~45의 숫자후보 완성)
    fill[index] = index + 1;
}) // 이 방법도 가능하지만 억지로 끼워 맞추는 느낌. map을 사용하면 된다
*/
var reset = document.getElementsByClassName("btn");

reset[0].addEventListener('click', function(){
    reset[0].style.display = "none";
    var allNumber = Array(45).fill().map(function(elem, index){
        return index + 1;
    })
    console.log(allNumber);

    var random = [];
    //for문은 자신이 정확히 몇번을 반복해야하는지 알때, while문은 몇번을 반복해야하는지 모를때 
    while (allNumber.length > 0){
        var movingValue = allNumber.splice(Math.floor(Math.random() * allNumber.length), 1)[0];
        random.push(movingValue);
    }
    console.log(random);

    var bonus = random[random.length - 1]; //random의 마지막 숫자
    var winning = random.slice(0, 6); //0부터 6까지의 숫자를 자름 (6은 포함 X)

    //당첨숫자 정렬
    console.log("winning", winning.sort(function(a, b){return a - b;}), "bonus", bonus); //내림차순 정렬은 b - a //뺸결과가 0보다 크면 순서를 바꾼다.

    //html에 표시
    var result = document.getElementById("result");

    //1초뒤에 하나씩 당첨숫자 나타남 - 비동기 콜백
    //클로저를 사용 하지 않는다면 이렇게 노가다
    setTimeout(function asCallback(){
        var ball = document.createElement('div');
        ball.textContent = winning[0];
        ball.classList.add("ball");
    //    ball.style.color = "inline-block";
        result.appendChild(ball);
    }, 1000);
    setTimeout(function asCallback(){
        var ball = document.createElement('div');
        ball.textContent = winning[1];
        ball.classList.add("ball");
        result.appendChild(ball);
    }, 2000);
    setTimeout(function asCallback(){
        var ball = document.createElement('div');
        ball.textContent = winning[2];
        ball.classList.add("ball");
        ball.style.backgroundColor = "darkorange";
        result.appendChild(ball);
    }, 3000);
    setTimeout(function asCallback(){
        var ball = document.createElement('div');
        ball.textContent = winning[3];
        ball.classList.add("ball");
        ball.style.backgroundColor = "darkorange";
        result.appendChild(ball);
    }, 4000);
    setTimeout(function asCallback(){
        var ball = document.createElement('div');
        ball.textContent = winning[4];
        ball.classList.add("ball");
        ball.style.backgroundColor = "cornflowerblue";
        result.appendChild(ball);
    }, 5000);
    setTimeout(function asCallback(){
        var ball = document.createElement('div');
        ball.textContent = winning[5];
        ball.classList.add("ball");
        ball.style.backgroundColor = "cornflowerblue";
        result.appendChild(ball);
    }, 6000);
    setTimeout(function asCallback(){
        var bonusBox =document.getElementsByClassName("bonus")[0];
        var bonusBall = document.createElement("div");
        bonusBall.classList.add("ball");
        bonusBall.style.backgroundColor = "forestgreen";
        bonusBall.textContent = bonus;
        bonusBox.appendChild(bonusBall);
    }, 7000);
});




