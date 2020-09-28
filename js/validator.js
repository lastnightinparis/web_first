let form = document.getElementById("form");
let y_value = form.getElementsByClassName("y_value")["y_value"];
let r_value = form.getElementsByClassName("r_value")["r_value"];
let submit_button = document.getElementById("submit_button");
let modal = document.getElementById("myModal");
let x_group = document.getElementsByName("x_group");
let reset_button = document.getElementById("reset_button");
let regExpR = new RegExp("^4\.[1-9]*");
let regExpY = new RegExp("^3\.[1-9]*");
let regExpYNeg = new RegExp("^-5\.[1-9]*");
let default_table = document.querySelector("#result").innerHTML;
submit_button.addEventListener("click", function () {
    if (y_value.value > 3 || y_value.value < -5 || regExpY.test(y_value.value.toString()) || isNaN(y_value.value)
        || regExpYNeg.test(y_value.value.toString()) || regExpR.test(r_value.value.toString()) || r_value.value.toString()[0] === '0' || r_value.value < 1 || r_value.value > 4 || isNaN(r_value.value)) {
        modal.style.display = "block";
        event.preventDefault();
    } else {
        event.preventDefault();
        event.preventDefault();
        let data = new FormData();
        for (i = 0; i < x_group.length; i++) {
            if (x_group[i].checked) {
                data.append('x_group', x_group[i].value);
            }
        }
        data.append('y_value', y_value.value);
        data.append('r_value', r_value.value);
        fetch("php/handler.php", {
            method: 'POST',
            body: data,
        })
            .then(res => res.text())
            .then(table => document.querySelector("#result").innerHTML = table)
            .then(table => localStorage.setItem("table", table));
    }
});
if (window.performance) {
    if (localStorage.getItem("table"))
        document.querySelector("#result").innerHTML = localStorage.getItem("table");
    else {
        document.querySelector("#result").innerHTML = default_table;
    }

}
// $.ajax({
//     type: "POST",
//     url: "php/handler.php",
//     data: data,
//     success: function (msg) {
//         console.log("Прибыли данные: " + msg)
//     }
// })
//}
//}
//);
/*
    made in index.html by jquery
*/

// span.onclick = function () {
//     modal.style.display = "none";
// }
// window.onclick = function (event) {
//     if (event.target === modal)
//         modal.style.display = "none";
// }

reset_button.addEventListener("click", function () {
        fetch("php/reset.php", {
            method: 'POST',
        })
            .then(res => res.text())
            .then(table => document.querySelector("#result").innerHTML = table);
        localStorage.removeItem("table");
        document.querySelector("#result").innerHTML = default_table;
        localStorage.setItem("table", default_table);
    }
);