function f() {
    navigator.clipboard.readText()
        .then(text => {
            document.getElementById("copy").value=(text);
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
}
