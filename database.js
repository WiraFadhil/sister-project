import { ref, set, onValue } from "firebase/database";

// Referensi ke database
const dbRef = ref(database, "tempat_sampah/");

// Menulis data
set(dbRef, {
  BIN001: {
    status: "Penuh",
    lokasi: "Jakarta",
    harga: 5000,
  },
});

// Membaca data
onValue(dbRef, (snapshot) => {
  console.log(snapshot.val());
});
