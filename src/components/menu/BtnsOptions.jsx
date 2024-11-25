import { StsOptions, ContOptions } from './StsMenu';

const BtnsOptions = ({ contentBtn, typeBtn }) => {
    return <>
        <ContOptions>
            <StsOptions id="tipoCardapio" onClick={typeBtn}>
                {contentBtn}
            </StsOptions>
        </ContOptions>
    </>
}

export default BtnsOptions