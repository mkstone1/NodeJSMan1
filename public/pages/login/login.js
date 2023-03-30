document.getElementById("loginButton").onclick = login;

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("pw").value;

  console.log(password === "test" && username ==="test");
  if (password === "test") {
    location.replace("/")
    localStorage.setItem("admin", "true")

  }
  else{
    console.log("wrong pw");
    const errorDiv = document.getElementById("errorDiv");
    const errorText = document.getElementById("errorText");
    errorText.innerText = "Wrong username or password";
    errorDiv.removeAttribute("hidden");
 

  }
}

