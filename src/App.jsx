import { useState } from "react"


function App() {

  const [color, setColor] = useState("lightgray")


  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-content gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl"> 
          
          <button onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}
          >
            White
          </button>

          <button onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >
            Red
          </button>
          
          <button onClick={() => setColor("green")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Green"}}
          >
            Green
          </button>
          
          <button onClick={() => setColor("yellow")} 
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Yellow"}}
          >
            Yellow
          </button>
          
          <button onClick={() => setColor("blue")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Blue"}}
          >
            Blue
          </button>
          
          <button onClick={() => setColor("purple")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Purple"}}
          >
            Purple
          </button>
          
          <button onClick={() => setColor("gray")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Gray"}}
          >
            Gray
          </button>
          
          <button onClick={() => setColor("orange")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orange"}}
          >
            Orange
          </button>
          
          <button onClick={() => setColor("Brown")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "brown"}}
          >
            Brown
          </button>
          
          <button onClick={() => setColor("Turquoise")} 
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "Turquoise"}}
          >
            Turquoise
          </button>

          <button onClick={() => setColor("Violet")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "violet"}}
          >
            Violet
          </button>
          
          <button onClick={() => setColor("Black")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >
            Black
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
