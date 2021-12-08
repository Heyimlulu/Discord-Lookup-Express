const input = $('#input');
const button = $('#btn');

button.click(() => {
    let reg = new RegExp('^([0-9]{16,})$');
    let value = input[0].value;

    console.log(value);

    if (value.match(reg)) {
        sendRequest(value)
    } else {
        alert('Invalid ID, please try again');
    }
});

function sendRequest (id) {
    window.location = `http://localhost:4000/user?id=${id}`
}
