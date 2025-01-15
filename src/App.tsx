import "./index.css";

function App() {
  return (
    <div className="flex items-center justify-center w-dvw h-dvh bg-[#D5E1EF]">
      <div className="flex flex-col items-center justify-center w-[320px] h-[500px] bg-white rounded-md">
        <img
          src="/image-qr-code.png"
          className="w-[287px] h-[287px] rounded-md mb-5 mt-7"
          alt="This is a qr code to Frontend mentor"
        />

        <h1 className="font-bold text-2xl items-center justify-center text-black mb-6">
          Improve your front-end skills by building projects
        </h1>

        <h2 className="text-m text-grey mb-[40px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h2>
      </div>
    </div>
  );
}

export default App;
