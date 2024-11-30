import news_1 from '../../../assets/assets/news-1.jpg'
import news_2 from '../../../assets/assets/news-2.jpg'
import news_3 from '../../../assets/assets/news-3.jpg'
import './NewsBlock.scss'

const NewsBlock = () => (
    <div class="main-container__news news">
                <div class="news__btns-block">
                    <p class="news__btn news__btn_enabled">НОВОСТИ</p>
                    <p class="news__btn news__btn_disabled">СОБЫТИЯ</p>
                    <p class="news__btn news__btn_disabled">СМИ О НАС</p>
                </div>
                <div class="news__news-container">
                    <div class="news__news-card news-card">
                        <img src={news_1} alt="" class="news-card__img" />
                        <div class="news-card__desc">
                            <p class="news-card__date">06 МАРТА 2024</p>
                            <p class="news-card__text">Игорь Костиков: Сплошь и рядом, когда менеджеры банков 
                                пытаются продать людям (особенно пожилым людям) продукты, которые для них не предназначены.
                            </p>
                        </div>
                    </div>
                    <div class="news__news-card news-card">
                        <img src={news_2} alt="" class="news-card__img" />
                        <div class="news-card__desc">
                            <p class="news-card__date">02 МАРТА 2024</p>
                            <p class="news-card__text">Финал Олимпиады «Финатлон для старшеклассников» 2023-2024 в Республике Башкортостан.
                            </p>
                        </div>
                    </div>
                    <div class="news__news-card news-card">
                        <img src={news_3} alt="" class="news-card__img" />
                        <div class="news-card__desc">
                            <p class="news-card__date">29 ФЕВРАЛЯ 2024</p>
                            <p class="news-card__text">Заключительный этап Олимпиады. Дорогие друзья! Напоминаем, что 
                                финал XIX Олимпиады «Финатлон для старшеклассников» состоится 2 марта 2024г.
                            </p>
                        </div>
                    </div>
                </div>
                <a href="" class="news__link-to-all">Все новости</a>
            </div>
    );


export default NewsBlock