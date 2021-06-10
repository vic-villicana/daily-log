

const navigateTo = url => {
    history.pushState(null, null, url);
    router()
}

const router = async () => {
    const routes = [
        {path:"/", view: () => console.log('viewing dashboard')},
        {path:"/weeks", view: () => console.log('weeks')},
        {path:"/months", view: () => console.log('months')}
    ]


    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path 
        }
    })

    let match = potentialMatches.find(potential => potential.isMatch)


    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    console.log(match)
}

window.addEventListener("popstate", router()) 

document.body.addEventListener("click", e => {
    if(e.target.matches('[data-link]')){
        e.preventDefault()
        
        navigateTo(e.target.href)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    router()
})