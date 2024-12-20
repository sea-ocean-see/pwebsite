import { useState, useCallback } from 'react';
import { GameState, ParticleType, Position } from '../types/game';
import { levels } from '../data/gameLevels';

const INITIAL_STATE: GameState = {
  board: Array(8).fill(null).map(() => Array(8).fill(null)),
  selectedParticle: null,
  currentLevel: 1,
  score: 0,
};

export const useNanoBuilder = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);

  const handleParticleSelect = useCallback((type: ParticleType) => {
    setGameState(prev => ({ ...prev, selectedParticle: type }));
  }, []);

  const handleParticlePlace = useCallback((position: Position) => {
    if (!gameState.selectedParticle) return;

    setGameState(prev => {
      const newBoard = [...prev.board];
      newBoard[position.y][position.x] = prev.selectedParticle;
      return { ...prev, board: newBoard };
    });
  }, [gameState.selectedParticle]);

  const handleStartLevel = useCallback(() => {
    const level = levels[gameState.currentLevel - 1];
    if (!level) return;

    // Evaluate the current board configuration against level requirements
    const score = evaluateBoard(gameState.board, level);
    setGameState(prev => ({
      ...prev,
      score: prev.score + score,
      currentLevel: score >= level.requiredScore ? prev.currentLevel + 1 : prev.currentLevel,
    }));
  }, [gameState.board, gameState.currentLevel]);

  const handleReset = useCallback(() => {
    setGameState(INITIAL_STATE);
  }, []);

  return {
    gameState,
    currentLevel: gameState.currentLevel,
    score: gameState.score,
    handleParticleSelect,
    handleParticlePlace,
    handleStartLevel,
    handleReset,
  };
};

function evaluateBoard(board: (ParticleType | null)[][], level: any): number {
  // Simplified scoring logic
  let score = 0;
  board.forEach(row => {
    row.forEach(cell => {
      if (cell) score += 10;
    });
  });
  return score;
};