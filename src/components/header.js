const Header = (title, date, temp) => {
  const headerMain = document.createElement('div');
  const newDate = document.createElement('span');
  const heading = document.createElement('h1');
  const newTemp = document.createElement('span');

  headerMain.classList.add('header')
  newDate.classList.add('date')
  newTemp.classList.add('temp')

  headerMain.appendChild(newDate)
  headerMain.appendChild(heading)
  headerMain.appendChild(newTemp)

  newDate.textContent = date;
  heading.textContent = title;
  newTemp.textContent = temp;

  return headerMain;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const headerElem = document.querySelector(selector)
  headerElem.appendChild(Header('Lambda Times', 'March 11, 2022','50°'))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
