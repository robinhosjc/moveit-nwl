import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './../../styles/components/ExperienceBar.module.css';

const ExperienceBar: React.FC = () => {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        <header className={styles.headerChallenge}>
            <div>
                <h1>MoveIT - NLW#04</h1>
            </div>
            <div className={styles.experienceBar}>
                <span>0 xp</span>
                <div>
                    <div style={{ width: `${percentToNextLevel}%` }}></div>
                    <span 
                        className={styles.currentExperience}
                        style={{ left: `${percentToNextLevel}%` }}
                    >
                        {currentExperience} xp
                    </span>
                </div>
                <span>{experienceToNextLevel} xp</span>
            </div>
        </header>
    );
}

export default ExperienceBar;