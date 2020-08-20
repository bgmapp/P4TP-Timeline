/**
 * Loads the data from timeline-data.js into an <ol id="timeline"> element.
 */
(function() {
  const timelineElement = document.getElementById("timeline");
  while (timelineElement.firstChild) {
    timelineElement.removeChild(timelineElement.firstChild);
  }
  if (timelineData) {
    for (let index=0; index < timelineData.length; index++) {
      let timelineItem = timelineData[index];
      let isFlipped = ((index % 2) == 1) ? " timeline__content--flipped" : "";
      let htmlItem = `<span class="timeline__id">${timelineItem.date}</span>
      <div class="timeline__content${isFlipped}">
          <h2 class="timeline__heading">${timelineItem.title}</h2>
          <p class="timeline__text">${timelineItem.description}<br><br>
            <a href="${timelineItem.link}">Learn more</a></p>
      </div>
      `;
      let newItem = document.createElement('li');
      newItem.className = "timeline__entry";
      newItem.innerHTML = htmlItem;
      timelineElement.appendChild(newItem);
    }
  } else {
    timelineElement.innerHTML = "<li><h2>Timeline data is missing</h2></li>";
  }
})();
