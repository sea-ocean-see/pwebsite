import React from 'react';
import { ParticleType } from '../../types/game';
import { NanoParticle } from './NanoParticle';

interface GameControlsProps {
  currentLevel: number;
  score: number;
  onParticleSelect: (type: ParticleType) => void;
  onStartLevel: () => void;
  onReset: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  currentLevel,
  score,
  onParticleSelect,
  onStartLevel,
  onReset,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-8 mb-4">
        <div className="text-lg font-semibold">Level: {currentLevel}</div>
        <div className="text-lg font-semibold">Score: {score}</div>
      </div>
      
      <div className="flex gap-4">
        {Object.values(ParticleType).map((type) => (
          <button
            key={type}
            className="p-2 rounded-lg bg-indigo-100 hover:bg-indigo-200"
            onClick={() => onParticleSelect(type)}
          >
            <NanoParticle type={type} />
          </button>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={onStartLevel}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Start Level
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
};