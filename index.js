// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("tyas").value;
  var password = document.getElementById("28april2009").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "tyas" && password === "28april2009") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
      }
