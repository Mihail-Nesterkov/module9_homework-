
const buttNode = document.getElementById('btnRes');
const resultNode = document.querySelector(".result");

function useRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function (){
        if (xhr.status != 200){
            alert('Статус ответа: ' + xhr.status)
        }else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    }
    xhr.send()
}

function dispRes(apiData){
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
        <img src="${item.download_url}" class="card-img">
</div>`;
        cards = cards + cardBlock;
    });
    resultNode.innerHTML = cards
}

buttNode.addEventListener('click', () => {
    const value = document.querySelector("input").value;
    if (value > 10){
        alert('число вне диапазона от 1 до 10')
    }else {
        useRequest(`https://picsum.photos/v2/list?limit=${value}`, dispRes);
    }

})
