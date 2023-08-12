// everythin

// publishedAt- shows newest article first
// https://newsapi.org/v2/everything?q=india&from=2023-06-10&to=2023-06-13&sortBy=publishedAt&apiKey=a3aca2044554464da1262eb08f8e1c47   &page=1&pageSize=5
// https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=a3aca2044554464da1262eb08f8e1c47&page=1&pageSize=5
// we can search by words also
// put q=<your search word>

// search by newsachannel names also
// https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=a3aca2044554464da1262eb08f8e1c47


// top  headlines
// by country
// https://newsapi.org/v2/top-headlines?country=us3&sortBy=publishedAt&&apiKey=a3aca2044554464da1262eb08f8e1c47&page=1&pageSize=5

// by category
// https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a3aca2044554464da1262eb08f8e1c47

// top headline from india as i am from india
// https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=a3aca2044554464da1262eb08f8e1c47&page=1&pageSize=5

// different category
// bus'&country=ae' props.topHeadInfo.category// science
// sports
// technology
// import { url } from "./navbar"
// export default function Example(){
//     return (
//         <div>
//             {url}
//         </div>
//     )
// }


{/* <a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ae',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>United Arab Emirates</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ar',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Argentina</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=at',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Austria</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=au',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Australia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=be',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Belgium</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=bg',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Bulgaria</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=br',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Brazil</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ca',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Canada</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ch',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Switzerland</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=cn',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>China</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=co',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Colombia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=cu',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Cuba</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=cz',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Czech Republic</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=de',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Germany</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=eg',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Egypt</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=fr',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>France</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=gb',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>United Kingdom</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=gr',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Greece</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=hk',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Hong Kong</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=hu',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Hungary</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=id',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Indonesia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ie',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Ireland</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=il',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Israel</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=in',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>India</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=it',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Italy</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=jp',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Japan</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=kr',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>South Korea</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=lt',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Lithuania</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=lv',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Latvia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ma',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Morocco</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=mx',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Mexico</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=my',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Malaysia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ng',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Nigeria</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=nl',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Netherlands</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=no',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Norway</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=nz',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>New Zealand</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ph',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Philippines</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=pl',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Poland</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=pt',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Portugal</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ro',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Romania</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=rs',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Serbia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ru',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Russia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=sa',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Saudi Arabia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=se',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Sweden</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=sg',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Singapore</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=si',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Slovenia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=sk',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Slovakia</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=th',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Thailand</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=tr',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Turkey</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=tw',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Taiwan</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ua',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Ukraine</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=us',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>United States</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=ve',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>Venezuela</a>
<a className="dropdown-item" href="/"  onClick={(e)=>{e.preventDefault();setUrl_top(props.topHeadInfo.subDomain,'&country=za',props.topHeadInfo.category,props.topHeadInfo.sortBy)}}>South Africa</a> */}




en:   <a> English</a>
ar:   <a> Arabic</a>
de:   <a> German</a>
es:   <a> Spanish</a>
fr:   <a> French</a>
he:   <a> Hebrew</a>
it:   <a> Italian</a>
nl:   <a> Dutch</a>
no:   <a> Norwegian</a>
pt:   <a> Portuguese</a>
ru:   <a> Russian</a>
sv:   <a> Swedish</a>
zh:   <a> Chinese (Mandarin)</a>