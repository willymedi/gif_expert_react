import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"
const GifExpertApp = () => {

    // const categories = ["One Punch", "Samurai X", "Dragon Ball"]
    const [categories, setCategories] = useState(["One Punch"])
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map( (category, i) => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp