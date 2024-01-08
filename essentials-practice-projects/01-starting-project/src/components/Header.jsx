import React from 'react'
import logo from '/src/assets/investment-calculator-logo.webp'

export const Header = () => {
        return (
                <header>
                        <img src={logo} alt='investment-calculator-logo' />
                        <h1>Investment Calculator</h1>
                </header>
        )
}
