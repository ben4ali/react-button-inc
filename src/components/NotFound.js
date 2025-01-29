import { Link } from "react-router-dom"

export const NotFound = () => {
    return(
        <div className="notFound">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    )
}