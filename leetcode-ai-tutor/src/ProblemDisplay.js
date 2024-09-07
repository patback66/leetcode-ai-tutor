import { useState, useEffect } from 'react';
import OpenAI from 'openai';

function ProblemDisplay({ selectedDifficulty }) {
  const [problem, setProblem] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      const openai = new OpenAI({
        // ... API key that we'll get from the user
      });

      try {
        const response = await openai.completions.create({
          // ... API parameters for generating a problem based on difficulty
          // Tune the prompt for each setting
        });
        const problemData = response.data.choices[0].text.trim();
        setProblem(problemData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProblem();
  }, [selectedDifficulty]);

  const handleCheckAnswer = () => {
    // we should submit the solution to the ai service and prompt for review
    // request a specific format from the ai service - json response
    // then 
    // Compare userAnswer with the expected output from the problemData
    setIsCorrect(userAnswer === problemData.expectedOutput);
  };

  return (
    // ... rest of the component
  );
}