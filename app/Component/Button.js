"use client";

const Button = () => {
  return (
    <div>
      <button
        onClick={() => console.log("Button Clicked!")}
        className="mt-4 mb-6 px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 ease-in-out shadow-lg"
      >
        Click Here
      </button>
    </div>
  );
};

export default Button;
