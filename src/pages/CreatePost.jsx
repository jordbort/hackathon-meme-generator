import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

function CreatePost(props) {
    const [memes, setMemes] = useState([])
    const [selectedMeme, setSelectedMeme] = useState(null)
    // const [form, setForm] = useState()

    const navigate = useNavigate()

    const getMemes = async () => {
        try {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const info = await res.json()
            // console.log(info.data)
            setMemes(info.data.memes)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        console.log(selectedMeme)
        // navigate(`/`)
    }
    console.log(selectedMeme)

    function handleChange(event) {
        // console.log(event.target.value)
        setSelectedMeme(event.target.value)
    }

    useEffect(() => {
        getMemes()
    }, [])

    const loaded = () => {
        return (
            <>
                <h2>Create Meme</h2>
                <form onSubmit={handleSubmit}>
                <label htmlFor='memes'>Select meme format: </label>
                <select name='memes' onChange={handleChange}>
                    {memes.map((meme, idx) => (
                        <option key={idx} value={meme.url}>{meme.name}</option>
                    ))}
                </select>
                <input type='submit' value='Submit to backend' />
                </form>
                <h1>Create meme</h1>
                <div className='meme-editor'>
                    <div className='meme-container'>
                        <h1 className='top-text'>Top Text</h1>
                        <h1 className='bottom-text'>Bottom Text</h1>
                        <img src={selectedMeme} alt="Selected meme" />
                    </div>
                </div>
            </>
        )
    }

    const loading = () => {
        return <h1>Loading. . .</h1>
    }
    return memes && memes.length ? loaded() : loading()
}

export default CreatePost