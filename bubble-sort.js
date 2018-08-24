function bubbleSort(a) {
    var swapCount = 0;
    for(var k = 0; k < a.length; k++){
        for(var i = 0; i<a.length;i++){
            if( i + 1 < a.length){
                var element1 = a[i];
                var element2 = a[i+1];

                if(element1 > element2){
                    a[i+1] = element1;
                    a[i] = element2;
                    swapCount++;
                }
            }

        }
    }

    
    console.log('Array is sorted in ' + swapCount + ' swaps.');
    console.log('First Element: ' + a[0]);
    console.log('Last Element: ' + a[a.length-1]);

}
