import { Image } from "./image";
import img from "./Bitcoin_wrapper_approach.png"
import img1 from "./Ethereum_wrapper_approach.png"
import img2 from "./BTC_sklearn_MDI.png"
import img3 from "./Eth_sklearn_MDI.png"


export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Graphical Representation</h2>
          <h4>Graphical Representation of key indicators, there impact and future price prediction</h4>
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
                <Image title={"Bitcoin Wrapper Appraoch Error Percentages"} smallImage={img} largeImage={img} />
              </div>
              <div className='col-sm-5 col-md-6 col-lg-3'>
                <Image title={"Ethereum Wrapper Appraoch Error Percentages"} smallImage={img} largeImage={img} />
              </div>
              <div className='col-sm-5 col-md-6 col-lg-3'>
                <Image title={"Bitcoin MDI Appraoch Error Percentages"} smallImage={img} largeImage={img} />
              </div>
              <div className='col-sm-5 col-md-6 col-lg-3'>
                <Image title={"Ethereum MDI Appraoch Error Percentages"} smallImage={img} largeImage={img} />
              </div>
            </div>
            </div>
            </div>
            <br/><br/><br/>
            <div className='row'>
          <div className='portfolio-items'>
            <div>
              <h4><b>Cusum Graphs</b></h4>
              <div className='col-sm-5 col-md-6 col-lg-3'>
                <Image title={"Bitcoin Wrapper Appraoch Error Percentages"} smallImage={img} largeImage={img} />
              </div>
              <div className='col-sm-5 col-md-6 col-lg-3'>
                <Image title={"Ethereum Wrapper Appraoch Error Percentages"} smallImage={img} largeImage={img} />
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>
  )
}
