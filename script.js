function showSearchBox() {
    document.getElementById("searchInput").classList.toggle("hidden");
    document.getElementById("searchBtn").classList.toggle("hidden");
}

document.getElementById("btn").addEventListener("click", showSearchBox);
