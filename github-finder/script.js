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
        .then((data) => {
            if (data.message === 'Not Found') {
                showError('User not found');
            } else {
                displayUserProfile(data);
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

function displayUserProfile(data){
    const userProfile = document.querySelector('.user-profile');
    userProfile.firstElementChild.firstElementChild.setAttribute('src', `${data.avatar_url}`)
    
}

function displayLatestRepos(repos){

}