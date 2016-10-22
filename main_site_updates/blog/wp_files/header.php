<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title><?php wp_title( ' | ', true, 'right' ); ?></title>

<style type="text/css">
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 300;
  src: local('Nunito-Light'), url(https://fonts.gstatic.com/s/nunito/v7/1TiHc9yag0wq3lDO9cw0vpBw1xU1rKptJj_0jans920.woff2) format('woff2'), url(https://fonts.gstatic.com/s/nunito/v7/1TiHc9yag0wq3lDO9cw0vrO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
}


/***********************************************************
GENERAL
***********************************************************/
body{
	margin: 0px;
	font-size: 110%;
	font-family: 'Nunito', sans-serif;
	color:#333;
	background: #fff;
	line-height: 1.5;
	font-weight: 100;
}

img{ border: 0px; }

a{ text-decoration: none; }

b{ font-weight: 700; }

button{
	border:0px;
	cursor: pointer;
}

h1{
	margin: 0px auto;
	padding: 40px 0px 20px;
	font-weight: 100;
	font-size: 2.1em;
	max-width: 800px;
	line-height: 1.3;
}

h1.homeh1{
	margin: 0px auto;
	padding: 0px 0px 40px;
	font-size: 35px;
	max-width: 920px;
}

h2{
	line-height: 1.1;
    font-weight: 100;
    margin: 0px;
    font-size: 2.5em;
    padding: 0px 0px 20px;
    color: #678;
}

h3 {
    font-size: 1.8em;
    margin: 30px 0px 0px;
    font-weight: 100;
}

p{
	margin: 15px 0px;
	line-height: 1.5;
	font-weight: 100;
}

ol li{
	line-height: 1;
	margin-bottom: 15px;
}

p a, li a{
	color: #09d;
}

p a:hover, li a:hover{
	color: #0be;
	text-decoration: underline;
}

ul li{ margin-bottom: 20px; }




/***********************************************************
MENUBAR
***********************************************************/

#menubar{
	padding: 20px;
	font-weight: 100;
	font-size: 24px;
	line-height: 1.3;
	position: relative;
}

#menubar a{
	text-decoration: none;
	color: #333;
}



/***********************************************************
NAVIGATION
***********************************************************/

#hamburger{
	float: right;
	width: 36px;
	cursor: pointer;
}
#hamburger div:first-child{
	margin-top: 4px;
}
#hamburger div{
	margin-top: 5px;
	width: 100%;
	height: 3px;
	background: #555;
	border-radius: 3px;
}

#topnav{
	padding-top: 20px;
}

#topnav a{
	display: block;
	padding: 20px;
	font-size: 20px;
	border-top: 1px solid #eee;
}

#topnav a:hover{
	background: #0c7;
	color: #fff;
}

.open{ display: block; }
.closed{ display: none; }




/***********************************************************
MASTHEAD
***********************************************************/

.masthead{
	/*background: #269;*/
	background: #229CCB;
	text-align: center;
	color: #fff;
	padding: 140px 20px;
}

.mastheadhome{
	background: #28b;
	text-align: center;
	color: #fff;
	padding: 50px 20px;
}

.homeformtext{
	font-size:20px;
	max-width: 700px;
	margin: auto;
	font-weight: 100;
}

.homeform{
	max-width: 700px;
	margin: auto;
	padding-top: 10px;
}

.homeform input{
	padding: 15px;
	border: 1px solid #aaa;
	font-size: 20px;
	box-sizing: border-box;
	margin-bottom: 10px;
	box-shadow: 1px 1px 3px 0px #ddd inset;
	border-radius: 3px;
	width: 100%;
	display: block;
}

.homeform button{
	padding: 15px 10px;
	border: 0px;
	font-size: 20px;
	box-sizing: border-box;
	margin-bottom: 10px;
	border-radius: 3px;
	background: #0c7;
	color: #fff;
	width: 100%;
	display: block;
	text-transform: uppercase;
	font-weight: 700;
}

