function hitung() {
  let sisi = document.getElementById("sisi").value;

  if (sisi == "") {
    alert("di isi dulu");
  }

  let hasil = parseInt(sisi) * 3;
  console.log(hasil);
  document.writeln("Hasilnya adalah" + " " + hasil);
}

function luas() {
  let alas = document.getElementById("alas").value;
  let tinggi = document.getElementById("tinggi").value;

  if (alas == "" || tinggi == "") {
    alert("di isi dulu");
  }

  let hasil = parseInt(alas) * parseInt(tinggi) * 0.5;
  console.log(hasil);
  document.writeln("Hasilnya adalah" + " " + hasil);
}
