
var success=false;
function pageUpdate() {
   let page1= document.getElementById('page1');
   let page2=document.getElementById('page2')
    if(success){
       page1.classList.remove('active');
       page2.classList.add('active');
    }
    else{
        page2.classList.remove('active');
        page1.classList.add('active');
    }
}
pageUpdate()

function getEmail(){
    document.getElementById('myform').addEventListener('submit',(e)=>{
        e.preventDefault();
        var emails = document.getElementById("email").value;
        var error=document.getElementById('error-message');
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(emails)){
            error.style.display="block"
        }else{
            success=true;
            error.style.display="none"
        pageUpdatedValue(emails);
        }
        
    })
}
getEmail()  
function pageUpdatedValue(email){
    document.getElementById("email-name").innerHTML=email;
    pageUpdate();
}

   document.getElementById('page2-btn').addEventListener('click',()=>{
    success=false
    pageUpdate()
   })
