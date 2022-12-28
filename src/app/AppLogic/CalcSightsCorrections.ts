import __D30DHECF from '../DATA/D_30_2A18';
import DecimalAdjust from './RoundingFun';



// Десятичное округление к ближайшему
// @ts-ignore
Math.round10 = function(value, exp) {
    return DecimalAdjust('round', value, exp);
};
  
// Десятичное округление вниз
// @ts-ignore
Math.floor10 = function(value, exp) {
    return DecimalAdjust('floor', value, exp);
};


export let sightMechanicalThousandths: number | string;
export let sightMechanicalDivisions: number | string;
export let opticalSight: number | string; 
export let averageDeviationsLateral: number | string;


function HighExplosiveFullCharge(distance: number, maximumRangeShot: number ) {
    // const distance = 4567;
    if(distance <= maximumRangeShot && distance > 0) {

        if(distance <= 4000 && distance > 0) {
            // @ts-ignore
            opticalSight = Math.round10(distance/100, -3);
        } else {
          opticalSight = 'большая дистанция;';
        }
        // оптический прицел
        // @ts-ignore
        sightMechanicalDivisions = Math.round10(distance/50, -2);
        // остаок от деления растояния
        // @ts-ignore
        const remainingRange = Math.round10(Math.round10((distance-600)%200, -2)/(__D30DHECF[Math.floor10((distance-600)/200, -0)].rangeChangesThousandth), -1);
        // поправки по механическому прицелу 
        // @ts-ignore
        sightMechanicalThousandths = (__D30DHECF[Math.floor10((distance-600)/200, -0)].sightMechThous)+remainingRange;
        // 10278.52
        // @ts-ignore
        averageDeviationsLateral = __D30DHECF[Math.floor10((distance-600)/200, -0)].lateralDeviat;
        
    } else {
        sightMechanicalDivisions = 'большая дистанция;'
        sightMechanicalThousandths = 'большая дистанция;'
    }
}


export default HighExplosiveFullCharge;