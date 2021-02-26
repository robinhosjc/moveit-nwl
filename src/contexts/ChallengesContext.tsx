import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

enum ChallengeType {
    'body', 
    'eye'
}

interface Challenge {
    type: ChallengeType;
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number; 
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallange: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(25);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    
    const [activeChallenge, setActiveChallenge] = useState(null);
    
    const experienceToNextLevel = Math.pow((level +1) * 4, 2);

    function levelUp () {
        setLevel(level + 1);
    }

    function startNewChallange() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        
        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);

    }

    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                currentExperience, 
                challengesCompleted,
                experienceToNextLevel,
                activeChallenge,
                levelUp,
                startNewChallange,
                resetChallenge
            }}>
            {children}
        </ChallengesContext.Provider>
    );
}