

// for(let i=0; i<2; i++){
    
//     if(i==0)
        
//     else
//         bigDiv.style.backgroundColor = "blue";
    
//     let button = document.createElement("button");
//     if(i == 0)
//         button.innerHTML = "Vote for Nixon";
//     else
//         butt
//     for(let j=0; j<1; j++){
//         let pic = document.createElement("img");
//         if(i==0)
//             pic.src = 'Nixon.jpg';
//         else    
//             pic.src = 'George.jpg';
//         pic.style.height = "30vh";
//         pic.style.width = "20vw";
//         bigDiv.append(pic);
//     }
//     page.append(bigDiv);
// }

// document.body.style.margin = "0";









class Nixon{
    page(){
        this.page = document.createElement("div");
        this.page.style.width = "100vw";
        this.page.style.height = "100vh";
        this.page.style.display = "flex";
        this.page.style.justifyContent = "space-evenly";
        this.page.style.margin = "0";
        this.rightSide();
        this.wrongSide();
        document.body.appendChild(this.page);
        return this;
    }
    rightSide(){
        this.bigDiv1 = document.createElement("div");
        this.bigDiv1.style.width = "100vw";
        this.bigDiv1.style.height = "100vh";
        this.bigDiv1.style.display = "flex";
        this.bigDiv1.style.justifyContent = "center";
        this.bigDiv1.style.backgroundColor = "red";
        this.page.append(this.bigDiv1);
    }
    wrongSide(){
        this.bigDiv2 = document.createElement("div");
        this.bigDiv2.style.width = "100vw";
        this.bigDiv2.style.height = "100vh";
        this.bigDiv2.style.display = "flex";
        this.bigDiv2.style.justifyContent = "center";
        this.bigDiv2.style.backgroundColor = "blue";
        this.page.append(this.bigDiv2);
    }
}

let vote = new Nixon();

vote.page();