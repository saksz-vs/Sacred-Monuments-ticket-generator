let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose= document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let videoBtn=document.querySelectorAll('.vid-btn');

window.onscroll= () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
                  
});
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
                  
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
                  
});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
                  
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
   
});
var swiper = new Swiper(" .review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPreview: 1,
        },
        768: {
            slidesPreview: 2,
        },
        1024: {
            slidesPreview: 3,
        },
    },
});
document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");

    searchBtn.addEventListener("click", function() {
        toggleSearchBar();
    });

    searchInput.addEventListener("input", function() {
        // Handle search as the user types
        const query = searchInput.value.trim();
        if (query !== "") {
            // Perform client-side search and display results
            performClientSearch(query);
        } else {
            // Clear the search results if the input is empty
            searchResults.innerHTML = "";
        }
    });

    function toggleSearchBar() {
        searchInput.classList.toggle("show-search");
        if (searchInput.classList.contains("show-search")) {
            searchInput.focus();
        }
    }

    function performClientSearch(query) {
        // Simulate a client-side search (replace with your actual content and logic)
        const contentToSearch = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            "Vestibulum nec metus eu nulla porttitor venenatis.",
            "Integer ac nisi nec ex vulputate scelerisque.",
            "Suspendisse nec odio a urna accumsan tristique."
        ];

        const results = contentToSearch.filter(item => item.toLowerCase().includes(query.toLowerCase()));

        // Display the search results
        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        searchResults.innerHTML = "";
        if (results.length === 0) {
            searchResults.innerHTML = "No results found.";
        } else {
            const ul = document.createElement("ul");
            results.forEach(result => {
                const li = document.createElement("li");
                li.textContent = result;
                ul.appendChild(li);
            });
            searchResults.appendChild(ul);
        }
    }
});


