
let container = document.querySelector(".container");
let content = document.querySelector(".content");
let header = document.querySelector(".header");

getData();
function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let arr = new Set();
      data.forEach((response) => {
        arr.add(response.userId);
      });
      arr.forEach((userId) => {
        let users =document.createElement("div");
        users.className = "users";
        let h1 = document.createElement("h2");
        h1.textContent = `User ${userId}`;
        users.appendChild(h1);


        header.appendChild(users);
        let button = document.createElement("button");
        button.textContent = "Get Posts";   
        button.className = "btn";
        button.addEventListener("click", () => {
          getPosts(userId);
        });
        users.appendChild(button);

      });

        function getPosts(userId) {
          let output = "";
          data.forEach((response) => {
            if (response.userId === userId) {
              output += `
                  <div class="post">
                  <h2> ${response.id}</h2>
                      <h3>${response.title}</h3>
                      <p>${response.body}</p>
                  </div>
              `;
            }
          });
          content.innerHTML = output;
        }
    });
}
