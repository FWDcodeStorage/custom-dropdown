import "./App.css";
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

function App() {
  const [room, setRoom] = useState("--Choose Room--");
  const options = ["Frontend", "Backend", "Design"];
  const [open, setOpen] = useState(false);

  return (

    <div className='app w-full flex justify-center items-center mx-auto'>
      
      <div className='select_div w-[300px] h-[500px] bg-[#2b2b2b] px-[2em] py-[4em] border-2 border-[#67ff4f] shadow-md shadow-[#67ff4f6f] rounded-lg cursor-pointer flex flex-col justify-center gap-[.2em]'>

        <p className='text-sm font-light text-gray-500 px-[.5em]'>join room</p>
        <div
          onClick={() => setOpen(!open)}
          className='select w-full p-[.5em] border-2 border-[#67ff4f] shadow-md shadow-[#67ff4f6f] text-gray-500 text-center rounded-md flex justify-between items-center'
        >
          {room}
          <BiSolidDownArrow />
        </div>
        <ul
          className={`w-full  border-2 border-[#67ff4f] shadow-md rounded-md text-gray-500 text-center ${
            open ? "block" : "hidden"
          }`}
        >
          {options.map((option) => (
            <li
              key={option}
              className='bg-[#4f4f4f] p-[.5em] border-b text-gray-400 hover:bg-[#67ff4f6f] hover:text-white'
              onClick={(e) => {
                setRoom(e.target.innerText);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