.homeform button:hover{
	background: #0d8;
}





/***********************************************************
PLAIN CONTENT
***********************************************************/

.plaincontent{
	padding: 30px 20px;
	font-size: 1em;
	font-weight: 100;
	line-height: 1.5;
}

.plaincontent h2{
	margin: 0px;
	padding: 80px 0px 20px;
}

.plaincontent p{
	margin: 0px;
	padding: 0px 0px 20px;
}

.plaincontent ul{
	margin: 0px;
	padding: 0px 0px 20px 30px;
}

.plaincontent a{
	color: #09d;
}

.plaincontent a:hover{
	color: #0be;
}






/***********************************************************
TUTORIAL CONTENT
***********************************************************/

.demobutton{
	background: #229CCB;
	color: #fff;
	text-decoration: none;
	display: inline-block;
	padding: 15px 30px;
	border-radius: 3px;
	margin-bottom: 10px;
}
.demobutton:hover{ background: #3ad; }

.firstcontentline{
	font-size: 1.3em;
	font-weight: 100;
	padding-top: 10px;
	line-height: 1.5;
}
.showcasetitle{
	padding: 50px 0px 20px;
	font-weight: 100;
	font-size: 1.8em;
	color: #89a;
}

.showcase{
	text-align: center;
	border: 1px solid #ddd;
	border-radius: 3px;
	margin-bottom: 20px;
}

.contentwidth{
	max-width: 600px;
	margin: auto;
}

.content{
	padding: 20px;
}

.intro{
	padding: 20px 20px 70px;
}

.stepscontainer{
	background:#0ad;
	padding:50px 0px;
}

.stepbox{
	background:#fff;
	padding:30px 20px;
	border-radius:5px;
	margin-bottom: 70px;
}








/***********************************************************
CATEGORY GRID STYLES
***********************************************************/

.gridbg{background:#F1F4F7; padding:30px 10px; text-align:center;}

.gridcontainer{ max-width:650px; display: inline-block;}

.gridbox{
	background: #fff;
	border-top: 5px solid #229CCB;
	padding: 40px;
	margin: 30px 10px;
	font-size: 30px;
	text-align: left;
	vertical-align: top;
}

.gridbox a{
	color: #333;
	text-decoration: none;
}
.gridbox a:hover{ color: #4bd; text-decoration:none; }

.tags{
	padding-top: 20px;
	font-size: 20px;
}

.tags a{
	color: #3ac;
}






/***********************************************************
CODE
***********************************************************/

.codespan{
	background: #333;
	color: #fff;
	font-family: courier;
}

code, .resultcontainer{
	background: #444;
	color: #fff;
	display: block;
	padding: 20px;
	/*word-wrap: break-word;*/
	overflow: scroll;
	white-space: nowrap;
	/*font-size: 20px;*/
}
.resultcontainer{ text-align: center; white-space: normal;}


.tag{ color: gold; }

.cssclass{ color: #aef; }

.cssproperty{ color: pink; }

.csscomment { color: #6f6; }

.indent{ padding-left: 40px; }

.beforeparentheses{ color:#f6a; }








/***********************************************************
EMAIL FORM
***********************************************************/


.signupsection{
	padding: 10px 20px 40px;
}

.enjoyedthis{
	font-size: 2em;
	padding: 60px 0px 20px;
}

.signupform{
	background:#ffcfac;
	padding: 30px;
	border-radius: 5px;
	color: #333;
	vertical-align: middle;
	text-align: left;
	margin-bottom: 20px;
}

.signupcopy{
	padding-bottom: 10px;
}

.gettutorials{
	font-weight: 100;
	font-size: 30px; 
	padding: 0px 0px 20px;
	line-height: 1.2;
}

.bluechecks{
	list-style: none;
	padding: 0px;
	padding-left: 15px;
	margin: 0px;
	font-size: 0.95em;
	font-weight: 100;
}
.bluechecks span{ color:#19b; }


.zerofont{ font-size: 0px; }

.signupform input{
	padding: 15px;
	border: 1px solid #aaa;
	font-size: 20px;
	box-sizing: border-box;
	width: 100%;
	margin-bottom: 10px;
	box-shadow: 1px 1px 3px 0px #ddd inset;
	border-radius: 3px;
}


.signupbutton{
	font-family: nunito, sans-serif;
	position: relative;
	display: inline-block;
	padding: 15px 25px;
	background: #15BBDD;
	text-decoration: none;
	color: #fff;
	font-size: 25px;
	border-radius: 3px;
	border: 0px;
	width: 100%;
	box-sizing: border-box;
}

.signupbutton:hover{
	background: #2ce;
}

.nospam{
	margin-top: 10px;
	font-size: 16px;
	text-align: center;
}






/***********************************************************
FOOTER
***********************************************************/

.copyright{
	background: #333;
	color: #fff;
	padding: 30px 10px;
	text-align: center;
	font-size: 17px;
}








/************************************************************
first breakpoint
************************************************************/
@media (min-width:700px) {
	body{
		font-size: 140%;
	}

	
	/* begin navigation styles */
	
	#hamburger{ display: none; }

	#topnav{
		padding: 0px;
		position: absolute;
		top: 10px;
		right: 30px;
	}

	.open, .closed{ display: inline-block; }

	#topnav a{
		display: inline-block;
		padding: 15px;
		border-radius: 5px;
		font-size: 20px;
		border-top: 0px none;
		margin: 0px 15px;
		vertical-align: top;
	}

	.separator{
		display: inline-block;
		height: 20px;
		width: 1px;
		padding: 15px 0px;
		background: #eee;
		vertical-align: top;
	}

	/* end navigation styles */



	.mastheadhome{
		padding: 150px 20px;
		background-image:url('img/macbgdark.png');
		background-size: cover;
	}

	h1.homeh1{
		font-size: 49px;
	}

	.homeform input{
		width: 28%;
		display: inline;
	}

	.homeform button{
		width: 33%;
		display: inline;
	}

	.stepbox{ padding:80px 100px; }

	.signupform input{
		width: 49%;
		display:inline-block;
	}

	.signupform input:first-child{
		margin-right: 2%;
	}
}










/************************************************************
TOP OPT IN BAR
************************************************************/
#top_opt_in{
	display: none;
	background: #396;
	color: #fff;
	font-size: 16px;
	padding: 6px;
	text-align: center;
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	z-index: 100;

	-webkit-transition: transform .2s;
	transition: transform .2s;
	
	-ms-transform: translateY(-40px);
	-webkit-transform: translateY(-40px);
	transform: translateY(-40px);
}
#top_opt_in a{
	display: inline-block;
	color: #fff;
	background: #444;
	padding: 1px 15px;
	border-radius: 3px;
	margin-left: 10px;
}
#top_opt_in a:hover{
	background: #555;
}
#menubar{
	-webkit-transition: margin-top .2s;
	transition: margin-top .2s;
}

@media (min-width:920px) {
	#top_opt_in{
		display: block;
	}

	#menubar.top_promo{
		margin-top: 36px;
	}

}
</style>


</head>
<body>

<!-- TOP OPT-IN BAR -->
<div id="top_opt_in">
	Get the actual steps I used to get hired as a front-end web developer at a well-known company
	<a href="/opt-in/">Click here</a>
</div>


<div id="menubar">
	<div id="hamburger">
		<div></div><div></div><div></div>
	</div>

	<a href="/">Simple Steps Code</a>
	
	<div id="topnav" class="closed">
		<a href="/category/tutorials">Tutorials</a>
		<div class="separator"></div>
		<a href="/category/fun">Fun</a>
	</div>
</div>
