const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result=[];
	let sum=0,temp=[];
	
	for(const ele of arr){
		if((sum+ele)<=n){
			temp.push(ele);
			sum+=ele;
		}else{
			result.push(temp);
			sum=arr[j];
			temp=[arr[j]];
		}
	}
	result[i]=temp;
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));