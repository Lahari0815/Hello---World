import { useState } from "react";

function SpecificVerse() {
  const [verse, setVerse] = useState("");

  const fetchSpecificVerse = async () => {
    try {
      const response = await fetch("https://labs.bible.org/api/?passage=John%203:16&type=text");
      const text = await response.text();
      setVerse(text);
    } catch (error) {
      console.error("Error fetching verse:", error);
    }
  };

  return (
    <div>
      <h2>Specific Bible Verse (John 3:16)</h2>
      <button onClick={fetchSpecificVerse}>Get John 3:16</button>
      <p>{verse}</p>
    </div>
  );
}

export default SpecificVerse;
