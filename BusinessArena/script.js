fetch('http://58f2-103-134-101-100.ngrok.io/alltask')
.then(data => data.json())
.then(ApiData =>{
    ō
    const Text = ApiData.map(items =>{

        return`
        <div class="mappingData">
        <p key="userId">UserId: ${items.userId}</p>
        <p>Name: ${items.name}</p>
        <p>task: ${items.task}</p>
        <hr />
        </div>
        `;
    })
    .join("");

    document.querySelector('#Display').insertAdjacentHTML("afterbegin", Text);

})