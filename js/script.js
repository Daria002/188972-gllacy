      var link = document.querySelector(".feedback-btn");
      var popup = document.querySelector(".modal-feedback");
      var overlay = document.querySelector(".modal-overlay");
      var close = popup.querySelector(".modal-close");
      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=feedback-name]");
      var mail = popup.querySelector("[name=feedback-email]");

      var isStorageSupport = true;
      var storage = "";
  
      try {
        storage = localStorage.getItem("login");
      } catch (err) {
         isStorageSupport = false;
      }
      
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        overlay.classList.add("modal-show");
        if (storage) {
          login.value = storage;
          mail.focus();
    }   else {
        login.focus();
    }
      });
      
      
      close.addEventListener("click", function (evt) {
       evt.preventDefault();
       popup.classList.remove("modal-show");
       overlay.classList.remove("modal-show");
       popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function (evt) {
        if (!login.value || !mail.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        }   else {
          if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        }
      }
      });

        window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });