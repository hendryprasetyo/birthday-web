function ButtonYes({ children, setTrigger, className }) {
  const addClassname = className ? ` ${className}` : "";
  return (
    <div>
      <button
        className={`bg-purple-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-purple-500 hover:border-blue-500 rounded ${addClassname}`}
        onClick={() => setTrigger(false)}
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonYes;
