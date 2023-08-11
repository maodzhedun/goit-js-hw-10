// create markup list breeds
function createMarkup(array) {
    return array.map(({id, name}) => `<option value="${id}">${name}</option>`).join("");
}

// create card breed
function createMarkupCat({
    0: {
        breeds: {
        0: { name, description, temperament },
        },
        url,
    },
    }) {
    return `<img src="${url}" alt="${name}" width="500" ></img>
    <div>
        <h1 class="title">${name}</h1>
        <p class="item">${description}</p>
        <h2 class="title">Temperament:</h2>
        <p class="item">${temperament}</p>
    </div>`;
}

export {createMarkup, createMarkupCat}