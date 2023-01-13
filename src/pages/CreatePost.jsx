import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

function CreatePost(props) {
    const [memes, setMemes] = useState([])
    const [form, setForm] = useState({
        image: "",
        topText: "",
        bottomText: ""
    })

    const navigate = useNavigate()

    const getMemes = async () => {
        try {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const info = await res.json()
            // console.log(info.data)
            setMemes(info.data.memes)
        } catch (error) {
            console.error(error)
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        // console.log(`Submitted:`, form)
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form),
            }
            const response = await fetch(`https://memegenerator.herokuapp.com/posts`, requestOptions)
            navigate("/")
        }
        catch (err) {
            console.error(err)
        }
    }
    // console.log(selectedMeme)

    function handleChange(event) {
        // console.log(event.target)
        const userInput = { ...form }
        // console.log(userInput)
        userInput[event.target.name] = event.target.value
        setForm(userInput)
        // setSelectedMeme(event.target.value)
    }
    // console.log(form)

    useEffect(() => {
        getMemes()
    }, [])

    const loaded = () => {
        return (
            <>
                <h2>Create Meme</h2>
                <div className='meme-editor'>
                    <div className='meme-container'>
                        <h1 className='top-text'>{form.topText}</h1>
                        <h1 className='bottom-text'>{form.bottomText}</h1>
                        <img src={form.image} alt="Selected meme" />
                    </div>
                </div>
                <form onSubmit={handleSubmit} onChange={handleChange}>
                    <label htmlFor='image'>Select meme format: </label>
                    <select name='image'>
                        {memes.map((meme, idx) => (
                            <option key={idx} value={meme.url}>{meme.name}</option>
                        ))}
                    </select>
                    <br />
                    <label htmlFor='topText'>Top text: </label>
                    <input type='text' name='topText' value={form.topText} />
                    <br />
                    <label htmlFor='bottomText'>Bottom text: </label>
                    <input type='text' name='bottomText' value={form.bottomText} />
                    <br />
                    <input type='submit' value='Submit to backend' />
                </form>
            </>
        )
    }

    const loading = () => {
        return <h1>Loading. . .</h1>
    }
    return memes && memes.length ? loaded() : loading()
}

export default CreatePost