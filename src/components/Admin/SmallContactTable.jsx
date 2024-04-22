import React, { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy,
  startAfter,
  limit,
  doc,
  getDoc,
} from 'firebase/firestore';
import db from '../../constants/Firebase';
import TableWithFilterNSort from '../../utils/Table with filter and sort/TableWithFilterNSort';
import Pagination from '../../utils/Pagination/Pagination'; // Import Pagination component

const SmallContactTable = () => {
  const [contactData, setContactData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState('date');
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage - 1;
    fetchContactData(startIndex, endIndex);
  }, [page, rowsPerPage]); // Fetch data whenever page or rowsPerPage changes

  const fetchContactData = async (startIndex, endIndex) => {
    try {
      const contactDataSnap = await getDocs(
        query(
          collection(db, 'FreeTrialStudent'),
          orderBy('index'),
          startAfter(startIndex > 0 ? startIndex : 0),
          limit(rowsPerPage)
        )
      );
      const contactData = contactDataSnap.docs.map((doc) => doc.data());
      setContactData(contactData);
      // console.log('contactData', contactData);
    } catch (error) {
      console.log('error fetching data', error);
    }
  };

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const indexDocRef = doc(db, 'index', 'FreeTrialStudentIndex');
        const indexDocSnap = await getDoc(indexDocRef);
        let currentIndex = 1; // Default value if index document doesn't exist

        if (indexDocSnap.exists()) {
          currentIndex = indexDocSnap.data().val - 1;
        }
        const totalDocsCount = currentIndex;
        const calculatedTotalPages = Math.ceil(totalDocsCount / rowsPerPage);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.log('error fetching total pages', error);
      }
    };

    fetchTotalPages();
  }, [rowsPerPage]);

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
          { title: 'Email' },
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
          <ContactTableRow
            key={index}
            index={(page - 1) * rowsPerPage + index + 1}
            contact={contact}
          />
        ))}
      </TableWithFilterNSort>
      <Pagination
        page={page}
        setPage={setPage}
        totalPage={totalPages}
        limit={rowsPerPage}
        setLimit={setRowsPerPage}
      />
    </div>
  );
};

export default SmallContactTable;

const ContactTableRow = ({ index, contact }) => {
  const { date, name, phoneNumber,email } = contact;

  return (
    <tr key={index}>
      <td>{index}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{name}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      {/* Add more data fields as needed */}
    </tr>
  );
};
