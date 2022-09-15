addEventListener('load', (event) => {
    var url_string = location.href; 
    var url = new URL(url_string);
    var c = url.searchParams.get("id");
    fetch(`https://jsonplaceholder.typicode.com/users/${c}/`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        alert("ds")
    })


});
