function Palindrome()
	{
		let i, j, k  = 0;
		let input = document.getElementById("number").value;
		if(isNaN(input)){
			document.getElementById("result").innerText ="Please Enter Number";
			document.getElementById("result").style.color = "red";
			return false;
		}
		j = input;
		while(input>0)
		{
			i = input%10;
			input = parseInt(input/10);
			k = k*10+i;
		}
		if(k == j)
		{
            document.getElementById("result").innerText = " Yes. This is Palindrome ";
			document.getElementById("result").style.color = "green";
		}
		else
		{
			document.getElementById("result").innerText ="No. Try Again";
			document.getElementById("result").style.color = "red";
		}
	}