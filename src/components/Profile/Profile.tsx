import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './../../styles/components/Profile.module.css';

const Profile: React.FC = () => {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/16139004?v=4" alt="Robson" />
            <div>
                <strong>Roson</strong>
                <p>
                    <img src="/icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
        
    );
}

export default Profile;