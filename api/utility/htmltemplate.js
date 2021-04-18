'use strict';

const fs = require('fs');
const path = require('path');

//lyve user system
exports.accountActivation = function(user,token){
	return `
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>[SUBJECT]</title>
	<style type="text/css">

	@media screen and (max-width: 600px) {
		table[class="container"] {
			width: 95% !important;
		}
	}

	#capitalize {
		text-transform: capitalize;
	}

	#outlook a {padding:0;}
	body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}
	.ExternalClass {width:100%;}
	.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
	#backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
	img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}
	a img {border:none;}
	.image_fix {display:block;}
	p {margin: 1em 0;}
	h1, h2, h3, h4, h5, h6 {color: black !important;}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {color: blue !important;}

	h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active {
		color: red !important;
	}

	h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited {
		color: purple !important;
	}

	table td {border-collapse: collapse;}

	table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }

	a {color: #000;}

	@media only screen and (max-device-width: 480px) {

		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: black; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important; /* or whatever your want */
			pointer-events: auto;
			cursor: default;
		}
	}


	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: blue; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important;
			pointer-events: auto;
			cursor: default;
		}
	}

	@media only screen and (-webkit-min-device-pixel-ratio: 2) {
		/* Put your iPhone 4g styles in here */
	}

	@media only screen and (-webkit-device-pixel-ratio:.75){
		/* Put CSS for low density (ldpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1){
		/* Put CSS for medium density (mdpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1.5){
		/* Put CSS for high density (hdpi) Android layouts in here */
	}
	/* end Android targeting */
	h2{
		color:#181818;
		font-family:Helvetica, Arial, sans-serif;
		font-size:22px;
		line-height: 22px;
		font-weight: normal;
	}
	a.link1{

	}
	a.link2{
		color:#313130;
		text-decoration:none;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		color:#313130;border-radius:4px;
	}
	p{
		color:#555;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		line-height:160%;
	}
	</style>

	<script type="colorScheme" class="swatch active">
	{
		"name":"Default",
		"bgBody":"ffffff",
		"link":"fff",
		"color":"555555",
		"bgItem":"ffffff",
		"title":"181818"
	}
	</script>

	</head>
	<body>
	<!-- Wrapper/Container Table: Use a wrapper table to control the width and the background color consistently of your email. Use this approach instead of setting attributes on the body tag. -->
	<table cellpadding="0" width="100%" cellspacing="0" border="0" id="backgroundTable" class='bgBody'>
	<tr>
	<td>
	<table cellpadding="0" width="620" class="container" align="center" cellspacing="0" border="0">
	<tr>
	<td>
	<!-- Tables are the most common way to format your email consistently. Set your table widths inside cells and in most cases reset cellpadding, cellspacing, and border to zero. Use nested tables as a way to space effectively in your message. -->


	<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" class="container">
	<tr>
	<td class='movableContentContainer bgItem'>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="left" width="600" class="container">
	<tr height="40">
	<td width="80">&nbsp;</td>
	<td width="200">&nbsp;</td>
	<td width="200">&nbsp;</td>
	</tr>
	<tr>
	<td width="80" valign="top">&nbsp;</td>
	<td width="200" valign="top" align="left">
	<div class="contentEditableContainer contentImageEditable">
	<div class="contentEditable" align='left' >
	
	</div>
	</div>
	</td>
	<td width="200" valign="top">&nbsp;</td>
	</tr>

	</table>
	</div>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" class="container">
	<tr>
	<td width="100%" colspan="3" align="center" style="padding-bottom:0px;padding-top:0px;">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='center' >
	<h2 ></h2>
	</div>
	</div>
	</td>
	</tr>
	<tr>
	<td width="100">&nbsp;</td>
	<td width="400" align="center">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='left' >
	<h3 style="font-size: 40px;">Welcome to MMZee!
	</h3>
	<p style="color:#555; text-transform: capitalize;">Hi ${user.ownerName  },<br /><br /></p>
<p style="color:#555;">Thanks for setting up your brand ${user.brandName}.
	<br/>
	<br/>

Our team are reviewing your account and brand for approval. Please click the button below to verify your email.</p>
</p>
</div>
	</div>
	</td>
	<td width="100">&nbsp;</td>
	</tr>
	</table>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" class="container">
	<tr>
	<td width="50">&nbsp;</td>
	<td width="200" align="left" style="padding-top:25px;">
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="200" height="50">
	<tr>
	<td bgcolor="#f0ff47" align="center" style="border-radius:4px;" width="200" height="50">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='center' >
	<a target='_blank' href="http://localhost:3000/account-activation/${token}" class='link2' style="text-decoration: none; color: #000;">Verify Your Email</a>
	</div>
	</div>
	</td>
	</tr>
	</table>
	</td>
	<td width="200">&nbsp;</td>
	</tr>
	</table>
	</div>



	</td>
	</tr>
	</table>




	</td></tr></table>

	</td>
	</tr>
	</table>
	<!-- End of wrapper table -->

	</body>
	</html>

	`;
}

