var items = document.querySelectorAll('.gallery-items');
var btns = document.querySelectorAll('.gbtn');

btns.forEach(btn => {
    btn.onclick = function (e) {
        var eleId = e.target.getAttribute('data-id');
        var output = document.getElementById(eleId);
        if (!output.classList.contains("show")) {
            items.forEach(item => {
                item.classList.remove('show')
            });
            output.classList.toggle('show');
        }
        if (!btn.classList.contains("active")) {
            btns.forEach(btn => {
                btn.classList.remove('active')
            });
            btn.classList.toggle('active');
        }
    }
});



