import React, {useEffect, useState} from 'react'
export default function  Data(){


const [data, setData] = useState([])

useEffect(() => {
    ArtistData()
    }, [])

async function ArtistData() {
    const response = await fetch("http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases",{
        headers: {Accept: "application/json"}
    })
    const object = await response.json()
    setData(object)
}

return(
    <div>{data.name}</div>
)
};
