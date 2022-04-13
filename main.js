let main_var = document.querySelector(".main_div");
const put_html = function (val) {
  const html = ` <div  class="sub-group" style="background-image: url('https://elrady.co/images/1:9:Default.jpg');">
  <h4>${val.GroupName}</h4>
</div>`;
  main_var.insertAdjacentHTML("beforeend", html);
};

// call the api

async function call_api() {
  const response = await fetch("https://elrady.co/api/group/1#v");
  const data = await response.json();
  console.log(data[0].GroupName);

  for (const val of data) {
    put_html(val);
  }
}
call_api();

const btn_toggle = document.querySelector(".controllers");
const dark_mood = document.querySelector("#app");
btn_toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  dark_mood.classList.toggle("dark");
});
