const drawResult = (text) => {
    document.getElementById("result").innerHTML = text;
};



document.getElementById("run").addEventListener("click", () => {
    let url = document.getElementById("url").value;

    fetch(url)        
        .then(response => response.json())
        .then(data => JSON.stringify(data))
        .then(data => drawResult(data));
});