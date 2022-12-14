import React from "react";

const MenuContentBuroContainer = ({ data }) => {
  return (
    <>
      <div>
        <header>
          <div>
            <div className="container text-justify">
              <div className="row">
                <div className="col-lg-12  ">
                  <div className="">
                    <h1 className=" text-dark d-flex  justify-content-center ">
                      {data.title.first}
                    </h1>

                    <h2 className=" text-dark mt-5 ">
                      {data.title.second}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img 
                          className="rounded content-image "
                          src={data.content.image1}
                        ></img>
                      </div> */}

                      <div className="col-12">
                        <p className="fz-20 text-justify text-dark ">
                          {data.content.first}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3 ">
                      {data.title.third}
                    </h2>

                    <div className="row justify-content-center">
                      {/*    
                      <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image2}
                        ></img>
                      </div> */}

                      <div className="col-lg-12 ">
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.second}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.third}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.forth}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.fifth}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.fifth}
                    </h2>

                    <div className="row">
                      {/* <div className="col-10 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image3}></img>
                    </div> */}
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="fz-20 text-justify text-dark">
                          {data.content.sixth}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.sixth}
                    </h2>

                    <div className="row justify-content-center">
                      <div className="col-lg-12">
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.seventh}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.eidth}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image4}></img>
                    </div> */}
                      <div className="col-lg-12">
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.eidth}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.ninth}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.ninth}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image5}></img>
                    </div> */}
                      <div className="col-lg-12">
                        <p className="fz-20 text-justify text-dark">
                          {data.content.tenth}
                        </p>
                        {" "}
                        <p className="fz-20 text-justify text-dark">
                          {data.content.eleventh}
                          &nbsp;
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.twelvth}
                        </p>
                        <p className="fz-20 text-justify text-dark">
                          {data.content.thirteen}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.forteen}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.fifteen}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.sixteen}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.thenth}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image8}></img>
                    </div> */}
                      <div className="col-lg-12">
                        <p className="fz-20 text-justify text-dark">
                          {data.content.seventeen}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.eighteen}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.eleven}
                    </h2>

                    <p className=" fz-20 text-justify text-dark">
                      {data.content.ninteen}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twenty}
                    </p>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.twelve}
                    </h2>

                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyOne}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyTwo}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyThree}
                    </p>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.thirteen}
                    </h2>

                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyFour}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.twentyFive}
                    </p>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.forteen}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image6}></img>
                    </div> */}
                      <p className="fz-20 text-justify text-dark">
                        {data.content.twentySix}
                      </p>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.fifteen}
                    </h2>

                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                      <img className="rounded content-image" src={data.content.image7}></img>
                    </div> */}
                      <div className="col-12">
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.twentySeven}
                        </p>
                        <p className=" fz-20 text-justify text-dark">
                          {data.content.twentyEight}
                        </p>
                        <p className="fz-20 text-justify text-dark">
                          {data.content.twentyNine}
                        </p>
                      </div>
                    </div>
                    <h2 className=" text-dark  mt-3 mb-3">
                      {data.title.sixteen}
                    </h2>

                    <ul className="mt-2 mb-2 fz-20 text-justify">
                      <li className="mt-2">
                      ???	Fiyat avantaj?? ile ofis konteynerlar?? tam bir b??t??e dostudur. 
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Montaj ve tamir i??lerinden zevk alanlar i??in g??zel bir e??lencedir.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Ofis konteynerler sayesinde mobil ve ba????ms??z olabilirsiniz. Yani istedi??iniz zaman s??rt ??antan??z?? al??r gibi konteyn??r??n??z?? alarak istedi??iniz yere ta????yabilir, ??zg??rl??????n tad??n?? ????kar??n. 
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Ofis konteyneri istedi??iniz gibi tasarlayabilir, kap??, pencere, wc, banyo k??s??mlar??n?? arzu etti??iniz yere koyabilirsiniz. 
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Contain Haus ofis konteynerlerinin en b??y??k avantajlar??ndan birisi de y??ksek izolasyona sahip olmas??d??r. 
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Contain Haus ofis konteynerleri 9.00 ??iddetinde depreme dayan??kl?? olacak ??ekilde tasarlanm????t??r. 
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Paslanmaz ??elikten yap??lan Contain Haus ofis konteynerleri onlarca sene sa??laml??????n?? korur. 
                      </li>
                      <li className="mt-2">
                        {" "}
                        ??? ???	Fibersement taban?? ile ofis konteyner zeminleri olduk??a sa??lamd??r, betondan farks??zd??r.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Ofis konteynerlerin alt ve ??st ??ase geni??li??i 15 cm???dir.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Ofis konteynerler ??s??ya dayan??kl?? ve su ge??irmezdirler. 
                      </li>
                      <li className="mt-2">
                        {" "}
                        ??? Sie k??nnen den B??rocontainer nach Ihren W??nschen
                        gestalten und T??r, Fenster, WC, Badteile beliebig
                        platzieren.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ??? Einer der gr????ten Vorteile von Contain Haus
                        B??rocontainern ist ihre hohe Isolierung.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Duvarlar?? olu??turan 5 cm???lik sandvi?? paneller ile izolasyon olduk??a y??ksek seviyededir. 
                      </li>
                      <li className="mt-2">
                        {" "}
                        ???	Ofis konteynerler nem ge??irmezli??i ve ses ge??irmezlik a????s??ndan iyi bir performansa sahiptir.
                      </li>
                      {/* <li className="mt-2">
                        {" "}
                        ??? B??rocontainerb??den mit Faserzementbasis sind ziemlich
                        langlebig und von Beton nicht zu unterscheiden.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ??? Die untere und obere Fahrgestellbreite von
                        B??rocontainern betr??gt 15 cm.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ??? B??rocontainer sind hitzebest??ndig und wasserdicht.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ??? Die Isolierung ist mit den 5 cm dicken
                        Sandwichpaneelen, die die W??nde bilden, auf sehr hohem
                        Niveau.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ??? B??rocontainer haben eine gute Leistung in Bezug auf
                        Feuchtigkeits- und Schallschutz.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ??? Wer einen B??rocontainer kauft, wird von den
                        B??rocontainern aus eigener Produktion mit Langlebigkeit
                        und Preis begeistert sein.
                      </li>
                      <li className="mt-2">
                        {" "}
                        ??? Mit der Option B??rocontainer gebraucht kaufen k??nnen
                        Sie entweder gebrauchte B??rocontainer kaufen oder unsere
                        B??rocontainer aus Werksproduktion erwerben.
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default MenuContentBuroContainer;
