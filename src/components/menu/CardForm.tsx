import { CardInput, StyledForm } from './StsMenu.ts'

const CardForm = () => {
    return (
        <>
            <StyledForm>
                <CardInput
                    type='text'
                />
                <CardInput
                    type='text'
                />
                <CardInput
                    type='number'
                />
            </StyledForm>
        </>
    )
}

export default CardForm