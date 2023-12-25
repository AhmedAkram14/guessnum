const outPut = document.querySelector(".output") ;
const allNums = document.querySelectorAll("p") ;
let randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 10){
    randomNumber = `0${randomNumber}`
}
let myArr = [];
let storedNums = [] ; 
let spans = document.querySelectorAll("span")
let chance = 0 ;
let content = document.querySelector(".res-cont")

console.log(randomNumber);

for(let num in allNums){
    
    allNums[num].onclick = () => {
        myArr.push(allNums[num].innerHTML)
        storedNums.push(myArr.join(""))
        for(let i = 0 ; i < storedNums.length ; i++){
            if(storedNums[i].length < 2){
                storedNums.splice(i , 1)
                chance++
            }
            if(storedNums[i] < randomNumber && storedNums[i].length == 2){
                spans[i].innerHTML = `<i class="fa-solid fa-arrow-up"></i>`
             } else if (storedNums[i] > randomNumber && storedNums[i].length == 2){
                spans[i].innerHTML = `<i class="fa-solid fa-arrow-down"></i>`
             }
             if(chance == 5 && storedNums[i] != randomNumber && storedNums[i]?.length == 2){
                content.classList.add('celebrate')
                 content.style.display = "block"
                 content.style.textAlign = "center"
                 content.style.marginTop = "100px"
                 content.innerHTML = `<h2>GAME OVER ! </h2>
                <h3>The correct Number is <span>${randomNumber} </span></h3>
                 `
             } else if (storedNums[i] == randomNumber){
                content.style.display = "block"
                content.style.textAlign = "center"
                content.style.marginTop = "100px"
                content.innerHTML = `<h2>Congratulations!</h2>
                    <h3> You guessed the correct number: <span>${randomNumber}</span> </h3>
                `;
                content.classList.add('celebrate');
             }
        }
        console.log(chance)
            appending();
        } 
    }



function appending(){
    let res =  document.createElement("div");
    res.className = "res";
    if(myArr.length == 1){
        res.innerHTML = myArr[0]
        outPut.appendChild(res)
    } else if(myArr.length == 2){
        outPut.lastElementChild.innerHTML = myArr.join("")
        myArr = []
    }
}