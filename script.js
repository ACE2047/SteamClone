// function login() {
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;
//     fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({email: email, password: password})
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.status === 'success') {
//             localStorage.setItem('user_id', data.user_id); // Store user_id in localStorage
//             window.location.href = 'games.html'; // Redirect to games page
//         } else {
//             console.error(data.message); // Handle errors, such as login failure
//         }
//     });
// }

// function login() {
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;
//     fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({email: email, password: password})
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.status === 'success') {
//             console.log("Login successful, redirecting...");
//             localStorage.setItem('user_id', data.user_id); // Save user_id if needed for session management
//             window.location.href = 'library.html'; // Redirect to library page
//         } else {
//             console.log("Login failed: " + data.message); // Log failure and show an error message to the user
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert("Login failed, please try again."); // Inform the user that login failed
//     });
// }

// function login() {
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;
//     fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({email: email, password: password})
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         if (data.status === 'success') {
//             localStorage.setItem('user_id', data.user_id); // Saving user_id to use later
//             window.location.href = 'library.html'; // Redirect if login is successful
//         } else {
//             alert("Login failed, please try again."); // Alert the user
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert("Login failed, please try again."); // Handle network errors
//     });
// }







// function login() {
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;
//     // Using the full URL to ensure we hit the Flask backend correctly
//     fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({email: email, password: password})
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         if (data.status === 'success') {
//             localStorage.setItem('user_id', data.user_id); // Saving user_id to use later
//             window.location.href = 'library.html'; // Redirect if login is successful
//         } else {
//             alert("Login failed, please try again."); // Alert the user
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert("Login failed, please try again."); // Handle network errors
//     });
// }

// function register() {
//     const name = document.getElementById('regName').value;
//     const email = document.getElementById('regEmail').value;
//     const password = document.getElementById('regPassword').value;
//     const age = document.getElementById('regAge').value;
//     fetch('http://localhost:5000/register', {  // Specify the complete URL
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({name: name, email: email, password: password, age: age})
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }

// function logout() {
//     console.log('Logging out...');
//     localStorage.removeItem('user_id'); // Optional: Clean up local storage
//     window.location.href = 'index.html'; // Redirect to the login page
// }

// function fetchGames() {
//     fetch('/games')
//     .then(response => response.json())
//     .then(games => {
//         const gamesList = document.getElementById('gamesList');
//         games.forEach(game => {
//             const gameElement = document.createElement('div');
//             gameElement.innerHTML = `
//                 <h3>${game.title}</h3>
//                 <p>Genre: ${game.genre}</p>
//                 <p>Publisher: ${game.publisher}</p>
//                 <p>Age Rating: ${game.ageRating}</p>
//                 <button onclick="addToWishlist(${game.gameID})">Add to Wishlist</button>
//             `;
//             gamesList.appendChild(gameElement);
//         });
//     });
// }
// window.onload = fetchGames;

// function addToWishlist(gameID) {
//     const userID = localStorage.getItem('user_id');
//     fetch('/add-to-wishlist', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({user_id: userID, game_id: gameID})
//     })
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'success') {
            localStorage.setItem('user_id', data.user_id);
            window.location.href = 'games.html'; // Redirect to games.html after successful login
        } else {
            alert("Login failed, please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Login failed, please try again.");
    });
}

