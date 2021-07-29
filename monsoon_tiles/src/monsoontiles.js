let grd = document.getElementById("grid")
let chld = document.getElementsByClassName("grid-item")
class MoonsoonGrid{
    constructor(gridElement, gridChildElements, marginPx){
        this.grid = gridElement
        this.children = gridChildElements
        this.margin = marginPx
        this.colums = 0
        this.setColumns()
        this.setMargins()
        //console.log(gridElement.getBoundingClientRect().width+" | "+this.children.length)
    }
    setColumns(){
        this.colums = parseInt((this.grid.getBoundingClientRect().width / this.children[0].getBoundingClientRect().width),10)
    }
    getColumns(){
        this.setColumns()
        return this.colums
    }
    setMargins(){
        for(let cc1 = 0; cc1 < this.children.length / this.colums; cc1++){
            let heightCoEfficent = 0;
            // alert(cc1 +"/"+this.children.length / this.colums)
            for(let cc2 = 0; cc2 < this.colums; cc2++){
                alert(cc1)
            }
        }
    }
}

let x = new MoonsoonGrid(grd,chld,20)