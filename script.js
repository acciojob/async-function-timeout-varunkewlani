
let btn=document.getElementById("btn");
let output=document.getElementById("output");

const promise=()=>
	{
		let text=document.getElementById("text").value; 
		let delay=document.getElementById("delay").value;
		return new Promise((resolve,reject)=>
			{
				setTimeout(()=>
				{
					resolve(text);
				},delay);
			})
	}

btn.addEventListener("click", async function() 
{
	try 
	{
        output.innerHTML = await promise();	
	} 
	catch (error) 
	{
		console.log(error)
	}
});