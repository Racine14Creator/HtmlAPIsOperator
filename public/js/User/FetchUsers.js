
function SelectUsers() {
    let result = document.getElementById("result")
    let output = ""

    fetch(`${urlAPI}/users`, { method: "GET", Accept: "application/json" })
        .then((res) => {
            res.json().then((data) => {
                if (data.length > 0) {
                    output += `
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Profile</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                    `;

                    data.forEach((user) => {
                        // Use Luxon to format the date
                        const formattedDate = luxon.DateTime.fromISO(user.createdAt, { zone: 'UTC' }).toFormat("yyyy-MM-dd");
                        output += `
                        <tr key="${user._id}">
                            <td>${user.username}</td>
                            <td>${user.email}</td>
                            <td>
                                <img src="${user.profile === undefined ? './public/images/man.jpg' : user.profile}" alt="profile" class="avatar">
                            </td>
                            <td>
                                <span class="active">${formattedDate}</span>
                            </td>
                            <td>
                                <div class="buttons">
                                    <a href="user.html?Get=${user._id}" class="view">View</a>
                                    <a href="delete.html?Get=${user._id}" class="delete">Delete</a>
                                </div>
                            </td>
                        </tr>
                        `;
                    });

                    output += `
                        </tbody>
                    </table>
                    `;
                } else {
                    output = '<p>No data found</p>';
                }
                result.innerHTML = output;
            });
        })
        .catch(error => console.log(error));
}

let init = async () => {
    await SelectUsers()
        .then(() => {
            Delete()
        })
}

function Delete() {
    const myKeyValue = window.location.search

    const UrlParams = new URLSearchParams(myKeyValue)

    const urlGetUser = UrlParams.get('delete')
    console.log(urlGetUser)

}
init()
