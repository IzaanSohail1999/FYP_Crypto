import btc_result from "./btc_Results.png";
import eth_result from "./eth_Results.png";

export const Results = (props) => {
  return (
    <div id='testimonials'>
      <div className='container text-center'>
        <div className='section-title text-center'>
          <h2>Results</h2>
        </div>
        <div className='row'>
        <div>
          <h4> Bitcoin Results</h4>
          <img style={{width:"500", height:"300"}} src={btc_result}/>
        </div>
        <div>
          <h4> Ethereum Results</h4>
          <img style={{width:"500", height:"300"}} src={eth_result}/>
        </div>
        </div>
      </div>
    </div>
  )
}
