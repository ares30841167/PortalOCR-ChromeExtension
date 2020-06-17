
window.onload = function() {

    let form = new FormData();
    
    function getDataUrl(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL('image/png');
    }

    function dataURItoBlob(dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);
    
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
    
        return new Blob([ia], {type:mimeString});
    }

    var iframe = document.getElementById("VeriCodePage");
    var elmnt = iframe.contentWindow.document.getElementsByTagName("img")[0];
    const dataURL = getDataUrl(elmnt);
    var veriImg = dataURItoBlob(dataURL);
    var file = new File( [veriImg], 'veriImg.png', { type: 'image/png' } );

    form.append("veriImg",file);

    fetch('https://ar3s.dev/api/v1/portalTools/veriCodeOCR', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: form
    }).then(function(result){
        return result.json();
    }).then(function(json){
        document.getElementById("Txt_VeriCode").value = json['veriCode'];
    });
    
};