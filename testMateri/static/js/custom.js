// landing Page
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

//Button SignIn SignUp Navigasi Bar
$(".btn-signIn").hover(
    function() {
      $(this).css('background-color', '#213555');
      $(this).css('color', '#d8c4b6'); // saat mouse masuk
    },
    function() {
      $(this).css('background-color', '#f5efe7');
      $(this).css('color', '#213555'); // saat mouse keluar (reset ke warna asli)
    }
  ); 

  $(".btn-signUp").hover(
    function() {
      $(this).css('background-color', '#f5efe7');
      $(this).css('color', '#213555'); // saat mouse masuk
    },
    function() {
      $(this).css('background-color', '#213555');
      $(this).css('color', '#d8c4b6'); // saat mouse keluar (reset ke warna asli)
    }
  ); 

        //Counter Students
        $(document).ready(function(){
            let countNum = 200;
              $({countNum: $('#counter1').text()}).animate({countNum: 200}, {
                  duration: 2000, 
                  easing: 'linear',
                  step: function() {
                      $('#counter1').text(Math.floor(this.countNum));
                  },
                  complete: function() {
                      $('#counter1').text(countNum);
                  }
              });
          });
          
          //Counter Mentor
          $(document).ready(function(){
            let countNum = 10;
            $({countNum: $('#counter2').text()}).animate({countNum: 10}, {
                duration: 2000,
                easing : 'linear',
                step: function() {
                    $('#counter2').text(Math.floor(this.countNum));
                },
                complete: function() {
                    $('#counter2').text(countNum);
                }
            });
        });
    
        //Counter Class
        $(document).ready(function(){
          let countNum = 6;
          $({countNum: $('#counter3').text()}).animate({countNum: 6}, {
              duration: 2000,
              easing : 'linear',
              step: function() {
                  $('#counter3').text(Math.floor(this.countNum));
              },
              complete: function() {
                  $('#counter3').text(countNum);
              }
          });
      });
    
      // Set waktu hitung mundur (contoh: 24 jam = 86400 detik)
      let duration = 86400; // 24 jam dalam detik
    
      let countdownTimer = setInterval(function() {
        // Hitung jam, menit, dan detik dari durasi
        let hours = Math.floor(duration / 3600); // Hitung jam
        let minutes = Math.floor((duration % 3600) / 60); // Hitung menit
        let seconds = duration % 60; // Hitung detik
    
        // Format jam, menit, dan detik agar selalu tampil 2 digit
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
        // Tampilkan hasil dalam format 24h 60m 60s
        $("#countdown").text(hours + "h " + minutes + "m " + seconds + "s");
    
        // Jika durasi habis, hentikan timer
        if (duration <= 0) {
          clearInterval(countdownTimer);
          $("#countdown").text("EXPIRED");
        }
    
        duration--; // Kurangi waktu setiap detik
      }, 1000);
    