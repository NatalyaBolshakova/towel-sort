
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arrR = [];
  if (matrix === undefined || matrix == ''){
    return arrR;
  }
  
  let count;
   
  for (let i = 0; i < matrix.length; i++){
    count = matrix[i].length
    
    for (let j = 0; j < matrix[0].length; j++){
      
        if (i == 0 || (i % 2 == 0)){
        arrR.push(matrix[i][j]);
         
        } else {
        count =  count - 1;            
        arrR.push(matrix[i][count]);        
        }
    } 
    return arrR;
    }
}
