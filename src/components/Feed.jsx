function Feed(props) {

    const [memes, setMemes] = useState([])

    const getMemes = async () => {
        try {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            console.log(data)

        } catch (error) {
            
        }
    }

    useEffect(() => {
        getMemes()
    }, [])
    return (
        <h2>Feed</h2>
    )
}

export default Feed