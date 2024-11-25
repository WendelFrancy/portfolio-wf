import "./StsMenu.js"
import { CardInput, StyledForm } from "./StsMenu.js"

const CardForm = () => {
    return (
        <>
            <StyledForm>
                <CardInput
                    $type='text'
                />
                <CardInput
                    $type='text'
                />
                <CardInput
                    $type='number'
                />
            </StyledForm>
        </>
    )
}

export default CardForm