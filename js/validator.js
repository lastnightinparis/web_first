let form = document.getElementById("form");
let y_value = form.getElementsByClassName("y_value")["y_value"];
let r_value = form.getElementsByClassName("r_value")["r_value"];
let submit_button = document.getElementById("submit_button");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let x_group = document.getElementsByName("x_group");
let reset_button = document.getElementById("reset_button");
console.log(x_group);
submit_button.addEventListener("click", function () {
        if (y_value.value > 3 || y_value.value < -5 || isNaN(y_value.value) || r_value.value > 4 || r_value.value < 1 || isNaN(r_value.value)) {
            modal.style.display = "block";
            event.preventDefault();
        } else {
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
                .then(table => console.log(table));
        }
    }
);

/*
    Realised in index.html by jquery
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
    }
);