export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=8c790919d29048321a44d33d4860545f&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };