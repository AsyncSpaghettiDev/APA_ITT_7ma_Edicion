const files = document.querySelector('#files');
const freqUpdate = document.querySelector('#freq-update');
const book_chapter = document.querySelector('#chapter-book');
const static_Content = document.querySelector('#static-content');

const mes = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"];
var hoy = new Date();

// Form for web with frequent updates
freqUpdate.addEventListener('submit', function (e) {
    const response = this.querySelector('.response');
    e.preventDefault();
    response.classList.value = 'response';

    if (e.target[1].value == '')
        e.target[1].value = 's.f.';

    if (e.target[4].value === '')
        e.target[4].value = hoy.getDate() + ' de ' + (mes[hoy.getMonth()]) + ' de ' + hoy.getFullYear();

    if (e.target[5].value === '')
        response.textContent = 'No hay entrada para referencia';

    else if (   e.target[2].value != '' &&
                e.target[3].value != '' &&
                e.target[4].value != '') {
        response.classList.value = 'response active';

        response.innerHTML = `<p> ${e.target[0].value} (${e.target[1].value})
        <span style="font-style: italic;">${e.target[2].value}</span> ${e.target[3].value} Recuperado el ${e.target[4].value}
        ${e.target[5].value} </p>`;
    }
    else
        response.textContent = 'Favor de llenar todos los campos';
})

// Form for web with static content
static_Content.addEventListener('submit', function (e) {
    const response = this.querySelector('.response');
    e.preventDefault();
    response.classList.value = 'response';

    if (e.target[1].value == '')
        e.target[1].value = 's.f.';

    if (e.target[4].value === '')
        response.textContent = 'No hay entrada para referencia';

    else if (   e.target[2].value != '' &&
                e.target[3].value != '' &&
                e.target[4].value != '') {
        response.classList.value = 'response active';

        response.innerHTML = `<p> ${e.target[0].value} (${e.target[1].value})
        <span style="font-style: italic;">${e.target[2].value}</span> ${e.target[3].value} ${e.target[4].value} </p>`;
    }
    else
        response.textContent = 'Favor de llenar todos los campos';
})

// Form for files
files.addEventListener('submit', function (e) {
    const response = this.querySelector('.response');
    e.preventDefault();
    response.classList.value = 'response';

    if (e.target[1].value == '')
        e.target[1].value = 's.f.';

    if (e.target[4].value === '')
        response.textContent = 'No hay entrada para referencia';

    else if (   e.target[2].value != '' &&
                e.target[3].value != '' &&
                e.target[4].value != '') {
        response.classList.value = 'response active';

        response.innerHTML = `<p> ${e.target[0].value} (${e.target[1].value})
        <span style="font-style: italic;">${e.target[2].value}</span> [Archivo ${e.target[3].value}] ${e.target[4].value} </p>`;
    }
    else
        response.textContent = 'Favor de llenar todos los campos';
});

// Form for a book chapter
book_chapter.addEventListener('submit', function (e) {
    const response = this.querySelector('.response');
    e.preventDefault();
    response.classList.value = 'response';

    if (e.target[1].value == '')
        e.target[1].value = 's.f.';

    if (e.target[0].value != '' &&
        e.target[2].value != '' &&
        e.target[3].value != '' &&
        e.target[4].value != '' &&
        e.target[5].value != '' &&
        e.target[6].value != '' ) {
        response.classList.value = 'response active';

        response.innerHTML = `<p> ${e.target[0].value} (${e.target[1].value}) ${e.target[2].value}. En ${e.target[3].value}
        (${e.target[4].value}) <span style="font-style: italic;">${e.target[5].value}</span> (pp. ${e.target[6].value})
        ${e.target[7].value} </p>`;
    }
    else
        response.textContent = 'Favor de llenar todos los campos';
});

// Form for a book
book.addEventListener('submit', function (e) {
    const response = this.querySelector('.response');
    e.preventDefault();
    response.classList.value = 'response';

    if (e.target[1].value == '')
        e.target[1].value = 's.f.';

    if (e.target[0].value != '' &&
        e.target[2].value != '' &&
        e.target[3].value != '') {
        response.classList.value = 'response active';

        response.innerHTML = `<p> ${e.target[0].value} (${e.target[1].value}) 
        <span style="font-style: italic;">${e.target[2].value}</span> ${e.target[3].value} ${e.target[4].value} </p>`;
    }
    else
        response.textContent = 'Favor de llenar todos los campos';
});