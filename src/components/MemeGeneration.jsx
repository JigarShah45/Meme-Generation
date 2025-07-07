import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import html2canvas from 'html2canvas'

function MemeGeneration() {
  const [memes, setMemes] = useState([])
  const [meme, setMeme] = useState(null)
  const memeRef = useRef(null)

  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
      .then(res => setMemes(res.data.data.memes))
  }, [])

  const generateMeme = () => {
    const randomIndex = Math.floor(Math.random() * memes.length)
    setMeme(memes[randomIndex])
  }

  const downloadMeme = () => {
    html2canvas(memeRef.current).then(canvas => {
      const link = document.createElement('a')
      link.download = 'meme.png'
      link.href = canvas.toDataURL()
      link.click()
    })
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
      <button 
        onClick={generateMeme}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
      >
        🎲 Generate Meme
      </button>

      {meme && (
        <div className="flex flex-col items-center gap-4">
          <div 
            ref={memeRef} 
            className="fade-in bg-white p-3 rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200"
          >
            <img 
              src={meme.url} 
              alt={meme.name} 
              className="w-80 h-auto rounded-lg object-cover"
            />
            <p className="text-black font-bold text-center text-lg mt-3">{meme.name}</p>
          </div>

          <button 
            onClick={downloadMeme}
            className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-400 hover:scale-105 transition-all duration-300"
          >
            📥 Download Meme
          </button>
        </div>
      )}
    </div>
  )
}

export default MemeGeneration
