(function() {
  function startup() {
    const input = document.getElementById("image-input")
    input.addEventListener('change', _ => {
      const reader = new window.FileReader()
      reader.readAsDataURL(input.files[0])
      reader.addEventListener('load', _ => {
        console.log(reader.result);
        document.getElementById('photo').innerHTML="<img src="+reader.result+">";})


    })
  }
  window.addEventListener('load', startup, false);
})();
