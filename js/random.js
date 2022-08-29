const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}
const displayUser = users => {
    const usersContainer = document.getElementById('users-container');
    for(const user of users){
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
            <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email} </p>
            <P>Location: ${user.location.city} ${user.location.country}</P>
            <img src="${user.picture.large}" alt="">
            
        `
        usersContainer.appendChild(userDiv);
    }
}

loadUser();