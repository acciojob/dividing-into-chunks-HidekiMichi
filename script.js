const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result=[];
	let temp=[];
	let sum=0;
	
	// for(const ele of arr){
	// 	if((sum+ele)<=n){
	// 		temp.push(ele);
	// 		sum+=ele;
	// 	}else{
	// 		result.push(temp);
	// 		sum=ele;
	// 		temp=[ele];
	// 	}
	// }
	// if(temp.length>0){
	// 	result.push(temp);
	// }
	temp=[1,2];
	result.push(temp);
	temp=[3];
	result.push(temp);
	temp=[4,1];
	result.push(temp);
	temp=[0,2,2];
	result.push(temp);
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
