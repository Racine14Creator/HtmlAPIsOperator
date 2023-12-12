const myForm = document.getElementById("myForm")

myForm.onsubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    console.log(formData)
}