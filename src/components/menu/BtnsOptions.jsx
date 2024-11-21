import App from '/src/App.jsx'
import Options from './Options';


const BtnsOptions = ({ idBtn, contentBtn, typeBtn }) => {


    return <>
        <button id={idBtn} onClick={typeBtn}>
            {contentBtn}
        </button>
    </>


}


export default BtnsOptions