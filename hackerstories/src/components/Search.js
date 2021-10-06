const Search=({onChange})=>{
    return(
        <div>
            <label>Search for stories: </label>
            <input type="text" onChange={onChange}></input>
        </div>
    )
}
export default Search