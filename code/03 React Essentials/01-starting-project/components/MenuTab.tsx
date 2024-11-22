import TabButton from './TabButton.tsx'
import { TabKey } from '../src/data.ts'
import { EXAMPLES } from '../src/data.ts'
import React from 'react'

type MenuTabProps = {
    content: TabKey | null,
    seletedTabProp: (content: TabKey | string) => void,
    ButtonContainer?: React.ElementType
}

const MenuTab: React.FC<MenuTabProps> = ({ content, seletedTabProp, ButtonContainer = "menu" }) => {

    const CaptitalizeWord = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1)

    return (
        <ButtonContainer>
            {Object.keys(EXAMPLES).map(
                key =>
                    <TabButton
                        isSelected={content === key}
                        onClickFnProp={() => seletedTabProp(key)}
                    >
                        {CaptitalizeWord(key)}
                    </TabButton>
            )}
        </ButtonContainer>
    )
}

export default MenuTab