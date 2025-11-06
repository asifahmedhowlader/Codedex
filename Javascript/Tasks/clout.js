const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray) {
  const totalViews = viewsArray.reduce((total, amount) => total + amount);

  const average = totalViews / viewsArray.length;
  return average;
}

function median(viewsArray) {
  let sortedStats = viewsArray.sort(function (a, b) {
    return a - b;
  });
  // console.log(sortedStats);
  const length = viewsArray.length;
  const middleIndex = Math.floor(length / 2);
  if (length / 2 == 0) {
    return (viewsArray[middleIndex - 1] + viewsArray[middleIndex]) / 2;
  } else {
    return viewsArray[middleIndex];
  }
}
//Tiktok
console.log("Tiktok");
console.log(`Mean: ${mean(recentTikTokViews)}`);
console.log(`Median: ${median(recentTikTokViews)}`);
//Instagram
console.log("Instagram");
console.log(`Mean: ${mean(recentInstagramViews)}`);
console.log(`Median: ${median(recentInstagramViews)}`);
//Youtube
console.log("Youtube");
console.log(`Mean: ${mean(recentYouTubeViews)}`);
console.log(`Median: ${median(recentYouTubeViews)}`);
