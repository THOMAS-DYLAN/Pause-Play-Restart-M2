var dark = true;

var songs = [
   {
      img: "imgs/another img.jfif",
      title: "Another Love",
      artist: "Tom Odell",
      audio: "d69b841f-0202-4edd-a041-ce4667be7dd9.m4a"
   },
   {
      img: "imgs/NF.jpeg",
      title: "Oh Lord",
      artist: "NF",
   },
   {
      img: "imgs/maxresdefault.jpg",
      title: "Good God Almighty",
      artist: "Crwoder",
   },
   {
      img: "imgs/maxresdefault.jpg",
      title: "Good God Almighty",
      artist: "Crwoder",
   },
   {
      img: "imgs/maxresdefault.jpg",
      title: "Good God Almighty",
      artist: "Crwoder",
   },
   {
      img: "imgs/maxresdefault.jpg",
      title: "Good God Almighty",
      artist: "Crwoder",
   }
]

function addElems() {
   for (let i = 0; i < songs.length; i++) {
      if (songs[i].img !== "imgnotfound.png") {
         var a = document.createElement("a");
         if (i < 1) {
            a.href = "./song.html";
         } else {
            a.href = `./song${i}.html`;
         }
         a.class = "songUrl";
         const img = document.createElement("img");
         img.src = songs[i].img;
         var h1 = document.createElement("h1")
         h1.innerText = `${songs[i].title}`;
         var h2 = document.createElement("h2")
         h2.innerText = `${songs[i].artist}`;
         a.append(img, h1, h2);
         $(".music").append(a);
      }
   }
}



addElems()

$(".main").hide();
$(".landing").click(()=>{
   $(".landing").fadeOut(300)
   $(".main").delay(300).fadeIn(700)
})

