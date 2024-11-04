window.onload = () =>{
    const options ={
        root: null,
        rootMargin: '0px',
        threshold: .5
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const trans = entry.target;
                console.log(trans);
                trans.classList.add('active')
                observer.unobserve(trans);
            }
        })
    },options)
    document.querySelectorAll('.-trans').forEach(target=>{
        observer.observe(target);
    })
}