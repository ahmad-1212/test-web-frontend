function Table({ children, className = "" }) {
  return (
    <div className="w-full">
      <table className={` w-full max-h-[100px] overflow-auto ${className}`}>
        {children}
      </table>
    </div>
  );
}

function Head({ children }) {
  return <thead className="bg-gray-200 text-[1.1rem] py-3">{children}</thead>;
}

function Body({ children }) {
  return <tbody>{children}</tbody>;
}

function Row({ children }) {
  return <tr className="border-y-2">{children}</tr>;
}

function Data({ children, className = "" }) {
  return <td className={`px-5 py-3 ${className}`}>{children}</td>;
}

function Footer({ children, className = "" }) {
  return <tfoot>{children}</tfoot>;
}

Table.Head = Head;
Table.Row = Row;
Table.Body = Body;
Table.Data = Data;
Table.Footer = Footer;

export default Table;

// {!tableData ||
//   (tableData.length < 0 && (
//     <p className="flex text-[1.1rem] justify-center mt-16 w-full">
//       No result found!
//     </p>
//   ))}
