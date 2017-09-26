  // Rotate +90
 function rotate90(matrix) {

   matrix = transpose(matrix);
   matrix.map(function(array) {
     array.reverse();
   });

   return matrix;
 }

  // Rotate -90
 function counterRotate90(matrix) {
   
   var result = createEmptyMatrix(matrix.length);
   matrix = transpose(matrix);
   var counter = 0;

   for (var i = matrix.length - 1; i >= 0; i--) {
     result[counter] = matrix[i];
     counter++;
   }

   return result;
 }

  // Create empty matrix
 function createEmptyMatrix(len) {
  
   var result = new Array();
   
   for (var i = 0; i < len; i++) {
     result.push([]);
   }
   
   return result;
 }

  // Transpose the matrix
 function transpose(matrix) {
  
   // make empty array
   var len = matrix.length;
   var result = createEmptyMatrix(len);

   for (var i = 0; i < matrix.length; i++) {
     
     for (var j = 0; j < matrix[i].length; j++) {
       
       var temp = matrix[i][j];
       result[j][i] = temp;
     }
   }
   return result;
 }
