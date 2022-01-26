if(localStorage.user) {
    document.getElementById('user').value = localStorage.user;
}
if(localStorage.jogador) {
    document.getElementById('jogador').value = localStorage.jogador;
}
if(localStorage.ocupacao) {
    document.getElementById('ocupacao').value = localStorage.ocupacao;
}
if(localStorage.idade) {
    document.getElementById('idade').value = localStorage.idade;
}
if(localStorage.genero) {
    document.getElementById('genero').value = localStorage.genero;
}
if(localStorage.nasc) {
    document.getElementById('nasc').value = localStorage.nasc;
}
if(localStorage.resi) {
    document.getElementById('resi').value = localStorage.resi;
}
if(localStorage.vidanum) {
    document.getElementById('vidanum').value = localStorage.vidanum;
}
if(localStorage.saninum) {
    document.getElementById('saninum').value = localStorage.saninum;
}
if(localStorage.item1) {
    document.getElementById('item1').value = localStorage.item1;
}
if(localStorage.peso1) {
    document.getElementById('peso1').value = localStorage.peso1;
}
if(localStorage.item2) {
    document.getElementById('item2').value = localStorage.item2;
}
if(localStorage.peso2) {
    document.getElementById('peso2').value = localStorage.peso2;
}
if(localStorage.item3) {
    document.getElementById('item3').value = localStorage.item3;
}
if(localStorage.peso3) {
    document.getElementById('peso3').value = localStorage.peso3;
}
if(localStorage.item4) {
    document.getElementById('item4').value = localStorage.item4;
}
if(localStorage.peso4) {
    document.getElementById('peso4').value = localStorage.peso4;
}
if(localStorage.item5) {
    document.getElementById('item5').value = localStorage.item5;
}
if(localStorage.peso5) {
    document.getElementById('peso5').value = localStorage.peso5;
}
if(localStorage.item6) {
    document.getElementById('item6').value = localStorage.item6;
}
if(localStorage.peso6) {
    document.getElementById('peso6').value = localStorage.peso6;
}
if(localStorage.item7) {
    document.getElementById('item7').value = localStorage.item7;
}
if(localStorage.peso7) {
    document.getElementById('peso7').value = localStorage.peso7;
}
if(localStorage.item8) {
    document.getElementById('item8').value = localStorage.item8;
}
if(localStorage.peso8) {
    document.getElementById('peso8').value = localStorage.peso8;
}
if(localStorage.item9) {
    document.getElementById('item9').value = localStorage.item9;
}
if(localStorage.peso9) {
    document.getElementById('peso9').value = localStorage.peso9;
}
if(localStorage.item10) {
    document.getElementById('item10').value = localStorage.item10;
}
if(localStorage.peso10) {
    document.getElementById('peso10').value = localStorage.peso10;
}
if(localStorage.item11) {
    document.getElementById('item11').value = localStorage.item11;
}
if(localStorage.peso11) {
    document.getElementById('peso11').value = localStorage.peso11;
}
if(localStorage.item12) {
    document.getElementById('item12').value = localStorage.item12;
}
if(localStorage.peso12) {
    document.getElementById('peso12').value = localStorage.peso12;
}

var SalvarInfo = function() {
    var user = document.getElementById('user').value;
    var jogador = document.getElementById('jogador').value;
    var ocupacao = document.getElementById('ocupacao').value;
    var idade = document.getElementById('idade').value;
    var genero = document.getElementById('genero').value;
    var nasc = document.getElementById('nasc').value;
    var resi = document.getElementById('resi').value;
    var vidanum = document.getElementById('vidanum').value;
    var saninum = document.getElementById('saninum').value;
    var item1 = document.getElementById('item1').value;
    var peso1 = document.getElementById('peso1').value;
    var item2 = document.getElementById('item2').value;
    var peso2 = document.getElementById('peso2').value;
    var item3 = document.getElementById('item3').value;
    var peso3 = document.getElementById('peso3').value;
    var item4 = document.getElementById('item4').value;
    var peso4 = document.getElementById('peso4').value;
    var item5 = document.getElementById('item5').value;
    var peso5 = document.getElementById('peso5').value;
    var item6 = document.getElementById('item6').value;
    var peso6 = document.getElementById('peso6').value;
    var item7 = document.getElementById('item7').value;
    var peso7 = document.getElementById('peso7').value;
    var item8 = document.getElementById('item8').value;
    var peso8 = document.getElementById('peso8').value;
    var item9 = document.getElementById('item9').value;
    var peso9 = document.getElementById('peso9').value;
    var item10 = document.getElementById('item10').value;
    var peso10 = document.getElementById('peso10').value;
    var item11 = document.getElementById('item11').value;
    var peso11 = document.getElementById('peso11').value;
    var item12 = document.getElementById('item12').value;
    var peso12 = document.getElementById('peso12').value;
    localStorage.setItem('user', user);
    localStorage.setItem('jogador', jogador);
    localStorage.setItem('ocupacao', ocupacao);
    localStorage.setItem('idade', idade);
    localStorage.setItem('genero', genero);
    localStorage.setItem('nasc', nasc);
    localStorage.setItem('resi', resi);
    localStorage.setItem('vidanum', vidanum);
    localStorage.setItem('saninum', saninum);
    localStorage.setItem('item1', item1);
    localStorage.setItem('peso1', peso1);
    localStorage.setItem('item2', item2);
    localStorage.setItem('peso2', peso2);
    localStorage.setItem('item3', item3);
    localStorage.setItem('peso3', peso3);
    localStorage.setItem('item4', item4);
    localStorage.setItem('peso4', peso4);
    localStorage.setItem('item5', item5);
    localStorage.setItem('peso5', peso5);
    localStorage.setItem('item6', item6);
    localStorage.setItem('peso6', peso6);
    localStorage.setItem('item7', item7);
    localStorage.setItem('peso7', peso7);
    localStorage.setItem('item8', item8);
    localStorage.setItem('peso8', peso8);
    localStorage.setItem('item9', item9);
    localStorage.setItem('peso9', peso9);
    localStorage.setItem('item10', item10);
    localStorage.setItem('peso10', peso10);
    localStorage.setItem('item11', item11);
    localStorage.setItem('peso11', peso11);
    localStorage.setItem('item12', item12);
    localStorage.setItem('peso12', peso12);
}

