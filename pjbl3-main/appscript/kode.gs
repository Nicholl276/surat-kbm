var idDatabase = "12HzJseBOAN2wtwB2mqleZa__c7BFwLBHkRjHSxsVjnc"
var idDevice = "f4fff5e69fb130bd0dbf653c7ad4fc27"
var noHpSiswa = "6281223455598"
function isian(e) {
  // var nama = e.values[1]

  // var nis = e.values[2]
  // var jurusan = e.values[3]
  // var kelas = e.values[4]
  // var keperluan = e.values[5]
  // var jamKeluar = e.values[6]
  // var jamSelesai = e.values[7]
  // var tanggal = e.values[8]
  // var disetujuiOlehGuruPiket = e.values[9]
  // var noHpSiswa = e.values[10]
  Logger.log("All values: " + JSON.stringify(e.values));

  // Ambil dan validasi jumlah siswa
  var dataSiswa = e.values[1]
  if (dataSiswa === "3 Siswa"){
  var JumlahSiswa = parseInt(e.values[1]) || 0; // Ambil angka dari "3 Siswa"
  var siswaData = []; // Array untuk menyimpan data siswa

  // Siswa pertama
  siswaData.push({
    Tingkat: e.values[6] || "Tidak Ada",
    Kelas: e.values[8] || "Tidak Ada",
    Nama: e.values[20] || "Tidak Ada"
  });

  // Siswa kedua (jika ada)
  if (JumlahSiswa >= 2) {
    siswaData.push({
      Tingkat: e.values[21] || "Tidak Ada",
      Kelas: e.values[8] || "Tidak Ada",
      Nama: e.values[14] || "Tidak Ada"
    });
  }

  // Siswa ketiga (jika ada)
  if (JumlahSiswa >= 3) {
    siswaData.push({
      Tingkat: e.values[15] || "Tidak Ada",
      Kelas: e.values[8] || "Tidak Ada", // Periksa jika ini data valid
      Nama: e.values[16] || "Tidak Ada"  // Gunakan `Nama` dari kolom 16
    });
  }

  // Data tambahan
  var Keperluan = e.values[24] || "Tidak Ada";
  var NamaGuru = e.values[28] || "Tidak Ada";
  var NoHP = e.values[29] || "Tidak Ada";
  var Tanggal = e.values[25] || "Tidak Ada";
  var JamAwal = e.values[26]
  var JamAkhir = e.values[27]

  // Logger untuk memastikan output
  Logger.log("JumlahSiswa: " + JumlahSiswa);
  siswaData.forEach((siswa, index) => {
    Logger.log(`Siswa ${index + 1}:`);
    Logger.log(`  Tingkat: ${siswa.Tingkat}`);
    Logger.log(`  Kelas: ${siswa.Kelas}`);
    Logger.log(`  Nama: ${siswa.Nama}`);
  });

  Logger.log("Keperluan: " + Keperluan);
  Logger.log("Nama Guru: " + NamaGuru);
  Logger.log("Nomor HP: " + NoHP);
  var namaSiswa = siswaData.map(function(siswa) {
  return siswa.Nama; // Mengambil nama dari setiap siswa
}).join(", ");
  
  var idPdf = cetakPdf (namaSiswa,siswaData[0].Kelas,siswaData[0].Tingkat,Tanggal,Keperluan,JamAwal,JamAkhir,siswaData[0].Kelas,NamaGuru,NoHP)

  var linkPdf = "https://drive.google.com/uc?id="+idPdf
  kirimFile(NoHP,"cobakk",linkPdf)
 // NomorWaOrtu(ss);
  } else if (dataSiswa === "2 Siswa"){ //asdasdasdsadas
    var JumlahSiswa = parseInt(e.values[1]) || 0; // Ambil angka dari "3 Siswa"
    var siswaData = []; // Array untuk menyimpan data siswa

  // Siswa pertama
  siswaData.push({
    Tingkat: e.values[4] || "Tidak Ada",
    Kelas: e.values[7] || "Tidak Ada",
    Nama: e.values[13] || "Tidak Ada"
  });

  // Siswa kedua (jika ada)
  if (JumlahSiswa >= 2) {
    
    siswaData.push({
      Tingkat: e.values[19] || "Tidak Ada",
      Kelas: e.values[10] || "Tidak Ada",
      Nama: e.values[18] || "Tidak Ada"
    });
  }

  // Siswa ketiga (jika ada)

  // Data tambahan
  var Keperluan = e.values[24] || "Tidak Ada";
  var NamaGuru = e.values[28] || "Tidak Ada";
  var NoHP = e.values[29] || "Tidak Ada";
  var Tanggal = e.values[25] || "Tidak Ada";
  var JamAwal = e.values[26]
  var JamAkhir = e.values[27]

  // Logger untuk memastikan output
  Logger.log("JumlahSiswa: " + JumlahSiswa);
  siswaData.forEach((siswa, index) => {
    Logger.log(`Siswa ${index + 1}:`);
    Logger.log(`  Tingkat: ${siswa.Tingkat}`);
    Logger.log(`  Kelas: ${siswa.Kelas}`);
    Logger.log(`  Nama: ${siswa.Nama}`);
  });

  Logger.log("Keperluan: " + Keperluan);
  Logger.log("Nama Guru: " + NamaGuru);
  Logger.log("Nomor HP: " + NoHP);
  var namaSiswa = siswaData.map(function(siswa) {
  return siswa.Nama; // Mengambil nama dari setiap siswa
}).join(", ");
  
  var idPdf = cetakPdf (namaSiswa,siswaData[0].Kelas,siswaData[0].Tingkat,Tanggal,Keperluan,JamAwal,JamAkhir,siswaData[0].Kelas,NamaGuru,NoHP)

  var linkPdf = "https://drive.google.com/uc?id="+idPdf
  kirimFile(NoHP,"cobakk",linkPdf)

  } else {
    var JumlahSiswa = parseInt(e.values[1]) || 0; // Ambil angka dari "3 Siswa"
  var siswaData = []; // Array untuk menyimpan data siswa

  // Siswa pertama
  siswaData.push({
    Tingkat: e.values[2] || "Tidak Ada",
    Kelas: e.values[3] || "Tidak Ada",
    Nama: e.values[17] || "Tidak Ada"
  });

  // Data tambahan
  var Keperluan = e.values[24] || "Tidak Ada";
  var NamaGuru = e.values[28] || "Tidak Ada";
  var NoHP = e.values[29] || "Tidak Ada";
  var Tanggal = e.values[25] || "Tidak Ada";
  var JamAwal = e.values[26]
  var JamAkhir = e.values[27]

  // Logger untuk memastikan output
  Logger.log("JumlahSiswa: " + JumlahSiswa);
  siswaData.forEach((siswa, index) => {
    Logger.log(`Siswa ${index + 1}:`);
    Logger.log(`  Tingkat: ${siswa.Tingkat}`);
    Logger.log(`  Kelas: ${siswa.Kelas}`);
    Logger.log(`  Nama: ${siswa.Nama}`);
  });

  Logger.log("Keperluan: " + Keperluan);
  Logger.log("Nama Guru: " + NamaGuru);
  Logger.log("Nomor HP: " + NoHP);
  var namaSiswa = siswaData.map(function(siswa) {
  return siswa.Nama; // Mengambil nama dari setiap siswa
}).join(", ");
  
  var idPdf = cetakPdf (namaSiswa,siswaData[0].Kelas,siswaData[0].Tingkat,Tanggal,Keperluan,JamAwal,JamAkhir,siswaData[0].Kelas,NamaGuru,NoHP)

  var linkPdf = "https://drive.google.com/uc?id="+idPdf
  kirimFile(NoHP,"cobakk",linkPdf)
  NomorWaOrtu("Hallo\n Kami Dari Skanilan Tech ingin memberikan surat izin siswa meninggalkan kbm", linkPdf)
 // NomorWaOrtu(ss);
  }
 // var linkDbPresensi = SpreadsheetApp.openById(idDatabase).getSheetByName("Presensi").getRange(2,3).getValue()
//  var linkPresensiKelas = jurnalKelas(jurusan, kelas,linkDbPresensi)
  //presensiSiswa(linkPresensiKelas,nama,nis,kelas,tanggal,keperluan,jamKeluar,jamSelesai,jurusan)
}
function NomorWaOrtu(pesan, link) {
  // Buka spreadsheet dari URL
  var spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/10lVZdJj9kI6a-RJ9HTy1PNvLiKcvgNfbInWlZP91FcY/edit?usp=sharing");
  
  // Pilih sheet bernama "Sheet1"
  var sheet = spreadsheet.getSheetByName("Sheet1");
  
  // Ambil semua data dari sheet
  var data = sheet.getDataRange().getValues();
  
  // Loop melalui data mulai dari baris kedua (baris pertama biasanya header)
  for (let i = 1; i < data.length; i++) {
    let nohp = data[i][0]; // Nomor HP di kolom pertama
    
    // Konversi nomor ke string
    let nohpString = typeof nohp === "number" ? String(nohp) : nohp;
    
    // Bersihkan karakter non-angka
    nohpString = nohpString.replace(/\D/g, "");
    
    // Ubah 62 menjadi 0 jika nomor diawali dengan "62"
    if (nohpString.startsWith("62")) {
      nohpString = "0" + nohpString.slice(2);
    }

    // Validasi panjang nomor (contoh: 10-15 digit)
    if (nohpString.length >= 10 && nohpString.length <= 15) {
      // Kirim file ke nomor yang valid
      kirimFile(nohpString, pesan, link);
      
      // Log pengiriman
      Logger.log("Pesan dikirim ke: " + nohpString);
    } else {
      Logger.log("Nomor tidak valid: " + nohpString);
    }
  }
}


