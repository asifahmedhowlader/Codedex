const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray) {
  const totalViews = viewsArray.reduce((total, amount) => total + amount);

  const average = totalViews / recentTikTokViews.length;
  return average;
}

function median(viewsArray) {
  let sortedStats = "";
  let middleIndex = "";
}
