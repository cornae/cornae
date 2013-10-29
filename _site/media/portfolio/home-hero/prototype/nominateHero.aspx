<%@ Page Language="C#" AutoEventWireup="true" CodeFile="NominateHero.aspx.cs" Inherits="_NominateHero" Title="" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">



<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<title>HomeHero — Safety. Plan on it.</title>
	<link rel="stylesheet" type="text/css" media="screen" href="style/base/screen.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="style/nominateHero/screen.css" />
<script src="behaviour/mootools.v1.11.js" type="text/javascript" charset="utf-8">
</script>
<script src="behaviour/behaviour.js" type="text/javascript" charset="utf-8">
</script>
<script src="behaviour/iePNGfix.js" type="text/javascript" charset="utf-8">
</script>
<script src="behaviour/sifr.js" type="text/javascript" charset="utf-8"></script>
</head>

<body id="nominateHero" class="beAHomeHero">

	<div id="main">
		<div id="content">
			<div id="head">
				<h1 id="logo"><a href="index.html"><strong>HomeHero</strong></a> <sub>Safety. Plan on it.</sub></h1>

				<div id="menuBar">
					<ul id="mainMenu">
						<li id="menuProductInformation"><a href="productInformation.html"><em>Product Information</em></a></li>

						<li id="menuFireSafetyTips"><a href="fireSafetyTips.html"><em>Home Safety Tips</em></a></li>

						<li id="menuBeAHomeHero"><a href="beAHomeHero.html"><em>Be a HomeHero™</em></a></li>

						<li id="menuMyHomeSafety"><a href="myHomeSafety.html"><em>My Home Safety</em></a></li>

						<li id="menuUpcomingEvents"><a href="upcomingEvents.html"><em>Upcoming Events</em></a></li>
					</ul>
				</div>
			</div>
            
			<div id="mainContent">
			<form id="Form1" runat="server">
				
				<!-- Editable region starts here -->
                
				<div id="contentSectionA">					
                    <h2>Nominate Your HomeHero&trade;</h2>
                    <!-- The page title position may be the the first child of either #contentSectionA or #contentSectionB, depending on the page layout requirements.  -->
					<p>Fill out the form below to tell us about your HomeHero. We will select the most outstanding acts of heroism to feature. <br />(Note: Please nominate each person once only.)
					<br /><br />*Required fields marked with asterisks.</p>
				</div>
				
				<div id="introduction">
                      
                    </div>
					
				<div id="mainText">
				<div id="heroImage"></div>&nbsp;
				    <div id="redLine"><img src="style/nominateHero/NominateHeroRedLine.jpg" /></div>
                    <div id="contentArea">                        
                        <div id="column1" class="heroForm">
                            <h3>Your Info</h3>
                            <h4>Tell us about yourself.</h4>                            
                            <ul>
                                <li>First Name<asp:TextBox ID="txtYourFirstName" runat="server" TabIndex="2"></asp:TextBox></li>
                                <li>Last Name<asp:TextBox ID="txtYourLastName" runat="server" TabIndex="4"></asp:TextBox></li>
                                <li>City<asp:TextBox ID="txtYourCity" runat="server" TabIndex="6"></asp:TextBox></li>
                                <li>
                                    <div>Zip
                                        <asp:TextBox ID="txtyourZipCode" runat="server" TabIndex="10"></asp:TextBox>
                                    </div>
                                    State<asp:DropDownList ID="ddlYourState" runat="server" TabIndex="8">
                                    <asp:ListItem Selected="True">Alabama</asp:ListItem>
                                    <asp:ListItem>Alaska</asp:ListItem>
                                    <asp:ListItem>Arizona</asp:ListItem>
                                    <asp:ListItem>Arkansas</asp:ListItem>
                                    <asp:ListItem>California</asp:ListItem>
                                    <asp:ListItem>Colorado</asp:ListItem>
                                    <asp:ListItem>Connecticut</asp:ListItem>
                                    <asp:ListItem>Delaware</asp:ListItem>
                                    <asp:ListItem>Florida</asp:ListItem>
                                    <asp:ListItem>Georgia</asp:ListItem>
                                    <asp:ListItem>Hawaii</asp:ListItem>
                                    <asp:ListItem>Idaho</asp:ListItem>
                                    <asp:ListItem>Illinois</asp:ListItem>
                                    <asp:ListItem>Indiana</asp:ListItem>
                                    <asp:ListItem>Iowa</asp:ListItem>
                                    <asp:ListItem>Kansas</asp:ListItem>
                                    <asp:ListItem>Kentucky</asp:ListItem>
                                    <asp:ListItem>Louisiana</asp:ListItem>
                                    <asp:ListItem>Maine</asp:ListItem>
                                    <asp:ListItem>Maryland</asp:ListItem>
                                    <asp:ListItem>Massachusetts</asp:ListItem>
                                    <asp:ListItem>Michigan</asp:ListItem>
                                    <asp:ListItem>Minnesota</asp:ListItem>
                                    <asp:ListItem>Mississippi</asp:ListItem>
                                    <asp:ListItem>Missouri</asp:ListItem>
                                    <asp:ListItem>Montana</asp:ListItem>
                                    <asp:ListItem>Nebraska</asp:ListItem>
                                    <asp:ListItem>Nevada</asp:ListItem>
                                    <asp:ListItem>New Hampshire</asp:ListItem>
                                    <asp:ListItem>New Jersey</asp:ListItem>
                                    <asp:ListItem>New Mexico</asp:ListItem>
                                    <asp:ListItem>New York</asp:ListItem>
                                    <asp:ListItem>North Carolina</asp:ListItem>
                                    <asp:ListItem>North Dakota</asp:ListItem>
                                    <asp:ListItem>Ohio</asp:ListItem>
                                    <asp:ListItem>Oklahoma</asp:ListItem>
                                    <asp:ListItem>Oregon</asp:ListItem>
                                    <asp:ListItem>Pennsylvania</asp:ListItem>
                                    <asp:ListItem>Rhode Island</asp:ListItem>
                                    <asp:ListItem>South Carolina</asp:ListItem>
                                    <asp:ListItem>South Dakota</asp:ListItem>
                                    <asp:ListItem>Tennessee</asp:ListItem>
                                    <asp:ListItem>Texas</asp:ListItem>
                                    <asp:ListItem>Utah</asp:ListItem>
                                    <asp:ListItem>Vermont</asp:ListItem>
                                    <asp:ListItem>Virginia</asp:ListItem>
                                    <asp:ListItem>Washington</asp:ListItem>
                                    <asp:ListItem>West Virginia</asp:ListItem>
                                    <asp:ListItem>Wisconsin</asp:ListItem>
                                    <asp:ListItem>Wyoming</asp:ListItem>                                    
                                  </asp:DropDownList></li>
                                  <li>email<asp:TextBox ID="txtYourEmail" runat="server" TabIndex="12"></asp:TextBox></li>
                                
                            <li>Phone Number<asp:TextBox ID="txtYourPhoneNumber" runat="server" TabIndex="14"></asp:TextBox></li>
                            <li>Date of Birth<asp:TextBox ID="txtYourDateOfBirth" runat="server" TabIndex="16"></asp:TextBox><span>(mm/dd/yyyy)</span>
                            <br />Note: We may contact you for more information about your nominee.</li>
                            </ul>
                        </div>
                        
                        <div id="column3">
                        <ul>
                            <li>WhichActOfHeroism did your<br /> HomeHero Perform?"
                            <asp:RadioButtonList ID="rblActOfHeroism" runat="server" TabIndex="100">
                                <asp:ListItem>Fire Prevention</asp:ListItem>
                                <asp:ListItem>Fire Responsiveness</asp:ListItem>
                                <asp:ListItem>Carbon Monoxide Responsiveness</asp:ListItem>
                                <asp:ListItem>Outdoor Fire Safety</asp:ListItem>
                            </asp:RadioButtonList></li>
                            <li>Why does your nominee deserve to be <br />a HomeHero?</li>
                            <li><span>Please describe in detail your nominee's specific actions and how he/she accomplished the <br />task. (200 word maximum)</span>                            
                                <asp:TextBox ID="txtDeserve" runat="server" TabIndex="60"></asp:TextBox></li>
                            <li>How have your  nominee's efforts made a difference for the better?</li>
                            <li><span>Please describe their impact, potential impact and how they have inspired others. (100 word maximum)</span>
                            <asp:TextBox ID="txtDifference" runat="server" TabIndex="62"></asp:TextBox></li>
                          </ul>                            
                            <asp:ImageButton ImageUrl="~/style/nominateHero/NominateHeroSubmit.gif" ID="ImageButton1" runat="server" OnClick="ImageButton1_Click" TabIndex="64" />
                            <asp:ImageButton ImageUrl="~/style/nominateHero/NominateHeroReset.gif" ID="ImageButton2" runat="server" OnClick="ImageButton2_Click" TabIndex="66" />
                        </div>

                        <div id="column2">
                        <h3>Your HomeHero</h3>
                        <h4>Now tell us about your HomeHero.</h4>
                        <ul>
                            <li>First Name<asp:TextBox ID="txtHeroFirstName" runat="server" TabIndex="18"></asp:TextBox></li>
                            <li>Last Name<asp:TextBox ID="txtHeroLastName" runat="server" TabIndex="20"></asp:TextBox></li>
                            <li>City<asp:TextBox ID="txtHeroCity" runat="server" TabIndex="22"></asp:TextBox></li>
                            <li><div>Zip<asp:TextBox ID="txtHeroZip" runat="server" TabIndex="26"></asp:TextBox></div>State
                            <asp:DropDownList ID="ddlHeroState" runat="server" TabIndex="24">
                                <asp:ListItem Selected="True">Alabama</asp:ListItem>
                                <asp:ListItem>Alaska</asp:ListItem>
                                <asp:ListItem>Arizona</asp:ListItem>
                                <asp:ListItem>Arkansas</asp:ListItem>
                                <asp:ListItem>California</asp:ListItem>
                                <asp:ListItem>Colorado</asp:ListItem>
                                <asp:ListItem>Connecticut</asp:ListItem>
                                <asp:ListItem>Delaware</asp:ListItem>
                                <asp:ListItem>Florida</asp:ListItem>
                                <asp:ListItem>Georgia</asp:ListItem>
                                <asp:ListItem>Hawaii</asp:ListItem>
                                <asp:ListItem>Idaho</asp:ListItem>
                                <asp:ListItem>Illinois</asp:ListItem>
                                <asp:ListItem>Indiana</asp:ListItem>
                                <asp:ListItem>Iowa</asp:ListItem>
                                <asp:ListItem>Kansas</asp:ListItem>
                                <asp:ListItem>Kentucky</asp:ListItem>
                                <asp:ListItem>Louisiana</asp:ListItem>
                                <asp:ListItem>Maine</asp:ListItem>
                                <asp:ListItem>Maryland</asp:ListItem>
                                <asp:ListItem>Massachusetts</asp:ListItem>
                                <asp:ListItem>Michigan</asp:ListItem>
                                <asp:ListItem>Minnesota</asp:ListItem>
                                <asp:ListItem>Mississippi</asp:ListItem>
                                <asp:ListItem>Missouri</asp:ListItem>
                                <asp:ListItem>Montana</asp:ListItem>
                                <asp:ListItem>Nebraska</asp:ListItem>
                                <asp:ListItem>Nevada</asp:ListItem>
                                <asp:ListItem>New Hampshire</asp:ListItem>
                                <asp:ListItem>New Jersey</asp:ListItem>
                                <asp:ListItem>New Mexico</asp:ListItem>
                                <asp:ListItem>New York</asp:ListItem>
                                <asp:ListItem>North Carolina</asp:ListItem>
                                <asp:ListItem>North Dakota</asp:ListItem>
                                <asp:ListItem>Ohio</asp:ListItem>
                                <asp:ListItem>Oklahoma</asp:ListItem>
                                <asp:ListItem>Oregon</asp:ListItem>
                                <asp:ListItem>Pennsylvania</asp:ListItem>
                                <asp:ListItem>Rhode Island</asp:ListItem>
                                <asp:ListItem>South Carolina</asp:ListItem>
                                <asp:ListItem>South Dakota</asp:ListItem>
                                <asp:ListItem>Tennessee</asp:ListItem>
                                <asp:ListItem>Texas</asp:ListItem>
                                <asp:ListItem>Utah</asp:ListItem>
                                <asp:ListItem>Vermont</asp:ListItem>
                                <asp:ListItem>Virginia</asp:ListItem>
                                <asp:ListItem>Washington</asp:ListItem>
                                <asp:ListItem>West Virginia</asp:ListItem>
                                <asp:ListItem>Wisconsin</asp:ListItem>
                                <asp:ListItem>Wyoming</asp:ListItem>
                            </asp:DropDownList>
                            
                            <li>email<asp:TextBox ID="txtHeroEmail" runat="server" TabIndex="28"></asp:TextBox></li>
                            <li>Phone Number<asp:TextBox ID="txtHeroPhoneNumber" runat="server" TabIndex="30"></asp:TextBox></li>
                            <li>Age                            
                            <asp:RadioButtonList ID="rblHeroAge" runat="server" TabIndex="40">
                                <asp:ListItem>Under 18</asp:ListItem>
                                <asp:ListItem>19 - 35</asp:ListItem>
                                <asp:ListItem>35 - 55</asp:ListItem>
                                <asp:ListItem>Over 55</asp:ListItem>
                            </asp:RadioButtonList></li>
                            <li>Your Hero is Your
                            <asp:RadioButtonList ID="RadioButtonList2" runat="server" RepeatColumns="2" TabIndex="50" >
                                <asp:ListItem>Mom</asp:ListItem>
                                <asp:ListItem>Dad</asp:ListItem>
                                <asp:ListItem>Sister</asp:ListItem>
                                <asp:ListItem>Brother</asp:ListItem>
                                <asp:ListItem>Friend</asp:ListItem>                                
                                <asp:ListItem>Grandmother</asp:ListItem>
                                <asp:ListItem>Grandfather</asp:ListItem>
                                <asp:ListItem>Aunt</asp:ListItem>
                                <asp:ListItem>Uncle</asp:ListItem>
                                <asp:ListItem>Cousin</asp:ListItem>
                            </asp:RadioButtonList>
                            <span><asp:RadioButton GroupName="RadioButtonList2" id="EmergencyPersonnel" runat=server Text="Emergency Personnel" TabIndex="55"/></span>
                            </li>
                            </ul>
                        </div>                        
                    </div>
				</div>
				
			</form>
			</div>


			<div id="footer">
				<!-- The footer division and its child divisions is optional -->
				<div id="footerSectionA">
					
				</div>

				<div id="footerSectionB">
					
				</div>
			</div>

			<!-- Editable region ends here -->
			
		</div>
	<div id="appendix">
		<p id="quickLinks"><a href="index.html">Home</a> | <a href="termsOfUse.html">Terms of Use</a> | <a target="_blank" href="http://corporate.homedepot.com/wps/portal/Privacy_Security">Privacy Policy</a> | <a href="faq.html">FAQ</a> | <a href="aboutUs.html">About Us</a> | <a href="contactUs.html">Contact Us</a></p>
	</div>
	<script src="behaviour/s_code_HomeHero.js" type="text/javascript" charset="utf-8">
    </script>
    <script type="text/javascript" >
    s.pageName="Nominate-Form";
    s.channel="";
    s.hier1="";
    s.eVar3="";

    </script>
</body>
</html>
