/*eslint-disable */
function recarga() {
  setTimeout(function () {
    window.location.reload();
  }, 880);
}
//const API_URL = "http://localhost:3003/v1/api/";
const API_URL =
  "https://restapicommerceproyectonode-production.up.railway.app/v1/api/";

function toHome() {
  this.$router.push("/");
}

module.exports = { recarga, toHome, API_URL };
