import { useState } from 'react';

function DifficultySelection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the selected difficulty here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Difficulty:
        <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
          <option value="">Select</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <button type="submit">Generate Problem</button>
    </form>
  );
}

export default DifficultySelection;