import React, { useState } from "react"

export default function Navbar(props) {

    // 0 -topheadlines
    //  1- Everythiong
    const[lang,setLang]=useState('en')
    const [searchV, setSearchV] = useState('')
    const [verifyUrl, setVerifyUrl] = useState(0)
    function setUrl_every(subD, qValue, newsDomain, dateFrom, dateTo, sortBy, langauge) {
        setVerifyUrl(1)
        props.setUrl_everything(subD, qValue, newsDomain, dateFrom, dateTo, sortBy, langauge)
    }

    function setUrl_top(subD, country, category, sortBy, langauge) {
        setVerifyUrl(0)
        props.setUrl_topheadline(subD, country, category, sortBy, langauge)
    }

    // function 

    function sort(sortBy) {
        if (verifyUrl === 0) {
            // top headline section
            setUrl_top(props.topHeadInfo.subDomain, props.topHeadInfo.country, props.topHeadInfo.category, sortBy, props.topHeadInfo.langauge)
        }
        else if (verifyUrl === 1) {
            setUrl_every(props.everythingInfo.subDomain, props.everythingInfo.qvalue, props.everythingInfo.newsDomain, props.everythingInfo.dateFrom, props.everythingInfo.dateTo, sortBy, props.everythingInfo.langauge)
            // everything section
        }
    }

    function setLaungauge(langauge_value) {
        setLang(langauge_value.split('=')[1])
        if (verifyUrl === 0) {
            // top headline section
            setUrl_top(props.topHeadInfo.subDomain, props.topHeadInfo.country, props.topHeadInfo.category, props.topHeadInfo.sortBy, langauge_value)
        }
        else if (verifyUrl === 1) {
            setUrl_every(props.everythingInfo.subDomain, props.everythingInfo.qvalue, props.everythingInfo.newsDomain, props.everythingInfo.dateFrom, props.everythingInfo.dateTo, props.everythingInfo.sortBy, langauge_value)
            // everything section
        }
    }
    console.log(props.topHeadInfo)
    console.log(props.everythingInfo)


    // functionality for the search
    function updateSearch(e) {
        setSearchV(e.target.value)
    }
    function search() {
        // 'everything?',`&q=${searchV}`,'','','','&sortBy=publishedAt'
        // subD,qValue,newsDomain,dateFrom,dateTo,sortBy
        props.setUrl_everything('everything?', `&q=${searchV.replaceAll(' ', '%20')}`, '', '', '', '&sortBy=publishedAt', '&langauge=en')
        setVerifyUrl(1)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#e9e9e9' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Samachar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); setUrl_every('everything?', `&q=india`, '', '', '', '&sortBy=publishedAt', '&langauge=en') }}>Everything</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); setUrl_top('top-headlines?', '&country=in', '&category=general', '&sortBy=publishedAt', '&langauge=en') }}>Topheadline</a>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className=" nav-link dropdown-toggle shadow-none text-primary border border-info" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        News Category
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, props.topHeadInfo.country, '&category=business', props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>business</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, props.topHeadInfo.country, '&category=entertainment', props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>entertainment</a>

                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, props.topHeadInfo.country, '&category=general', props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>general</a>

                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, props.topHeadInfo.country, '&category=health', props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>health</a>

                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, props.topHeadInfo.country, '&category=science', props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>science</a>

                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, props.topHeadInfo.country, '&category=sports', props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>sports</a>

                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, props.topHeadInfo.country, '&category=technology', props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>technology</a>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className=" nav-link dropdown-toggle shadow-none text-primary border border-info mx-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort News By
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); sort('&sortBy=relevancy') }}>relevancy</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); sort('&sortBy=popularity') }}>popularity</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); sort('&sortBy=publishedAt') }}>publishedAt</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className=" nav-link dropdown-toggle shadow-none text-primary border border-info mx-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort By Country
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ae', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>United Arab Emirates</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ar', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Argentina</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=at', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Austria</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=au', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Australia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=be', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Belgium</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=bg', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Bulgaria</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=br', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Brazil</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ca', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Canada</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ch', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Switzerland</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=cn', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>China</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=co', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Colombia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=cu', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Cuba</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=cz', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Czech Republic</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=de', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Germany</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=eg', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Egypt</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=fr', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>France</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=gb', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>United Kingdom</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=gr', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Greece</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=hk', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Hong Kong</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=hu', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Hungary</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=id', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Indonesia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ie', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Ireland</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=il', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Israel</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=in', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>India</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=it', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Italy</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=jp', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Japan</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=kr', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>South Korea</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=lt', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Lithuania</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=lv', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Latvia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ma', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Morocco</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=mx', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Mexico</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=my', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Malaysia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ng', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Nigeria</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=nl', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Netherlands</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=no', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Norway</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=nz', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>New Zealand</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ph', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Philippines</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=pl', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Poland</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=pt', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Portugal</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ro', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Romania</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=rs', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Serbia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ru', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Russia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=sa', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Saudi Arabia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=se', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Sweden</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=sg', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Singapore</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=si', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Slovenia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=sk', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Slovakia</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=th', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Thailand</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=tr', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Turkey</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=tw', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Taiwan</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ua', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Ukraine</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=us', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>United States</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=ve', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>Venezuela</a>
                                        <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); setUrl_top(props.topHeadInfo.subDomain, '&country=za', props.topHeadInfo.category, props.topHeadInfo.sortBy, props.topHeadInfo.langauge) }}>South Africa</a>



                                    </div>
                                </div>
                            </li>
                            <li>
                                <form className="form-inline my-2 my-lg-0" style={{ marginLeft: '10vw' }}>
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={searchV} onChange={updateSearch} />
                                    <button disabled={searchV.length === 0 ? true : false} className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={(e) => { e.preventDefault(); search() }}>Search</button>
                                </form>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className=" nav-link dropdown-toggle shadow-none text-primary border border-info mx-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {lang}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=en') }}><option value='en'> English</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=ar') }}><option value='ar'> Arabic</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=de') }}><option value='de'> German</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=es') }}><option value='es'> Spanish</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=fr') }}><option value='fr'> French</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=he') }}><option value='he'> Hebrew</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=it') }}><option value='it'> Italian</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=nl') }}><option value='nl'> Dutch</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=no') }}><option value='no'> Norwegian</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=pt') }}><option value='pt'> Portuguese</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=ru') }}><option value='ru'> Russian</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=sv') }}><option value='sv'> Swedish</option></a>
                                        <a href="/" onClick={(e) => { e.preventDefault(); setLaungauge('&language=zh') }}><option value='zh'> Chinese  (Mandarin)</option></a>

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
            <br />

        </>
    )
}