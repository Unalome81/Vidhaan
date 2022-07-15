function onClickHandler(e2) {
    var el = window._protected_reference = document.createElement("INPUT");
    el.type = "file";
    el.accept = "file_extension";
    el.multiple = "multiple"; 
    
    el.addEventListener('change', function(ev2) {
    
      if (el.files.length) {
        document.getElementById('out').src = URL.createObjectURL(el.files[0]);
      }
  
  
      new Promise(function(resolve) {
        setTimeout(function() { console.log(el.files); resolve(); }, 1000);
      })
      .then(function() {
        el = window._protected_reference = undefined;
      });
  
    });
  
    el.click();
  }
  