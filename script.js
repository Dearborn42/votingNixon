class Nixon {
constructor() {
        this.page = document.createElement('div');
        this.page.style.width = "100%";
        this.page.style.height = "100%";
        this.page.style.display = "flex";
        this.page.style.justifyContent = "space-evenly";


        this.img1 = document.createElement('img');
        this.img1.src = "Nixon.jpg";
        this.img1.style.width = "128px";
        this.img1.style.height = "128px";
        

        this.img2 = document.createElement('img');
        this.img2.src = "George.jpg";
        this.img2.style.width = "128px";
        this.img2.style.height = "128px";


        this.button1 = document.createElement('button');
        this.button1.style.width = "128px";
        this.button1.style.height = "128px";
        this.button1.innerHTML = "Vote for Nixon";
        this.button1.onclick = () => {
            alert("Good job!");
        }

        this.button2 = document.createElement('button');
        this.button2.style.width = "128px";
        this.button2.style.height = "128px";
        this.button2.innerHTML = "Vote for McGovern";
        


        this.div1 = document.createElement("div");
        this.div1.style.width = "50vw";
        this.div1.style.height = "100vh";
        this.div1.style.transition = "all 0.75s ease-in-out";
        this.div1.style.backgroundColor = "red";
        this.div1.append(this.img1);
        this.div1.append(this.button1);
        this.page.appendChild(this.div1).addEventListener("mouseover", function(){
            if(this.style.backgroundColor === "blue"){
                let div1Background = nixon.div2.style.backgroundColor;
                nixon.div2.style.backgroundColor = this.style.backgroundColor;
                this.style.backgroundColor = div1Background;
                nixon.div2.removeChild(nixon.img1);
                nixon.div2.append(nixon.img2);
                nixon.div1.append(nixon.img1);
                nixon.div2.removeChild(nixon.button1);
                nixon.div2.append(nixon.button2);
                nixon.div1.append(nixon.button1);
                
            }
        });

        this.div2 = document.createElement("div");
        this.div2.style.width = "50vw";
        this.div2.style.height = "100vh";
        this.div2.style.transition = "all 0.75s ease-in-out";
        this.div2.style.backgroundColor = "blue";
        this.div2.append(this.img2);
        this.div2.append(this.button2);
        this.page.appendChild(this.div2).addEventListener("mouseover", function(){
            if(this.style.backgroundColor === "blue"){
                let div1Background = nixon.div1.style.backgroundColor;
                nixon.div1.style.backgroundColor = this.style.backgroundColor;
                this.style.backgroundColor = div1Background;
                nixon.div1.removeChild(nixon.img1);
                nixon.div1.append(nixon.img2);
                nixon.div2.append(nixon.img1);
                nixon.div1.removeChild(nixon.button1);
                nixon.div1.append(nixon.button2);
                nixon.div2.append(nixon.button1);
            }
        });


        document.body.appendChild(this.page);
    }
}


window.onload = () => {alert("Vote for your favored candidate");}


let nixon = new Nixon();