/*eslint-disable */
function recarga() {
  debugger;
  setTimeout(function () {
    window.location.reload();
  }, 880);
}

const API_URL = "https://rpalrodcommerceapi.onrender.com/v1/api/";

function toHome(action) {
  debugger;
  setTimeout(function () {
    action;
  }, 880);
}

module.exports = { recarga, toHome, API_URL };
