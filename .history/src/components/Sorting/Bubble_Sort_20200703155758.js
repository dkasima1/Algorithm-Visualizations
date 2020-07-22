import React from 'react';

class Bubble_sort extends React.Component {

    constructor(props) {
        super(props);
        this.numArr = props.numArr;
        this.rectArr = props.rectArr;
    }
    
    swap(arr, first_Index, second_Index){
        var temp = arr[first_Index];
        arr[first_Index] = arr[second_Index];
        arr[second_Index] = temp;
    }
    
    sort(arr){
        var len = arr.length,
            i, j, stop;
    
        for (i=0; i < len; i++){
            for (j=0, stop=len-i; j < stop; j++){
                if (arr[j] > arr[j+1]){
                    this.swap(arr, j, j+1);
                }
            }
        }
    
        return arr;
    }
    render() {
        return <div>Bubble Sort</div>
    }

}

export default Bubble_sort;