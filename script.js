document.getElementById("formPendaftaran").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("pesan").innerHTML =
"✅ Pendaftaran berhasil dikirim! Admin akan menghubungi Anda.";

this.reset();

});
