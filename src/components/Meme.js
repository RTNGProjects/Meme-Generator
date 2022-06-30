import React from "react"
import data from "../data"

export default function Meme(){
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(data)
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange (event) {
        // const {name, value} = event.target **You can destructure these items if you'd like, make sure to update them below in this function.**
        setMeme(prevState => ( { 
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }

    return (
        <main className="form-container">
            <div className="form">
                <input 
                    type="text" 
                    className="form-input" 
                    name="topText"
                    onChange={handleChange}
                    placeholder="Top Text" 
                />
                <input 
                    type="text" 
                    className="form-input" 
                    name="bottomText"
                    onChange={handleChange}
                    placeholder="Bottom Text"
                />
                <button className="submit-btn" onClick={getMemeImage}> Get a new meme image 🖼</button>
            </div> 
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}