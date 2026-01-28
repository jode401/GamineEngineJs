

const body = document.querySelector('body')
let div2 = document.createElement('div')
class Screen {

    static instanceExists = false
    constructor(h, w, c = 'blue', sh, sw) {
        this.h = h
        this.w = w
        this.c = c
        this.sh = sh
        this.sw = sw
        this.rendered = false
        if (Screen.instanceExists) {
            throw new Error('Only one Screen instance is allowed')
        }
        Screen.instanceExists = true
    }

    sub() {
        body.append(div2)
        for (let i = 0; i < this.sh * this.sw; i++) {
            let div = document.createElement('div')
            div.style.backgroundColor = `${this.c}`
            div.style.border = 'red 2px solid'
            div.style.height = `${this.h / this.sh}px`
            div.style.width = `${this.w / this.sw}px`

            div2.style.height = `${this.h}px`
            div2.style.backgroundColor = `${this.c}`
            div2.style.width = `${this.w}px`
            div2.style.display = 'grid'
            div2.style.gridTemplateColumns = `repeat(${this.sh},1fr)`
            div2.style.gridTemplateRows = `repeat(${this.sw},1fr)`
            div2.append(div)
        }

    }
}
