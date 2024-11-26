import { StsOptions, ContOptions } from './StsMenu.ts';

interface BtnsOptionsProps {
    contentBtn: String;
    typeBtn: () => void;
}

const BtnsOptions: React.FC<BtnsOptionsProps> = ({ contentBtn, typeBtn }) => {
    return <>
        <ContOptions>
            <StsOptions id="tipoCardapio" onClick={typeBtn}>
                {contentBtn}
            </StsOptions>
        </ContOptions>
    </>
}

export default BtnsOptions