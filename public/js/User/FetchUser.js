const myKeyValue = window.location.search

const UrlParams = new URLSearchParams(myKeyValue)

const urlGetUser = UrlParams.get('Get')

const result = document.getElementById("result")


function GetUser() {

    fetch(`http://localhost:7000/users/${urlGetUser}`, { method: "GET" })
        .then(res => {
            res.json().then(user => {
                document.getElementById("userName").textContent(user.username)
                const formattedDate = luxon.DateTime.fromISO(user.createdAt, { zone: 'UTC' }).toFormat("yyyy-MM-dd");
                result.innerHTML = `
                <div class="main">
                    <div class="wrapper">
                        <nav class="navbar">
                            <a href="#" class="logo">Users <span id="userName">${user.username}</span></a>
                            <ul>
                                <li><a href="#" class="link delete">Logout</a></li>
                                <li>
                                    <a href="#">
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
                                        <span class="active">${created === undefined ? '02.02.2023' : formattedDate}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="sticky-top flex-2 wrapperData shadow">
                                <h3 class="title">Edit your profile</h3>
                                <form action="" method="put" autocomplete="off">

                                    <div class="group">
                                        <label for="username">Username</label>
                                        <input type="text" placeholder="Username" name="username" value="${user.username}" class="input">
                                    </div>

                                    <div class="group">
                                        <label for="email">Email</label>
                                        <input type="email" placeholder="Email@example.com" name="email" value="${user.email}" class="input">
                                    </div>
                                    
                                    <div class="group">
                                        <label for="Image">Image</label>
                                        <input type="file" name="image" value="" class="input">
                                    </div>

                                    <div class="group">
                                        <button class="button delete text-white">Update profile</button>
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
GetUser()