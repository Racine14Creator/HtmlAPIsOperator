const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const payload = new FormData(myForm)
    console.log([...payload])
})