const myForm = document.getElementById("myForm")

myForm.onsubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(myForm)

    fetch("http://localhost:7000/users", { method: "POST", body: formData })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}