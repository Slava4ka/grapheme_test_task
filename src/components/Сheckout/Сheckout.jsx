import React, {useState} from 'react';
import ReduxStep1Form from "./Step1/Step1";
import ReduxStep2Form from "./Step2/Step2";
import Step3 from "./Step3/Step3";

const Checkout = () => {

    const [step, setStep] = useState(1);

    const onSubmitStep1 = (formData) => {
        setStep(2)
    };

    const onSubmitStep2 = (formData) => {
        setStep(3)
    };

    switch (true) {
        case step === 1:
            return <div>
                <ReduxStep1Form onSubmit={onSubmitStep1}/>
            </div>;
        case step === 2:
            return <div>
                <ReduxStep2Form onSubmit={onSubmitStep2}/>
            </div>;
        case step === 3:
            return <div>
                <Step3/>
            </div>;
        default:
            return <></>
    }
};
export default Checkout