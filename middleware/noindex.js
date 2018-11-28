export default function ({params,route,redirect}) {
    if(route.fullPath=="/index.html"){
        return redirect('/')
    }
    
}