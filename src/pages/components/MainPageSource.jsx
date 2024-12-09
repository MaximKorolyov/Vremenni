import React from 'react';
import './MainPage.scss';
import logo from '../../assets/Logo.svg'
import number1 from '../../assets/assets/number-1.svg'
import number2 from '../../assets/assets/number-2.svg'
import number3 from '../../assets/assets/number-3.svg'
import vector from '../../assets/assets/vector.svg'
import AD1 from '../../assets/assets/AD_1.jpg'
import AD2 from '../../assets/assets/AD_2.jpg'
import PartnersBlock from './PartnersBlock/PartnersBLock';
import MediaCarousel from './MediaBlock/CarouselComponent';
import ProjectsBlock from './ProjectsBlock/ProjectsBlock';
import StageCard from './StageCard/StageCard';
import ForParticipants from './ForParticipantsBlock/ForParticipants'
import NewsBlock from './NewsBlock/NewsBlock';
import { Link } from 'react-router-dom';

export const YourComponent = () => {
  return (
    <div className="main-part"> 
    <div className="photo-block">
      <img src={logo} alt="" className="photo-block__logo" />
      <p className="photo-block__desc">
        Всероссийская олимпиада по финансовой<br />
        грамотности, устойчивому развитию и<br />
        защите прав потребителей финансовых<br />
        услуг
      </p> 
      {/* {`${styles.menu__item} ${styles.menu__item_first}` */}
    </div>
      <div className="main-container">
        <div className="main-container__main-block main-block">
          <div className="main-block__info-block info-block">
            <h1 className="info-block__title">ФИНАТЛОН ДЛЯ СТАРШЕКЛАССНИКОВ</h1>
            <p className="info-block__text">
              Участие в Олимпиаде «Финатлон для старшеклассников» – это, прежде всего, ценный опыт, проба своих сил, новые знания и интересные знакомства. 
              Победители и призеры Олимпиады получают Дипломы, а участники финала - Сертификаты финалистов.
              <br />
              Дипломанты Всероссийской Олимпиады по финансовой грамотности, устойчивому развитию и защите прав потребителей финансовых услуг – 
              «Финатлона для старшеклассников», получат возможность встретиться с руководителями комитетов Государственной Думы, Банка России, руководством 
              ведущих банков страны и финансовых компаний.<br />
              Победителями становятся сильнейшие, но каждый участник приобретает знания, необходимые не только в профессии финансиста, но и в жизни – 
              ведь мы живем в рыночной экономике и являемся потребителями товаров и услуг.
            </p>
            <div className="info-block__stages-container">
              <StageCard 
                stageNumber={number1} 
                title="РЕГИСТРАЦИЯ" 
                dates="01 СЕНТ - 01 ДЕК" 
                desc="Регистрация участников осуществляется на сайте Олимпиады «Финатлон для старшеклассников» (актуальный домен сайта)."
              />
              <StageCard 
                stageNumber={number2}
                title="ОТБОРОЧНЫЙ ЭТАП" 
                dates="01 ДЕК - 31 ДЕК" 
                desc="Регистрация участников осуществляется на сайте Олимпиады «Финатлон для старшеклассников» (актуальный домен сайта)."
              />
              <StageCard 
                stageNumber={number3}
                title="ФИНАЛ" 
                dates="01 ФЕВР - 31 МАРТ" 
                desc="Регистрация участников осуществляется на сайте Олимпиады «Финатлон для старшеклассников» (актуальный домен сайта)."
              />
            </div>
          </div>

          <MediaCarousel />

          <ProjectsBlock />

          <ForParticipants />
           <NewsBlock />
          <PartnersBlock />
        </div>
         <AsideMenu />
      </div>
    </div>
  );
};

const AsideMenu = () => (
    <div class="main-container__aside aside">
        <div class="aside__menu menu">
          <div class="menu__head-of-list">
                <p class="menu__title">Новости</p>
            </div>
            <div class="menu__head-of-list">
            <Link to="/Contacts"><p class="menu__title">Контакты</p></Link>
            </div>
            <div class="menu__head-of-list">
                <Link to="/documents"><p class="menu__title">Документы</p></Link>
            </div>
            <div class="menu__head-of-list">
            <Link to="/Qapage"><p class="menu__title">Выпросы и ответы</p></Link>
            </div>
            <div class="menu__head-of-list">
                <p class="menu__title">Участникам</p>
            </div>
            <div class="menu__head-of-list">
            <Link to="/partners"><p class="menu__title">Партнеры</p></Link>
            </div>
            <div class="menu__head-of-list">
            <Link to="/organizators"><p class="menu__title">Организаторы</p></Link>
            </div>
            <div class="menu__head-of-list">
                <p class="menu__title">Этапы проведения</p>
            </div>
        </div>
        <div class="aside__ad">
            <a href="" class="aside__link"><img src={AD1} alt="" class="aside__img" /></a>
        </div>
        <div class="aside__ad">
            <a href="" class="aside__link"><img src={AD2} alt="" class="aside__img" /></a>
        </div>
    </div>
    );

// export default YourComponent;
