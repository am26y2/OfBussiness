import React, { useEffect, useState } from "react";
import "./styles.scss";
import "./Style.css";
import InfiniteScroll from "react-infinite-scroll-component";
//API
import { getIssues } from "./api/api";
import Issues from "./components/Issues";
import Pagination from "./components/Pagination";
import Heading from "./components/Heading";
import Message from "./components/Message";
import Navbar from "./components/Navbar";

export default function Data() {
  const [issues, setIssues] = useState([]);
  const currentPage = 1;
  const [issuesPerPage, setIssuesPerPage] = useState(3);

  useEffect(() => {
    getIssues().then((res) => {
      setIssues(res);
    });
  }, []);

  const fetchMoreData = () => {
    let copyissueperpage = issuesPerPage;
    setIssuesPerPage(copyissueperpage + 3);
  };

  //get current issues
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Message />
      {/* <h1>Simplified version of github issue page</h1> */}
      <InfiniteScroll
        dataLength={issuesPerPage}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Issues issues={currentIssues} />
        <Pagination
          issuesPerPage={issuesPerPage}
          totalIssues={issues.length}
          currentPage
        />
      </InfiniteScroll>
    </div>
  );
}
