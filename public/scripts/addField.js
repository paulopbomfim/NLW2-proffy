function start() {
    const addTime = document.querySelector("#add-time");
    addTime.addEventListener("click", clonefield)
}

function clonefield() {
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true);

    const fields = newFieldsContainer.querySelectorAll('input');

    fields.forEach(field => {
        field.value = '';
    })

    document.querySelector('#schedule-items').appendChild(newFieldsContainer);
}

start();

