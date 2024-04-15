import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import db from '../../constants/Firebase';
import { getAuth, signOut } from 'firebase/auth';
// import TableContainer from '@mui/material/TableContainer';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableBody from '@mui/material/TableBody';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import TablePagination from '@mui/material/TablePagination';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';

const AdminComponent = () => {
  const [contactData, setContactData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState('name');

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


  const handleSignOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    Swal.fire({
      icon: 'success',
      title: 'Signed Out Successfully!',
      text: 'You have been signed out successfully!',
    });
  };
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const sortedData = contactData.sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="Admin-container">
      <button
        onClick={handleSignOut}
        className="signOut"
        variant="contained"
        color="primary"
      >
        Sign Out
      </button>
      {/* <Select
        value={sortBy}
        onChange={handleSortChange}
        className="sortSelect"
        variant="outlined"
      >
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="email">Email</MenuItem>
      </Select> */}
      {/* <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>city</TableCell>
              <TableCell>class</TableCell>
              <TableCell>date</TableCell>
              <TableCell>phoneNumber</TableCell>
              <TableCell>query</TableCell>
              <TableCell>state</TableCell>
              <TableCell>stream</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.class}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.query}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>{row.stream}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contactData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </div>
  );
};

export default AdminComponent;
