function showSearchBox() {
    const searchBox = document.querySelector(".search-box");
    searchBox.classList.toggle("active");
}

document.getElementById("btn").addEventListener("click", showSearchBox)