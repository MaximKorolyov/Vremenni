import React from 'react';
import partner1 from '../../../assets/assets/partner-1.svg'
import partner2 from '../../../assets/assets/partner-2.svg'
import partner3 from '../../../assets/assets/partner-3.svg'
import partner1_info from '../../../assets/assets/info-partner-1.svg'
import partner2_info from '../../../assets/assets/info-partner-2.svg'
import './PartnersBlock.scss'

const PartnersBlock = () => (
    <div class="main-container__partners partners">
                <p class="partners__title">ПАРТНЕРЫ</p>
                <div class="partners__partners-logo-block">
                    <a href="" class="partners__link"><img src={partner1} alt="" class="partners__partner-logo" /></a>
                    <a href="" class="partners__link"><img src={partner2} alt="" class="partners__partner-logo" /></a>
                    <a href="" class="partners__link"><img src={partner3} alt="" class="partners__partner-logo" /></a>
                </div>
                <p class="partners__title">ИФНОРМАЦИОННЫЕ ПАРТНЕРЫ</p>
                <div class="partners__partners-logo-block">
                    <a href="" class="partners__link"><img src={partner1_info} alt="" class="partners__partner-logo" /></a>
                    <a href="" class="partners__link"><img src={partner2_info} alt="" class="partners__partner-logo" /></a>
                </div>
            </div>
    );
export default PartnersBlock