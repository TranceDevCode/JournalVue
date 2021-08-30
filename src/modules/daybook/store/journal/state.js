
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),  //12345678988
            date: new Date().toDateString(),
            text: 'lorem Ipsum lor ipsda, ipsim laredo poligon calabar cotireensus apiller',
            picture: null, //https://fotos.jpg
        },
        {
            id: new Date().getTime() + 1000,  //12345678988
            date: new Date().toDateString(),
            text: 'El tremendo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et velit repellendus natus quidem similique amet dolor placeat iusto.',
            picture: null, //https://fotos.jpg
        }
        ,
        {
            id: new Date().getTime() + 1001,  //12345678988
            date: new Date().toDateString(),
            text: 'Lorea el ipsum dolor sit amet consectetur adipisicing elit. Et velit repellendus natus quidem similique amet dolor placeat iusto.',
            picture: null, //https://fotos.jpg
        }
    ]    
})