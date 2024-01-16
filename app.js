// 
const keyContainers = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display textarea");
// console.log(keyContainers);
// console.log(keyContainers[0]);
// console.log(keyContainers[0].children);

keyContainers.forEach(function(key) {
    key.addEventListener("click", function (e) {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.defaultValue);
        // console.log(e.target.value);
        // console.log(e.target.value.toLowerCase());
        if (!e.target.value) return;
        let keyClicked = e.target.value.toLowerCase();
        textArea.value += keyClicked;
    });
});
