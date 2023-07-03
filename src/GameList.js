import React, { useState, useEffect } from 'react'
import GameItem from './GameItem'

function GameList() {
    const [games, setGames] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5555/games")
            .then(res => res.json())
            .then(games => setGames(games))
    }, [])




  return (
    <section>
        {games.map(game => (
            <GameItem key={game.id} game={game} />
        ))}
    </section>
  )
}

export default GameList