import React from 'react'

const CaptionSide = () => {
  const data = [
    {
      name: '"Stone Cold" Steve Austin',
      signatureMoves: 'Stone Cold Stunner, Lou Thesz Press',
    },
    { name: 'Bret "The Hitman" Hart', signatureMoves: 'The Sharpshooter' },
    { name: 'Razor Ramon', signatureMoves: "Razor's Edge, Fallaway Slam" },
  ]

  return (
    <div className="col-span-12 card">
      <div className="card-header">
        <h6 className="card-title">Caption Side</h6>
      </div>
      <div className="card-body">
        <table className="table table-auto bordered">
          <caption className="pb-3 text-xs text-gray-500 dark:text-gray-400 caption-top">
            Table 3.1: Professional wrestlers and their signature moves.
          </caption>
          <thead>
            <tr>
              <th>Wrestler</th>
              <th>Signature Move(s)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((wrestler, index) => (
              <tr key={index}>
                <td>{wrestler.name}</td>
                <td>{wrestler.signatureMoves}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CaptionSide
