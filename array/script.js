// ambil semua element video
const videos = Array.from (document.querySelectorAll('[data-duration]'));

// pilih yang javascript lanjutan
let jsLanjut = videos.filter (video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil duras masing masing video
.map(item => item.dataset.duration)
// ubah durasi menjadi int, ubah menit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})
// jumlahkan semua detik
.reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut /  3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
// simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik`;
const jmlvideo = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pjmlvideo = document.querySelector('.jumlah-video');
pjmlvideo.textContent = `jumlah video ${jmlvideo}`;