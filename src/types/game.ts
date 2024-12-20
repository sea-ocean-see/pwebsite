export enum ParticleType {
  CARRIER = 'CARRIER',
  TARGETING = 'TARGETING',
  PAYLOAD = 'PAYLOAD',
}

export interface Position {
  x: number;
  y: number;
}

export interface GameState {
  board: (ParticleType | null)[][];
  selectedParticle: ParticleType | null;
  currentLevel: number;
  score: number;
}