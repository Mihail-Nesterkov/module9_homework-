const btn = document.querySelector('#reqest');
const page = document.getElementById("firstInp");
const limit = document.getElementById("secondInp");
const result = document.querySelector('.result')

function useReqest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)

    xhr.onload = function () {
        if (xhr.status != 200) {
            alert('Статус ответа: ' + xhr.status)
        } else {
            const result = JSON.parse(xhr.response);

            if (callback) {
                callback(result);
            }
        }
    }
    xhr.send()
}

function display(apiData){
    let cards = ''
    apiData.forEach(item => {
        const cardBlock = `
        <div class="image">
        <img src="${item.download_url}" class="card-img">
</div>`;
        cards = cards + cardBlock;
        localStorage.setItem('endReqest', cards);

    })
    result.innerHTML = cards
}

function di(endReqest){
    result.innerHTML = endReqest;
}

btn.addEventListener('click', () => {
    if ((page.value && limit.value) > 10){
        result.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`
    } else{
    useReqest(`https://picsum.photos/v2/list?page=${page.value}&limit=${limit.value}`, display)
}
    localStorage.clear();
})

page.addEventListener("input", function (event) {
    if (page.validity.rangeOverflow) {
        page.setCustomValidity("Номер страницы вне диапазона от 1 до 10");
    } else {
        page.setCustomValidity("");
    }
    page.reportValidity()
});

limit.addEventListener("input", function (event) {
    if (limit.validity.rangeOverflow) {
        limit.setCustomValidity("Номер страницы вне диапазона от 1 до 10");
    } else {
        limit.setCustomValidity("");
    }
    limit.reportValidity()
})
document.addEventListener("DOMContentLoaded", () => {
    let endReqest = localStorage.getItem('endReqest')
    di(endReqest)
})

