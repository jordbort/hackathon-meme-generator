import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

function CreatePost(props) {
    const [memes, setMemes] = useState([])

    const getMemes = async () => {
        try {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const info = await res.json()
            console.log(info.data)
            setMemes(info.data.memes)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMemes()
    }, [])

    const loaded = () => {
        return (
            <h2>Create Meme</h2>            // memes.map((meme, idx) => (
            //     <div key={idx}>
            //         <Link to={`/create`}><img src={meme.url} /></Link>
            //         <h3> {meme.name}</h3>
            //     </div>
            // ))
        )
    }

    const loading = () => {
        <div>Loading. . .</div>
    }
    return memes ? loaded() : loading()
}

export default CreatePost