import './assets/sass/main.scss'

// Cool Navbar function
const targets = document.querySelectorAll('main, section')
const targetNavLinks = document.querySelectorAll('#nav--link')

console.log(targets)
console.log(targetNavLinks)

function handleIntersection(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target.dataset.index, entry.target)

            targetNavLinks.forEach(link => {
                link.classList.remove('active')
            })

            targetNavLinks[entry.target.dataset.index].classList.add('active')
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '-30%'
});

targets.forEach(target =>{
    observer.observe(target)
})

/************************/
/*The Mobile Menu Button*/
/************************/

let MenuButton = document.querySelector('#mobile-menu-btn')
let CurtainMenuList = document.querySelector('#nav--list')
MenuButton.addEventListener('click', ()=>{
    CurtainMenuList.classList.toggle('mobile-menu')
    MenuButton.classList.toggle('active')
})