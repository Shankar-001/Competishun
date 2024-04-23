import React, { useEffect, useRef, useState } from 'react';
import styles from './TableWithFilterNSort.module.css';
import Loader from '../Loader/Loader';
import filterIcon from '../../assets/important/filterIcon.svg';
// import FilterBox from "../filterBox/FilterBox";
// import { useDispatch } from "react-redux";

const TableWithFilterNSort = ({
  heading = [],
  children,
  loading = false,
  fetchData = () => {},
  sort = '',
  setSort = () => {},
  handleScroll = () => {},
  tableFilter = '',
  setTableFilter = () => {},
  tableStyleExtra = {},
  id,
}) => {
  const [showFilterBox, setShowFilterBox] = useState(null);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     return () => {
  //         dispatch({ type: "HIDE" });
  //     }
  // }, [])

  // useEffect(() => {
  //     if(showFilterBox === elemlent)
  //     dispatch({ type: "SHOW", payload: { style: {
  //         top: `${eventRef.current.pageY}px`,
  //         left: `${eventRef.current.pageX}px`,
  //         background: "#fff",
  //         color: "#000", borderRadius: ".5vw", fontSize: ".8vw", fontWeight : "550", boxShadow: "0px 0px 2px 2px #00000010"  }, info:  <FilterBox setShowFilterBox={setShowFilterBox} showFilterBox={showFilterBox} fetchData={fetchData} sort={sort}
  //         setSort={setSort}
  //         tableFilter={tableFilter}
  //         setTableFilter={setTableFilter}
  //     /> } })
  // },[])
  return (
    <div className={styles.mainConatiner} onScroll={handleScroll}>
      <table className={styles.table} style={tableStyleExtra} id={id}>
        <thead className={styles.tableHeader}>
          <tr>
            {heading.map((elemlent, index) => {
              return (
                <th
                  style={
                    elemlent.showFilter || elemlent.showSort
                      ? { cursor: 'pointer' }
                      : {}
                  }
                  key={index}
                  className={styles.tableheaderBox}
                >
                  <div className={styles.headBox}>
                    <p>{elemlent.title}</p>
                    {(elemlent.showFilter || elemlent.showSort) && (
                      <img
                        src={filterIcon}
                        alt="filter"
                        className={styles.filterIconImg}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (elemlent.showFilter || elemlent.showSort) {
                            setShowFilterBox(elemlent);
                            const position =
                              e.pageX + 200 >= window.innerWidth
                                ? {
                                    right: `${
                                      window.innerWidth -
                                      e.pageX +
                                      window.innerWidth * 0.12
                                    }px`,
                                  }
                                : { left: `${e.pageX}px` };
                            // window.removeEventListener("click", hidePopUp);
                            dispatch({
                              type: 'SHOW',
                              payload: {
                                style: {
                                  top: `${e.pageY}px`,
                                  // left: `${e.pageX}px`,
                                  ...position,
                                  padding: '0',
                                  background: '#fff',
                                  color: '#000',
                                  borderRadius: '.5vw',
                                  fontSize: '.8vw',
                                  fontWeight: '550',
                                  boxShadow: '0px 0px 2px 2px #00000010',
                                },
                                info: (
                                  <FilterBox
                                    setShowFilterBox={setShowFilterBox}
                                    showFilterBox={elemlent}
                                    fetchData={fetchData}
                                    sort={sort}
                                    setSort={setSort}
                                    tableFilter={tableFilter}
                                    setTableFilter={setTableFilter}
                                  />
                                ),
                              },
                            });
                          }
                        }}
                      />
                    )}
                  </div>

                  {/* {showFilterBox === elemlent && (
                                        <FilterBox setShowFilterBox={setShowFilterBox} showFilterBox={showFilterBox} fetchData={fetchData} sort={sort}
                                            setSort={setSort}
                                            tableFilter={tableFilter}
                                            setTableFilter={setTableFilter}
                                        />
                                    )} */}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {loading ? (
            <tr style={{ border: 'none' }}>
              <td colSpan={heading.length} style={{ border: 'none' }}>
                <Loader style={{ height: '50vh' }} />
              </td>
            </tr>
          ) : (
            children
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithFilterNSort;
