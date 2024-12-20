import React from 'react';
import { ParticleType } from '../../types/game';
import { Circle, Shield, Zap } from 'lucide-react';

interface NanoParticleProps {
  type: ParticleType;
}

export const NanoParticle: React.FC<NanoParticleProps> = ({ type }) => {
  const getParticleIcon = () => {
    switch (type) {
      case ParticleType.CARRIER:
        return <Circle className="w-6 h-6 text-blue-500" />;
      case ParticleType.TARGETING:
        return <Shield className="w-6 h-6 text-green-500" />;
      case ParticleType.PAYLOAD:
        return <Zap className="w-6 h-6 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="transition-transform hover:scale-110">
      {getParticleIcon()}
    </div>
  );
};