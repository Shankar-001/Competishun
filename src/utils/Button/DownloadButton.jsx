import ReactHtmlTableToExcel from 'react-html-table-to-excel';

const DownloadButton = () => {
  return (
    <div className="DownloadButtonContainer">
      <ReactHtmlTableToExcel
        id="test-table-xls-button"
        className="DownloadButtonText"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as excel"
      />
    </div>
  );
};
export default DownloadButton;
