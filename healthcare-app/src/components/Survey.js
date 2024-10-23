import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Survey = () => {
    const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    stressLevel: "",
    overwhelmed: "",
    stressSources: "",
    coping: "",
    support: "",
  });

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  return (
    <div className="survey-container">
      {step === 1 && (
        <div className="survey-question animate">
          <h3>On a scale of 1 to 10, how would you rate your current stress level?</h3>
          <input
            type="number"
            name="stressLevel"
            value={answers.stressLevel}
            onChange={handleChange}
            min="1"
            max="10"
            className="input-field"
          />
        </div>
      )}

      {step === 2 && (
        <div className="survey-question animate">
          <h3>How often do you feel overwhelmed by your daily tasks and responsibilities?</h3>
          <select name="overwhelmed" value={answers.overwhelmed} onChange={handleChange} className="input-field">
            <option value="">Select</option>
            <option value="Never">Never</option>
            <option value="Rarely">Rarely</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Often">Often</option>
            <option value="Always">Always</option>
          </select>
        </div>
      )}

      {step === 3 && (
        <div className="survey-question animate">
          <h3>What are the most common sources of stress in your life?</h3>
          <select name="stressSources" value={answers.stressSources} onChange={handleChange} className="input-field">
            <option value="">Select</option>
            <option value="Work">Work</option>
            <option value="Relationships">Relationships</option>
            <option value="Finances">Finances</option>
            <option value="Health">Health</option>
            <option value="Other">Other (please specify)</option>
          </select>
        </div>
      )}

      {step === 4 && (
        <div className="survey-question animate">
          <h3>How do you typically cope with stress?</h3>
          <select name="coping" value={answers.coping} onChange={handleChange} className="input-field">
            <option value="">Select</option>
            <option value="Talking to someone">Talking to someone</option>
            <option value="Physical activity/exercise">Physical activity/exercise</option>
            <option value="Meditation/relaxation techniques">Meditation/relaxation techniques</option>
            <option value="Distracting with hobbies or entertainment">Distracting with hobbies or entertainment</option>
            <option value="Other">Other (please specify)</option>
          </select>
        </div>
      )}

      {step === 5 && (
        <div className="survey-question animate">
          <h3>Do you feel that you have adequate support from family, friends, or professionals to manage your stress?</h3>
          <select name="support" value={answers.support} onChange={handleChange} className="input-field">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unsure">Unsure</option>
          </select>
        </div>
      )}

      <div className="survey-buttons">
        {step > 1 && <button className="back-btn" onClick={handleBack}>Back</button>}
        {step < 5 ? (
          <button className="next-btn" onClick={handleNext}>Next</button>
        ) : (
            <button className="submit-btn" onClick={() => navigate("/homepage")}>Submit</button>

        )}
      </div>
    </div>
  );
};

export default Survey;
