import { useParams } from "react-router"
import { useState } from 'react'
import { useEffect } from "react"
import CreatePost from "../pages/CreatePost"
import '../index.css'

function Feed(props) {

    const [posts, setPosts] = useState([])

    const { id } = useParams()

    const getPosts = async () => {
        try {
            const res = await fetch(`https://intense-forest-10566.herokuapp.com/posts`)
            const info = await res.json()
            console.log(info)
            setPosts(info)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    },[])

    return (
        <div className='meme-editor'>
                    <div className='meme-container'>
                        {posts.map(post => {
                            return (
                                <>
                                <img src={post.image} />
                                <h1 className='top-text'>{post.topText}</h1>
                                </>
                            )
                        })}
                    </div>
                </div>
    )
}

export default Feed