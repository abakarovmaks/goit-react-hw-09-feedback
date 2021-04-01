import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul> 
            {options.map(option => (
                <li key={option} className={styles.buttonList}>
                <button type="button" className={styles.btn} onClick={() => onLeaveFeedback(option)}>
                    {option.slice(0, 1).toLocaleUpperCase() + option.slice(1)}
                </button>  
            </li>
     ))}
        </ul>
    );
}
        
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;