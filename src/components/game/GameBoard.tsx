import React from 'react';
import { GameState, Position } from '../../types/game';
import { NanoParticle } from './NanoParticle';

interface GameBoardProps {
  gameState: GameState;
  onParticlePlace: (position: Position) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ gameState, onParticlePlace }) => {
  return (
    <div className="grid grid-cols-8 gap-2 mb-6 bg-gray-100 p-4 rounded-lg">
      {gameState.board.map((row, y) => (
        row.map((cell, x) => (
          <div
            key={`${x}-${y}`}
            className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center cursor-pointer hover:bg-gray-50"
            onClick={() => onParticlePlace({ x, y })}
          >
            {cell && <NanoParticle type={cell} />}
          </div>
        ))
      ))}
    </div>
  );
};