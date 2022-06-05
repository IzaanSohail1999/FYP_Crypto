import { Image } from "./image";
import img from "./Bitcoin_wrapper_approach.png"
import img1 from "./Ethereum_wrapper_approach.png"
import img2 from "./BTC_sklearn_MDI.png"
import img3 from "./Eth_sklearn_MDI.png"
import img4 from "./BTC_MDI.png"
import img5 from "./Eth_MDI.png"
import img6 from "./Btc_Wrapper.png"
import img7 from "./Eth_Wrapper.png"
import cusum from "./bitcoin_cusum.png"
import eth_cusum from "./eth_cusum.png"





export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Graphical Representation</h2>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div>
              <h4><b>Error Percentage Graphs</b></h4>
              <div className='col-sm-5 col-md-5 col-lg-3'>
                <img style={{width:"400", height:"250"}} src={img}/>
              </div>
              
              <div className='col-sm-5 col-md-5 col-lg-3'>
              <img style={{width:"400", height:"250"}} src={img1}/>
              </div>
              
              <div className='col-sm-5 col-md-5 col-lg-3'>
              <img style={{width:"400", height:"250"}} src={img2}/>              
              </div>
              
              <div className='col-sm-5 col-md-5 col-lg-3'>
              <img style={{width:"400", height:"250"}} src={img3}/>             
               </div>
            </div>
          </div>
        </div>
        <br/><br/><br/>
        <div className='row'>
          <div className='portfolio-items'>
            <div>
              <h4><b>Comparison Graphs</b></h4>
              <div className='col-sm-5 col-md-6 col-lg-3'>
              <img style={{width:"400", height:"250"}} src={img6}/> 
              </div>
              <div className='col-sm-5 col-md-6 col-lg-3'>
                {/* <Image title={"Ethereum Wrapper Appraoch Error Percentages"} smallImage={img} largeImage={img} /> */}
                <img style={{width:"400", height:"250"}} src={img7}/>  
              </div>
              <div className='col-sm-5 col-md-6 col-lg-3'>
              <img style={{width:"400", height:"250"}} src={img4}/>  
              </div>
              <div className='col-sm-5 col-md-6 col-lg-3'>
              <img style={{width:"400", height:"250"}} src={img5}/>  
              </div>
            </div>
            </div>
            </div>
            <br/><br/><br/>
            <div className='row'>
          <div className='portfolio-items'>
            <div>
              <h4><b>Cusum Graphs</b></h4>
              <div className='col-sm-5 col-md-6 col-lg-6'>
                <h3>Bitcoin Cusum Graph</h3>
                <Image title={"Bitcoin Cusum Graph"} smallImage={cusum} largeImage={cusum} />
              </div>
              <div className='col-sm-5 col-md-6 col-lg-6'>
                <h3>Ethereum Cusum Graph</h3>
                <Image title={"Ethereum Cusum Graph"} smallImage={eth_cusum} largeImage={eth_cusum} />
                {/* <img style={{width:"950", height:"550"}} src={cusum}/> */}
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>
  )
}
