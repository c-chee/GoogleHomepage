
// Waits for pg to load and calls functions
document.addEventListener('DOMContentLoaded', function () {

    const isImagePage = window.location.pathname.includes('googleImages.html');
    const settingButton = document.getElementById('setting-button');
    const settingMenu = document.getElementById('setting-menu');

    if (isImagePage) {
        googleImageFunc();
    } 
    else {
        googleSearchFunc();
    }

    // Settings menu pop-up and close
    if (settingButton && settingMenu) {
        settingButton.addEventListener('click', function () {
            settingMenu.classList.toggle('visible');
            settingMenu.classList.toggle('hidden');
        });
    }
    //closes settigns of you click anywhere else no the screen
    document.addEventListener('click', function (e) {
        if (!settingButton.contains(e.target) && !settingMenu.contains(e.target)) {
            settingMenu.classList.remove('visible');
            settingMenu.classList.add('hidden');
        }
    });


});

function googleSearchFunc() {
    // Calls the search bar and search button from html
    const searchTextInput = document.getElementById('searchBar');
    const googleSearchButton = document.getElementById('googleSearch');

    // --- Search ---
    // Redirects to a google search withh inputed text
    function search() {
        const redirect = encodeURIComponent(searchTextInput.value.trim()); //makes sure url doesnt break from spaces

        //fixes empyty searchess
        if (redirect) {
            window.location.href = `https://www.google.com/search?q=${redirect}`;
        }
    }

    // --- Google Search Button ---
    googleSearchButton.addEventListener('click', function (event) {
        event.preventDefault(); // stops form from submitting/reloading page
        search();
    });

    // When user presses Enter in the search box
    searchTextInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // stops form from submitting
            search();
        }
    });
}

function googleImageFunc() {
    // Calls the search bar and search button from html
    const searchTextInput = document.getElementById('searchBar');
    const googleSearchButton = document.getElementById('googleSearch');

    // --- Search ---
    // Redirects to a google search withh inputed text
    function search() {
        const redirect = encodeURIComponent(searchTextInput.value.trim()); //makes sure url doesnt break from spaces

        //fixes empyty searchess
        if (redirect) {
            window.location.href = `https://www.google.com/search?tbm=isch&q=${redirect}`;
        }
    }

    // --- Google Search Button ---
    googleSearchButton.addEventListener('click', function (event) {
        event.preventDefault(); // stops form from submitting/reloading page
        search();
    });

    // When user presses Enter in the search box
    searchTextInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // stops form from submitting
            search();
        }
    });
}


