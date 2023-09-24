document.addEventListener("DOMContentLoaded", function () {
  // push all actions to the actions container
  var actions_cont = document.getElementsByClassName("actions")[0];
  for (var i = 0; i < actions.length; i++) {
    var action = actions[i];
    actions_cont.innerHTML += `
        <div class="acion-item">
              <div class="action-icon">
                <img class="icon" src="icons/${action.icon}.svg" alt="Action Icon">
              </div>
              <a href=${action.url} target="_blank">${action.action}</a>
        </div>
      `;
  }

  // get random current action
  var current_action = actions[Math.floor(Math.random() * actions.length)];
  var current_action_cont =
    document.getElementsByClassName("current-action")[0];
  current_action_cont.innerHTML = `
        <a href=${current_action.url} target="_blank"><i ></i>${current_action.action}</a>
    `;

  // push all quotes to the quotes container
  var quotes_cont = document.getElementsByClassName("quotes")[0];

  for (var i = 0; i < quotes.length; i++) {
    var quote = quotes[i];
    quotes_cont.innerHTML += `
      <div class="quote-item">
        <h6>"${quote.text}"</h6>
        <div class="row justify-content-end">
          <p>~ ${quote.author}</p>
        </div>
      </div> `;
  }

  // get random current quote

  var current_quote = quotes[Math.floor(Math.random() * quotes.length)];
  var current_quote_cont = document.getElementsByClassName("current-quote")[0];
  current_quote_cont.innerHTML = `
      <h1> "${current_quote.text}" </h1>
      <div class="row justify-content-end"><p class="ml-4">~ ${current_quote.author}</p></div>
    `;
});
