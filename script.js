class Nixon {
    constructor() {
        this.div1 = document.createElement("div");
        this.div1.style.width = "100px";
        this.div1.style.height = "100px";
        this.div1.style.backgroundColor = "red";
        this.div1.addEventListener("mouseover", this.swapDivs.bind(this));
        document.body.appendChild(this.div1);

        this.div2 = document.createElement("div");
        this.div2.style.width = "100px";
        this.div2.style.height = "100px";
        this.div2.style.backgroundColor = "blue";
        this.div2.addEventListener("mouseover", this.swapDivs.bind(this));
        document.body.appendChild(this.div2);
    }

    swapDivs() {
        let div1Background = this.div1.style.backgroundColor;
        this.div1.style.backgroundColor = this.div2.style.backgroundColor;
        this.div2.style.backgroundColor = div1Background;
    }
}

let nixon = new Nixon();
