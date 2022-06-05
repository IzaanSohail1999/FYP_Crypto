import img from "./Izaan.png"
import img1 from "./Arisha.png"
import img2 from "./Maria.png"
import img3 from "./Sir Rafi.png"
import img4 from "./Sir Sufyan.png"
export const Team = (props) => {
  return (
    <div>
      <div className='section-title text-center'>
        <h2>Meet the Team</h2>
      </div>
      <div id='team'>
      <div >
          <img src={img4} width="100" height="100" alt='...' />
          <div>
            <h4>{"Dr. Sufyan"}</h4>
            <p>{"Supervisor"}</p>
          </div>
        </div>
      <div style={{paddingLeft: "10%"}}>
          <img src={img3} width="100" height="100" alt='...' />
          <div>
            <h4>{"Dr. Rafi"}</h4>
            <p>{"Co-Supervisor"}</p>
          </div>
        </div>
        <div style={{paddingLeft: "10%"}}>
          <img src={img} width="100" height="100" alt='...' />
          <div>
            <h4>{"Izaan Sohail"}</h4>
            <p>{"Member 1"}</p>
          </div>
        </div>
        <div style={{paddingLeft: "10%"}}>
          <img src={img1} width="100" height="100" alt='...' />
          <div>
            <h4>{"Arisha Aziz"}</h4>
            <p>{"Member 2"}</p>
          </div>
        </div>
        <div style={{paddingLeft: "10%", paddingRight: "10%"}}>
          <img src={img2} width="100" height="100" alt='...' />
          <div>
            <h4>{"Maria Aliasghar"}</h4>
            <p>{"Member 3"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
