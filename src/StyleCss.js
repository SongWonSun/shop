import  styled, {css} from 'styled-components';

export const Button = styled.button`
background: transparend;
border-radius:3px;
color:palevioletred;
margin: 0.5em 1em;
padding: 0.5em 1em;

${props => props.primary && css `
background: #007bff;
outline:none;
border: none;
color:#fff;
`}
`
export const CustomBtn = styled.button`
margin: 0.5em 1em;
padding: 0.5em 1em;
border-radius: 5px;
outline:none;
border:none;
background-color: ${props => props.bg}; //부모한테 받은 props.bg 색상을 가져와라
color: ${props => props.cl}; //부모한테 받은 props.cl 색상을 가져와라
`
export const Container = styled.div`
 width: 1200px;
 max-width: 100%;
 margin: 0 auto;
 padding: 10px 0;
`
export const ContainerFull = styled.div`
    width: 100%;
    margin: 0;
    padding:10px 0;
`