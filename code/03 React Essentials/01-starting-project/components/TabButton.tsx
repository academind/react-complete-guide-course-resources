/**
 * 
 * children prop is the default prop for every component
 */

import { ReactNode } from 'react'

type TabButtonProps = {
    children: ReactNode,
    onClickFnProp: () => void,
    isSelected: boolean
}

const TabButton = ({ children, onClickFnProp, isSelected }: TabButtonProps) => {

    return (
        <li>
            <button className={`${isSelected && 'active'}`} onClick={onClickFnProp}>{children}</button>
        </li>
    )
}

export default TabButton