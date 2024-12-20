import React from 'react';
import { GameBoard } from './GameBoard';
import { GameControls } from './GameControls';
import { useNanoBuilder } from '../../hooks/useNanoBuilder';

const NanoBuilderGame = () => {
  const { 
    gameState,
    currentLevel,
    score,
    handleParticleSelect,
    handleParticlePlace,
    handleStartLevel,
    handleReset
  } = useNanoBuilder();

  return (
    <section id="game" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">NanoBuilder</h2>
        <p className="text-center text-gray-600 mb-12">
          Design nanoparticles to treat different medical conditions. Choose the right components
          to create effective drug delivery systems!
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <GameBoard
            gameState={gameState}
            onParticlePlace={handleParticlePlace}
          />
          <GameControls
            currentLevel={currentLevel}
            score={score}
            onParticleSelect={handleParticleSelect}
            onStartLevel={handleStartLevel}
            onReset={handleReset}
          />
        </div>
      </div>
    </section>
  );
};

export default NanoBuilderGame;