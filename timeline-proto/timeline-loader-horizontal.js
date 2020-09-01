/**
 * Loads the data from airtable into an <ol id="timeline"> element.
 */

function fetchParams () {
  const reduceParams = (memo, param) => {
    const [key, val] = param.split('=');
    memo[key] = val;
    return memo;
  }
  const params = window.location.search && window.location.search.substring(1).split('&').reduce(reduceParams, {});
  const url = `https://api.airtable.com/v0/${params.table}`;
  const opts = { headers: { authorization: `Bearer ${params.token}` } };
  return [url, opts];
}

function appendTimeline ({ records }) {
  const timelineElement = document.getElementById("timeline-ordered-list");
  let markup = `<li><h4>Timeline data is missing.</h4></li>`;
  if (records.length) {
    markup = records.reduce((memo, record) => {
      const {
        Title: title,
        Description: description,
        Location: location,
        Date: date,
        Link: link
      } = record.fields;
      const item = `
      <li>
        <div>
          <time>${date}</time>
          <h4>${title}</h4>
          <p>${description}</p>
          <a href="${link}" target="_blank">Learn more</a>
        </div>
      </li>
      `;
      return memo + item
    }, '');
  }
  timelineElement.innerHTML = markup;
  applyScrolling();
}

(function () {
  const args = fetchParams();
  return fetch(...args).then(res => res.json()).then(appendTimeline);
}());
