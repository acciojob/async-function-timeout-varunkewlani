//your JS code here. If required.
let text=document.getElementByID("text").value;
let delay=document.getElementByID("delay").value;
let btn=document.getElementByID("btn");
let output=document.getElementByID("output");

const promise=()=>
	{
		return new Promise((resolve,reject)=>
			{
				setTimeout(()=>
				{
					resolve(text);
				},delay)
			})
	}
}
btn.addEventListener("click",async function 
{
	try 
	{
		let result = await delayText(text, delay);
        output.innerHTML = result;	
	} 
	catch (error) 
	{
		console.log(error)
	}
});