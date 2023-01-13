import { Link } from "react-router-dom"

function Header(props) {
    return (
        <>
            <Link to="/"><img src="https://cdn6.aptoide.com/imgs/9/9/f/99f4b62f7dc2384bba8fbc97e82ec31f_feature_graphic.jpg" /></Link>
            <br />
            <Link to="/create">Create a Meme</Link>
        </>
    )
}

export default Header