document.onchange = SalvarInfo;

var delete_data1 = document.getElementById('delete_data1')
delete_data1.onclick=function() {
    localStorage.removeItem('item1')
    localStorage.removeItem('peso1')
}
delete_data1.addEventListener('click', function() {
    location.reload()
})
var delete_data2 = document.getElementById('delete_data2')
delete_data2.onclick=function() {
    localStorage.removeItem('item2')
    localStorage.removeItem('peso2')
}
delete_data2.addEventListener('click', function() {
    location.reload()
})
var delete_data3 = document.getElementById('delete_data3')
delete_data3.onclick=function() {
    localStorage.removeItem('item3')
    localStorage.removeItem('peso3')
}
delete_data3.addEventListener('click', function() {
    location.reload()
})
var delete_data4 = document.getElementById('delete_data4')
delete_data4.onclick=function() {
    localStorage.removeItem('item4')
    localStorage.removeItem('peso4')
}
delete_data4.addEventListener('click', function() {
    location.reload()
})
var delete_data5 = document.getElementById('delete_data5')
delete_data5.onclick=function() {
    localStorage.removeItem('item5')
    localStorage.removeItem('peso5')
}
delete_data5.addEventListener('click', function() {
    location.reload()
})
var delete_data6 = document.getElementById('delete_data6')
delete_data6.onclick=function() {
    localStorage.removeItem('item6')
    localStorage.removeItem('peso6')
}
delete_data6.addEventListener('click', function() {
    location.reload()
})
var delete_data7 = document.getElementById('delete_data7')
delete_data7.onclick=function() {
    localStorage.removeItem('item7')
    localStorage.removeItem('peso7')
}
delete_data7.addEventListener('click', function() {
    location.reload()
})
var delete_data8 = document.getElementById('delete_data8')
delete_data8.onclick=function() {
    localStorage.removeItem('item8',)
    localStorage.removeItem('peso8')
}
delete_data8.addEventListener('click', function() {
    location.reload()
})
var delete_data9 = document.getElementById('delete_data9')
delete_data9.onclick=function() {
    localStorage.removeItem('item9')
    localStorage.removeItem('peso9')
}
delete_data9.addEventListener('click', function() {
    location.reload()
})
var delete_data10 = document.getElementById('delete_data10')
delete_data10.onclick=function() {
    localStorage.removeItem('item10')
    localStorage.removeItem('peso10')
}
delete_data10.addEventListener('click', function() {
    location.reload()
})
var delete_data11 = document.getElementById('delete_data11')
delete_data11.onclick=function() {
    localStorage.removeItem('item11')
    localStorage.removeItem('peso11')
}
delete_data11.addEventListener('click', function() {
    location.reload()
})
var delete_data12 = document.getElementById('delete_data12')
delete_data12.onclick=function() {
    localStorage.removeItem('item12')
    localStorage.removeItem('peso12')
}
delete_data12.addEventListener('click', function() {
    location.reload()
})

let photo = document.getElementById('imgPreview');
let fileimg = document.getElementById('myFileInput');

photo.addEventListener('click', () =>  {
    fileimg.click();
});
document.querySelector('#myFileInput').addEventListener('change', function() {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('recent-image', reader.result)
    });

    reader.readAsDataURL(this.files[0]);
    location.reload()
});

document.addEventListener('DOMContentLoaded', () => {
    const recentImageDataUrl = localStorage.getItem('recent-image');

    if (recentImageDataUrl) {
        document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl);
    }

});

function showModal() {
    var element = document.getElementById('modal');
    element.classList.add('show-modal');
}
function closeModal() {
    var element = document.getElementById('modal');
    element.classList.remove('show-modal');
}

btn1.addEventListener("click", () => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn2.addEventListener('click',() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn3.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn4.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn5.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn6.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn7.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn8.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn9.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn10.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn11.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 20) + 1;
    document.getElementById('resultado').innerHTML = random;
})

btn12.addEventListener("click",() => {
    var random = Math.floor(Math.random() * 100) + 1;
    document.getElementById('resultado').innerHTML = random;
})
