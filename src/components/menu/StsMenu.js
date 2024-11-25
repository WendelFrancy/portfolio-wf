import styled from "styled-components";

export const MainDiv = styled.main`
    padding: 0; 
    margin: 0; 
    box-sizing: border-box;
  `;

export const StyledMenuDiv = styled.div`
    display: flex;
    justify-content: center;
  `;

export const TopMenu = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;

export const StyledForm = styled.form`
    display: grid;
    padding: 1rem;
    gap: 10px;
    width: 15rem;
  `;

export const ContOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `; 

export const StsOptions = styled.button`
    padding: 1rem;
    width: 15rem;
  `;

export const CardInput = styled.input.attrs((props) => ({ type: props.$type || 'text', }))`
    padding: 1rem;
`;



