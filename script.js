document.getElementById("viewMovieBtn").addEventListener("click", async function() {
    // Esconde o botão
    this.style.display = "none";

    // Preenche os elementos com os dados do filme
    document.getElementById("movieTitle").innerText = dados.Title;
    document.getElementById("movieRuntime").innerText = `Duração: ${dados.Runtime}`;
    
    // Exibe a imagem do cartaz
    const moviePoster = document.getElementById("moviePoster");
    moviePoster.src = dados.Poster;
    moviePoster.style.display = "block"; // Exibe a imagem
});
