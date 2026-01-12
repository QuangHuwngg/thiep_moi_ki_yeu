window.addEventListener("load", function() {
    const doors = document.querySelector(".door-wrap");
    setTimeout(() => {
        doors.classList.add("open");
        setTimeout(() => {
            doors.style.display = "none";
        }, 2800);
    }, 500);
});