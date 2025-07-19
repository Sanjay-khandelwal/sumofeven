export function myFunction(element) {
  let sum=0;
  element.map((curr)=>{
    if(curr%2==0){
      sum+=curr;
    }
  })
  return sum;
}
