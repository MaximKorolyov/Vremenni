import '../../styles/doc_page.css';
import { Link } from 'react-router-dom';


const Document = ({ type, name, size, date, link }) => (
  <a href={link} download>
  <div className="document">
    
    <div className="left-side">
      <img src={`./${type}.png`} />
      <div className="file-info">
              <div>{name}</div>
      </div>
    </div>
    <div className="document-info">
      <div className="right-side">
        <div>{size}</div>
        <div>{date}</div>
      </div>
    </div>
  </div>
  </a>
);

export const DocumentsPage = () => {
  const documents = [
    { type: 'docx', name: 'Согласие на обработку персональных данных', size: '34 КБ', date: '22.09.24', link: './files/test.docx' },
    { type: 'pdf', name: 'Календарный план', size: '94 КБ', date: '22.09.24', link: './files/vkr.pdf' },
    { type: 'pdf', name: 'Правила участия в олимпиаде', size: '107 КБ', date: '27.09.24', link: './files/vkr.pdf' },
    { type: 'pdf', name: 'Правила подачи апелляции результатов олимпиады', size: '140 КБ', date: '22.09.24', link: './files/vkr.pdf' },
    { type: 'pdf', name: 'Регламент', size: '834 КБ', date: '22.09.24', link: './files/vkr.pdf' },
    { type: 'pdf', name: 'Положение', size: '169 КБ', date: '25.10.24', link: './files/vkr.pdf' },
    { type: 'pdf', name: 'Организационно-методическое положение', size: '201 КБ', date: '25.10.24', link: './files/vkr.pdf' },
  ];

  return (

    <div className="documents-page">
      <h1 class="hhhh">Документы</h1>
      <div className="documents-list">
        {documents.map((doc, index) => (
          <Document key={index} {...doc} />
        ))}
        <Link to="/archive_documents">
          <div className="archive-button">
            <div className="left-side">
              <div className="file-info">
                  <div>Документы прошлых лет - в Архиве</div>
              </div>
            </div>
            <div className="right-side">
            <div className="strelka">→</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    
  );
};
