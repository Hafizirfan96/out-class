import React, { useState, useEffect } from "react";

function Pagination({ pages = 10, setCurrentPage, crntBtn }) {
    console.log({crntBtn});
  //Set number of pages
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(crntBtn);

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        dotsInitial,
        numberOfPages.length,
      ];
    } else if (currentButton === 13) {
      const sliced = numberOfPages.slice(0, 13);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 12 && currentButton < numberOfPages.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentButton > numberOfPages.length - 13) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 13); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (crntBtn!==1 && currentButton === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (crntBtn!==1 && currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (crntBtn!==1 && currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton]);



  const clickNext =()=>  setCurrentButton((prev) =>
  prev >= numberOfPages.length ? prev : prev + 1
)
  return (
    <>
    <h6 className='sub_heading pa-ques'>Question :  {currentButton}</h6>
      <div className="pagination-container">
        <a
          // href="#"
          className={`${currentButton === 1 ? "disabled" : ""} `}
          onClick={() =>
            setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
          }
        >
          Prev
        </a>

        {arrOfCurrButtons.map((item, index) => {
          return (
            <a
              //   href="#"
              key={index}
              className={`${currentButton === item ? "active" : ""}`}
              style={{
                backgroundColor: `${currentButton === item ? "#00b0f0" : ""}`,
              }}
              onClick={() => setCurrentButton(item)}
            >
              {item}
            </a>
          );
        })}

        <a
          // href="#"
          className={`${
            currentButton === numberOfPages.length ? "disabled" : ""
          }`}
          onClick={() =>
            setCurrentButton((prev) =>
              prev >= numberOfPages.length ? prev : prev + 1
            )
          }
        >
          Next
        </a>
      </div>
      <div className="btn_wrap pagination2-btn">
        <button
          //   ÷className='btn btn_previs mr-2'
          className={`btn btn_previs mr-2 ${
            currentButton === 1 ? "disabled" : ""
          } `}
          onClick={() =>
            setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
          }
        >
          Previous
        </button>
        <button
          //    className='btn btn_previs'
          // className={` ${currentButton === 1 ? 'disabled' : ''} `}
          className={`btn btn_previs ${
            currentButton === numberOfPages.length ? "disabled" : ""
          }`}
          onClick={() =>
            setCurrentButton((prev) =>
              prev >= numberOfPages.length ? prev : prev + 1
            )
          }
        >
          Next
        </button>

      </div>
        {/* <h1 onClick={clickNext}>{currentButton}</h1> */}
    </>
  );
}

export default Pagination;
