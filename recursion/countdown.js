/*
 * Two essential parts: 1 - Base Case
 *                      2 - Different Input
 */
 function countDown(num){
     if (num <= 0){
         console.log('All done!');
         return;
     }
     console.log(num);
     num--;
     countDown(num);
 }
