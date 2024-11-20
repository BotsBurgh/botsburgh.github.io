var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");

      ctx.lineWidth = 5;
      ctx.strokeStyle = "#FFD700";

      ctx.moveTo(500, 500);
      ctx.lineTo(800, 500);
      ctx.stroke();

      ctx.moveTo(800, 500);
      ctx.lineTo(650, 241);
      ctx.stroke();

      ctx.moveTo(650, 241);
      ctx.lineTo(500, 500);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(650, 414, 173, 0, 2 * Math.PI);
      ctx.stroke();



      function previewFile() {
        const content = document.querySelector(".content");
        const [file] = document.querySelector("input[type=file]").files;
        const reader = new FileReader();

        reader.addEventListener(
          "load",
          () => {
            // this will then display a text file
            content.innerText = reader.result;
          },
          false,
        );

        if (file) {
          reader.readAsText(file);
        }
      }


      var coll = document.getElementsByClassName("collapsible");
      var i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }

        var main = document.getElementById("myCanvas");
        var render = main.getContext("2d");
        main.style.left = "400px";
        main.style.top = "100px";
        main.style.position = "absolute";
