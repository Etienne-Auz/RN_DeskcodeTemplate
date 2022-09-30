import { Dimensions } from 'react-native';

export const Width_PercentToPoint = (percent) => {
    let coeff = percent/100;
    return (Dimensions.get('screen').width*coeff);
}

export const Height_PercentToPoint = (percent) => {
    let coeff = percent/100;
    return (Dimensions.get('screen').height*coeff);
}