  
      const firebaseConfig = {
    apiKey: "AIzaSyAjUbjHDSfo21X5b4n45IEgdjdQT8f5AUo",
    authDomain: "about-me-d33d7.firebaseapp.com",
    databaseURL: "https://about-me-d33d7-default-rtdb.firebaseio.com",
    projectId: "about-me-d33d7",
    storageBucket: "about-me-d33d7.firebasestorage.app",
    messagingSenderId: "130438277271",
    appId: "1:130438277271:web:b3821811da336a328421d2",
    measurementId: "G-QE7DMNRK6E"
  };

    function toggleMode() {
      document.body.classList.toggle("dark");
    }

    // Scroll reveal animation
    window.addEventListener("scroll", function() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    });

    // Lightbox (Full Image View)
    function openLightbox(src) {
      document.getElementById("lightbox").style.display = "flex";
      document.getElementById("lightbox-img").src = src;
    }

    function closeLightbox() {
      document.getElementById("lightbox").style.display = "none";
    }