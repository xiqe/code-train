HTMLDocument.prototype = {
    addClass:(className)=>{
        this.classList.add(className)
    },
    removeClass:(className)=>{
        this.classList.remove(className)
    },
    toggleClass:(className)=>{
        this.classList.toggle(className)
    },
}
