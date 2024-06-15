// main.js
async function fetchGitHubData() {
    const url = 'https://api.github.com/users/ogiansouza';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        updateProfile(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function updateProfile(data) {
    document.querySelector('.profile-avatar').src = data.avatar_url;
    document.querySelector('.profile-name').textContent = data.name;
    document.querySelector('.profile-username').textContent = `@${data.login}`;
    document.querySelector('.numbers-item:nth-child(1)').innerHTML = `<h4>Repositórios</h4>${data.public_repos}`;
    document.querySelector('.numbers-item:nth-child(2)').innerHTML = `<h4>Seguidores</h4>${data.followers}`;
    document.querySelector('.numbers-item:nth-child(3)').innerHTML = `<h4>Seguindo</h4>${data.following}`;
    document.querySelector('.profile-link').href = data.html_url;
}

document.addEventListener('DOMContentLoaded', fetchGitHubData);
