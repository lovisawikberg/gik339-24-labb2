
const url = 'http://localhost:3000/users';


async function fetchUsers() {

    try { 
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Det blev ett error med status: ${response.status}`);
        }
        const users = await response.json();
        console.log(users);

        const ul = document.createElement('ul');
        ul.classList.add('ulStyle');
        
        users.forEach((user) => {
            const li = document.createElement('li');
            li.classList.add(user.color);
            li.classList.add('liStyle');
            li.innerHTML = `<b>Name: </b> ${user.firstName} ${user.lastName}, <b>Username:</b> ${user.username}`;
            
            ul.append(li);
    });

    document.body.append(ul);
    
    } catch (error) {
        console.error('Ursäkta!!! Vi har ett error:', error);
    }
}

fetchUsers(); 







