export default function UserInputs({ handleChanging, userInput }) {

    return (
        <section id="user-input" >
            <div className='input-group'>
                <span>
                    <label>Initial Investment</label>
                    <input type='number' required value={userInput.initialInvestment} onChange={(event) => handleChanging('initialInvestment', event.target.value)} />
                </span>

                <span>
                    <label>Annual Investment</label>
                    <input type='number' required value={userInput.annualInvestment} onChange={(event) => handleChanging('annualInvestment', event.target.value)} />
                </span>
            </div>
            <div className='input-group'>
                <span>
                    <label>Expected Return</label>
                    <input type='number' required value={userInput.expectedReturn} onChange={(event) => handleChanging('expectedReturn', event.target.value)}/>
                </span> 

                <span>
                    <label>Duration</label>
                    <input type='number' required value={userInput.duration} onChange={(event) => handleChanging('duration', event.target.value)}/>
                </span>
            </div>
        </section>
    )
}