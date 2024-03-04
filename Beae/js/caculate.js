<div id="total-min">Counting...</div>
<script>
    function countReadTime(totalText) {
        var wordsPerMinute = 300;
        var minutes = totalText / wordsPerMinute;
        var roundedMinutes = Math.floor(minutes);
        var seconds = Math.round((minutes - roundedMinutes) * 60);
        return { minutes: roundedMinutes, seconds: seconds };
    }

    document.addEventListener('DOMContentLoaded', function () {   
        var totalText = document.body.innerText.split(/\s+/).length;
        var readTime = countReadTime(totalText);
        var readTimeString = readTime.minutes + " MIN " + readTime.seconds + " SECOND" + " READ";
        document.getElementById("total-min").innerHTML = readTimeString;
    });
</script>

