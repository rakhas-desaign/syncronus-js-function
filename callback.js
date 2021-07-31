// callback
// sincronous callback
function halo(nama) {
 // templat literal bactick
 alert(`halo, ${nama}`);
};

function tampilkanPesan(callback) {
 const nama = prompt('masukan nama:');
 callback(nama);
};
tampilkanPesan(halo);