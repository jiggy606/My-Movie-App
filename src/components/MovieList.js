import React from 'react'

function MovieList(props) {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='movie'></img>
          <div onClick={() => props.handleFavouritesClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList; 