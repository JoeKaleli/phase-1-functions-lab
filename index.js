// Code your solution Here !
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 50;
  const distanceFromHqInBlocks = Math.abs(hqLocation - pickupLocation);
  return distanceFromHqInBlocks;
}
console.log(`${distanceFromHqInBlocks(42)}`)



function distanceFromHqInFeet(pickupLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  const distanceFromHqInFeet = Math.abs(distanceInBlocks*264);
  return distanceFromHqInFeet ;
}
console.log(`${distanceFromHqInFeet(42)}`)

function distanceTravelledInFeet(start,destination) {
const distanceInFeet = Math.abs((start - destination)*264);
return distanceInFeet;
}
console.log(`${distanceTravelledInFeet(45,12)}`)

function calculatesFarePrice(start,destination) {
const distance = Math.abs(destination-start);

if (distance<=400) {
  return 0;
} 
else if (distance <= 2000) 
{
  return (distance - 400)*0.02;
} 
else if (distance < 2500) 
{
return 25;
} 
else 
{
  return 'cannot travel that far'
}
}
console.log(`${calculatesFarePrice(927,27)}`)
 