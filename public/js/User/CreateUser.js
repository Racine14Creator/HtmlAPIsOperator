const myForm = document.getElementById("myForm"),
    error = document.getElementById("Error")

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const prePayload = new FormData(myForm)
    const payload = new URLSearchParams(prePayload)

    console.log(payload)
    fetch("http://localhost:7000/users", {
        method: "POST",
        body: prePayload
    })
        .then(res => res.json())
        .then(data => {
            if (data.message === 'success') {
                window.location.href = 'users.html'
            } else {
                error.innerHTML = `<p class="alert-danger">${data.message}</p>`
            }
        })
        .catch(error => console.log(error));
})