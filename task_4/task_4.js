const but = document.getElementById('but');
let result = document.getElementById('result');

function useReqest(firstNum, secondNum){
    fetch(`https://picsum.photos/${firstNum}/${secondNum}`)
        .then ((response) => {
            // console.log(response)
            const  res = response.url;
            // console.log(res)
            disp(res)
            })
        .catch(() => { console.log('error') });

}
function disp(res){
    const disp = `<img src="${res}" class="image">`
    result.innerHTML = disp;
}
but.addEventListener('click', () => {
    const firstNum = +document.getElementById('width').value;
    const secondNum = +document.getElementById('heath').value;
    if (typeof firstNum != "number"|| typeof secondNum != 'number'){
        alert('Вы ввели не число')
    }else if (isNaN(firstNum) || isNaN(secondNum)){
        alert('Вы ввели не число')
    }else if (firstNum < 100 || firstNum > 300 || secondNum > 300 || secondNum < 100) {
        alert('одно из чисел вне диапазона от 100 до 300')
    }else {
        useReqest(firstNum, secondNum)
    }
})

