import styled from 'styled-components';
// Different Buttons in the Projects.
export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
color:var(--lightBlue);
border:0.05rem solid var(--lightBlue);
border-color:${props=> props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
color:${props=>props.cart? "var(--mainYellow)" :"var(--lightBlue)"};
border-radius:.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:${props=>props.cart? "var(--mainYellow)": "var(--mainBlue)" };
  color:${props=>props.cart? "var(--mainWhite)" : "var(--lightBlue)"};
}
&:focus{
  outline:none;
}
`


