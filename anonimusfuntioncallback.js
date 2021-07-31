
// funtion anonimus callback

function tampilkanPesan(callback) {
 const nama = prompt('masukan nama:');
 callback(nama);
};

// ini juga jalan 
// tampilkanPesan(nama => {
//  alert(`halo, ${nama}`);
// });

// atau ini jalan 
// hayer order function
tampilkanPesan(nama => alert(`halo, ${nama}`));

