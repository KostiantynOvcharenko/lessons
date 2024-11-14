window.onload = () =>{
    console.log(screen.width);
    // burger-menu
    document.addEventListener("click", function (e) {
        const targetElement = e.target;
        if (targetElement.closest('.icon-menu')) {
            document.documentElement.classList.toggle('open-menu');
            e.preventDefault();
        }
    })
    //=================================================
    const options ={
        root: null,
        rootMargin: '0px',
        threshold: .5
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const trans = entry.target;
                trans.classList.add('active')
                observer.unobserve(trans);
            }
        })
    },options)
    document.querySelectorAll('.-trans').forEach(target=>{
        observer.observe(target);
        if(screen.width > 1023){
        }
        else{
            // target.documentElement.classList.remove('-trans');
        }
    })
}

