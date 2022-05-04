import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{		
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html, body, #root{
	height:100% ;
}

body{
font-size:18px;
font-family: 'Roboto', sans-serif;}
`;
