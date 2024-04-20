import React, { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  orderBy,
  startAt,
  endAt,
  limit,
} from 'firebase/firestore';
import db from '../../constants/Firebase';
import TableWithFilterNSort from '../../utils/Table with filter and sort/TableWithFilterNSort';
import Pagination from '../../utils/Pagination/Pagination';

const LargeContactTable = () => {
  const [contactData, setContactData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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
            orderBy('date'),
            startAt(startIndex),
            // endAt(endIndex)
            limit(rowsPerPage),
          )
        );
        const contactData = contactDataSnap.docs.map((doc) => doc.data());
        console.log('contactData', contactData);
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
        const totalDocsSnapshot = await getDocs(
          collection(db, 'SupportQueries')
        );
        const totalDocsCount = totalDocsSnapshot.size;
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
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
          <ContactTableRow key={index} index={index + 1} contact={contact} />
        ))}
      </TableWithFilterNSort>
      <Pagination
        page={page}
        setPage={setPage}
        totalPage={totalPages}
        limit={rowsPerPage}
        setLimit={handleChangeRowsPerPage}
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
