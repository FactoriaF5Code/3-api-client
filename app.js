document.getElementById("run").addEventListener("click", () => {
    let url = document.getElementById("url").value;

    fetch(url)        
        .then(response => response.json())
        .then(data => console.log(data));
});