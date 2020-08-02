export default class Btd_service {
    data = [
        {
            id: 1,
            title: 'Жигулівське',
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2729594/0a261944-fd06-48d1-90bf-e39a8d70a564/s1200',
            description: 'ЖИВЕ непастеризоване "Жигулівське" пиво з Умані порадує Вас незмінним та незабутнім хмільним смаком, який завжди до вподоби як і тим, хто його давно вживає, так і тим, хто куштує його вперше!'
        },
        {
            id: 2,
            title: 'Waissburg Blanche',
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2932440/88c2bd22-70d7-4270-8eda-873fad76aa70/s1200',
            description: 'Нефільтроване пшеничне світле пиво верхового бродіння молочно-жовтого кольору, має складний і багатий аромат солоду і спецій в поєднанні з нотками фруктів.'
        },
        {
            id: 3,
            title: 'Опілля',
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2995913/54cef9b4-62da-42be-b677-613652c41259/s1200',
            description: 'Легке, з насиченим хмільним смаком, чисто класичне пивко'
        },
        {
            id: 4,
            title: 'Душа Пивовара',
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2477309/fae2269c-362e-4cde-9215-b00b04023e04/s1200',
            description: 'М\'яке, насичене з поєднанням хмелю та солоду, і легким післясмаком солодкуватості пивко'
        },
        {
            id: 5,
            title: 'Мюнхенське',
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2380086/08c33d2f-b1c0-4b6b-87de-e758ffb2f501/s1200',
            description: 'Смачне непастеризоване, пшеничне нефільтроване ,біле пиво , без гірчинки та солодкуватості'
        },
        {
            id: 6,
            title: 'Бергшлосс',
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2711790/fe0a0a81-4234-4b26-81f0-02d51c45c8dd/s1200',
            description: 'Хочеться міцненького? Тоді м\'яке, плотне, насичене пивко з 6,5% вмісту спирту, стане чудовим доповненням вашого відпочинку :)'
        },
        {
            id: 7,
            title: 'Бердичівське',
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2711790/fe0a0a81-4234-4b26-81f0-02d51c45c8dd/s1200',
            description: 'Легке, м\'яке "Пшеничне"пиво, без гірчинки, та солодкуватості, з міста Бердичів'
        },
        {
            id: 8,
            title: "Ель 'Грейпфрут'",
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2801191/1da434ce-f191-4b15-a8c7-43ac48255f87/s1200',
            description: 'Смачний фруктовий Ель зі смаком грейпфрута'
        },
        {
            id: 9,
            title: "Ель 'Смородина'",
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2976609/2cbd5efb-b337-4386-ba3f-a94a6429b974/s1200',
            description: 'Смачний фруктовий Ель зі смаком смородини'
        },
        {
            id: 10,
            title: "Ель 'Вишня'",
            imgUrl: 'https://avatars.mds.yandex.net/get-pdb/2796844/b7f1cbbd-8f0a-4bd5-b080-2ffaf6bc3afe/s1200',
            description: 'Смачний фруктовий Ель зі смаком вишні'
        },
    ];
    getData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.99){
                    reject(new Error('hehe'))
                }
                else{
                    resolve(this.data);
                }
            }, 500)
        })
    };
    getSomeData() {
        return new Promise((resolve) => {
            let idxRand = Math.floor(Math.random()*this.data.length);
            setTimeout(() => {

                resolve(this.data[idxRand]);
            }, 500);
        })
    }
}