function register() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const age = document.getElementById('regAge').value;
    fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, email: email, password: password, age: age})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'success') {
            alert("Registration successful. Please login.");
        } else {
            alert("Registration failed. " + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}

function logout() {
    console.log('Logging out...');
    localStorage.removeItem('user_id');
    window.location.href = 'index.html'; // Redirect to the login page
}

// function fetchGames() {
//     fetch('http://localhost:5000/games')
//     .then(response => response.json())
//     .then(games => {
//         const gamesList = document.getElementById('gamesList');
//         games.forEach(game => {
//             const gameElement = document.createElement('div');
//             gameElement.innerHTML = `
//                 <h3>${game.title}</h3>
//                 <p>Genre: ${game.genre}</p>
//                 <p>Publisher: ${game.publisher}</p>
//                 <p>Age Rating: ${game.ageRating}</p>
//                 <button onclick="addToWishlist(${game.gameID})">Add to Wishlist</button>
//             `;
//             gamesList.appendChild(gameElement);
//         });
//     });
// }
// window.onload = fetchGames;




// function fetchGames() {
//     fetch('http://localhost:5000/games')
//     .then(response => response.json())
//     .then(games => {
//         const gamesList = document.getElementById('gamesList');
//         games.forEach(game => {
//             const gameElement = document.createElement('div');
//             gameElement.innerHTML = `
//                 <h3>${game.title}</h3>
//                 <p>Genre: ${game.genre}</p>
//                 <p>Publisher: ${game.publisher}</p>
//                 <p>Age Rating: ${game.ageRating}</p>
//                 <button onclick="addToWishlist(${game.gameID})">Add to Wishlist</button>
//             `;
//             gamesList.appendChild(gameElement);
//         });
//     }).catch(error => {
//         console.error('Failed to fetch games:', error);
//     });
// }

// function fetchGames() {
//     console.log("Fetching games from server...");
//     fetch('http://localhost:5000/games')
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Failed to fetch games from server.');
//         }
//     })
//     .then(games => {
//         console.log("Games fetched successfully:", games);
//         const gamesList = document.getElementById('gamesList');
//         games.forEach(game => {
//             const gameElement = document.createElement('div');
//             gameElement.innerHTML = `
//                 <h3>${game.title}</h3>
//                 <p>Genre: ${game.genre}</p>
//                 <p>Publisher: ${game.publisher}</p>
//                 <p>Age Rating: ${game.ageRating}</p>
//                 <button onclick="addToWishlist(${game.gameID})">Add to Wishlist</button>
//             `;
//             gamesList.appendChild(gameElement);
//         });
//     })
//     .catch(error => {
//         console.error('Failed to fetch games:', error);
//         alert('Failed to load games. Please check the console for more details.');
//     });
// }
// window.onload = fetchGames;



// function fetchGames() {
//     console.log("Fetching games from server...");
//     fetch('http://localhost:5000/games')
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Failed to fetch games from server.');
//         }
//     })
//     .then(games => {
//         console.log("Games fetched successfully:", games);
//         const gamesList = document.getElementById('gamesList');
//         games.forEach(game => {
//             const gameElement = document.createElement('div');
//             gameElement.innerHTML = `
//                 <h3>${game.title}</h3>
//                 <p>Genre: ${game.genre}</p>
//                 <p>Publisher: ${game.publisher}</p>
//                 <p>Age Rating: ${game.ageRating}</p>
//                 <button onclick="addToWishlist(${game.gameID})">Add to Wishlist</button>
//             `;
//             gamesList.appendChild(gameElement);
//         });
//     })
//     .catch(error => {
//         console.error('Failed to fetch games:', error);
//         alert('Failed to load games. Please check the console for more details.');
//     });
// }

function fetchGames() {
    console.log("Fetching games from server...");
    fetch('http://localhost:5000/games')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(games => {
        console.log("Games fetched successfully:", games);
        const gamesList = document.getElementById('gamesList');
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.className = 'game-item'; // Add class for styling
            gameElement.innerHTML = `
                <h3>${game.title}</h3>
                <p>Genre: ${game.genre}</p>
                <p>Publisher: ${game.publisher}</p>
                <p>Age Rating: ${game.ageRating}</p>
                <button onclick="addToWishlist(${game.gameID})">Add to Wishlist</button>
            `;
            gamesList.appendChild(gameElement);
        });
    })
    .catch(error => {
        console.error('Error while fetching games:', error);
        alert('Failed to load games. Please check the console for more details.');
    });
}







function addToWishlist(gameID) {
    const userID = localStorage.getItem('user_id');
    fetch('http://localhost:5000/add-to-wishlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id: userID, game_id: gameID})
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'success') {
            alert('Game added to wishlist!');
        } else {
            alert('Failed to add game to wishlist. ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}

function loadGames() {
    fetch('http://localhost:5000/games')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(games => {
        const gamesList = document.getElementById('gamesList');
        gamesList.innerHTML = '';
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.className = 'game-entry';
            gameElement.innerHTML = `
                <h3>${game.title}</h3>
                <p>Genre: ${game.genre}</p>
                <p>Publisher: ${game.publisher}</p>
                <p>Age Rating: ${game.ageRating}</p>
                <button onclick="addToWishlist(${game.gameID})">Add to Wishlist</button>
            `;
            gamesList.appendChild(gameElement);
        });
    })
    .catch(error => {
        console.error('Failed to fetch games:', error);
        alert('Failed to load games. Please check the console for more details.');
    });
}



// gameElement.innerHTML = `
//     <div onclick="showGameDetails(${game.gameID})">
//         <h3>${game.title}</h3>
//         <p>Genre: ${game.genre}</p>
//         <p>Publisher: ${game.publisher}</p>
//         <p>Age Rating: ${game.ageRating}</p>
//     </div>
// `;
