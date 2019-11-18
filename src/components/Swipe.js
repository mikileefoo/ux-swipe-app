import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Listen from './Listen';
import Speak from './Speak';
import Info from './Info';
import '../style/swipe.css';



const imgData = [
    {title: 'Kvinde i chemise', artist: 'André Derain', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202006/KMSr14.jpg)'}, soundurl: 'http://mikileefoo.dk/ux/static/media/tal_r.mp3'},
    {title: 'Antiklimaks. Zen-billede. Haiku. I-IV', artist: 'Richard Mortensen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202003/Globus%20oktober%202003/kms7904_1.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'April. Et ungt par i et landskab', artist: 'Henrik Schouboe', img: {background: 'url(http://cspic.smk.dk/globus/31611032/img0026.jpg)'}, soundurl: 'www.apple.com'},
    {title: '18.V.92', artist: 'Richard Mortensen', img: {background: 'url(http://cspic.smk.dk/globus/40412321/img0212.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Drengeportræt. En af kunstnerens sønner', artist: 'C.A. Jensen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202009/KMS1931.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Blomsterstykke med roser og jordbær', artist: 'O.D. Ottesen', img: {background: 'url(http://cspic.smk.dk/globus/CORPUS%202017/kms440.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Pubertymunch', artist: 'Judit Ström', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202008/KMS8524.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'La Brésilienne', artist: 'Luc-Albert Moreau', img: {background: 'url(http://cspic.smk.dk/globus/30422937/img0125.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Deling I', artist: 'Ib Geertsen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202004/globus%20juli%202004/KMS%20plus%20diverse/DEP380.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'En død hare', artist: 'Jacob Biltius', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202005/globus%20marts%202005/KMSsp608.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'En lille pige med en krukke', artist: 'L.A. Schou', img: {background: 'url(http://cspic.smk.dk/globus/31524855/img0094.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Uden titel', artist: 'Jiri Georg Dokoupil, Walter Dahn', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202009/KMSr206.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Tulipa gesneriana', artist: 'Hans Simon Holtzbecker', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202013/KKSgb2951-71.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'We are left here with mixed emotions', artist: 'Christian Schmidt-Rasmussen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202007/KMS8523.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Kvindelig model set fra siden, gående mod højre', artist: 'Aristide Maillol', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202003/globus%20november%202003/kks13024.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Grav over en kat', artist: 'Richard Mortensen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202003/Globus%20oktober%202003/kms7919.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Selvportræt', artist: 'John Christensen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202004/globus%20juli%202004/KMS%20plus%20diverse/KMS7185.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Yantra II', artist: 'Richard Mortensen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202003/Globus%20oktober%202003/kms7909.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Skovens Dyb', artist: 'Carl-Henning Pedersen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202007/kms8494.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Skt. Michael med dragen', artist: 'Ubekendt spansk 1500-tallet', img: {background: 'url(http://cspic.smk.dk/globus/40412321/img0607.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Randbemærkninger E', artist: 'Richard Mortensen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202003/Globus%20oktober%202003/kms7834.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Malerinden Ida-Merete Erlandsen', artist: 'Helge Nielsen', img: {background: 'url(http://cspic.smk.dk/globus/40412321/img0317.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Siddende kvindelig model', artist: 'Vilhelm Lundstrøm', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202007/KMS4333.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Elskeren Pamfilus i samtale med sin forslagne tjener Davus. Motiv fra Terents: Pigen fra Andros.', artist: 'Nicolai Abildgaard', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202008/KMS588.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Den væltede skuffe', artist: 'Rita Kernn-Larsen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202007/KMS7627.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'En sejlads til Charlottenlund', artist: 'C.W. Eckersberg', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202013/kms8684.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Dameportræt', artist: 'Gunnar Nikolajsen', img: {background: 'url(http://cspic.smk.dk/globus/31524878/img0143.jpg)'}, soundurl: 'www.apple.com'},
    {title: '1000 Farver', artist: 'Viera Collaro, Niels Nedergaard', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202007/KMS8533-24.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'De fire elementer - eller festen om det runde bord', artist: 'Lars Ravn', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202011/KMS7628-2.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Fulde på trappen', artist: 'Seppo Mattinen', img: {background: 'url(http://cspic.smk.dk/globus/31611043/img0709.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Portræt af kurfyrstinde Sibylla af Sachsen', artist: 'Lucas Cranach d.Æ.', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202005/Globus%20Februar%202005/KMSsp726.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Gadescene i Subiaco', artist: 'Julius Friedlænder', img: {background: 'url(http://cspic.smk.dk/globus/31611043/img0020.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Stående mandlig model', artist: 'Joakim Skovgaard', img: {background: 'url(http://cspic.smk.dk/globus/30422946/img0122.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Havet, Christiansø', artist: 'Oscar Hullgren', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202006/KMS4341.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Grædeøjne', artist: 'Asger Jorn', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202012/dep595.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Jossa', artist: 'Christian Krohg', img: {background: 'url(http://cspic.smk.dk/globus/2012/kms4143.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Korsfæstelsen', artist: 'Govert Flinck', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202004/Globus%20oktober%202004/KMSSP510.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Kvinder frem!', artist: 'Ursula Reuter Christiansen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202010/KMS8623-2.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Landskab med popler. Septemberaften', artist: 'L.A. Ring', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202009/kms8555%20efter%20kons.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Mandsportræt', artist: 'Povl Schrøder', img: {background: 'url(http://cspic.smk.dk/globus/31524878/img0185.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Opstilling', artist: 'Jais Nielsen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202009/KMS3416.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Selvportræt', artist: 'Franciska Clausen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202010/Kuas/Francisca%20Clausen/KKS1987-61.JPG)'}, soundurl: 'www.apple.com'},
    {title: 'Le Luxe II', artist: 'Henri Matisse', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202009/KMsr76.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Unovis II', artist: 'Richard Mortensen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202003/Globus%20oktober%202003/kms7907.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Maske', artist: 'Carl-Henning Pedersen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202007/kms7019.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Portræt af Otto Marstrands to døtre og deres vestindiske barnepige, Justina, i Frederiksberg Have', artist: 'Wilhelm Marstrand', img: {background: 'url(http://cspic.smk.dk/globus/CORPUS%202017/kms8833.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Mosaikarbejder, Pietrasanta, Italien', artist: 'Erik A. Frandsen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202008/KMS8549.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Puppen', artist: 'Ole Vincent Larsen', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202007/KMS8322.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Uden titel', artist: 'Mogens Gissel', img: {background: 'url(http://cspic.smk.dk/globus/CORPUS%202018/kms8698.jpg)'}, soundurl: 'www.apple.com'},
    {title: 'Selvportræt', artist: 'Henri Matisse', img: {background: 'url(http://cspic.smk.dk/globus/GLOBUS%202010/KMSr78.jpg)'}, soundurl: 'www.apple.com'}
];

const MyComponent = () => (
    <SwipeableViews enableMouseEvents>
    <div className="swipeWrap">
      <div className="onboarding">
      <div className="smklogo"></div>
        <span className="obtekst">Tag dine høretelefoner på og lyt</span>
        <div className="border"></div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[0].img)} className="itemWrap">
        <div className="bottomWrap">
            <Speak />
            <Listen url={imgData[0].soundurl} />
            <Info title={imgData[0].title} artist={imgData[0].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[1].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[1].title} artist={imgData[1].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[2].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[2].title} artist={imgData[2].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[3].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[3].title} artist={imgData[3].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[4].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[4].title} artist={imgData[4].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[5].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[5].title} artist={imgData[5].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[6].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[6].title} artist={imgData[6].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[7].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[7].title} artist={imgData[7].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[8].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[8].title} artist={imgData[8].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[9].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[9].title} artist={imgData[9].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[10].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[10].title} artist={imgData[10].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[11].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[11].title} artist={imgData[11].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[12].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[12].title} artist={imgData[12].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[13].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[13].title} artist={imgData[13].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[14].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[14].title} artist={imgData[14].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[15].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[15].title} artist={imgData[15].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[16].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[16].title} artist={imgData[16].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[17].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[17].title} artist={imgData[17].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[18].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[18].title} artist={imgData[18].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[19].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[19].title} artist={imgData[19].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[20].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[20].title} artist={imgData[20].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[21].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[21].title} artist={imgData[21].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[22].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[22].title} artist={imgData[22].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[23].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[23].title} artist={imgData[23].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[24].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[24].title} artist={imgData[24].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[25].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[25].title} artist={imgData[25].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[26].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[26].title} artist={imgData[26].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[27].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[27].title} artist={imgData[27].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[28].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[28].title} artist={imgData[28].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[29].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[29].title} artist={imgData[29].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[30].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[30].title} artist={imgData[30].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[31].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[31].title} artist={imgData[31].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[32].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[32].title} artist={imgData[32].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[33].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[33].title} artist={imgData[33].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[34].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[34].title} artist={imgData[34].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[35].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[35].title} artist={imgData[35].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[36].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[36].title} artist={imgData[36].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[37].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[37].title} artist={imgData[37].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[38].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[38].title} artist={imgData[38].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[39].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[39].title} artist={imgData[39].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[40].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[40].title} artist={imgData[40].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[41].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[41].title} artist={imgData[41].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[42].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[42].title} artist={imgData[42].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[43].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[43].title} artist={imgData[43].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[44].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[44].title} artist={imgData[44].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[45].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[45].title} artist={imgData[45].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[46].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[46].title} artist={imgData[46].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[47].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[47].title} artist={imgData[47].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[48].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[48].title} artist={imgData[48].artist} />
        </div>
      </div>
    </div>
    <div className="swipeWrap">
      <div style={Object.assign({}, imgData[49].img)} className="itemWrap">
        <div className="bottomWrap">
          <Info title={imgData[49].title} artist={imgData[49].artist} />
        </div>
      </div>
    </div>
  </SwipeableViews>
);

export default MyComponent;
