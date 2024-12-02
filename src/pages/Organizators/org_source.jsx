import '../../styles/App2.css';


function ReturnMass(){
  const mass = [
      {key: 1, parh: './Organizators/1.png'},
      {key: 2, parh: './Organizators/2.png'},
      {key: 3, parh: './Organizators/3.png'},
      {key: 4, parh: './Organizators/4.png'},
      {key: 5, parh: './Organizators/5.png'},
      {key: 6, parh: './Organizators/6.png'},
      {key: 7, parh: './Organizators/7.png'},
      {key: 8, parh: './Organizators/8.png'}
    ]
    
  return mass
  }

const Parce = () => {
  const mass = ReturnMass();
  const flag = ((mass.length)%3);
  const rows = [];
  let x = 0;
  for (let i = 0; i < (mass.length-flag)/3; i++) {
    
    rows.push(
      <tr  className='tr-style'>
        <td className='image_item td-style'>
          <img src={mass[x].parh} alt={`img`} />
        </td>
        {mass[i + 1] && (
          <td className='image_item td-style'>
            <img src={mass[x+1].parh} alt={`img`} />
          </td>
        )}
        {mass[i + 2] && (
          <td className='image_item td-style'>
            <img src={mass[x+2].parh} alt={`img`} />
          </td>
        )}
      </tr>
    );
    x += 3;
  }
  
  return <>{rows}</>;
};

const Parce2 = () => {
  const mass = ReturnMass();
  let flag = ((mass.length)%3);
  const rows = [];
  for (let i = (mass.length - flag); i < (mass.length); i++) {
      rows.push(
        <td className='image_item td-style'>
          <img src={mass[i].parh} alt={`img`} />
        </td>
      )
  }

  return <>{rows}</>;
}



export const Organizators = () => {


  return (
    <div className="main-part">
        <div className="documents-page">
            <h1 className='title'>ОРГАНИЗАТОРЫ</h1>
            <table className="table-style">
              <tbody>
                <Parce />
              </tbody>
          </table>
          <div className='image_container'>
          <tbody>
            <tr  className='tr-style'>
              <Parce2 />
            </tr>
          </tbody>
          </div>
        </div>
        
    </div>
  );
};



