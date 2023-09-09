import React, {useEffect, useState} from 'react';
import {SketchOutlined} from '@ant-design/icons';
import {motion} from 'framer-motion';
import Confetti from "./confetti";
import {Button, Card, Modal} from "antd";
import '../App.css';

const initialGrid = Array.from({length: 8}, () => Array(8).fill(null));
const diamondRow = Math.floor(Math.random() * 8);
const diamondCol = Math.floor(Math.random() * 8);
initialGrid[diamondRow][diamondCol] = 'diamond';
console.log(diamondRow, diamondCol);

const getColor = (row, col) => {
    const distance = Math.abs(row - diamondRow) + Math.abs(col - diamondCol);
    const colors = ['#FF0000', '#FF6600', '#FFCC00', '#FFFF00', '#99FF33', '#33FF66', '#00FFCC', '#0099FF'];
    return colors[Math.min(distance, colors.length - 1)];
};

function Game() {
    const [found, setFound] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [wrongAttempts, setWrongAttempts] = useState(0);
    const [score, setScore] = useState(1000);

    useEffect(() => {
        let timer;
        if (gameStarted && startTime) {
            timer = setInterval(() => {
                // Directly calculate the updated score inside setInterval
                const newElapsedTime = new Date().getTime() - startTime;
                const newScore = (score => score  - (newElapsedTime / 1000) * 2)
                setScore(newScore);
                setElapsedTime(newElapsedTime);
                console.log("score", newScore, "wrongAttempts", wrongAttempts, newElapsedTime / 1000);
            }, 200);
        }
        return () => clearInterval(timer);
    }, [gameStarted, startTime]);  // No `score` and `wrongAttempts` as dependencies


    const startGame = () => {
        setStartTime(new Date().getTime());
        setGameStarted(true);
    };
    const handleClick = (row, col) => {
        setScore(score => score - 40);  // use functional update form
        console.log("row", row, "col", col, "diamondRow", diamondRow, "diamondCol", diamondCol, "found", found, "gameStarted", gameStarted);
        if (!gameStarted || (found && initialGrid[row][col])) return;

        const newGrid = [...initialGrid];
        newGrid[row][col] = row === diamondRow && col === diamondCol ? 'diamond' : getColor(row, col);


        if (row === diamondRow && col === diamondCol) {
            setFound(true);
            Modal.success({
                // when press ok refresh the page
                onOk() {
                    window.location.reload();
                },
                title: 'Congratulations',
                content: `You found the diamond in ${(elapsedTime / 1000).toFixed(2)} seconds! \n Your score is ${(score).toFixed(2)} points`,
            });
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Find the Diamond!</h1>
            <div className={'timer-score'}>
                {gameStarted && !found && <Card style={{ minWidth: "15rem", display: 'center', justifyContent: "center"}}><h3>Time: {(elapsedTime / 1000).toFixed(2)}s</h3></Card>}
                <Button style={{margin: 35}} type="primary" size={"large"} onClick={startGame} disabled={gameStarted && !found}>
                    Start Game
                </Button>
                {gameStarted && !found && <Card style={{ minWidth: "15rem", display: 'center', justifyContent: "center"}}><h3>Score: {(score).toFixed(2)} points</h3></Card>}
            </div>

            {found && <Confetti/>}
            <div>
                {initialGrid.map((row, i) => (
                    <div style={{display: 'flex'}}>
                        {row.map((cell, j) => (
                            <motion.div
                                whileHover={{scale: 1.2, rotate: 90}}
                                whileTap={{scale: 0.8, rotate: -90, borderRadius: '100%'}}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    border: '1px solid black',
                                    borderRadius: '15%',
                                    margin: '0.2rem',
                                    display: 'flex',
                                    backgroundColor: cell || '#FFFFFF',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onClick={() => handleClick(i, j)}
                            >
                                {cell === 'diamond' && found && <SketchOutlined/>}
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Game;
