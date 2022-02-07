let musicas = [
    {
    titulo: 'Guitar Solo', 
    artista:'Arthur ramos',
    src:'musicas/We Ride! - Reed Mathis.mp3',
    img:'imgs/Rock.png'
    },

    {
    titulo: 'Samba', 
    artista:'Luisa almeida',
    src:'musicas/Ella Vater - The Mini Vandals.mp3',
    img:'imgs/Samba.png'
    },

    {
    titulo: 'Jazz of Night', 
    artista:'Desconhecido',
    src:'musicas/A Brand New Start - TrackTribe (1).mp3',
    img:'imgs/Jazz.png'
    }
]


let musica = document.querySelector('audio')
let indexMusica = 0
let play = document.querySelector('.botao-play')
let pause = document.querySelector('.botao-pause')
let duracaoMusica = document.querySelector('.fim')
let img = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')
let anterior = document.querySelector('.anterior')
let proxima = document.querySelector('.proxima')

renderizarMusica(indexMusica)


// Função responsavel por atualizar a barra de progresso e o tempo de duração da musica
function atualizarBarra(){
    let barra = document.querySelector('progress')
    let tempoDecorrido = document.querySelector('.inicio')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
    
}



function segundosParaMinutos (segundos){
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60

    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos+ ':' + campoSegundos
}


function trocarMusica(){
     musica.play()
     pause.style.display = 'block'
     play.style.display = 'none'
}

function pausarMusicar(){
    musica.pause()
    pause.style.display = 'none'
    play.style.display = 'block'
}

anterior.addEventListener('click', ()=>{
    indexMusica--
    if(indexMusica < 0){
        indexMusica = 2
    }
    renderizarMusica(indexMusica)
    
})
proxima.addEventListener('click', ()=>{
    indexMusica++
    if(indexMusica > 2){
        indexMusica = 0
    }
    renderizarMusica(indexMusica)
})

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', ()=>{
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        img.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
    })

}




// Eventos da aplicação
musica.addEventListener('timeupdate', atualizarBarra)
play.addEventListener('click', trocarMusica)
pause.addEventListener('click', pausarMusicar)
