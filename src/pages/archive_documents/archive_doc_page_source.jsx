import React, { useState } from 'react';
import '../../styles/doc_page.css';

const AccordionItem = ({ year, documents }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="document3">
      <div
        className="document2"
        tabIndex={0} // Позволяет элементу получать фокус
        role="button" // Указывает, что это кнопка
        onClick={toggleAccordion}>
        <div className="file-info">
            <div>{year}</div>
        </div>
        <span>{isOpen ? '▲' : '▼'}</span>
        </div>
      {isOpen && (
            
        
        <div className="accordion-content">
        <img className="redline" src={`./redline.png`} />
          <ul>
            {documents.map((doc, index) => (
              <Document key={index} {...doc} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Document = ({ type, name, size, date, link }) => (
    <a href={link} download>
    <div className="document2">
      
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

export const ArchDocPage = () => {
  const olympiadData = [
    {
      year: 'Олимпиада 2023/2024 года',
      documents: [
        { type: 'pdf', name: 'Календарный план', size: '94 КБ', date: '22.09.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Правила участия в олимпиаде', size: '107 КБ', date: '27.09.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Правила подачи апелляции результатов олимпиады', size: '140 КБ', date: '22.09.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Регламент', size: '834 КБ', date: '22.09.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Положение', size: '169 КБ', date: '25.10.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Организационно-методическое положение', size: '201 КБ', date: '25.10.24', link: './files/vkr.pdf' },
      ],
    },
    {
      year: 'Олимпиада 2022/2023 года',
      documents: [
        { type: 'pdf', name: 'Календарный план', size: '94 КБ', date: '22.09.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Правила участия в олимпиаде', size: '107 КБ', date: '27.09.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Правила подачи апелляции результатов олимпиады', size: '140 КБ', date: '22.09.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Регламент', size: '834 КБ', date: '22.09.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Положение', size: '169 КБ', date: '25.10.24', link: './files/vkr.pdf' },
        { type: 'pdf', name: 'Организационно-методическое положение', size: '201 КБ', date: '25.10.24', link: './files/vkr.pdf' },
      ],
    },
    {
      year: 'Олимпиада 2021/2022 года',
      documents: [],
    },
    {
        year: 'Олимпиада 2020/2021 года',
        documents: [],
    },
    {
        year: 'Олимпиада 2019/2020 года',
        documents: [],
    },
    {
        year: 'Олимпиада 2018/2019 года',
        documents: [],
    },
    {
        year: 'Олимпиада 2017/2018 года',
        documents: [],
    },

    // Добавьте дополнительные годы, если нужно
  ];

  return (
    <div className="documents-page">
      <h1 className='hhhh'>Архив олимпиад прошлых лет</h1>
      <div className="years">
        <div>2023/2024</div>
        <div>2022/2023</div>
        <div>2021/2022</div>
        <div>2020/2021</div>
        <div>2019/2020</div>
        <div>2018/2019</div>
        <div>2017/2018</div>
      </div>
      <div className="documents-list">
        {olympiadData.map((item, index) => (
          <AccordionItem key={index} year={item.year} documents={item.documents} />
        ))}
      </div>
    </div>
  );
};


