import '../../styles/App3.css';




export const ContactPage = () => {
    const ContactPageItems = {
        adres: "Москва, ул. Сущевский вал, д.16, стр.4",
        phone: "+7 (495) 369-04-02 доб. 2",
        extension_phone: "Оргкомитет Олимпиады: доб. 131, 133",
        email: "olimpiada@ifru.ru",
        social_network_img: "../../public/vk-1024.png",
    }
    

    return (
        <div className="main-part">
            <div className="documents-page">
                <h1 className="title">Контакты</h1>
                <div className="container">
                    <div >
                        <div className="item">
                            <h1>Адрес: </h1>
                            <p>{ContactPageItems.adres}</p>
                        </div>
                        <div className="item">
                            <h1>Телефон: </h1>
                            <p>{ContactPageItems.phone}</p>
                            <p>{ContactPageItems.extension_phone}</p>
                        </div>
                        
                    </div>
                    <div>
                        <div className="item">
                            <h1>Режим работы: </h1>
                            <div className="flex">
                            <h3>пн</h3>
                            <h3>10:00-18:00</h3>
                            </div>
                            <div className="flex">
                            <h3>вт</h3>
                            <h3>10:00-18:00</h3>
                            </div>
                            <div className="flex">
                            <h3>ср</h3>
                            <h3>10:00-18:00</h3>
                            </div>
                            <div className="flex">
                            <h3>чт</h3>
                            <h3>10:00-18:00</h3>
                            </div>
                            <div className="flex">
                            <h3>пт</h3>
                            <h3>10:00-18:00</h3>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="container">
                    <div className="item">
                        <h1>E-mail: </h1>
                        <p>{ContactPageItems.email}</p>
                    </div>
                    <div className="item2">
                            <h1> Социальные сети: </h1>
                            <img src={ContactPageItems.social_network_img}/>
                    </div>
                
                </div>
                <div className="map">
                    <img  src="../../public/map.png"/>
                </div>
            </div>
        </div>

    )
}