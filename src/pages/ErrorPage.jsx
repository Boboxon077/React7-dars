import { useRouteError, Link } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()

    if (error.status === 404) {
        return (
            <div className="error-page">
                <h1>{error.statusText}</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
    return (
        <div className="error-page">
            <h1>Something :)</h1>
            <Link to="/">Home</Link>
        </div>
    )

}

export default ErrorPage