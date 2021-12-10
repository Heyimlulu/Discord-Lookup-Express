const input = $('#input');
const button = $('#btn');
const form = $('form');

form.submit((e) => {
    e.preventDefault();

    let reg = new RegExp('^([0-9]{16,})$');
    let value = input[0].value;

    if (value.match(reg)) {
        sendRequest(value)
    } else {
        input.addClass('error');
        input.attr('placeholder', 'You may use a valid user ID');
    }
})

function sendRequest (id) {
    window.location = `http://localhost:4000/user?id=${id}`
}