function cetakPdf(nama,jurusan,kelas,tanggal,keperluan,jamKeluar,jamSelesai,jurusan,disetujuiOlehGuruPiket,noHpSiswa){
  //membuat template bukti permintaan
  var template = DriveApp.getFileById("1i3MYpT1J7V6vzIL2fZxIqLZeal9Gk0yOJ5qItIeVQqs")
  //membuka folder untuk simpan bukti permintaan
  var folderSimpanFile = DriveApp.getFolderById("1DwDzo-ANUd0bPqnV_FvKh_9G7B00-oeU")
  //membuat copyan dari template dengan nama dari field yang di isikan pendaftar
  var copyTemplate = template.makeCopy("izin-"+jamKeluar, folderSimpanFile)
  //membuka dokumen tersebut berdasarkan id nya	
  var docPendaftar = DocumentApp.openById(copyTemplate.getId())
  //mendapatkan tag template untuk diganti dengan isian dari google form	
  var bodyDoc = docPendaftar.getBody()

  bodyDoc.replaceText("nama", nama);
  //bodyDoc.replaceText("nis", nis)
  bodyDoc.replaceText("tanggal", tanggal)
  bodyDoc.replaceText("kelas", kelas)
  bodyDoc.replaceText("guruPiket", disetujuiOlehGuruPiket)
  bodyDoc.replaceText("keperluan", keperluan)
  bodyDoc.replaceText("jurusan", jurusan)
  bodyDoc.replaceText("jamKeluar", jamKeluar)
  bodyDoc.replaceText("jamSelesai", jamSelesai)
  bodyDoc.replaceText("no hp", noHpSiswa)
  bodyDoc.replaceText('<<|>>', '');

   //menyimpan dan menutup inputan dari pendaftar 
  docPendaftar.saveAndClose()
  
  //membuka dokumen dan merubahnya menjadi pdf
  var pdf = DocumentApp.openById(copyTemplate.getId()).getAs('application/pdf')
    
  //membuat link pdf nya
  var idPdf = folderSimpanFile.createFile(pdf).getId()
  
  //menghapus bukti permintaan yang berupa doc
  //kita hapus karena kita sudah mempunyai bukti berupa pdf
  copyTemplate.setTrashed(true)

  return idPdf
}

