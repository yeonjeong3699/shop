import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'TTTogether';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/TTTogetherA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* v2.0 | 20110126
  http://meyerweb.com/eric/tools/css/reset/ 
  License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	/* font: inherit; */
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
}

//custom
.container{
	padding-top: 100px;
	max-width: 1280px;
	margin: 0px auto;
}

.categoryTitle{
	text-align: center;
	font-family: 'GmarketSansBold';
	font-size: 40px;
	font-weight: normal;
	color: #333;
	margin-bottom: 24px;
}

.productList{
	display: flex;
	flex-wrap: wrap;
	gap: 36px 5%;
}

.productList > li{
	flex-shrink: 0;
	flex-basis: 30%;
}

.productList > li > .imgBox{
	overflow: hidden;
	border-radius: 20px;
}

.productList > li > .imgBox > img{
	width: 100%;
	display: block;
	transition: 500ms;
	&:hover{
		transform: scale(1.2);
	}
}

.textWrap{
	margin-top: 20px;
}

.textWrap .itemTitle{
	font-family: 'GmarketSansMedium';
	font-size: 20px;
	margin-bottom: 12px;
}

.textWrap .itemFlex{
	display: flex;
	justify-content: space-between;
}

.textWrap .itemFlex p{
	font-family: 'GmarketSansLight';
	font-size: 16px;
	font-weight: 900;
}

`
export default GlobalStyle;