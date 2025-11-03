let AGE = 100;

switch (true) {
    case AGE >= 18 && AGE < 56:
        console.log('Eligible for vote');
        break;
         case AGE >= 56 && AGE < 75:
        console.log('Null for vote');
        break;
         case AGE >= 18:
        console.log(' Not Eligible for vote');
        break;
    default:
        console.log('key was not matched');
        break;
}
