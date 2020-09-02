/**
 * Loads the data from timeline-data.js into an <ol id="timeline"> element.
 */
(function () {
    const timelineElement = document.getElementById("timeline-ordered-list");
    while (timelineElement.firstChild) {
        timelineElement.removeChild(timelineElement.firstChild);
    }
    if (timelineData) {
        for (let index = 0; index < timelineData.length; index++) {
            let timelineItem = timelineData[index];
            let htmlItem = `<div><time>${timelineItem.date}</time>
                <h4>${timelineItem.title}</h4>
                <p>${timelineItem.description}</p>
                <a href="${timelineItem.link}" target="_blank">Learn more</a>`;
            let newItem = document.createElement('li');
            newItem.innerHTML = htmlItem;
            timelineElement.appendChild(newItem);
        }
    } else {
        timelineElement.innerHTML = "<li><h4>Timeline data is missing.</h4></li>";
    }
})();
