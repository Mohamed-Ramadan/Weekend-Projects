
function validateForm()
{
	var goodColor = "#66cc66";
	var badColor = "#800000";
	whiteColor = "#ffffff";

  	var anything = document.forms["contactform"]["first_name"].value;

	if(anything == null || anything == "")
	{
		document.forms["contactform"]["first_name"].style.background = badColor;
		//document.getElementById("error!").innerHTML ="*Please inter a First Name*";
		alert("الرجاء إدخال الاسم الاول");
		return false;
	}		
	else{
		document.forms["contactform"]["first_name"].style.background = whiteColor;		
	}

//---------------------------------------------------------------

  	var anything = document.forms["contactform"]["last_name"].value;

	if(anything == null || anything == "")
	{
		document.forms["contactform"]["last_name"].style.background = badColor;
		alert("الرجاء إدخال الاسم الاخير");
		return false;
	}		
	else{
		document.forms["contactform"]["last_name"].style.background = whiteColor;		
	}

//----------------------------------------------------------------

  	var anything = document.forms["contactform"]["nID"].value;

	if(anything == null || anything == "")
	{
		document.forms["contactform"]["nID"].style.background = badColor;
		alert("الرجاء إدخال الرقم القومى");
		return false;
	}		
	else{
		document.forms["contactform"]["nID"].style.background = whiteColor;		
	}
	
	var test = anything;
	for(var i = 0; i < test.length; i++)
	{
		var c = test.substring(i, i+1);
		if(c != "0" && c != "1" &&  c != "2" &&  c != "3" &&  c != "4"
		    &&  c != "5" &&  c != "6" &&  c != "7" &&  c != "8" &&  c != "9")
		{
		document.forms["contactform"]["nID"].style.background = badColor;
		alert("الرجاء إدخال الرقم القومى أرقام فقط");
		return false;
		}
	}

//-----------------------------------------------------------------------------
	var anything = document.forms["contactform"]["telephone"].value;
	
	if(anything == null || anything == "")
	{
		document.forms["contactform"]["telephone"].style.background = badColor;
		alert("الرجاء إدخال رقم التليفون");
		return false;
	}		
	else{
		document.forms["contactform"]["telephone"].style.background = whiteColor;		
	}
	
	var test = anything
	
	for(var i = 0; i < test.length; i++)
	{
		var c = test.substring(i, i+1);
		if(c != "0" && c != "1" &&  c != "2" &&  c != "3" &&  c != "4"
		    &&  c != "5" &&  c != "6" &&  c != "7" &&  c != "8" &&  c != "9")
		{
			document.forms["contactform"]["telephone"].style.background = badColor;
			alert("الرجاء إدخال رقم التليفون أرقام فقط");
			return false;
		}
	}
	
	

//---------------------------------------------------------------

  	var anything = document.forms["contactform"]["job"].value;

	if(anything == null || anything == "")
	{
		document.forms["contactform"]["job"].style.background = badColor;
		alert("الرجاء إدخال الوظيفة");
		return false;
	}
	else{
		document.forms["contactform"]["job"].style.background = whiteColor;		
	}

//----------------------------------------------------------

  	var anything = document.forms["contactform"]["email"].value;
	var atpos = anything.indexOf("@");
	var dotpos = anything.lastIndexOf(".");

	if(anything == null || anything == "")
	{
		document.forms["contactform"]["email"].style.background = badColor;
		alert("الرجاء إدخال البريد الالكترونى");
		return false;
	}
	else{
		document.forms["contactform"]["email"].style.background = whiteColor;		
	}

	if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >= anything.length)		
	{
		document.forms["contactform"]["email"].style.background = badColor;
		alert("هذا البريد الالكترونى غير صحيح , من فضلك ادخل بريد الكترونى صحيح");
		return false;
	}
	else{
		document.forms["contactform"]["email"].style.background = whiteColor;		
	}
//----------------------------------------------------------------


  	var anything = document.forms["contactform"]["department"].value;

	if(anything == null || anything == "")
	{
		document.forms["contactform"]["department"].style.background = badColor;
		alert("الرجاء إدخال القسم");
	return false;
	}
	else{
		document.forms["contactform"]["department"].style.background = whiteColor;		
	}
	
//----------------------------------------------------------------


  	var anything = document.forms["contactform"]["comments"].value;

	if(anything == null || anything == "")
	{
		//document.forms["contactform"]["comments"].style.background = badColor;
		alert("الرجاء ادخال الموضوع");
		return false;
	}
	else{
		document.forms["contactform"]["comments"].style.background = whiteColor;		
	}
	
	if(anything.length < 2){
		document.forms["contactform"]["comments"].style.background = badColor;
		alert("من فضلك ادخل عدد حروف لا يقل عن 2 حرف");
		return false;
	}

//--------------------------------------------------------------------	

}
