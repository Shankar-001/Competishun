import React, { useEffect, useState } from 'react';
import { collection, endAt, getDocs, orderBy, query, startAt } from 'firebase/firestore';
import db from '../../constants/Firebase';
import TableWithFilterNSort from '../../utils/Table with filter and sort/TableWithFilterNSort';
import Pagination from '../../utils/Pagination/Pagination'; // Import Pagination component

const SmallContactTable = () => {
  const [contactData, setContactData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage - 1; // Adjust endIndex to fetch the correct range
    fetchContactData(startIndex, endIndex);
  }, [page, rowsPerPage]); // Fetch data whenever page or rowsPerPage changes

  const fetchContactData = async (startIndex, endIndex) => {
    console.log('startIndex', startIndex, 'endIndex', endIndex);
    try {
      const contactDataSnap = await getDocs(
        query(
          collection(db, 'FreeTrialStudent'),
          orderBy('date'),
          startAt(startIndex),
          endAt(endIndex)
        )
      );
      const contactData = contactDataSnap.docs.map((doc) => doc.data());
      console.log('contactData', contactData);
      setContactData(contactData);
    } catch (error) {
      console.log('error fetching data', error);
    }
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedData = contactData.sort((a, b) => {
    if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
      return a[sortBy].localeCompare(b[sortBy]);
    } else {
      // Handle other types of data comparison
      // For example, if they're numbers, you can use a simple comparison
      return b[sortBy] - a[sortBy];
    }
  });

  return (
    <div>
      <TableWithFilterNSort
        heading={[
          { title: 'Sr.No' },
          { title: 'Date' },
          { title: 'Name' },
          { title: 'Phone Number' },
          // Add more headers as needed
        ]}
        loading={false}
        fetchData={() => {}}
        sort={sortBy}
        setSort={handleSortChange}
        handleScroll={() => {}}
        tableFilter=""
        setTableFilter={() => {}}
        tableStyleExtra={{}}
      >
        {/* Display paginated data using the ContactTableRow component */}
        {sortedData.map((contact, index) => (
          <ContactTableRow key={index} index={index + 1} contact={contact} />
        ))}
      </TableWithFilterNSort>
      <Pagination
        page={page}
        setPage={setPage}
        totalPage={Math.ceil(sortedData.length / rowsPerPage)}
        limit={rowsPerPage}
        setLimit={setRowsPerPage}
      />
    </div>
  );
};

export default SmallContactTable;

const ContactTableRow = ({ index, contact }) => {
  const { date, name, phoneNumber } = contact;

  return (
    <tr key={index}>
      <td>{index}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{name}</td>
      <td>{phoneNumber}</td>
      {/* Add more data fields as needed */}
    </tr>
  );
};