window.onload = () =>{
    // burger-menu
    document.addEventListener("click", function (e) {
        const targetElement = e.target;
        if (targetElement.closest('.burger')) {
            document.documentElement.classList.toggle('open-menu');
            e.preventDefault();
        }
    })
}

