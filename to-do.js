
const box_value=document.getElementById("input__box");
const tbody=document.getElementById("yapacaklarım-tablosu");
const form=document.getElementById("form");
const clearAll=document.querySelector(".clearAll");
input__add.addEventListener("click",e=>{
    e.preventDefault();
    const girilen=box_value.value;
     tbody.innerHTML +=`<ul class="eleman" >
                        <ul class="inner">
                        <li><div>${girilen}</div></li>
                        <div class="icons">
             <button class="icon1" id="garbage">
             <i class="fas fa-trash-alt"></i>
            </button>
            <button class="icon2" id="check">
           <i class="far fa-check-square"></i>
             </button></div></ul>
             
    </ul>`
    
    
    form.reset()

})
tbody.addEventListener("click",(e)=>{
    if(e.target.className === "fas fa-trash-alt")
    {e.target.closest("ul").remove();
}});
 tbody.addEventListener("click",e=>{
   if(e.target.className === "far fa-check-square"){
       console.log("aeg");
        if(e.target.closest("li").firstChild.style.textDecoration != "line-through"){
            e.target.closest("li").firstChild.style.textDecoration = "line-through";
            e.target.closest("li").firstChild.style.color = "bla";
        }
        else{
            e.target.closest("li").firstChild.style.textDecoration = "none";
            e.target.closest("li").firstChild.style.color = "red";
        }
   }
    });

clearAll.addEventListener("click", (e) => {
    
          if (confirm('Hepsini siliyorum emin misin?')){
            tbody.innerHTML = "";
            
        }
      });