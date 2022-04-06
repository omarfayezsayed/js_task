// call the api
let main_var = document.querySelector(".main_div");
fetch("https://elrady.co/api/group/1#v")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data[0]);
    for (const val of data) {
      const html = ` <div  class="sub-group" style="background-image: url('https://elrady.co/images/1:9:Default.jpg');">
     <h4>${val.GroupName}</h4>
 </div>`;
      main_var.insertAdjacentHTML("beforeend", html);
    }
  });

let btn_event = document.querySelector(".controllers");

btn_event.addEventListener("click", function () {
 
});
