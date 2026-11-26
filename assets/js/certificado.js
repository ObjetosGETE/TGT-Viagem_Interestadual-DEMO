var fundo = new Image();
fundo.src = "assets/img/certificado.png";

function criaCertificado(nome){
    var certificado = document.getElementById("certificado");   
    ctx = certificado.getContext("2d");
    ctx.drawImage(fundo,0,0);
    //nome do aluno
    ctx.font = "bolder 70px sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = '#1A468B'; 
      
    ctx.fillText(nome.toUpperCase(),140,350); 
     //_globCertificado = certificado;
     downloadImg(certificado, nome);
}

function downloadImg(cert,nome){
    let img = cert.toDataURL('png',1.0);

    let a = document.createElement('a');
    a.href = img;
    a.download = "certificado "+nome.toUpperCase()+".png";
    a.target = "_new";
    a.click();
}
