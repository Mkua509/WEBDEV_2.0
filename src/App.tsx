import "./index.css";

function App() {
  return (
    <div className="flex items-center justify-center w-dvw h-dvh bg-[#D5E1EF]">
      <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 w-min">
        <img
          src="image-qr-code.png"
          className=" min-w-[287px] h-[287px] rounded-2xl "
          alt="This is a qr code to Frontend mentor"
        />

        <h1 className="font-bold text-[22px] text-center text-black mt-[28px]">
          Improve your front-end skills by building projects
        </h1>

        <h2 className="text-m text-[#6D747C] mb-[40px] mt-[22px] text-center">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h2>
      </div>
    </div>
  );
}

export default App;
