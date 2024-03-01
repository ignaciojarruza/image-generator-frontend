import { useState } from "react";

export default function Form() {
  const [image_description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Image Description..."
      />
      <button type="submit">Generate!</button>
    </form>
  );
}
