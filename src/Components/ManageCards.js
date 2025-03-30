import react,{useState} from 'react'

export default function ManageCards() {

    const cards = [
        {"id":1, "type":"party","title":"Party Innovation","call status":"inactive"},
        {"id":2, "type":"business","title":"Party Innovation","call status":"inactive"},
        {"id":3, "type":"family","title":"Party Innovation","call status":"inactive"},
        {"id":4, "type":"kids","title":"Party Innovation","call status":"inactive"},
    ]
    const[data, setData] = useState(cards);

    return(
        <>
            <h1>Manage Cards</h1>
            <p>Dear Jhon, card details</p>
          {data.sort.map((k,i) => (<>   
          <div key={k.id}>{k.type}</div>
          </>) )}
            
        </>
    )
}