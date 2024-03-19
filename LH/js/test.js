<script>
  document.addEventListener("DOMContentLoaded", function() {
    var languageBtn = document.getElementById("languageBtn");

    
    var currentLanguage = "en";
    var url = window.location.href.toLowerCase();
    if (url.includes("/fr/")) {
      currentLanguage = "fr";
    }

    if (currentLanguage === "fr") {
      languageBtn.href = "/fr";
    } else {
      languageBtn.href = "/en";
    }
  });
</script>