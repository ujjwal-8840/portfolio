function downloadResume(){
  document.querySelector("downloadResume")
    
    const link = document.createElement("a");
    link.href = "Resume_tcs.pdf"; 
    link.download = "ujjwal_resume.pdf"; 
    link.click();
  
}
 document.querySelector('.home').addEventListener('click', () => {
    document.querySelector('.middle').scrollIntoView({
      behavior: 'smooth'
    });
  });
document.querySelector('.skill').addEventListener('click',()=>{
    document.querySelector('.work').scrollIntoView({
        behavior:"smooth"
    });
});
document.querySelector('.port').addEventListener('click',()=>{
    document.querySelector('.folio').scrollIntoView({
        behavior:"smooth"
    });
});
document.querySelector('.cont').addEventListener('click',()=>{
    document.querySelector('.co').scrollIntoView({
        behavior:"smooth"
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn-1").addEventListener("click", () => {
    window.location.href =
      "mailto:ujjwals6901@gmail.com?subject=Let's%20Talk%20-%20Portfolio&body=Hi%20Ujjwal,%0A%0AI%20visited%20your%20portfolio...";
  });
});
