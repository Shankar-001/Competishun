import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import db from '../../constants/Firebase';
import TableWithFilterNSort from '../../utils/Table with filter and sort/TableWithFilterNSort';
import Pagination from '../../utils/Pagination/Pagination';

const LargeContactTable = () => {
  const [contactData, setContactData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const contactDataSnap = await getDocs(collection(db, 'SupportQueries'));
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // Reset page to 1 when changing rows per page
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

  // Pagination calculation
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  return (
    <div>
      {contactData.length === 0 ? (
        <p>No contact data available.</p>
      ) : (
        <>
          <TableWithFilterNSort
            heading={[
              { title: 'Sr.No' },
              { title: 'Date' },
              { title: 'Name' },
              { title: 'Phone Number' },
              { title: 'Email' },
              { title: 'Class' },
              { title: 'Stream' },
              { title: 'City' },
              { title: 'State' },
              { title: 'Query' },
            ]}
            loading={false}
            fetchData={fetchContactData}
            sort={sortBy}
            setSort={handleSortChange}
            handleScroll={() => {}}
            tableFilter=""
            setTableFilter={() => {}}
            tableStyleExtra={{}}
          >
            {/* Display paginated data using the ContactTableRow component */}
            {paginatedData.map((contact, index) => (
              <ContactTableRow
                key={index}
                index={startIndex + index}
                contact={contact}
              />
            ))}
          </TableWithFilterNSort>
          <Pagination
            page={page}
            setPage={setPage}
            totalPage={Math.ceil(sortedData.length / rowsPerPage)}
            limit={rowsPerPage}
            setLimit={setRowsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default LargeContactTable;

const ContactTableRow = ({ index, contact }) => {
  const {
    name,
    state,
    query,
    date,
    class: classValue,
    phoneNumber,
    stream,
    city,
    email,
  } = contact;

  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{name}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>{classValue}</td>
      <td>{stream}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{query}</td>
    </tr>
  );
};