function kirimFile(noHp,pesan,link){  
  var formdata = {
    "device_id" : ""+idDevice,
    "number" : ""+noHp,
    "message" : ""+pesan,
    "file" : ""+link
  }

  var requestOptions = {
    method: 'POST',
    'contentType':'application/json',
    'payload':JSON.stringify(formdata),
    redirect: 'follow'
};

  var response = UrlFetchApp.fetch("https://app.whacenter.com/api/send", requestOptions);
  Logger.log(response)

}

function kirimPesan(noHp,pesan){
  
  var formdata = {
    "device_id" : ""+idDevice,
    "number" : ""+noHp,
    "message" : ""+pesan
  }

  var requestOptions = {
    method: 'POST',
    'contentType':'application/json',
    'payload':JSON.stringify(formdata),
    redirect: 'follow'
};

  var response = UrlFetchApp.fetch("https://app.whacenter.com/api/send", requestOptions);
  Logger.log(response)

}

function jurnalKelas(jurusan,kelas,linkDbPresensi){
  // var jurusan = request.parameter.jurusan;
  // var kelas = request.parameter.kelas;
  var ss = SpreadsheetApp.openByUrl(linkDbPresensi);
  var sheet = ss.getSheetByName("Kelas "+jurusan);
  var listKelas = sheet.getDataRange().getValues();
  var flag = 0;

  var filterKelas = listKelas.filter(function(linkKelas){
    if(linkKelas[1] == kelas){
      flag = 1
      return linkKelas
    }
  })

  return filterKelas[0][3]
}


