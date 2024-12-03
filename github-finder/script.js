const GITHUB_API = 'https://api.github.com';
let id = "";

document.getElementById('search-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        id = document.getElementById('search-input').value;
        console.log("input id : ", id);
        
        fetchUserProfile(id);
        fetchLatestRepos(id);
    }
})

function fetchUserProfile(id) {
    fetch(`${GITHUB_API}/users/${id}`)
        .then((response) => response.json())
        .then((userData) => {
            if (userData.message === 'Not Found') {
                showError('User not found');
            } else {
                displayUserProfile(userData);
            }
        });
}

function fetchLatestRepos(id) {
    fetch(`${GITHUB_API}/users/${id}/repos`)
    .then((response) => response.json())
    .then((repos) => {
        displayLatestRepos(repos);
    });
}

function displayUserProfile(userData){
    const userProfile = document.querySelector('.user-profile');
    userProfile.firstElementChild.firstElementChild.setAttribute('src', `${userData.avatar_url}`);
    document.querySelector('.view-profile-button').addEventListener('click', () => {
        window.location.href = `https://github.com/${id}`;
    })
}

function displayLatestRepos(repos){
    
}