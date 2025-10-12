let items = document.querySelectorAll(".item");

items.forEach((el) => {
    el.onmouseover = () => {
        let color = el.getAttribute("data-color");
        document.body.style.backgroundColor = color;
    };

    el.onmouseout = () => {
        document.body.style.backgroundColor = "";
    };
});


