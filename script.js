const rootDiv = document.getElementById("cart-list")

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
      rootDiv.innerHTML += `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${element.email}</h5>
        <p class="card-text">${element.username}</p>
        <a href="${element.website}" target="_blank">open website</a>
        <a href="/userData.html?id=${element.id}" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
    });
  })


  
