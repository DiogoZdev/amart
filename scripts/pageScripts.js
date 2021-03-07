function toggleOverlay(id){
    var over = document.getElementById('info');
    if(over.classList.contains('hidden') == true){
        document.getElementById('info').classList.remove('hidden');
        document.getElementById('info').classList.add('show');

        document.getElementById('info-title').innerHTML = id.innerHTML;

    } else{
        document.getElementById('info').classList.remove('show');
        document.getElementById('info').classList.add('hidden');

        document.getElementById('info-title').innerHTML = "Heey, curious! XD";
    }
}
function copy(id){
    navigator.clipboard.writeText(id.innerHTML);

    alert(`Copiado para a área de transferência: ${id.innerHTML}`);
}

