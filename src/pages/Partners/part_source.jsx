import React from 'react';
import '../../styles/App2.css';

function ReturnGenPar(){
  const mass = [
      {key: 1, parh: './General_Partners/1.png', desc: 'Всероссийский союз страховщиков (ВСС) является единым союзом профессиональных участников страхового рынка на федеральном уровне.'},
      {key: 2, parh: './General_Partners/2.png', desc: 'Деятельность Благотворительного фонда «Вклад в будущее» нацелена на содействие развитию социальной сферы с учётом вызовов современного мира.'},
      {key: 3, parh: './General_Partners/3.png', desc: 'FinEx — это международная инвестиционная группа. В России многие знают FinEx благодаря запуску ETF — биржевых инвестиционных фондов.'}
    ]
    
  return mass
  }

function ReturnPar(){
  const mass = [
      {key: 1, parh: './Partners/1.png', desc: ''},
      {key: 2, parh: './Partners/2.png', desc: ''},
      {key: 3, parh: './Partners/3.png', desc: ''}
    ]
  return mass
}

function ReturnInfoPar(){
  const mass = [
      {key: 1, parh: './Information_partners/1.png', desc: ''},
      {key: 2, parh: './Information_partners/2.png', desc: ''},
    ]
    
  return mass
}

function ReturnRegPar(){
  const mass = [
      {key: 1, parh: './Regional_partners/1.png', desc: ''},
      {key: 2, parh: './Regional_partners/2.png', desc: ''},
      {key: 3, parh: './Regional_partners/3.png', desc: ''},
      {key: 4, parh: './Regional_partners/4.png', desc: ''},
      {key: 5, parh: './Regional_partners/5.png', desc: ''},
      {key: 6, parh: './Regional_partners/6.png', desc: ''},
      {key: 7, parh: './Regional_partners/7.png', desc: ''},
      {key: 8, parh: './Regional_partners/8.png', desc: ''},
      {key: 9, parh: './Regional_partners/9.png', desc: ''},
      {key: 10, parh: './Regional_partners/10.png', desc: ''},
      {key: 11, parh: './Regional_partners/11.png', desc: ''},
      {key: 12, parh: './Regional_partners/12.png', desc: ''},
      {key: 13, parh: './Regional_partners/13.png', desc: ''},
      {key: 14, parh: './Regional_partners/14.png', desc: ''},
      {key: 15, parh: './Regional_partners/15.png', desc: ''},
      {key: 16, parh: './Regional_partners/16.png', desc: ''},
      {key: 17, parh: './Regional_partners/17.png', desc: ''},
      {key: 18, parh: './Regional_partners/18.png', desc: ''},
      {key: 19, parh: './Regional_partners/19.png', desc: ''}
    ]
    
  return mass
}

function ReturnSupPar(){
  const mass = [
      {key: 1, parh: './With_the_support/1.png', desc: 'Публичное акционерное общество «Сбербанк России» (ПАО Сбербанк) – один из крупнейших банков в России и один из ведущих глобальных финансовых институтов.'},
      {key: 2, parh: './With_the_support/2.png', desc: 'Платёжная система «Мир» – российская национальная платёжная система. Участниками платежной системы «Мир» являются более 260 банков, которые осуществляют прием и обслуживание карт «Мир» в сети своих устройств. '},
      {key: 3, parh: './With_the_support/3.png', desc: 'ДОМ.РФ — крупнейший финансовый институт, который 25 лет занимается развитием жилищной сферы в России.'}
    ]
    
  return mass
}

const ParceSup = () => {
  const mass = ReturnSupPar();
  const flag = ((mass.length)%3);
  const rows = [];
  let x = 0;
  for (let i = 0; i < (mass.length-flag)/3; i++) {
    
    rows.push(
      <tr  className='tr-style'>
        <td className='image_item_2 td-style'>
        <div className='inner-container'>
            <div>
                  <img src={mass[x].parh} alt={`img`} />             
            </div>
              <p>{mass[x].desc}</p>
          </div>
        </td>
        {mass[i + 1] && (
          <td className='image_item_2 td-style'>
            <div className='inner-container'>
              <div>
                <img src={mass[x+1].parh} alt={`img`} />
              </div>
            
              
              <p>{mass[x+1].desc}</p>
            </div>
          </td>
        )}
        {mass[i + 2] && (
          <td className='image_item_2 td-style'>
            <div className='inner-container'>
              <div>
              <img src={mass[x+2].parh} alt={`img`} />
            </div>
              
              <p>{mass[x+2].desc}</p>
             
            </div>
          </td>
        )}
      </tr>
    );
    x += 3;
  }
  
  return <>{rows}</>;
};

