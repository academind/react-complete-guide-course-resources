import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

export const ResultSection = ({ userInput }) => {

    const calculatedResult = calculateInvestmentResults(userInput)
    const initialInvestment = calculatedResult[0].valueEndOfYear - calculatedResult[0].interest - calculatedResult[0].annualInvestment;


    return (


        <table id='result'>
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest (Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>

                {calculatedResult.map((data) => {
                    const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                    const totalAmountOfInvested = data.valueEndOfYear - totalInterest

                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountOfInvested)}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}
