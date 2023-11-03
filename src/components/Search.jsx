import { useRef } from "react"

function Search({setNewUrl}) {
    const searchText = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const query = searchText.current.value
        setNewUrl(query)
        searchText.current.value = ''
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" ref={searchText}/>
        <button>Search</button>
    </form>
  )
}

export default Search