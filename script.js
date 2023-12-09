const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let i=0,sum=0,result=[],temp=[];
	for(let j=0;j<arr.length;j++){
		sum+=arr[j];
		if(sum<=n){
			temp.push(arr[j]);
		}else{
			result[i]=temp;
			i++;
			temp=[];
			sum=0;
			sum+=arr[j];
			temp.push(arr[j]);
		}
	}
	result[i]=temp;
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));