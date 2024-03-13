import { useState } from "react";
import Table from "../../components/UI/Table";
import QuestionSearchFilter from "./QuestionSearchFilter";
import { useSearchResultContext } from "../../context/SearchResultContext";

const TABS = ["All Questions", "Selected"];

const QuestionSearchResult = () => {
  const { state } = useSearchResultContext();
  const data = state.searchResults;
  console.log(data.length);
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [checkedOptions, setCheckedOptions] = useState({
    questionid: true,
    topic: true,
    category: true,
    marked: true,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedOptions({ ...checkedOptions, [id]: checked });
  };

  const headers = Object.keys(checkedOptions).filter(
    (opt) => checkedOptions[opt] === true
  );

  return (
    <section className="bg-white">
      <QuestionSearchFilter
        selectedCategory={selectedCategory}
        onSetSelectedCategory={setSelectedCategory}
        checkedOptions={checkedOptions}
        onCheckboxChange={handleCheckboxChange}
        tabs={TABS}
        allQuestions={data.length}
      />
      <div className="ml-4 mr-7">
        <Table className="min-h-[200px]">
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
                    <input
                      className="accent-primary-500 w-3 h-3 mr-3"
                      type="checkbox"
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
      </div>
    </section>
  );
};

export default QuestionSearchResult;
