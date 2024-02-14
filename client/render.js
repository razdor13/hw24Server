
const userInputConteiner = document.querySelector('.statistics')

function letRenderListOfUniq (list) {
    list.forEach((value, key) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div> * key -  ${key} : quntity  ${value}</div>`;
        userInputConteiner.appendChild(newDiv);
    });
}
function letRenderQuntityUniq (list) {
    const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div> uniq el quntity  ${list.size}</div>`;
        userInputConteiner.appendChild(newDiv);
}
export {letRenderListOfUniq,letRenderQuntityUniq,userInputConteiner}