exports.NotificationForApproval = function(user,token){
	return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>[SUBJECT]</title>
	<style type="text/css">

	@media screen and (max-width: 600px) {
		table[class="container"] {
			width: 95% !important;
		}
	}

	#outlook a {padding:0;}
	body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}
	.ExternalClass {width:100%;}
	.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
	#backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
	img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}
	a img {border:none;}
	.image_fix {display:block;}
	p {margin: 1em 0;}
	h1, h2, h3, h4, h5, h6 {color: black !important;}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {color: blue !important;}

	h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active {
		color: red !important;
	}

	h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited {
		color: purple !important;
	}

	table td {border-collapse: collapse;}

	table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }

	a {color: #000;}

	@media only screen and (max-device-width: 480px) {

		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: black; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important; /* or whatever your want */
			pointer-events: auto;
			cursor: default;
		}
	}


	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: blue; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important;
			pointer-events: auto;
			cursor: default;
		}
	}

	@media only screen and (-webkit-min-device-pixel-ratio: 2) {
		/* Put your iPhone 4g styles in here */
	}

	@media only screen and (-webkit-device-pixel-ratio:.75){
		/* Put CSS for low density (ldpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1){
		/* Put CSS for medium density (mdpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1.5){
		/* Put CSS for high density (hdpi) Android layouts in here */
	}
	/* end Android targeting */
	h2{
		color:#181818;
		font-family:Helvetica, Arial, sans-serif;
		font-size:22px;
		line-height: 22px;
		font-weight: normal;
	}
	a.link1{

	}
	a.link2{
		color:#fff;
		text-decoration:none;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		color:#fff;border-radius:4px;
	}
	p{
		color:#555;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		line-height:160%;
	}
	#capitalize {
		text-transform: capitalize;
	}
	</style>

	<script type="colorScheme" class="swatch active">
	{
		"name":"Default",
		"bgBody":"ffffff",
		"link":"fff",
		"color":"555555",
		"bgItem":"ffffff",
		"title":"181818"
	}
	</script>

	</head>
	<body>
	<!-- Wrapper/Container Table: Use a wrapper table to control the width and the background color consistently of your email. Use this approach instead of setting attributes on the body tag. -->
	<table cellpadding="0" width="100%" cellspacing="0" border="0" id="backgroundTable" class='bgBody'>
	<tr>
	<td>
	<table cellpadding="0" width="620" class="container" align="center" cellspacing="0" border="0">
	<tr>
	<td>
	<!-- Tables are the most common way to format your email consistently. Set your table widths inside cells and in most cases reset cellpadding, cellspacing, and border to zero. Use nested tables as a way to space effectively in your message. -->


	<table cellpadding="0" cellspacing="0" border="0" align="left" width="600" class="container">
	<tr>
	<td class='movableContentContainer bgItem'>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="left" width="600" class="container">
	<tr height="40">
	<td width="80">&nbsp;</td>
	<td width="200">&nbsp;</td>
	<td width="200">&nbsp;</td>
	</tr>
	<tr>
	<td width="80" valign="top">&nbsp;</td>
	<td width="200" valign="top" align="left">
	<div class="contentEditableContainer contentImageEditable">
	<div class="contentEditable" align='left' >
	
	</div>
	</div>
	</td>
	<td width="200" valign="top">&nbsp;</td>
	</tr>

	</table>
	</div>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" class="container">
	<tr>
	<td width="100%" colspan="3" align="center" style="padding-bottom:0px;padding-top:0px;">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='center' >
	<h2 ></h2>
	</div>
	</div>
	</td>
	</tr>
	<tr>
	<td width="120">&nbsp;</td>
	<td width="400" align="left">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='left' >
	<p>A user just signed up from MMZee and needs your approval to access the site. </p>
	<br/>
	<h2 align="left">Brand Details</h2>
	<p style="text-transform: capitalize;">Owner Name: ${user.ownerName }
	<br/>
	<p>Email: ${user.email}</p>
    <p >Brand: ${user.brandName} </p>
	<p> Brand Type: ${user.type} </p>
	<br/>
	<br/>
	</p>
	</div>
	</div>
	</td>
	<td width="100">&nbsp;</td>
  </tr>

        <tr>
        <td width="50">&nbsp;</td>
        <td width="200" align="left" style="padding-top:5px;">
        <table cellpadding="0" cellspacing="0" border="0" align="left" width="200" height="50">
        <tr>
        <td bgcolor="#f0ff47" align="left" style="border-radius:4px;" width="200" height="50">
        <div class="contentEditableContainer contentTextEditable">
        <div class="contentEditable" align='center' >
        <a target='_blank' href="http://localhost:3000/" class='link2' style="text-decoration: none; color: #000;">View Admin Dashboard</a>
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        <td width="200">&nbsp;</td>
        </tr>

	</table>
	<td width="200">&nbsp;</td>
	</tr>
	</table>
	</div>



	</td>
	</tr>
	</table>




	</td></tr></table>

	</td>
	</tr>
	</table>
	<!-- End of wrapper table -->

	</body>
	</html>

	`;
}

exports.ApproveAccount = function(user, token){
	return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>[SUBJECT]</title>
	<style type="text/css">

	@media screen and (max-width: 600px) {
		table[class="container"] {
			width: 95% !important;
		}
	}

	#outlook a {padding:0;}
	body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}
	.ExternalClass {width:100%;}
	.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
	#backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
	img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}
	a img {border:none;}
	.image_fix {display:block;}
	p {margin: 1em 0;}
	h1, h2, h3, h4, h5, h6 {color: black !important;}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {color: blue !important;}

	h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active {
		color: red !important;
	}

	h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited {
		color: purple !important;
	}

	table td {border-collapse: collapse;}

	table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }

	a {color: #000;}

	@media only screen and (max-device-width: 480px) {

		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: black; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important; /* or whatever your want */
			pointer-events: auto;
			cursor: default;
		}
	}


	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: blue; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important;
			pointer-events: auto;
			cursor: default;
		}
	}

	@media only screen and (-webkit-min-device-pixel-ratio: 2) {
		/* Put your iPhone 4g styles in here */
	}

	@media only screen and (-webkit-device-pixel-ratio:.75){
		/* Put CSS for low density (ldpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1){
		/* Put CSS for medium density (mdpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1.5){
		/* Put CSS for high density (hdpi) Android layouts in here */
	}
	/* end Android targeting */
	h2{
		color:#181818;
		font-family:Helvetica, Arial, sans-serif;
		font-size:22px;
		line-height: 22px;
		font-weight: normal;
	}
	a.link1{

	}
	a.link2{
		color:#313130;
		text-decoration:none;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		color:#313130;border-radius:4px;
	}
	p{
		color:#555;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		line-height:160%;
	}
	#capitalize {
		text-transform: capitalize;
	}
	</style>

	<script type="colorScheme" class="swatch active">
	{
		"name":"Default",
		"bgBody":"ffffff",
		"link":"fff",
		"color":"555555",
		"bgItem":"ffffff",
		"title":"181818"
	}
	</script>

	</head>
	<body>
	<!-- Wrapper/Container Table: Use a wrapper table to control the width and the background color consistently of your email. Use this approach instead of setting attributes on the body tag. -->
	<table cellpadding="0" width="100%" cellspacing="0" border="0" id="backgroundTable" class='bgBody'>
	<tr>
	<td>
	<table cellpadding="0" width="620" class="container" align="center" cellspacing="0" border="0">
	<tr>
	<td>
	<!-- Tables are the most common way to format your email consistently. Set your table widths inside cells and in most cases reset cellpadding, cellspacing, and border to zero. Use nested tables as a way to space effectively in your message. -->


	<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" class="container">
	<tr>
	<td class='movableContentContainer bgItem'>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="left" width="600" class="container">
	<tr height="40">
	<td width="80">&nbsp;</td>
	<td width="200">&nbsp;</td>
	<td width="200">&nbsp;</td>
	</tr>
	<tr>
	<td width="115" valign="top">&nbsp;</td>
	<td width="200" valign="top" align="left">
	<div class="contentEditableContainer contentImageEditable">
	<div class="contentEditable" align='left' >
	
	</div>
	</div>
	</td>
	<td width="50" valign="top">&nbsp;</td>
	</tr>

	</table>
	</div>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="800" class="container">
	<tr>
	<td width="100%" colspan="3" align="center" style="padding-bottom:0px;padding-top:0px;">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='center' >
	<h2 ></h2>
	</div>
	</div>
	</td>
	</tr>
	<tr>
	<td width="100">&nbsp;</td>
	<td width="400" align="center">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='left' >
	<h3 style="font-size: 40px;">Welcome to MMZee!
	</h3>
	<p style="text-transform: capitalize; color:#555;">Hi ${user.ownerName },</p>
	<br/>

	<p style="color:#555;">
        Your account and brand ${user.brandName} has been approved.
        <br/>
        <br/>
        My name is Zohaib Alvi, and I'm the Co-CEO of MMZee.
        <br/>
        <br/>

        I welcome you to the MMZee community and to help you start building stronger customer relationships across all digital channels.
        <br/>
        <br/>
        No matter the size or industry of your organization, you can be sure that you'll find the tools that you need... and maybe a few that you didn't even know you needed yet!
        <br/>
        <br/>
        You are creating this account for a client, as an agency or freelancer you can get listed on our agency directory free of charge.

        If you have any questions, don't hesitate to reach out. My team and I will be ready to help you in any way we can.
        <br/>
        <br/>
        <br/>
        Happy sending!
    </p>
	</div>
	</div>
	</td>
	<td width="100">&nbsp;</td>
	</tr>
	</table>
    <table cellpadding="0" cellspacing="0" border="0" align="left" width="600" class="container">
        <tr>
        <td width="85">&nbsp;</td>
        <td width="200" align="left" style="padding-top:25px;">
        <table cellpadding="0" cellspacing="0" border="0" align="center" width="200" height="50">
        <tr>
        <td bgcolor="#f0ff47" align="center" style="border-radius:4px;" width="200" height="50">
        <div class="contentEditableContainer contentTextEditable">
        <div class="contentEditable" align='center' >
        <a target='_blank' href="http://localhost:3000/" class='link2' style="text-decoration: none; color: #000;">Get started now</a>
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        <td width="200">&nbsp;</td>
        </tr>
        </table>
	</div>





	</td>
	</tr>
	</table>




	</td></tr></table>

	</td>
	</tr>
	</table>
	<!-- End of wrapper table -->

	</body>
	</html>`;
}


