<%@ Page Language="C#" AutoEventWireup="true" CodeFile="RequestInfo.aspx.cs" Inherits="_RequestInfo" Title="" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<title>HomeHero — Safety. Plan on it.</title>
	<link rel="stylesheet" type="text/css" media="screen" href="style/base/screen.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="style/requestInfo/screen.css" />
<script src="behaviour/mootools.v1.11.js" type="text/javascript" charset="utf-8">
</script>
<script src="behaviour/behaviour.js" type="text/javascript" charset="utf-8">
</script>
<script src="behaviour/iePNGfix.js" type="text/javascript" charset="utf-8">
</script>
<script src="behaviour/sifr.js" type="text/javascript" charset="utf-8"></script>
</head>

<body id="requestInfo" class="productInformation">
    <form id="Form1" runat="server">
	<div id="main">
		<div id="content">
			<span id="panelGlobalNavigation" class="nonVisualGuide"><a href="#contentSectionA">Jump to content</a></span>
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
				
				<!-- Editable region starts here -->
				
				<div id="contentSectionA">
			        <img id="HeroImage" src="style/requestInfo/ProductRequestHeroImage1.gif" alt="" />
					<img id="ProductImage2" src="style/requestInfo/ProductRequestProduct2.gif" alt=""/>
					<div style="width:400px;overflow:hidden;"><h2 style="background-image:none;">Product Information</h2></div>
					<h3 class="subHeader" style="margin-top:-10px;padding-left:65px;">Request Email Notification</h3>
					<div id="mainText">
					<p>Thank you for your interest in the revolutionary HomeHero Fire Safety and Prevention products.  Please fill out our form if you would like us to notify you once the HomeHero products are available for purchase at The Home Depot nearest you.</p>
					</div>
					
                    <img id="TopImage" src="style/requestInfo/ProductRequestBottomImage-T.gif" />
                    <table id="QuestionsTable">
                        <tr>
                            <td class="QuestionColumn1" ><p>Are you the head of household?</p></td>
                            <td class="AnswerColumn">
                                <div style="color:#666666;font-size:11px;line-height:18px;">
                                <asp:RadioButtonList ID="rblGender" runat="server" RepeatDirection="Horizontal">
                                    <asp:ListItem>M</asp:ListItem>
                                    <asp:ListItem>F</asp:ListItem>
                                </asp:RadioButtonList></div></td>
                        </tr>
                        <tr >
                            <td class="QuestionColumn2"><p>How many smoke detectors do you have in your home?</p></td>
                            <td class="AnswerColumn">
                                &nbsp;&nbsp;<asp:DropDownList ID="ddlSmokeDetectors" runat="server" Width="95px">
                                    <asp:ListItem Selected="True">0</asp:ListItem>
                                    <asp:ListItem>1</asp:ListItem>
                                    <asp:ListItem>2</asp:ListItem>
                                    <asp:ListItem>3</asp:ListItem>
                                    <asp:ListItem>4</asp:ListItem>
                                </asp:DropDownList></td>
                        </tr>
                        <tr >
                            <td class="QuestionColumn2"><p>How many fire extinguishers do you have in your home?</p></td>
                            <td class="AnswerColumn">
                                &nbsp;&nbsp;<asp:DropDownList ID="ddlFireExtinguishers" runat="server" Width="95px">
                                    <asp:ListItem Selected="True">0</asp:ListItem>
                                    <asp:ListItem>1</asp:ListItem>
                                    <asp:ListItem>2</asp:ListItem>
                                    <asp:ListItem>3</asp:ListItem>
                                    <asp:ListItem>4</asp:ListItem>
                                </asp:DropDownList></td>
                        </tr>
                        <tr >
                            <td class="QuestionColumn2"><p>How many carbon monoxide detectors do you have in your home?</p></td>
                            <td class="AnswerColumn">
                                 &nbsp;&nbsp;<asp:DropDownList ID="ddlCarbonMonoxide" runat="server" Width="95px">
                                    <asp:ListItem Selected="True">0</asp:ListItem>
                                    <asp:ListItem>1</asp:ListItem>
                                    <asp:ListItem>2</asp:ListItem>
                                    <asp:ListItem>3</asp:ListItem>
                                    <asp:ListItem>4</asp:ListItem>
                                </asp:DropDownList></td>
                        </tr>
                        <tr >
                            <td class="QuestionColumn1"><p>How did you hear about HomeHero?</p></td>
                            <td class="AnswerColumn">
                                &nbsp;&nbsp;<asp:DropDownList ID="ddlHowHeard" runat="server" Width="95px">
                                    <asp:ListItem Selected="True">Newspaper</asp:ListItem>
                                    <asp:ListItem>Radio</asp:ListItem>
                                    <asp:ListItem>TV</asp:ListItem>
                                    <asp:ListItem>Internet</asp:ListItem>
                                    <asp:ListItem>In-store</asp:ListItem>
                                    <asp:ListItem>Mail</asp:ListItem>
                                    <asp:ListItem>Neighbor</asp:ListItem>
                                    <asp:ListItem>Magazine</asp:ListItem>
                                    <asp:ListItem>Other</asp:ListItem>
                                </asp:DropDownList>
                            </td>                        
                        </tr>
                    </table>
                    <table id="Table1">
                        <tr>
                            <td class="QuestionColumn1" ><p>What attracted you to HomeHero?</p></td>
                            <td class="AnswerColumn2">
                                <div style="color:#666666;font-size:11px;line-height:18px">
                                    <asp:CheckBoxList ID="cblAttracted" runat="server" RepeatColumns="3" RepeatDirection="Horizontal" Width="480px">
                                        <asp:ListItem>Stylish design</asp:ListItem>
                                        <asp:ListItem>Wireless connectivity</asp:ListItem>
                                        <asp:ListItem>Smoke and CO alarm in one unit</asp:ListItem>
                                        <asp:ListItem>Voice command</asp:ListItem>
                                        <asp:ListItem>Brand / Reputation</asp:ListItem>
                                        <asp:ListItem>Other</asp:ListItem>
                                    </asp:CheckBoxList>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table id="Table2">
                        <tr>
                            <td style="width:100px;vertical-align:middle"><p>EMAIL ADDRESS:</p></td>
                            <td style="width:270px;">
                                <asp:TextBox ID="txtEmail" runat="server" Width="252px"></asp:TextBox>
                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtEmail"
                                    Display="Dynamic" ErrorMessage="*" SetFocusOnError="True"></asp:RequiredFieldValidator>
                                <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ControlToValidate="txtEmail"
                                    Display="Dynamic" ErrorMessage="*" SetFocusOnError="True" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator></td>
                            <td style="width:228px;">
                                <asp:ImageButton ID="btnSubmitImage" runat="server" ImageUrl="~/style/requestInfo/ProductRequestSubmit.gif" OnClick="ImageButton1_Click" />
                            </td>
                        </tr>
                    </table>

                    
				</div>
				
				
			</div>

			<div id="contentSectionB">

			</div>
<img id="BottomImage" src="style/requestInfo/ProductRequestBottomImage-B.gif" /><img id="BottomImageFooter" src="style/base/footerBottom.gif" />
			<div id="footer">
				<!-- The footer division and its child divisions is optional -->

			</div>


			<!-- Editable region ends here -->
			
		</div>
	</div>

	<div id="appendix">
		<p id="quickLinks"><a href="index.html">Home</a> | <a href="termsOfUse.html">Terms of Use</a> | <a target="_blank" href="http://corporate.homedepot.com/wps/portal/Privacy_Security">Privacy Policy</a> | <a href="faq.html">FAQ</a> | <a href="aboutUs.html">About Us</a> | <a href="contactUs.html">Contact Us</a></p>
	</div>
			<script src="behaviour/s_code_HomeHero.js" type="text/javascript" charset="utf-8">
            </script>
            <script type="text/javascript" >
            s.pageName="ProdInfo-Form";
            s.channel="";
            s.hier1="";
            s.eVar3="";

            </script>    
    </form>
</body>
</html>
