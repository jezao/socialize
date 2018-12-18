import React from 'react'
import RNEventSource from 'react-native-event-source'

import Style from './css/style.css'
import Img from './images/FIFA_Live_app.png'

const videoID = '370209250415517'
const options = { headers: { 'Allow-Origin': '*' } };

const url = 'https://streaming-graph.facebook.com/278904099648226/live_reactions?access_token=EAAcf1Tp1GlwBAPDJ1YHmRzQxNynmxIvadd3Lb8yMLNa2xz0kzDj3Bmgvxby3dnulgn5qGIPGfMZCn3mPSvx6Cvuy35qsKzrZAdarZAayXzi2KCdLNb42E8T9Ci9V1OmWtLoAgnWzT56vOzPyfC0EHTpj77ftR3BVPEI9BAgvnO2W2mbbsC3Licz9mm0glq7BmoPwYKh6S0JxqZAmVEVl15VtR8irilBcxDsxcsKD2AZDZD&fields=reaction_stream';
const eventSource = new RNEventSource(url,options);
 
eventSource.addEventListener('message', (event) => {
  console.log(event.type); // message
  console.log(event.data);
});

export default function () {
    return (
        <div className="container">
            <img src={Img} />

            <div className={`votesGermany`}>
                    33%
            </div>

            <div className={`votesSpain`}>
                    33%
            </div>

            <div className={`votesArab`}>
                    33%
            </div>  

        </div>
    )
}