exports.orderPlaced = function(user,product,price){
	return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>[SUBJECT]</title>
	<style type="text/css">

	@media screen and (max-width: 600px) {
		table[class="container"] {
			width: 95% !important;
		}
	}

	#outlook a {padding:0;}
	body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}
	.ExternalClass {width:100%;}
	.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
	#backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
	img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}
	a img {border:none;}
	.image_fix {display:block;}
	p {margin: 1em 0;}
	h1, h2, h3, h4, h5, h6 {color: black !important;}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {color: blue !important;}

	h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active {
		color: red !important;
	}

	h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited {
		color: purple !important;
	}

	table td {border-collapse: collapse;}

	table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }

	a {color: #000;}

	@media only screen and (max-device-width: 480px) {

		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: black; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important; /* or whatever your want */
			pointer-events: auto;
			cursor: default;
		}
	}


	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: blue; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important;
			pointer-events: auto;
			cursor: default;
		}
	}

	@media only screen and (-webkit-min-device-pixel-ratio: 2) {
		/* Put your iPhone 4g styles in here */
	}

	@media only screen and (-webkit-device-pixel-ratio:.75){
		/* Put CSS for low density (ldpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1){
		/* Put CSS for medium density (mdpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1.5){
		/* Put CSS for high density (hdpi) Android layouts in here */
	}
	/* end Android targeting */
	h2{
		color:#181818;
		font-family:Helvetica, Arial, sans-serif;
		font-size:22px;
		line-height: 22px;
		font-weight: normal;
	}
	a.link1{

	}
	a.link2{
		color:#fff;
		text-decoration:none;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		color:#fff;border-radius:4px;
	}
	p{
		color:#555;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		line-height:160%;
	}
	#capitalize {
		text-transform: capitalize;
	}
	</style>

	<script type="colorScheme" class="swatch active">
	{
		"name":"Default",
		"bgBody":"ffffff",
		"link":"fff",
		"color":"555555",
		"bgItem":"ffffff",
		"title":"181818"
	}
	</script>

	</head>
	<body>
	<!-- Wrapper/Container Table: Use a wrapper table to control the width and the background color consistently of your email. Use this approach instead of setting attributes on the body tag. -->
	<table cellpadding="0" width="100%" cellspacing="0" border="0" id="backgroundTable" class='bgBody'>
	<tr>
	<td>
	<table cellpadding="0" width="620" class="container" align="center" cellspacing="0" border="0">
	<tr>
	<td>
	<!-- Tables are the most common way to format your email consistently. Set your table widths inside cells and in most cases reset cellpadding, cellspacing, and border to zero. Use nested tables as a way to space effectively in your message. -->


	<table cellpadding="0" cellspacing="0" border="0" align="left" width="600" class="container">
	<tr>
	<td class='movableContentContainer bgItem'>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="left" width="600" class="container">
	<tr height="40">
	<td width="80">&nbsp;</td>
	<td width="200">&nbsp;</td>
	<td width="200">&nbsp;</td>
	</tr>
	<tr>
	<td width="80" valign="top">&nbsp;</td>
	<td width="200" valign="top" align="left">
	<div class="contentEditableContainer contentImageEditable">
	<div class="contentEditable" align='left' >
	
	</div>
	</div>
	</td>
	<td width="200" valign="top">&nbsp;</td>
	</tr>

	</table>
	</div>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" class="container">
	<tr>
	<td width="100%" colspan="3" align="center" style="padding-bottom:0px;padding-top:0px;">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='center' >
	<h2 ></h2>
	</div>
	</div>
	</td>
	</tr>
	<tr>
	<td width="120">&nbsp;</td>
	<td width="400" align="left">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='left' >
