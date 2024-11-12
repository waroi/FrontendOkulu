// 'daniel' sınıfına sahip öğeyi bul
const danielElement = document.getElementById('daniel');
const danielCElement = document.getElementById('daniel-container');
const stopendaalElement = document.getElementById('stopendaal');
const stopendaalCElement = document.getElementById('stopendaal-container');
const loaderElement = document.getElementById('loader');
const photoElement = document.getElementById('daniel-photo');
const headerElement = document.querySelector('header');
// Öğeyi kontrol et, varsa animasyonu başlat
if (danielElement) {
    // Başlangıç animasyonu (yukarıdan aşağıya doğru belirme)
    danielElement.classList.add('daniel');
    // 1 saniye sonra zıplama animasyonunu başlat        danielElement.classList.add('bounce');
    setTimeout(() => {
        danielElement.classList.add('animate');
    }, 100);
    setTimeout(() => {
        stopendaalElement.classList.add('stopendaal');
        stopendaalElement.classList.add('animate');
    }, 500);
    setTimeout(()=> {
        danielCElement.classList.add('bounce');
    },1000);
    setTimeout(()=> {
        stopendaalCElement.classList.add('bounce');
    },1400);
    setTimeout(()=> {
        loaderElement.classList.add('animate');
        danielElement.classList.add('font-transition');
        stopendaalElement.classList.add('font-transition');
        photoElement.classList.add('opacity');
    },2000);
    setTimeout(() => {
        headerElement.classList.add('animate');
    }, 3000)
    
    
}
