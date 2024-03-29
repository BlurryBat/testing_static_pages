(function() {
  function startup() {
    const input = document.getElementById("image-input")
    input.addEventListener('change', _ => {
      const reader = new window.FileReader()
      size = input.files[0].size;
      console.log(input.files[0].name); 
      document.getElementById('file-name').innerHTML += input.files[0].name;
      let img = document.createElement('img')
      img.setAttribute("id","theimage")
      reader.readAsDataURL(input.files[0])
      reader.addEventListener('load', _ => {
        img.src=reader.result;
        document.getElementById('body').appendChild(img)
      });
      var canvas = document.createElement("canvas");
      var context = canvas.getContext('2d');
      img.onload = function() {
        shrink_factor = 1
        quality=1
        //img_new.setAttribute("id", "new_img")
        do {
          img_new = document.createElement("img");
          canvas.width = img.width / shrink_factor;
          canvas.height = img.height / shrink_factor;
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          //context.drawImage(img,0,0,img.width,img.height,0,0,100,100);
          //var pixelBuf = context.getImageData(0,0,10,100);
          img_new.src = canvas.toDataURL("image/jpeg", quality);
          document.getElementById('body').appendChild(img_new);
          console.log('size : ' + img_new.src.length / 1024 + 'KB ');
          console.log( img_new.src);
          //document.getElementById('body').appendChild(canvas);
          shrink_factor=shrink_factor*1.2;
          if(quality > 0){
            quality-=.1;
          }
        }
        while(img_new.src.length>100*1024);
        //console.log(img_new.src);

      }

    });
  }
  window.addEventListener('load', startup, false);
})();
