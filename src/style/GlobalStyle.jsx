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
	padding-top: 20px;
	max-width: 1280px;
	margin: 0px auto;
}

.categoryTitle{
	/* text-align: center; */
	font-family: 'GmarketSansBold';
	font-size: 40px;
	font-weight: normal;
	color: #333;
	margin: 24px;
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

.productList > li > li > .imgBox{
	overflow: hidden;
	border-radius: 20px;
}

.productList > li > li > .imgBox > img{
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
	font-size: 22px;
	margin-bottom: 12px;
	color: #285430;
	letter-spacing: -0.5px;
}

.textWrap .itemFlex{
	display: flex;
	justify-content: space-between;
}

.textWrap .itemFlex p{
	font-family: 'GmarketSansLight';
	font-size: 16px;
	font-weight: 900;
	color: #555;
	letter-spacing: -0.5px;
}

.on{
	position: fixed;
    z-index: 999;
	background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	border-bottom: solid 1px #eeeeee;
}

//detailPage
.detailPage{
	max-width: 1280px;
	display: flex;
	justify-content: center;
	gap: 80px;
	margin-top: 30px;
	.detailImg{
		max-width: 600px;
		img{
			width: 100%;
			display: block;
			border-radius: 20px;
		}
	}
	.detailText{
		width: 500px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		h2{
			width: 100%;
			padding-bottom: 10px;
			border-bottom: solid 1px #ddd;
			font-family: 'GmarketSansMedium';
			font-size: 36px;
			letter-spacing: -1px;
		}
		.description{
			font-family: 'GmarketSansLight';
			font-weight: 700;
			font-size: 16px
		}
		.detail-opt{

		}
		.btn-box{
			width: 100%;
			height: 60px;
			display: flex;
			gap: 10px;
			.buy-btn{
				width: 87%;
				height: 100%;
				border: none;
				border-radius: 10px;
				background-color: #285430;
				color: white;
				font-family: 'GmarketSansMedium';
				font-size: 22px;
				letter-spacing: 1px;
				cursor: pointer;
			}
			.cart-btn{
				width: 13%;
				height: 100%;
				border: solid 1px #BDBDBD;
				border-radius: 10px;
				background-color: white;
				color: #285430;
				font-size: 28px;
				cursor: pointer;
				display: flex;
				justify-content: center;
				align-items: center;
			}

		}	
		.alert-msg{

		}
		.price{
			width: 100%;
			padding-bottom: 16px;
			font-family: 'GmarketSansMedium';
			font-size: 30px;
		}
	}
}

.cartList{
	display: flex;
	flex-direction: column;
	gap: 16px;
	border-top: solid 1px #dddddd;
	padding: 24px 0px;
	li{
		display: flex;
		gap: 10px;
		align-items: center;
		border-bottom: solid 1px #dddddd;
		
		img{
			width: 80px;
		}

		p{
			font-family: 'GmarketSansMedium';
			font-size: 18px;
			color: #555555;
		}

		.quantity-arrow-box{
			display: flex;
			flex-direction: column;
			gap: 3px;
			.quantity-arrow{
				cursor: pointer;
				width: 20px;
				height: 14px;
				background-color: #555;
				border-radius: 3px;
				color: white;
			}
		}

		button{
			width: 50px;
			height: 30px;
			border: none;
			border-radius: 5px;
			background-color: #A4BE7B;
			color: white;
			font-size: 12px;
			cursor: pointer;
			font-family: 'GmarketSansLight';
			font-weight: 900;
			font-size: 15px;
			letter-spacing: 1px;
		}
	}

}

`
export default GlobalStyle;