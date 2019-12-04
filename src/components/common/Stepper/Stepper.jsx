import React from 'react';
import style from './Stepper.module.scss';
import {FiChevronRight} from "react-icons/fi";

const Stepper = ({stepsArr}) => {

    let stepperContent = [];

    for (let step = 0; step < stepsArr.length; step++) {
        stepperContent.push(stepsArr[step]);
        if ((step < stepsArr.length - 1)) {
            stepperContent.push("FiChevronRight")
        }

    }

    return (<div className={style.stepper}>
        {
            stepperContent.map((step, id) => (step !== "FiChevronRight") ?
                <span key={id}
                      className={(step.isActive) ? `${style.stepper__step} ${style.stepper__step_active}` : `${style.stepper__step}`}>{step.name}</span> :
                <FiChevronRight key={id} className={style.stepper__chevronRight}/>)
        }
    </div>)
};

export default Stepper