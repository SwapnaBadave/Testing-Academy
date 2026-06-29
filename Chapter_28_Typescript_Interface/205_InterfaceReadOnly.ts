interface point{
    readonly x:number;
    readonly y: number;

}

const point : point={x: 10, y:30};
//point 5 to x , is not possible due to readonly

//readonly aaray
interface data{
    readonly items: readonly number[];
}