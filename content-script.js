const link = window.location.search.slice(6)
// const jwt = leaky leaky
para.innerHTML = `
  <p> - OR - </p>
  <button id="auto" type="button">Auto Login</button>
  `;
const yeah = document.getElementsByClassName("login-links");
yeah[0].appendChild(para);

document.getElementById("auto").addEventListener("click", () => {
  if (link == null) {
    window.location.replace(
      "https://skcportal.stkevins.vic.edu.au/api/session?jwt="+jwt
    );
  } else {
    window.location.replace(
      "https://skcportal.stkevins.vic.edu.au/api/session?redirect="+link+"&jwt="+jwt
    );
  }
});