const ParceGen = () => {
  const mass = ReturnGenPar();
  const flag = ((mass.length)%3);
  const rows = [];
  let x = 0;
  for (let i = 0; i < (mass.length-flag)/3; i++) {
    
    rows.push(
      <tr  className='tr-style'>
        <td className='image_item_2 td-style'>
        <div className='inner-container'>
          <div className='image-containerp'>
                <img src={mass[x].parh} alt={`img`} />
            </div>
            
              <p>{mass[x].desc}</p>

          </div>
        </td>
        {mass[i + 1] && (
          <td className='image_item_2 td-style'>
            <div className='inner-container'>
              <div className='image-containerp'>
                <img src={mass[x+1].parh} alt={`img`} />
              </div>
            
              
              <p>{mass[x+1].desc}</p>
            </div>
          </td>
        )}
        {mass[i + 2] && (
          <td className='image_item_2 td-style'>
            <div className='inner-container'>
            <div className='image-containerp'>
                <img src={mass[x+2].parh} alt={`img`} />
              </div>
           
              <p>{mass[x+2].desc}</p>
            
            </div>
          </td>
        )}
      </tr>
    );
    x += 3;
  }
  
  return <>{rows}</>;
};

const ParceReg = () => {
  const mass = ReturnRegPar();
  const flag = ((mass.length)%3);
  const rows = [];
  let x = 0;
  for (let i = 0; i < (mass.length-flag)/3; i++) {
    
     
    rows.push(
      <tr  className='tr-style'>
        <td className='image_item td-style2'>
          <img src={mass[x].parh} alt={`img`} />
        </td>
        {mass[i + 1] && (
          <td className='image_item td-style2'>
            <img src={mass[x+1].parh} alt={`img`} />
          </td>
        )}
        {mass[i + 2] && (
          <td className='image_item td-style2'>
            <img src={mass[x+2].parh} alt={`img`} />
          </td>
        )}
      </tr>
    );
    x += 3;
  
  
}
  
  
  return <>{rows}</>;
};


const ParceReg2 = () => {
  const mass = ReturnRegPar();
  let flag = ((mass.length)%3);
  const rows = [];
  for (let i = (mass.length - flag); i < (mass.length); i++) {
      rows.push(
        <td className='image_item td-style3'>
          <img src={mass[i].parh} alt={`img`} />
        </td>
      )
  }

  return <>{rows}</>;
}


const ParcePar = () => {
  const mass = ReturnPar();
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

const ParceInfo = () => {
  const mass = ReturnInfoPar();
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


export const Partners = () => {


  return (
    <div className="main-part">
        <div className="documents-page">
            <h1 className='title'>ПРИ ПОДДЕРЖКЕ</h1>
            <table className="table-style">
              <tbody>
                <ParceSup />
              </tbody>
          </table>
        </div>
        <div className="documents-page">
            <h1 className='title'>ГЕНЕРАЛЬНЫЕ ПАРТНЕРЫ</h1>
            <table className="table-style">
              <tbody>
                <ParceGen />
              </tbody>
          </table>
        </div>
        <div className="documents-page">
            <h1 className='title'>РЕГИОНАЛЬНЫЕ ПАРТНЕРЫ</h1>
            <table className="table-style">
              <tbody>
                <ParceReg />
              </tbody>
 
          </table>
          <div className='image_container2'>
              <tbody>
                <tr  className='tr-style'>
                <ParceReg2 />
                </tr>
              </tbody>
          </div>
        </div>
        <div className="documents-page">
            <h1 className='title'>ПАРТНЕРЫ</h1>
            <table className="table-style">
              <tbody>
                <ParcePar />
              </tbody>
          </table>
        </div>
        <div className="documents-page">
            <h1 className='title'>ИНФОРМАЦИОННЫЕ ПАРТНЕРЫ</h1>
            <div className='image_container'>
              <tbody>
                <tr  className='tr-style'>
                <ParceInfo />
                </tr>
              </tbody>
          </div>
              
                
              
          
        </div>
    </div>
  );
};






