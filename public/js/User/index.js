const urlAPI = "https://api-host-data.onrender.com"

const button = document.getElementById("opendMenu"),
    buttonx = document.getElementById("closeMenu")

button.addEventListener("click", function () {
    document.getElementById("sidebar").style.marginLeft = 0
})

buttonx.addEventListener("click", function () {
    document.getElementById("sidebar").style.marginLeft = '-250px'
})

