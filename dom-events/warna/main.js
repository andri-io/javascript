// const h1 = document.querySelector ('h1');
const tombol = document.querySelector ('#Tubahwarna');


tombol.addEventListener('click',function(){
    document.body.classList.toggle('merah-muda')
});
const tAcakWarna = document.createElement ('button');
const teksTombol = document.createTextNode ('Acak Warna');

tAcakWarna.append(teksTombol);
tAcakWarna.setAttribute ('type','button');

tombol.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r =Math.round(Math.random() * 255 +1);
    const g =Math.round(Math.random() * 255 +1);
    const b =Math.round(Math.random() * 255 +1);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});


const sMerah = document.querySelector ('input[name=sMerah]');
const sHijau = document.querySelector ('input[name=sHijau]');
const sBiru = document.querySelector ('input[name=sBiru]');


sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    console.log(sMerah.value);
     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    
     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

document.body.addEventListener ('mousemove',function(event){
    // console.log (event.clientX);
    console.log (window.innerWidth)
})