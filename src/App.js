import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/navbar';
import NewFrame from './component/newframe';
function App() {
  const [urlEverything, setUrlEverything] = useState({
    subDomain: 'everything?',
    qvalue: '&q=india', //&q={your search keyword}
    newsDomain: '', //&domains=techcrunch.com
    dateFrom: '', //&from=2023-06-10
    dateTo: '', //to=2023-06-13
    sortBy: '&sortBy=publishedAt',
    langauge:'&&language=en'
  })
  const [urlTopHeadlines, setUrlTopHeadlines] = useState({
    subDomain: 'top-headlines?',
    country: '&country=in',
    category: '&category=general',
    sortBy: '&sortBy=publishedAt',
    langauge:'&language=en'
  })

  // fix info
  const [fixInfo, setFixInfo] = useState({
    domainName: 'https://newsapi.org/v2/',
    apiKey: 'apiKey=a3aca2044554464da1262eb08f8e1c47',
    pageSize: '&pageSize=10'
  })
  // this is for pageNo
  const [pageNo, setPageNo] = useState(1)

  const [url, setUrl] = useState(fixInfo.domainName + urlTopHeadlines.subDomain + fixInfo.apiKey + fixInfo.pageSize + urlTopHeadlines.country + urlTopHeadlines.category+ urlTopHeadlines.langauge + `&page=${pageNo}`)
  const [data, newsData] = useState({})
  // function that fetch the data from url

  async function fetchData() {
    console.log(url)
    var req = new Request(url);
    await fetch(req)
      .then(async function (response) {
        const temp = await response.json();
        newsData(temp)
      })
  }
  useEffect(() => {
    fetchData();
  }, [pageNo,url]);



  // handling the privious page
  function handlePreviousPage() {
    setUrl(url.replace(`&page=${pageNo}`, `&page=${pageNo - 1}`))
    setPageNo(pageNo - 1);
    // console.log(url)
  }

  function handleNextPage() {
    setUrl(url.replace(`&page=${pageNo}`, `&page=${pageNo + 1}`))
    setPageNo(pageNo + 1);
    // console.log(url)
  }

  // set url for everything
  function setUrl_everything(subD,qValue,newsDomain,dateFrom,dateTo,sortBy,langauge) {
    console.log('everything')
    setPageNo(1)
    // everything?

    let temp=fixInfo.domainName+ subD + fixInfo.apiKey+fixInfo.pageSize+qValue+newsDomain+dateFrom+dateTo+sortBy+ langauge+"&page=1"
    setUrl(temp)
    console.log(temp)
    setUrlEverything({
      subDomain:subD,
      qvalue: qValue, //&q={your search keyword}
      newsDomain: newsDomain, //&domains=techcrunch.com
      dateFrom: dateFrom, //&from=2023-06-10
      dateTo: dateTo, //to=2023-06-13
      sortBy: sortBy,
      langauge:langauge
    })

    // let temp = fixInfo.domainName + urlEverything.subDomain + fixInfo.apiKey + fixInfo.pageSize + urlEverything.qvalue + urlEverything.newsDomain + urlEverything.dateFrom + urlEverything.dateTo + `&page=${pageNo}`
  }
  
  function setUrl_topheadline(subD, cntr, ctgry, sBy,langauge) {
    console.log('topheadlines')
   
    // setUrl(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a3aca2044554464da1262eb08f8e1c47&page=${pageNo}${fixInfo.pageSize}`)

    setPageNo(1)
    let temp = fixInfo.domainName + subD + fixInfo.apiKey + fixInfo.pageSize + cntr + ctgry + sBy+ langauge + `&page=1`
    console.log(temp)
    setUrl(temp)
    
    setUrlTopHeadlines({
      // subDomain: 'top-headlines?',
      // country: '&country=in',
      // category: '&category=general',
      // sortBy: '&sortBy=publishedAt'
      subDomain: subD,
      country: cntr,
      category: ctgry,
      sortBy: sBy,
      langauge:langauge
    })
  }
  return (
    <>
      <Navbar setUrl_everything={setUrl_everything} setUrl_topheadline={setUrl_topheadline} topHeadInfo={urlTopHeadlines} everythingInfo={urlEverything} />
      {/* <Example/> */}
      <NewFrame data={data} pageNo={pageNo} handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} />
    </>
  );
}

export default App;
