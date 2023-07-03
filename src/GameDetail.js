import React, { useState, useEffect } from 'react'

function GameDetail({ gameId }) {
    const [game, setGame] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:5555/games/${gameId}`)
        .then(response => response.json())
        .then(game => setGame(game))
    }, [gameId]);


if (!game) return <h2>Loading game data...</h2>





  return (
    <div>
        <h2>{game.title}</h2>
        <p>Genre: {game.genre}</p>
        <h4>Reviews</h4>
        {game.reviews.map(review =>(
            <div>
            <h5> {review.user.name}</h5>
            <p>Score: {review.score}</p>
            <p>Comment: {review.comment}</p>
            </div>
        ))}


    </div>
  )
}

export default GameDetail