function presensiSiswa(linkPresensiKelas,nama,nis,kelas,tgl,keperluan,jamKeluar,jamSelesai,jurusan){
  // var tanggal = request.parameter.tanggal;
  // var bulan = request.parameter.bulan;
  // var nis = request.parameter.nis;
  var date = new Date()
  var tanggal = date.getDate()
  var bulan = getBulan(date.getMonth())
  // var androidId = request.parameter.androidId;
  // var namaPegawai = request.parameter.nama;
  // var jenisPresensi = request.parameter.jenisPresensi;
  // var lokasiPresensi = request.parameter.lokasiPresensi;
  // var noWa = request.parameter.noWa;
  // var catatan = request.parameter.catatan;
  var ss = SpreadsheetApp.openByUrl(linkPresensiKelas)
  var sheetPresensi = ss.getSheetByName(bulan);
  var sheetWaliKelas = ss.getSheetByName("Wali Kelas")
  var noWaWalikelas = sheetWaliKelas.getRange(2,3).getValue()
  var noWaBk = sheetWaliKelas.getRange(2,4).getValue()
  // var sheetWaktuAcuan = ss.getSheetByName("Detail Sekolah")
  var kolom = kolomPresensiKehadiran(tanggal);

    var dataPresensi = sheetPresensi.getDataRange().getValues()
    var filterSiswa = dataPresensi.filter(function(siswa,row){
      if(siswa[2] == nis){
          var hari = getDay()
          if(hari == 6 || hari ==0){

          }else{
            sheetPresensi.getRange(row+1, kolom).setValue(jamKeluar).setBackground("blue")
            sheetPresensi.getRange(row+1, kolom+1).setValue(jamSelesai).setBackground("blue")
            sheetPresensi.getRange(row+1, kolom+2).setValue(keperluan)

            var message = "NOTIFIKASI SISTEM IJIN KELUAR SEKOLAH SMKN 9 SEMARANG : \n"
            +"Nama : "+nama+"\n"
            +"NIS : "+nis+"\n"
            +"jurusan : "+jurusan+"\n"
            +"Kelas : "+kelas+"\n"
            +"Tanggal : "+tgl+"\n"
            +"Keperluan : "+keperluan+"\n"
            +"Demikian sebagai informasi, terima kasih"

            kirimPesan(noWaWalikelas,message)
            kirimPesan(noWaBk,message)

          }



      return siswa
    }
  })

}

function kolomPresensiKehadiran(tanggal){
  var column = 0;
  switch(Number(tanggal)){
    case 1 :
      column = 4
      break;
    case 2 :
      column = 7
      break;
    case 3 :
      column = 10
      break;
    case 4 :
      column = 13
      break;
    case 5 :
      column = 16
      break;
    case 6 :
      column = 19
      break;
    case 7 :
      column = 22
      break;
    case 8 :
      column = 25
      break;
    case 9 :
      column = 28
      break;
    case 10 :
      column = 31
      break;
    case 11 :
      column = 34
      break;
    case 12 :
      column = 37
      break;
    case 13 :
      column = 40
      break;
    case 14 :
      column = 43
      break;
    case 15 :
      column = 46
      break;
    case 16 :
      column = 49
      break;
    case 17 :
      column = 52
      break;
    case 18 :
      column = 55
      break;
    case 19 :
      column = 58
      break;
    case 20 :
      column = 61
      break;
    case 21 :
      column = 64
      break;
    case 22 :
      column = 67
      break;
    case 23 :
      column = 78
      break;
    case 24 :
      column = 73
      break;
    case 25 :
      column = 76
      break;
    case 26 :
      column = 79
      break;
    case 27 :
      column = 82
      break;
    case 28 :
      column = 85
      break;
    case 29 :
      column = 88
      break;
    case 30 :
      column = 91
      break;
    case 31 :
      column = 94
      break;
  }

  return column
}

function getBulan(angkaBulan){
  var namaBulan = ""
  switch(angkaBulan){
    case 0 :
      namaBulan = "JANUARI"
      break
    case 1 :
      namaBulan = "FEBRUARI"
      break
    case 2 :
      namaBulan = "MARET"
      break
    case 3 :
      namaBulan = "APRIL"
      break
    case 4 :
      namaBulan = "MEI"
      break
    case 5 :
      namaBulan = "JUNI"
      break
    case 6 :
      namaBulan = "JULI"
      break
    case 7 :
      namaBulan = "AGUSTUS"
      break
    case 8 :
      namaBulan = "SEPTEMBER"
      break
    case 9 :
      namaBulan = "OKTOBER"
      break
    case 10 :
      namaBulan = "NOVEMBER"
      break
    case 11 :
      namaBulan = "DESEMBER"
      break
  }
  return namaBulan
}

function getDay(){
  var date = new Date().getDay()
  return date
}

//fungsi yang digunakan untuk mengirim pesan whatsapp via whacenter
function kirimPesan(noHp,pesan){
    var formdata = {
    "device_id" : "f4fff5e69fb130bd0dbf653c7ad4fc27",
    "number" : ""+noHp,
    "message" : ""+pesan
  }

  var requestOptions = {
    method: 'POST',
    'contentType':'application/json',
    'payload':JSON.stringify(formdata),
    redirect: 'follow'
};

  var response = UrlFetchApp.fetch("https://app.whacenter.com/api/send", requestOptions);
  Logger.log(response)

}
