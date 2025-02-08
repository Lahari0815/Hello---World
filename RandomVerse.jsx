import { useState } from "react";

function RandomVerse() {
  const [verse, setVerse] = useState("");

  const fetchRandomVerse = async () => {
    try {
      const response = await fetch("https://labs.bible.org/api/?passage=random&type=text");
      const text = await response.text();
      setVerse(text);
    } catch (error) {
      console.error("Error fetching verse:", error);
    }
  };

  return (
    <div>
      <h2>Random Bible Verse</h2> {/* Clear Title */}
      <p>{verse}</p>
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
    </div>
  );
}

export default RandomVerse;
