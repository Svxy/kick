let user = "SneakyDev";

async function update() {
  axios
    .post("https://api.kickalerts.live/api/v1/proxy/viewcount", {
      username: user,
    })
    .then(
      (response) => {
        console.log(`%cResponse Data:\n${response.data}\n\nSuccessfully retrieved API data.`, "color: red; font-size: 16px;");
        if (response.data.count) {
          document.getElementById("count").innerHTML = response.data.count;
        }
      },
      (error) => {
        console.log(error);
      }
    );
}

setInterval(update, 15000);
update();
