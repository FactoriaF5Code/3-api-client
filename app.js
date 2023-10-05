document.getElementById("run").addEventListener("click", () => {
    let url = document.getElementById("url").textContent;

    fetch(url)        
        .then(response => response.json())
        .then(data => console.log(data));
});