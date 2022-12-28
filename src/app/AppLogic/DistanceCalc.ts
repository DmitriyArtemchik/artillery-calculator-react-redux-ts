import DecimalAdjust from './RoundingFun';



// Десятичное округление к ближайшему
// @ts-ignore
Math.round10 = function(value, exp) {
  return DecimalAdjust('round', value, exp);
};


export let angledeg: number; 
export let dist: number;

// @ts-ignore
function DistanceCalculation(llat1, llong1, llat2, llong2) {

    // rad - радиус сферы (Земли)
    const rad = 6372795;

    // координаты точек А
    // const llat1 = 55.91959;
    // const llong1 = 39.19188;

    // координаты точек Б
    // const llat2 = 55.60320089757284;
    // const llong2 = 37.62731954455376;

    // в радианах
    const lat1 = llat1*Math.PI/180.;
    const lat2 = llat2*Math.PI/180.;
    const long1 = llong1*Math.PI/180.;
    const long2 = llong2*Math.PI/180.;

    // косинусы и синусы широт и разницы долгот
    const cl1 = Math.cos(lat1);
    const cl2 = Math.cos(lat2);
    const sl1 = Math.sin(lat1);
    const sl2 = Math.sin(lat2);
    const delta = long2 - long1;
    const cdelta = Math.cos(delta);
    const sdelta = Math.sin(delta);

    // вычисления длины большого круга
    const largeCircleY = Math.sqrt(Math.pow(cl2*sdelta,2)+Math.pow(cl1*sl2-sl1*cl2*cdelta,2));
    const largeCircleX = sl1*sl2+cl1*cl2*cdelta;
    const ad = Math.atan2(largeCircleY, largeCircleX);
    // @ts-ignore
    dist = Math.round10(ad*rad, -2);


    // вычисление начального азимута
    const x = (cl1*sl2) - (sl1*cl2*cdelta);
    const y = sdelta*cl2;
    let z = (Math.atan(-y/x)) * (180 / Math.PI);


    if (x < 0) {z = z+180.;} 


    const ze2 = (z+180.) % 360. - 180.;
    const z2 =  - ze2 * Math.PI / 180;

    const anglerad2 = z2 - ((2*Math.PI)*Math.floor((z2/(2*Math.PI))));
    // const angledeg = Math.round10((anglerad2*180.)/Math.PI, -4);
    angledeg = (anglerad2*180.)/Math.PI;
    // @ts-ignore
    return (
      // @ts-ignore
      dist,
      angledeg
    );
   
}

export default DistanceCalculation;

