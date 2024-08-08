const link = window.location.search.slice(6);
// const jwt = leaky leaky
console.log("PAY ATTTENTION")

fetch("myText.txt")
  .then((res) => res.text())
  .then((text) => {
    // do something with "text"
    console.log(text)
    console.log("we made it here!")
   })
  .catch((e) => console.error(e));


// if (link == null) {
//   window.location.replace(
//     "https://skcportal.stkevins.vic.edu.au/api/session?jwt="+jwt
//   );
// } else {
//   window.location.replace(
//     "https://skcportal.stkevins.vic.edu.au/api/session?redirect="+link+"&jwt="+jwt
//   );
// }