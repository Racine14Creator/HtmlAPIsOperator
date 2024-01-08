const myKeyValue = window.location.search

const UrlParams = new URLSearchParams(myKeyValue)

const urlGetUser = UrlParams.get('Get')

const result = document.getElementById("result")

if (urlGetUser) {
    GetUser()
}


function GetUser() {

    fetch(`http://localhost:7000/users/${urlGetUser}`, { method: "GET" })
        .then(res => {
            res.json().then(user => {
                document.getElementById("userName").innerHTML = user.username
                const formattedDate = luxon.DateTime.fromISO(user.createdAt, { zone: 'UTC' }).toFormat("yyyy-MM-dd");
                result.innerHTML = `
                <div class="main">
                    <div class="wrapper">
                        <nav class="navbar">
                            <a href="#" class="logo">Users <span id="userName">${user.username}</span></a>
                            <ul>
                                <li><a href="#" class="link delete">Logout</a></li>
                                <li>
                                    <a href="profile.html">
                                        <img 
                                            src="${user.profile === undefined ? './public/images/man.jpg' : user.profile}" 
                                            alt="Profile: ${user.username}" class="avatar" 
                                        />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div class="flex justifybetween gap">
                            <div class="flex-3 wrapperData shadow">
                                <div class="flex justifybetween items-center">
                                    <h3 class="title">Profile: ${user.username}</h3>
                                    <a href="users.html" class="button delete text-white">Back</a>
                                </div>
                                <div class="profileImgCover">
                                    <img src="${user.profile === undefined ? './public/images/man.jpg' : user.profile}" alt="Profile ${user.username}" />
                                </div>
                                <div class="data">
                                    <div class="flex justifybetween my-5 align-center py-5 border-raduis border-teal">
                                        <span>Username:</span>
                                        <span>${user.username}</span>
                                    </div>
                                    
                                    <div class="flex justifybetween my-5 align-center py-5 border-raduis border-teal">
                                        <span>Email:</span>
                                        <span>${user.email}</span>
                                    </div>
                                    <div class="flex justifybetween my-5 align-center py-5 border-raduis border-teal">
                                        <span>Status:</span>
                                        <span class="${user.isActive = undefined ? 'desactive' : 'active'}">
                                            ${user.isActive = undefined ? 'desactive' : 'active'}
                                        </span>
                                    </div>
                                    <div class="flex justifybetween my-5 align-center py-5 border-raduis border-teal">
                                        <span>Created At:</span>
                                        <span class="active">${user.createdAt === undefined ? '02.02.2023' : formattedDate}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="sticky-top flex-2 wrapperData shadow">
                                <h3 class="title">Edit your profile</h3>
                                <form action="" id="myForm2" autocomplete="off">
                                    <div class="group">
                                        <label for="username">Username</label>
                                        <input type="text" placeholder="Username" name="username" value="${user.username}" class="input">
                                    </div>

                                    <div class="group">
                                        <label for="email">Email</label>
                                        <input type="email" placeholder="Email@example.com" name="email" value="${user.email}" class="input">
                                    </div>
                                    
                                    <div class="group">
                                        <label for="isAdmin">I am <span class="span">${user.isAdmin ? 'Admin' : 'User'}</span></label>
                                        <select name="isAdmin" id="isAdmin" class="input">
                                            <option value="">--Select --</option>
                                            <option value="1">Admin</option>
                                            <option value="0">User</option>
                                        </select>
                                    </div>

                                    <div class="group">
                                        <button class="button delete text-white" type="submit">Update ${user.username}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
        })
        .catch(error => console.log(error))
}

let Init = async () => {
    await GetUser().then(() => {
        updateUser()
    })
}

const myForm2 = document.getElementById("myForm2")

const updateUser = () => {
    myForm2.addEventListener("submit", function (event) {
        event.preventDefault()
        console.log("Clicked")
    })
}

Init()


