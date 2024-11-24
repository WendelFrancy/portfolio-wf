import { StsOptions } from './StsMenu';



const BtnsOptions = ({ idBtn, contentBtn, typeBtn }) => {
    return <>
        <StsOptions id={idBtn} onClick={typeBtn}>
            {contentBtn}
        </StsOptions>
    </>
}


export default BtnsOptions