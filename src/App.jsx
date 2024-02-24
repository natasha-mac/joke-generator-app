import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 30rem;
  height: auto;
  margin: 10rem auto;
  padding: 2rem;
  text-align: center;
  color: #8f00ff;
  background-color: #ffe615;
  border-radius: 15px;

  @media (max-width: 760px) {
    width: 90%;
    margin: 5rem auto;
    padding: 1rem;
  }
`;

const StyledButton = styled.button`
  background-color: #8f00ff;
  color: white;
  padding: 0.5rem 1rem;
  border: solid #e5c3ff 1px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #7a00da;
    border: solid #8f00ff 1px;
  }
`;

function Joke() {
  const [jokes, setJokes] = useState([]);

  const FetchJokes = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJokes(data);
  };

  useEffect(() => {
    FetchJokes();
  }, []);

  return (
    <StyledDiv>
      <h1>Joke of the Day!</h1>
      <h3>{jokes.setup}</h3>
      <h3>{jokes.punchline}</h3>
      <p>Joke ID #{jokes.id}</p>
      <StyledButton onClick={FetchJokes}>Get New Joke</StyledButton>
    </StyledDiv>
  );
}

export default Joke;
