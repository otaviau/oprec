const peserta = [

{

nim:"244117001001",

nama:"Otavia Ulandari",

kelompok:"Kelompok 1",

mentor:"Kak Aisyah",

wa:"https://chat.whatsapp.com/AAAA"

},

{

nim:"244117001002",

nama:"Budi Santoso",

kelompok:"Kelompok 2",

mentor:"Kak Rizky",

wa:"https://chat.whatsapp.com/BBBB"

}

];

function cariPeserta(){

const nim=document.getElementById("nimInput").value.trim();

const hasil=document.getElementById("hasil");

const pesertaDitemukan=peserta.find(p=>p.nim===nim);

if(!pesertaDitemukan){

hasil.innerHTML=`

<div class="not-found">

<h3>❌ NIM tidak ditemukan</h3>

<p>Pastikan NIM yang dimasukkan sudah benar.</p>

</div>

`;

return;

}

hasil.innerHTML=`

<div class="result-card">

<div class="status open">

🎉 Anda berhasil diterima

</div>

<div class="title">

${pesertaDitemukan.nama}

</div>

<div class="result-grid">

    <div class="result-item">
        <div class="result-label">NIM</div>
        <div class="result-value">${pesertaDitemukan.nim}</div>
    </div>

    <div class="result-item">
        <div class="result-label">Kelompok</div>
        <div class="result-value">${pesertaDitemukan.kelompok}</div>
    </div>

    <div class="result-item">
        <div class="result-label">Pembimbing</div>
        <div class="result-value">${pesertaDitemukan.mentor}</div>
    </div>

</div>

<div class="result-buttons">

<a href="${pesertaDitemukan.wa}" class="button" target="_blank">

Gabung Grup WhatsApp

</a>

</div>

</div>

`;

}

document.getElementById("nimInput").addEventListener("keypress",function(e){

if(e.key==="Enter"){

cariPeserta();

}

});