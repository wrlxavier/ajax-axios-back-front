function createItemList(state){
    const ulStates = document.querySelector('#states')
    const itemList = document.createElement('li')
    itemList.innerHTML = `${state.initials} - ${state.name}`
    itemList.classList.add('list-item')
    ulStates.appendChild(itemList)
}

const url = 'data/states.json'
axios(url).then(resp => {
    const data = resp.data
    data.forEach(createItemList)
})