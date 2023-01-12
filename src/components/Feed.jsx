import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Feed(props) {

    const [memes, setMemes] = useState([])

    const getMemes = async () => {
        try {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            console.log(data)
            setMemes(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMemes()
    }, [])

    const loaded = () => {
        return memes.map((meme, idx) => (
            <div>
                <img src={meme.url} />
                <h3> {meme.name}</h3>
            </div>
        ))
    }

    const loading = () => {

    }
    return (
        <>
        
        </>
    )
}

export default Feed