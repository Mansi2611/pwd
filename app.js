// if('ServiceWorker' in navigator){
//     navigator.serviceWorker.register('./sw.js')
//     .then((reg)=>console.log("register",reg))
//     .catch((err)=>console.log("error",err));
// }


window.addEventListener('load', e => {
  
  registerSW(); 
});

async function registerSW() { 
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('./sw.js'); 
    } catch (e) {
      alert('ServiceWorker registration failed. Sorry about that.'); 
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden'); 
  }
}