import React from "react";

interface InputBarProps {
  currentMessage: string;
  setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputBar: React.FC<InputBarProps> = ({ currentMessage, setCurrentMessage, onSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center p-4 border-t">
      <input
          type="text"
          value={currentMessage}
          onChange={handleChange}
          placeholder="Ask your sales assistant..."
          className="text-black w-full px-4 py-2 mr-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
};

export default InputBar;
