let button=document.querySelectorAll(".btns")
for(x of button){
    x.addEventListener("click",function(){
      document.querySelector(".screen").innerHTML +=this.innerHTML
      if(this.innerHTML=="ac"){
          document.querySelector(".screen").innerHTML=""
      }else if(this.innerHTML=="c"){
         let b= document.querySelector(".screen").innerHTML.slice(0,-1)
         b=b.slice(0,-1)
         document.querySelector(".screen").innerHTML=b;
      }else if(this.innerHTML=="="){
          let l=document.querySelector(".screen").innerHTML;
          let n=l.slice(0,-1);
          let z=eval(n);
          document.querySelector(".screen").innerHTML=z;
       }
    })
}                                                                                    