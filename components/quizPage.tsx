"use client";
import { quiz } from "@/utils/data";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Confettis from "./confetti";

const QuizPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const router = useRouter();

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const [username, setUsername] = useState("");

  //   Select and check answer
  const onAnswerSelected = (answer: any, idx: any) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 10,
          correctAnswers: prev.correctAnswers + 1,
        }
        : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Asegúrate de que 'name' y 'results.score' estén definidos aquí
    const name = username;
    const score = result.score;

    try {
      const res = await fetch(`${process.env.URL}/api/results`, {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, score }), // incluye 'name' y 'score' en el cuerpo de la solicitud
      });
      if (res.ok) {
        console.log("ok");
        router.push("/results");
        router.refresh()
        console.log(res);
      } else {
        console.log("error");
      }
    } catch (error) {
      // maneja la excepción aquí
      console.log("error");
    }
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-7">
      <div className="items-center flex flex-col">
        <h2 className="text-4xl font-black text-white">ChampionsTrivia</h2>
      </div>
      <div className="items-center w-[90%] md:w-96 justify-center  shadow-2xl shadow-black ">
        {!showResult ? (
          <div className="flex flex-col justify-center bg-slate-100 rounded-md p-5 gap-3  items-center z-10">
            <h3 className="border-b border-sky-400">
              Pregunta: {activeQuestion + 1}
              <span>/{questions.length}</span>
            </h3>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">{questions[activeQuestion].question}</h3>
              {answers.map((answer: any, idx: any) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`${selectedAnswerIndex === idx
                      ? "bg-orange-400 flex hover:bg-orange-500 text-white p-2 px-4 rounded-md cursor-pointer border border-gray-300"
                      : " text-slate-900 px-4   hover:bg-slate-200 cursor-pointer border border-gray-400"
                    } list-none  p-2 rounded-md`}>
                  <span>{answer}</span>
                </li>
              ))}
            </div>

            {checked ? (
              <button
                onClick={nextQuestion}
                className=" w-56 flex items-center justify-center rounded-md bg-sky-900 p-2 text-slate-50 border-2 border-sky-400 hover:bg-sky-800">
                {activeQuestion === question.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled
                className="w-56 text-center items-center justify-center rounded-md bg-gray-400 p-2 text-slate-50 border-2 border-gray-400 hover:bg-gray-500 cursor-not-allowed">
                {" "}
                {activeQuestion === question.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
            <>
              <div className="flex flex-col justify-center bg-slate-100 rounded-md p-5 gap-3 items-center shadow-2xl shadow-black">
                <div className="flex flex-col justify-center bg-slate-100 rounded-md p-5 gap-3 items-center">
                  <Confettis  />
                  <h3 className="text-2xl font-black">Resultado</h3>
                  <p className="text-xl flex flex-col items-center justify-center">
                    Puntaje:{" "}
                    <span className="from-black text-3xl">{result.score}</span>
                  </p>
                  <p>
                    Respuestas correctas:{" "}
                    <span className="font-bold">{result.correctAnswers}</span>
                  </p>
                  <p>
                    Respuestas Incorrectas:{" "}
                    <span className="font-bold">{result.wrongAnswers}</span>
                  </p>
                </div>

                <form
                  onSubmit={onSubmit}
                  className="flex flex-col gap-2 justify-center items-center">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-56 rounded-md bg-slate-900 p-2 text-slate-50 border-2 border-sky-400 hover:bg-sky-800 placeholder:text-center text-center"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />

                  <button className="w-56 rounded-md bg-sky-900 p-2 text-slate-50 border-2 border-sky-400 hover:bg-sky-800">
                    ENVIAR
                  </button>
                </form>
              </div>
            </>

        )}
      </div>
    </div>
  );
};

export default QuizPage;
