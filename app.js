import { useState } from "react";

function App() {

  const API = "https://mern-3-lq2v.onrender.com";

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const getQuestion = async () => {

    const res = await fetch(API + "/api/interview/question");

    const data = await res.json();

    setQuestion(data.question);
  };

  const submitAnswer = async () => {

    const res = await fetch(API + "/api/interview/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question,
        answer
      })
    });

    const data = await res.json();

    setResult(data.result);
  };

  return (
    <div style={{padding:"40px",fontFamily:"Arial"}}>

      <h1>AI Interview Practice</h1>

      <button onClick={getQuestion}>
        Generate Question
      </button>

      <p style={{marginTop:"20px"}}>{question}</p>

      <textarea
        placeholder="Write your answer"
        value={answer}
        onChange={(e)=>setAnswer(e.target.value)}
        style={{width:"400px",height:"100px"}}
      />

      <br/><br/>

      <button onClick={submitAnswer}>
        Submit Answer
      </button>

      <p style={{marginTop:"20px"}}>
        {result}
      </p>

    </div>
  );
}

export default App;
