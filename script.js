const container = document.getElementById('cont');
const snapThat = document.getElementById('snapThat');
const welcome = document.createElement('div');
welcome.setAttribute('class','welcome content');
welcome.innerHTML = `
    <h1>Welcome To Snap That</h1>
    <p>Enjoy snapping !</p>
    <button onclick="playDaMusic()">Click Me !</button>
`
container.appendChild(welcome);

const colorList = [
    '#0048BA',
    '#B0BF1A',
    '#7CB9E8',
    '#C0E8D5',
    '#B284BE',
    '#72A0C1',
    '#EDEAE0',
    '#F0F8FF',
    '#C46210',
    '#EFDECD',
    '#E52B50',
    '#9F2B68',
    '#F19CBB',
    '#AB274F',
    '#D3212D',
    '#3B7A57',
    '#FFBF00',
    '#FF7E00',
    '#9966CC',
    '#3DDC84',
    '#CD9575',
    '#665D1E',
    '#915C83',
    '#841B2D',
    '#FAEBD7',
    '#008000',
    '#8DB600',
    '#FBCEB1',
    '#00FFFF',
    '#7FFFD4',
    '#D0FF14',
    '#4B5320',
    '#8F9779',
    '#E9D66B',
    '#B2BEB5',
    '#87A96B',
    '#FF9966',
    '#A52A2A',
    '#FDEE00',
    '#568203',
    '#007FFF',
    '#F0FFFF',
    '#89CFF0',
    '#A1CAF1',
    '#F4C2C2',
    '#FEFEFA',
    '#FF91AF',
    '#FAE7B5',
    '#DA1884',
    '#7C0A02',
    '#848482',
    '#BCD4E6',
    '#9F8170',
    '#F5F5DC',
    '#2E5894',
    '#9C2542',
    '#FFE4C4',
    '#3D2B1F',
    '#967117',
    '#CAE00D',
    '#BFFF00',
    '#FE6F5E',
    '#BF4F51',
    '#000000',
    '#3D0C02',
    '#1B1811',
    '#3B2F2F',
    '#54626F',
    '#3B3C36',
    '#BFAFB2',
    '#FFEBCD',
    '#A57164',
    '#318CE7',
    '#ACE5EE',
    '#FAF0BE',
    '#660000',
    '#0000FF',
    '#1F75FE',
    '#0093AF',
    '#0087BD',
    '#0018A8',
    '#333399',
    '#0247FE',
    '#A2A2D0',
    '#6699CC',
    '#0D98BA',
    '#064E40',
    '#5DADEC',
    '#126180',
    '#8A2BE2',
    '#7366BD',
    '#4D1A7F',
    '#5072A7',
    '#3C69E7',
    '#DE5D83',
    '#79443B',
    '#E3DAC9',
    '#006A4E',
    '#87413F',
    '#CB4154',
    '#66FF00',
    '#D891EF',
    '#C32148',
    '#1974D2',
    '#FFAA1D',
    '#FF55A3',
    '#FB607F',
    '#004225',
    '#CD7F32',
    '#88540B',
    '#AF6E4D',
    '#1B4D3E',
    '#7BB661',
    '#FFC680',
    '#800020',
    '#DEB887',
    '#A17A74',
    '#CC5500',
    '#E97451',
    '#8A3324',
    '#BD33A4',
    '#702963',
    '#536872',
    '#5F9EA0',
    '#A9B2C3',
    '#91A3B0',
    '#006B3C',
    '#ED872D',
    '#E30022',
    '#FFF600',
    '#A67B5B',
    '#4B3621',
    '#A3C1AD',
    '#C19A6B',
    '#EFBBCC',
    '#FFFF99',
    '#FFEF00',
    '#FF0800',
    '#E4717A',
    '#00BFFF',
    '#592720',
    '#C41E3A',
    '#00CC99',
    '#960018',
    '#D70040',
    '#FFA6C9',
    '#B31B1B',
    '#56A0D3',
    '#ED9121',
    '#00563F',
    '#703642',
    '#C95A49',
    '#ACE1AF',
    '#007BA7',
    '#2F847C',
    '#B2FFFF',
    '#246BCE',
    '#DE3163',
    '#007BA7',
    '#2A52BE',
    '#6D9BC3',
    '#1DACD6',
    '#007AA5',
    '#E03C31',
    '#F7E7CE',
    '#F1DDCF',
    '#36454F',
    '#232B2B',
    '#E68FAC',
    '#DFFF00',
    '#7FFF00',
    '#FFB7C5',
    '#954535',
    '#E23D28',
    '#DE6FA1',
    '#A8516E',
    '#AA381E',
    '#856088',
    '#FFB200',
    '#7B3F00',
    '#D2691E',
    '#58111A',
    '#FFA700',
    '#98817B',
    '#E34234',
    '#CD607E',
    '#E4D00A',
    '#9FA91F',
    '#7F1734',
    '#0047AB',
    '#D2691E',
    '#6F4E37',
    '#B9D9EB',
    '#F88379',
    '#8C92AC',
    '#B87333',
    '#DA8A67',
    '#AD6F69',
    '#CB6D51',
    '#996666',
    '#FF3800',
    '#FF7F50',
    '#F88379',
    '#893F45',
    '#FBEC5D',
    '#B31B1B',
    '#6495ED',
    '#FFF8DC',
    '#2E2D88',
    '#FFF8E7',
    '#81613C',
    '#FFBCD9',
    '#FFFDD0',
    '#DC143C',
    '#9E1B32',
    '#A7D8DE',
    '#F5F5F5',
    '#00FFFF',
    '#00B7EB',
    '#58427C',
    '#FFD300',
    '#F56FA1',
    '#666699',
    '#654321',
    '#5D3954',
    '#26428B',
    '#008B8B',
    '#536878',
    '#B8860B',
    '#013220',
    '#006400',
    '#1A2421',
    '#BDB76B',
    '#483C32',
    '#534B4F',
    '#543D37',
    '#8B008B',
    '#4A5D23',
    '#556B2F',
    '#FF8C00',
    '#9932CC',
    '#03C03C',
    '#301934',
    '#8B0000',
    '#E9967A',
    '#8FBC8F',
    '#3C1414',
    '#8CBED6',
    '#483D8B',
    '#2F4F4F',
    '#177245',
    '#00CED1',
    '#9400D3',
    '#00703C',
    '#555555',
    '#DA3287',
    '#FAD6A5',
    '#B94E48',
    '#004B49',
    '#FF1493',
    '#FF9933',
    '#00BFFF',
    '#4A646C',
    '#7E5E60',
    '#1560BD',
    '#2243B6',
    '#C19A6B',
    '#EDC9AF',
    '#696969',
    '#1E90FF',
    '#D71868',
    '#967117',
    '#00009C',
    '#EFDFBB',
    '#E1A95F',
    '#555D50',
    '#C2B280',
    '#1B1B1B',
    '#614051',
    '#F0EAD6',
    '#1034A6',
    '#16161D',
    '#7DF9FF',
    '#00FF00',
    '#6F00FF',
    '#CCFF00',
    '#BF00FF',
    '#8F00FF',
    '#50C878',
    '#6C3082',
    '#1B4D3E',
    '#B48395',
    '#AB4B52',
    '#CC474B',
    '#563C5C',
    '#00FF40',
    '#96C8A2',
    '#C19A6B',
    '#801818',
    '#B53389',
    '#DE5285',
    '#F400A1',
    '#E5AA70',
    '#4D5D53',
    '#4F7942',
    '#6C541E',
    '#FF5470',
    '#B22222',
    '#CE2029',
    '#E95C4B',
    '#E25822',
    '#EEDC82',
    '#A2006D',
    '#FFFAF0',
    '#15F4EE',
    '#5FA777',
    '#014421',
    '#228B22',
    '#A67B5B',
    '#856D4D',
    '#0072BB',
    '#FD3F92',
    '#86608E',
    '#9EFD38',
    '#D473D4',
    '#FD6C9E',
    '#C72C48',
    '#F64A8A',
    '#77B5FE',
    '#8806CE',
    '#E936A7',
    '#FF00FF',
    '#C154C1',
    '#CC397B',
    '#C74375',
    '#E48400',
    '#87421F',
    '#DCDCDC',
    '#E49B0F',
    '#007F66',
    '#F8F8FF',
    '#6082B6',
    '#AB92B3',
    '#00AB66',
    '#A57C00',
    '#D4AF37',
    '#FFD700',
    '#E6BE8A',
    '#85754E',
    '#996515',
    '#FCC200',
    '#FFDF00',
    '#DAA520',
    '#00573F',
    '#676767',
    '#A8E4A0',
    '#808080',
    '#BEBEBE',
    '#00FF00',
    '#1CAC78',
    '#008000',
    '#00A877',
    '#009F6B',
    '#00AD43',
    '#00A550',
    '#66B032',
    '#1164B4',
    '#2887C8',
    '#009966',
    '#A7F432',
    '#6EAEA1',
    '#ADFF2F',
    '#F0E891',
    '#A99A86',
    '#2a3439',
    '#446CCF',
    '#5218FA',
    '#E9D66B',
    '#3FFF00',
    '#DA9100',
    '#FF7A00',
    '#DF73FF',
    '#AA98A9',
    '#F400A1',
    '#F0FFF0',
    '#006DB0',
    '#49796B',
    '#FF1DCE',
    '#FF69B4',
    '#355E3B',
    '#71A6D2',
    '#FCF75E',
    '#319177',
    '#ED2939',
    '#B2EC5D',
    '#4C516D',
    '#138808',
    '#CD5C5C',
    '#E3A857',
    '#4B0082',
    '#00416A',
    '#FF496C',
    '#130a8f',
    '#FF4F00',
    '#BA160C',
    '#C0362C',
    '#5A4FCF',
    '#B3446C',
    '#F4F0EC',
    '#B2FFFF',
    '#FFFFF0',
    '#00A86B',
    '#9D2933',
    '#5B3256',
    '#F8DE7E',
    '#A50B5E',
    '#343434',
    '#F4CA16',
    '#BDDA57',
    '#29AB87',
    '#4CBB17',
    '#3AB09E',
    '#E8F48C',
    '#C3B091',
    '#F0E68C',
    '#882D17',
    '#E79FC4',
    '#6B4423',
    '#354230',
    '#512888',
    '#D6CADD',
    '#26619C',
    '#FFFF66',
    '#A9BA9D',
    '#CF1020',
    '#B57EDC',
    '#E6E6FA',
    '#CCCCFF',
    '#FFF0F5',
    '#C4C3D0',
    '#7CFC00',
    '#FFF700',
    '#FFFACD',
    '#CCA01D',
    '#FDFF00',
    '#F6EABE',
    '#FFF44F',
    '#FFFF9F',
    '#545AA7',
    '#ADD8E6',
    '#F08080',
    '#93CCEA',
    '#E0FFFF',
    '#C8AD7F',
    '#FAFAD2',
    '#D3D3D3',
    '#90EE90',
    '#FED8B1',
    '#C5CBE1',
    '#FFB6C1',
    '#FFA07A',
    '#20B2AA',
    '#87CEFA',
    '#778899',
    '#B0C4DE',
    '#FFFFE0',
    '#C8A2C8',
    '#AE98AA',
    '#BFFF00',
    '#00FF00',
    '#32CD32',
    '#195905',
    '#FAF0E6',
    '#C19A6B',
    '#DE6FA1',
    '#6CA0DC',
    '#674C47',
    '#B86D29',
    '#6C2E1F',
    '#987456',
    '#6699CC',
    '#FFBD88',
    '#CC3336',
    '#FF00FF',
    '#F653A6',
    '#CA1F7B',
    '#D0417E',
    '#FF0090',
    '#9F4576',
    '#AAF0D1',
    '#F2E8D7',
    '#C04000',
    '#FBEC5D',
    '#F2C649',
    '#6050DC',
    '#0BDA51',
    '#979AAA',
    '#F37A48',
    '#FDBE02',
    '#FF8243',
    '#74C365',
    '#880085',
    '#EAA221',
    '#C32148',
    '#800000',
    '#B03060',
    '#E0B0FF',
    '#915F6D',
    '#EF98AA',
    '#47ABCC',
    '#30BFBF',
    '#ACACE6',
    '#5E8C31',
    '#D9E650',
    '#733380',
    '#D92121',
    '#A63A79',
    '#FAFA37',
    '#F2BA49',
    '#4C9141',
    '#73C2FB',
    '#66DDAA',
    '#0000CD',
    '#E2062C',
    '#AF4035',
    '#F3E5AB',
    '#BA55D3',
    '#9370DB',
    '#3CB371',
    '#7B68EE',
    '#00FA9A',
    '#48D1CC',
    '#C71585',
    '#F8B878',
    '#F8DE7E',
    '#FEBAAD',
    '#D3AF37',
    '#0A7E8C',
    '#9C7C38',
    '#E4007C',
    '#7ED4E6',
    '#8DD9CC',
    '#8B72BE',
    '#8B8680',
    '#4D8C57',
    '#ACBF60',
    '#D982B5',
    '#E58E73',
    '#A55353',
    '#FFEB00',
    '#ECB176',
    '#702670',
    '#191970',
    '#004953',
    '#FFC40C',
    '#FFDAE9',
    '#E3F988',
    '#36747D',
    '#F5E050',
    '#3EB489',
    '#F5FFFA',
    '#98FF98',
    '#BBB477',
    '#FFE4E1',
    '#967117',
    '#8DA399',
    '#8A9A5B',
    '#30BA8F',
    '#997A8D',
    '#18453B',
    '#C54B8C',
    '#C8509B',
    '#FFDB58',
    '#317873',
    '#D65282',
    '#AD4379',
    '#F6ADC6',
    '#FADA5E',
    '#FFDEAD',
    '#000080',
    '#1974D2',
    '#4666FF',
    '#FFA343',
    '#39FF14',
    '#FE4164',
    '#D7837F',
    '#727472',
    '#A4DDED',
    '#E9FFDB',
    '#4F42B5',
    '#48BF91',
    '#CC7722',
    '#43302E',
    '#CFB53B',
    '#FDF5E6',
    '#796878',
    '#673147',
    '#C08081',
    '#848482',
    '#808000',
    '#6B8E23',
    '#3C341F',
    '#B5B35C',
    '#9AB973',
    '#353839',
    '#A8C3BC',
    '#B784A7',
    '#FF7F00',
    '#FF7538',
    '#FF5800',
    '#FFA500',
    '#FF9F00',
    '#FF681F',
    '#FF5349',
    '#FA5B3D',
    '#F5BD1F',
    '#F8D568',
    '#DA70D6',
    '#F2BDCD',
    '#E29CD2',
    '#2D383A',
    '#FF6E4A',
    '#4A0000',
    '#002147',
    '#841617',
    '#1CA9C9',
    '#006600',
    '#682860',
    '#BCD4E6',
    '#9BC4E2',
    '#ED7A9B',
    '#FADADD',
    '#FAE6FA',
    '#C9C0BB',
    '#ECEBBD',
    '#78184A',
    '#009B7D',
    '#FFEFD5',
    '#E63E62',
    '#F1E9D2',
    '#50C878',
    '#DEA5A4',
    '#800080',
    '#536878',
    '#FFE5B4',
    '#FFCBA4',
    '#FFDAB9',
    '#D1E231',
    '#B768A2',
    '#CCCCFF',
    '#C3CDE6',
    '#E12C2C',
    '#1C39BB',
    '#00A693',
    '#32127A',
    '#D99058',
    '#F77FBE',
    '#701C1C',
    '#CC3333',
    '#FE28A2',
    '#EC5800',
    '#8BA8B7',
    '#DF00FF',
    '#000F89',
    '#123524',
    '#2E2787',
    '#C30B4E',
    '#FDDDE6',
    '#01796F',
    '#2A2F23',
    '#FFC0CB',
    '#D74894',
    '#FC74FD',
    '#FFDDF4',
    '#D8B2D1',
    '#F78FA7',
    '#93C572',
    '#E5E4E2',
    '#8E4585',
    '#DDA0DD',
    '#5946B2',
    '#5DA493',
    '#86608E',
    '#BE4F62',
    '#FF5A36',
    '#B0E0E6',
    '#F58025',
    '#FFEF00',
    '#701C1C',
    '#003153',
    '#DF00FF',
    '#CC8899',
    '#644117',
    '#FF7518',
    '#6A0DAD',
    '#800080',
    '#9F00C5',
    '#A020F0',
    '#9678B6',
    '#4E5180',
    '#FE4EDA',
    '#9C51B6',
    '#9A4EAE',
    '#436B95',
    '#E8CCD7',
    '#A6A6A6',
    '#8E3A59',
    '#FF355E',
    '#242124',
    '#FBAB60',
    '#E30B5D',
    '#915F6D',
    '#B3446C',
    '#D68A59',
    '#826644',
    '#FF33CC',
    '#E3256B',
    '#8D4E85',
    '#663399',
    '#FF0000',
    '#EE204D',
    '#F2003C',
    '#C40233',
    '#ED2939',
    '#ED1C24',
    '#FE2712',
    '#FF5349',
    '#FF681F',
    '#FF4500',
    '#E40078',
    '#FD3A4A',
    '#C71585',
    '#C0448F',
    '#922B3E',
    '#A45A52',
    '#002387',
    '#777696',
    '#004040',
    '#010B13',
    '#010203',
    '#444C38',
    '#00CCCC',
    '#8A7F80',
    '#A91101',
    '#838996',
    '#FF007F',
    '#F9429E',
    '#9E5E6F',
    '#674846',
    '#E32636',
    '#FF66CC',
    '#ED7A9B',
    '#AA98A9',
    '#C21E56',
    '#905D5D',
    '#AB4E52',
    '#65000B',
    '#D40000',
    '#BC8F8F',
    '#002366',
    '#4169E1',
    '#7851A9',
    '#FADA5E',
    '#CE4676',
    '#D10056',
    '#E0115F',
    '#9B111E',
    '#A81C07',
    '#80461B',
    '#679267',
    '#32174D',
    '#B7410E',
    '#DA2C43',
    '#043927',
    '#8B4513',
    '#FF7800',
    '#FF6700',
    '#EED202',
    '#F4C430',
    '#BCB88A',
    '#23297A',
    '#FA8072',
    '#FF91A4',
    '#C2B280',
    '#967117',
    '#F4A460',
    '#507D2A',
    '#0F52BA',
    '#0067A5',
    '#2D5DA1',
    '#CBA135',
    '#FF2400',
    '#FF91AF',
    '#FFD800',
    '#66FF66',
    '#2E8B57',
    '#00FFCD',
    '#59260B',
    '#FFF5EE',
    '#FFBA00',
    '#704214',
    '#8A795D',
    '#778BA5',
    '#009E60',
    '#8FD400',
    '#D98695',
    '#5FA778',
    '#FC0FC0',
    '#FF6FFF',
    '#882D17',
    '#C0C0C0',
    '#C9C0BB',
    '#AAA9AD',
    '#ACACAC',
    '#C4AEAD',
    '#BFC1C2',
    '#CB410B',
    '#FF3855',
    '#FFDB00',
    '#007474',
    '#87CEEB',
    '#76D7EA',
    '#CF71AF',
    '#6A5ACD',
    '#708090',
    '#299617',
    '#C84186',
    '#100C08',
    '#FFFAFA',
    '#893843',
    '#757575',
    '#1D2951',
    '#807532',
    '#0070B8',
    '#D10047',
    '#989898',
    '#009150',
    '#E86100',
    '#F7BFBE',
    '#E60026',
    '#00FFFF',
    '#4C2882',
    '#007F5C',
    '#A7FC00',
    '#87FF2A',
    '#00FF7F',
    '#ECEBBD',
    '#007BB8',
    '#4682B4',
    '#CC33CC',
    '#5F8A8B',
    '#FADA5E',
    '#E4D96F',
    '#FA5053',
    '#FF9361',
    '#914E75',
    '#FFCC33',
    '#E3AB57',
    '#FAD6A5',
    '#CF6BA9',
    '#A83731',
    '#D44500',
    '#D2B48C',
    '#D99A6C',
    '#F28500',
    '#E4717A',
    '#FB4D46',
    '#483C32',
    '#8B8589',
    '#D0F0C0',
    '#F4C2C2',
    '#008080',
    '#367588',
    '#CF3476',
    '#CD5700',
    '#E2725B',
    '#D8BFD8',
    '#DE6FA1',
    '#FC89AC',
    '#0ABAB5',
    '#DBD7D2',
    '#EEE600',
    '#FF6347',
    '#00755E',
    '#2D68C4',
    '#1C05B3',
    '#3E8EDE',
    '#DEAA88',
    '#40E0D0',
    '#00FFEF',
    '#A0D6B4',
    '#8A9A5B',
    '#FAD6A5',
    '#6F4E37',
    '#7C4848',
    '#A67B5B',
    '#C09999',
    '#8A496B',
    '#66023C',
    '#0033AA',
    '#D9004C',
    '#3F00FF',
    '#4166F5',
    '#FF6FFF',
    '#FC6C85',
    '#635147',
    '#FFDDCA',
    '#5B92E5',
    '#A50021',
    '#FFFF66',
    '#014421',
    '#7B1113',
    '#AE2029',
    '#AFDBF5',
    '#004F98',
    '#664228',
    '#F3E5AB',
    '#F38FA9',
    '#C5B358',
    '#C80815',
    '#43B3AE',
    '#E34234',
    '#D9381E',
    '#A020F0',
    '#8F00FF',
    '#7F00FF',
    '#963D7F',
    '#8601AF',
    '#EE82EE',
    '#324AB2',
    '#766EC8',
    '#F75394',
    '#40826D',
    '#009698',
    '#9F1D35',
    '#00CCFF',
    '#FFA089',
    '#9F00FF',
    '#CEFF00',
    '#004242',
    '#189BCC',
    '#F5DEB3',
    '#FFFFFF',
    '#A2ADD0',
    '#D470A2',
    '#FF43A4',
    '#FC6C85',
    '#A75502',
    '#722F37',
    '#673147',
    '#FF007C',
    '#56887D',
    '#C9A0DC',
    '#C19A6B',
    '#738678',
    '#EEED09',
    '#F1B42F',
    '#00356B',
    '#FFFF00',
    '#FCE883',
    '#EFCC00',
    '#FFD300',
    '#FEDF00',
    '#FFEF00',
    '#FEFE33',
    '#9ACD32',
    '#C5E384',
    '#30B21A',
    '#FFAE42',
    '#FF9505',
    '#FFF700',
    '#2E5090',
    '#0014A8',
    '#39A78E',
];

for (const key in colorList) {
    const div = document.createElement('div');
    div.setAttribute('class','content')
    div.style.background = `${colorList[key]}`
    div.innerText = `Page ${key}\n Color ${colorList[key]}`
    container.appendChild(div)
}

const playDaMusic = () =>{
    snapThat.play()
}
const saveOurWorldFromRitabrata = (e) =>{
    e.preventDefault();
    if (e.ctrlKey || e.keyCode==123) {
        e.stopPropagation();
        e.preventDefault();
    }
}


document.addEventListener('contextmenu', event => saveOurWorldFromRitabrata(event));
document.addEventListener("keydown", (e) => {
  saveOurWorldFromRitabrata(e)
});