function translateText() {
    const inputText = document.getElementById('inputText').value;

    fetch('translate.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'text=' + encodeURIComponent(inputText)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('outputText').innerText = data;
    })
    .catch(error => console.error('Error:', error));
}
