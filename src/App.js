import React, { useState, useEffect } from 'react'

function App() {
  let [data, setData] = useState([])
  useEffect(() => {
    let fetchData = async () => {
      const URL = "https://api.github.com/users/gagandatt"
      let response = await fetch(URL)
      let finalData = await response.json()
       console.log(finalData)
      setData(finalData)
    }
    fetchData()
  },[])

  return (
    <>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src={data.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.bio}</p>
                  <a href={data.html_url} target="_blank" className="btn btn-primary">Github</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App