const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

document.addEventListener("input", ()=>{
	const searchTerm = searchInput.ariaValueMax.toLowerCase();

	if(searchTerm === ''){
		resultPlaylist.classList.add("hidden");
		resultsArtist.classList.remove("hidden");
		return;
	}
});