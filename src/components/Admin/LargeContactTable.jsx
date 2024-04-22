import React, { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy,
  startAt,
  endAt,
  limit,
  startAfter,
  doc,
  getDoc,
} from 'firebase/firestore';
import db from '../../constants/Firebase';
import TableWithFilterNSort from '../../utils/Table with filter and sort/TableWithFilterNSort';
import Pagination from '../../utils/Pagination/Pagination';

const LargeContactTable = () => {
  const [contactData, setContactData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState('date');
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchContactData = async () => {
      const startIndex = (page - 1) * rowsPerPage;
      const endIndex = startIndex + rowsPerPage - 1;
      try {
        const contactDataSnap = await getDocs(
          query(
            collection(db, 'SupportQueries'),
            orderBy('index'),
            startAfter(startIndex > 0 ? startIndex  : 0),
            limit(rowsPerPage)
          )
        );
        const contactData = contactDataSnap.docs.map((doc) => doc.data());
        // console.log('contactData', contactData);
        setContactData(contactData);
      } catch (error) {
        console.log('error fetching data', error);
      }
    };

    fetchContactData();
  }, [page, rowsPerPage]);


  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const indexDocRef = doc(db, 'index', 'SupportQueriesIndex');
        const indexDocSnap = await getDoc(indexDocRef);
        let currentIndex = 1; // Default value if index document doesn't exist

        if (indexDocSnap.exists()) {
          currentIndex = indexDocSnap.data().val-1;
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



  return (
    <div>
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
        sort={sortBy}
        setSort={handleSortChange}
        handleScroll={() => {}}
        tableFilter=""
        setTableFilter={() => {}}
        tableStyleExtra={{}}
      >
        {contactData.map((contact, index) => (
          <ContactTableRow key={index} index={((page-1)*rowsPerPage) + index + 1} contact={contact} />
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
      <td>{index}</td>
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