<p>A user just placed an order through MMZEE application.</p>
	<br/>
	<h2 align="left">Order Details</h2>
	<p style="text-transform: capitalize;">User Name: ${user.fullName }
	<br/>
    <p >Product: ${product} </p>
	<p> Price: ${price} </p>
	<br/>
	<br/>
	<p>For more details go to <strong>MMZEE dashboard.</strong> seller-login -> dashboard -> notifications section.</p>
	</p>
	</div>
	</div>
	</td>
	<td width="100">&nbsp;</td>
  </tr>

        <tr>
        <td width="50">&nbsp;</td>
        <td width="200" align="left" style="padding-top:5px;">
        <table cellpadding="0" cellspacing="0" border="0" align="left" width="200" height="50">
        <tr>
        <td bgcolor="#f0ff47" align="left" style="border-radius:4px;" width="200" height="50">
        <div class="contentEditableContainer contentTextEditable">
        <div class="contentEditable" align='center' >
        <a target='_blank' href="http://localhost:3000/" class='link2' style="text-decoration: none; color: #000;">View Admin Dashboard</a>
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        <td width="200">&nbsp;</td>
        </tr>

	</table>
	<td width="200">&nbsp;</td>
	</tr>
	</table>
	</div>



	</td>
	</tr>
	</table>




	</td></tr></table>

	</td>
	</tr>
	</table>
	<!-- End of wrapper table -->

	</body>
	</html>

	`;
}


exports.notificationForOrder = function(user,product,price){
	return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>[SUBJECT]</title>
	<style type="text/css">

	@media screen and (max-width: 600px) {
		table[class="container"] {
			width: 95% !important;
		}
	}

	#outlook a {padding:0;}
	body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}
	.ExternalClass {width:100%;}
	.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
	#backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
	img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}
	a img {border:none;}
	.image_fix {display:block;}
	p {margin: 1em 0;}
	h1, h2, h3, h4, h5, h6 {color: black !important;}

	h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {color: blue !important;}

	h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active {
		color: red !important;
	}

	h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited {
		color: purple !important;
	}

	table td {border-collapse: collapse;}

	table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }

	a {color: #000;}

	@media only screen and (max-device-width: 480px) {

		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: black; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important; /* or whatever your want */
			pointer-events: auto;
			cursor: default;
		}
	}


	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
		a[href^="tel"], a[href^="sms"] {
			text-decoration: none;
			color: blue; /* or whatever your want */
			pointer-events: none;
			cursor: default;
		}

		.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
			text-decoration: default;
			color: orange !important;
			pointer-events: auto;
			cursor: default;
		}
	}

	@media only screen and (-webkit-min-device-pixel-ratio: 2) {
		/* Put your iPhone 4g styles in here */
	}

	@media only screen and (-webkit-device-pixel-ratio:.75){
		/* Put CSS for low density (ldpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1){
		/* Put CSS for medium density (mdpi) Android layouts in here */
	}
	@media only screen and (-webkit-device-pixel-ratio:1.5){
		/* Put CSS for high density (hdpi) Android layouts in here */
	}
	/* end Android targeting */
	h2{
		color:#181818;
		font-family:Helvetica, Arial, sans-serif;
		font-size:22px;
		line-height: 22px;
		font-weight: normal;
	}
	a.link1{

	}
	a.link2{
		color:#fff;
		text-decoration:none;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		color:#fff;border-radius:4px;
	}
	p{
		color:#555;
		font-family:Helvetica, Arial, sans-serif;
		font-size:16px;
		line-height:160%;
	}
	#capitalize {
		text-transform: capitalize;
	}
	</style>

	<script type="colorScheme" class="swatch active">
	{
		"name":"Default",
		"bgBody":"ffffff",
		"link":"fff",
		"color":"555555",
		"bgItem":"ffffff",
		"title":"181818"
	}
	</script>

	</head>
	<body>
	<!-- Wrapper/Container Table: Use a wrapper table to control the width and the background color consistently of your email. Use this approach instead of setting attributes on the body tag. -->
	<table cellpadding="0" width="100%" cellspacing="0" border="0" id="backgroundTable" class='bgBody'>
	<tr>
	<td>
	<table cellpadding="0" width="620" class="container" align="center" cellspacing="0" border="0">
	<tr>
	<td>
	<!-- Tables are the most common way to format your email consistently. Set your table widths inside cells and in most cases reset cellpadding, cellspacing, and border to zero. Use nested tables as a way to space effectively in your message. -->


	<table cellpadding="0" cellspacing="0" border="0" align="left" width="600" class="container">
	<tr>
	<td class='movableContentContainer bgItem'>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="left" width="600" class="container">
	<tr height="40">
	<td width="80">&nbsp;</td>
	<td width="200">&nbsp;</td>
	<td width="200">&nbsp;</td>
	</tr>
	<tr>
	<td width="80" valign="top">&nbsp;</td>
	<td width="200" valign="top" align="left">
	<div class="contentEditableContainer contentImageEditable">
	<div class="contentEditable" align='left' >
	
	</div>
	</div>
	</td>
	<td width="200" valign="top">&nbsp;</td>
	</tr>

	</table>
	</div>

	<div class='movableContent'>
	<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" class="container">
	<tr>
	<td width="100%" colspan="3" align="center" style="padding-bottom:0px;padding-top:0px;">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='center' >
	<h2 ></h2>
	</div>
	</div>
	</td>
	</tr>
	<tr>
	<td width="120">&nbsp;</td>
	<td width="400" align="left">
	<div class="contentEditableContainer contentTextEditable">
	<div class="contentEditable" align='left' >
<p>A user just placed an order through MMZEE application.</p>

	<br/>
	<h2 align="left">Order Details</h2>
	<p style="text-transform: capitalize;">User Name: ${user.fullName }
	<br/>
    <p >Product: ${product} </p>
	<p> Price: ${price} </p>
	<br/>
	<br/>
	</p>
	</div>
	</div>
	</td>
	<td width="100">&nbsp;</td>
  </tr>

        <tr>
        <td width="50">&nbsp;</td>
        <td width="200" align="left" style="padding-top:5px;">
        <table cellpadding="0" cellspacing="0" border="0" align="left" width="200" height="50">
        <tr>
        <td bgcolor="#f0ff47" align="left" style="border-radius:4px;" width="200" height="50">
        <div class="contentEditableContainer contentTextEditable">
        <div class="contentEditable" align='center' >
        <a target='_blank' href="http://localhost:3000/" class='link2' style="text-decoration: none; color: #000;">View Admin Dashboard</a>
        </div>
        </div>
        </td>
        </tr>
        </table>
        </td>
        <td width="200">&nbsp;</td>
        </tr>

	</table>
	<td width="200">&nbsp;</td>
	</tr>
	</table>
	</div>



	</td>
	</tr>
	</table>




	</td></tr></table>

	</td>
	</tr>
	</table>
	<!-- End of wrapper table -->

	</body>
	</html>

	`;
}