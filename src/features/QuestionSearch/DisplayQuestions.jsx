import { useEffect, useState } from "react";
import { useSearchResultContext } from "../../context/SearchResultContext";
import QuestionsResultFilter from "./QuestionsResultFilter";
import Table from "../../components/UI/Table";
import { useSearchParams } from "react-router-dom";

const Question = ({ question, handleSelectQuestion }) => {
  const { state } = useSearchResultContext();
  const isSelected = state.selectedDataIds.includes(question.id);

  return (
    <input
      className="accent-primary-500 w-3 h-3 mr-3"
      type="checkbox"
      checked={isSelected}
      onChange={(e) => handleSelectQuestion(e, question)}
    />
  );
};

const DisplayQuestions = () => {
  const { state, setSelectedData, removeSelectedData } =
    useSearchResultContext();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = state.searchResults.length;

  const [checkedOptions, setCheckedOptions] = useState({
    questionid: true,
    topic: true,
    category: true,
    marked: true,
  });
  const questionsType = searchParams.get("questions");

  // Num of pages
  let numOfPages;
  if (questionsType === "allQuestions" || questionsType === undefined) {
    numOfPages = Math.ceil(state.searchResults.length / 10);
  } else if (questionsType === "selected") {
    numOfPages = Math.ceil(state.selectedData.length / 10);
  }

  // Disable the buttons
  let disable;
  if (questionsType === "allQuestions") {
    if (!totalResults) {
      disable = true;
    }
  }

  // Data to be displayed in the table
  const dataSlice = currentPage - 1;
  let data = state.searchResults.slice(dataSlice * 10, currentPage * 10);
  console.log(state.searchResults.slice(20, 30));
  if (questionsType === "selected") {
    data = state.selectedData.slice(dataSlice * 10, currentPage * 10);
  }

  // function to hanlde rows of the table
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedOptions({ ...checkedOptions, [id]: checked });
  };

  // funtion to add or remove the questions
  const handleSelectQuestion = (event, question) => {
    if (event.target.checked) {
      setSelectedData(question);
    }
    if (!event.target.checked) {
      console.log(question);
      removeSelectedData(question.id);
    }
  };

  // function to handle pages
  const handlePages = (next) => {
    console.log(next);
    if (!next) {
      if (currentPage === 1) return;
      return setCurrentPage((prev) => prev - 1);
    }
    if (currentPage === numOfPages) return;
    return setCurrentPage((prev) => prev + 1);
  };

  // Table Headers
  const headers = Object.keys(checkedOptions).filter(
    (opt) => checkedOptions[opt] === true
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [questionsType]);

  return (
    <section className="bg-white pb-10">
      <QuestionsResultFilter
        checkedOptions={checkedOptions}
        onCheckboxChange={handleCheckboxChange}
      />
      <div className="border-2  ml-5 mr-10 border-collapse rounded-md">
        <Table className="w-full min-h-[200px] max-h-[500px] overflow-y-auto">
          <Table.Head>
            <Table.Row>
              {headers.map((header) => (
                <th className="text-start px-3 py-2 capitalize" key={header}>
                  {header}
                </th>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {data.length > 0 &&
              data.map((dta) => (
                <Table.Row key={dta.id}>
                  <Table.Data>
                    <Question
                      question={dta}
                      handleSelectQuestion={handleSelectQuestion}
                    />

                    {dta.id}
                  </Table.Data>
                  {checkedOptions.topic && <Table.Data>{dta.Topic}</Table.Data>}
                  {checkedOptions.category && (
                    <Table.Data>{dta.Chapter}</Table.Data>
                  )}
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
        {data.length === 0 && (
          <div className="flex justify-center mb-16">No result found!</div>
        )}
        <div className="flex justify-between items-end py-2 px-3 bg-gray-200">
          <span className="font-[500]">
            Current Page: {!totalResults ? "0" : currentPage}
          </span>

          <div className="flex gap-4 items-center">
            <button
              onClick={() => handlePages(false)}
              disabled={!totalResults}
              className="cursor-pointer disabled:cursor-not-allowed opacity-50 hover:bg-gray-50 py-2 px-3 rounded-md font-[500]"
            >
              Prev
            </button>
            <button
              disabled={!totalResults}
              onClick={() => handlePages(true)}
              className="cursor-pointer disabled:cursor-not-allowed opacity-50 hover:bg-gray-50 py-2 px-3 rounded-md font-[500]"
            >
              Next
            </button>
            <div className="font-[600]">Pages: {numOfPages}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayQuestions;
