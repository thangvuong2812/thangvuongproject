
function Helmet(id, img, name, price, salePrice, size, factory, state, description) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.price = price; // Giá gốc
    this.salePrice = salePrice; // Giá sale
    this.size = size;
    this.factory = factory;
    this.state = state;
    this.description = description;
    
    this.saleCheck = function() {
        var checkParams = false
        if(this.salePrice != 0 && this.salePrice != undefined) {
            checkParams = true
        }
        return checkParams;
    }
}

// Creater 34 Helmets
var helmet341 = new Helmet("341", "../img/non34/leopard-e1606791879966.jpg","NÓN 3/4 KYT VENOM LEOPARD", 1000000, 0, "S, M, L, XL", "KYT", "New","Nón chất lượng cao");
var helmet342 = new Helmet("342", "../img/non34/mg-2550.jpg","NÓN M1393 ĐEN NHÁM", 1000000, 0, "S, M, L, XL", "KYT", "","Nón chất lượng cao");
var helmet343 = new Helmet("343", "../img/non34/mg-5460.jpg","NÓN ROYAL M139 ĐEN NHÁM", 1000000, 0, "S, M, L, XL", "KYT", "","Nón chất lượng cao");
var helmet344 = new Helmet("344", "../img/non34/non-balder-den-bong-e1583121669317.jpg","NÓN BALDER LIGHT ĐEN BÓNG", 1000000, 800000, "S, M, L, XL", "KYT", "","Nón chất lượng cao");
var helmet345 = new Helmet("345", "../img/non34/non-balder-vang-1-e1583121638578.jpg","NÓN BALDER LIGHT VÀNG", 1000000, 0, "S, M, L, XL", "KYT", "","Nón chất lượng cao");
var helmet346 = new Helmet("346", "../img/non34/non-bao-hiem-34-kyt-5.jpg","NÓN 3/4 KYT VENOM XÁM ĐEN NHÁM", 1000000, 0, "S, M, L, XL", "KYT", "","Nón chất lượng cao");
var helmet347 = new Helmet("347", "../img/non34/non-roc-r06-camo-do-5-2-e1609144003713.jpg","NÓN ROC R06 CAMO ĐỎ", 1000000, 500000, "S, M, L, XL", "KYT", "New","Nón chất lượng cao");
var helmet348 = new Helmet("348", "../img/non34/non-roc-r06-den-nham-e1604304630991.jpg","NÓN ROC R06 ĐEN NHÁM", 1000000, 0, "S, M, L, XL", "KYT", "","Nón chất lượng cao");
var helmet349 = new Helmet("349", "../img/non34/non-royal-m1393-v10-trang-scaled-e1610431874888.jpg","NÓN ROYAL M139 TRẮNG LINE VÀNG", 1000000, 650000, "S, M, L, XL", "KYT", "","Nón chất lượng cao");
var helmet3410 = new Helmet("3410", "../img/non34/royal-m139-non-trum68-e1583122046267.jpg","NÓN ROYAL M139 ĐEN LINE VÀNG", 1000000, 650000, "S, M, L, XL", "KYT", "","Nón chất lượng cao");

// Array 34 helmets
var helmets34 = [
    helmet341,
    helmet342,
    helmet343,
    helmet344,
    helmet345,
    helmet346,
    helmet347,
    helmet348,
    helmet349,
    helmet3410,
];

// Create fullface helmets
var helmetff1 = new Helmet('FF1',"../img/fullface/mg-0226-e1595488401246.jpg","Fullface KYT Falcon Leopard Locatelli", 1200000, 0, "S, M, L, XL", "KYT", "New","là dòng nón bảo hiểm fullface 1 kính cao cấp mới nhất. Ra mắt vào tháng 12/2019 với mức giá rất cạnh tranh và chất lượng cao vượt trội. Đây là mẫu fullface định hướng xuất khẩu nên chất lượng khá tốt. Anh em cùng Nón Trùm tìm hiểu kỹ hơn về ROC R01 nhé.");
var helmetff2 = new Helmet('FF2',"../img/fullface/non-torc-7-mau-3-1-e1601370605768.jpg","Nón Torc 7 Màu", 1200000, 0, "M, L, XL", "KYT", "New","Bla Bla Bla Bla Bla Bla ");
var helmetff3 = new Helmet('FF3',"../img/fullface/non-torc-ngoi-sao-3-e1601352766103.jpg","Nón Torc Ngôi Sao", 1200000, 1000000, "S, M, L", "KYT", "New","Bla Bla Bla Bla Bla Bla ");
var helmetff4 = new Helmet('FF4',"../img/fullface/nón-bảo-hiểm-fullface-kyt-nfr-logo-yellow-1-e1593427113561.jpg","Fullface KYT NFR Logo Yellow", 1200000, 800000, "S, M, L", "KYT", "New","Bla Bla Bla Bla Bla Bla ");
var helmetff5 = new Helmet('FF5',"../img/fullface/non-bao-hiem-fullface-kyt-nfr-axel-basani-2-e1593070603225.jpg","Fullface KYT NFR Axel Basani", 1200000, 800000, "S, M, L", "KYT", "New","Bla Bla Bla Bla Bla Bla ");
var helmetff6 = new Helmet('FF6',"../img/fullface/mg-8263b.jpg","Nón Royal H1 Đen Bóng", 1200000, 0, "S, M, L", "KYT", "New","Bla Bla Bla Bla Bla Bla ");
var helmetff7 = new Helmet('FF7',"../img/fullface/mg-2883-e1595292192323.jpg","Nón ROC R01 Đen Nhám | Tặng Pinlock", 1200000, 0, "S, M, L", "KYT", "New","Bla Bla Bla Bla Bla Bla ");
var helmetff8 = new Helmet('FF8',"../img/fullface/mg-2229.jpg","Nón Royal M141K Đen Nhám", 1200000, 0, "S, M, L", "KYT", "New","Bla Bla Bla Bla Bla Bla ");
var helmetff9 = new Helmet('FF9',"../img/fullface/15-1.jpg","Fullface KYT TT-Course Leopard", 1200000, 0, "S, M, L", "KYT", "New","Bla Bla Bla Bla Bla Bla ");
var helmetff10 = new Helmet('FF10',"../img/fullface/14.jpg","Fullface KYT TT-Course Electron Yellow", 1200000, 0, "S, M, L", "KYT", "New","Bla Bla Bla Bla Bla Bla ");

// Array fullface Helmets
var helmetsff = [
    helmetff1, 
    helmetff2,
    helmetff3,
    helmetff4,
    helmetff5,
    helmetff6,
    helmetff7,
    helmetff8,
    helmetff9,
    helmetff10,
];

// Create normal helmets
var helmetnm1 = new Helmet("NM1","../img/nuadau/Andes-139-114-e1568798888603.jpg","Nón Andes 139 Đen Vàng",500000, 0, "S, M, L","", "New", "bla bla bla bla bla bla ");
var helmetnm2 = new Helmet("NM2","../img/nuadau/Balder-B55-1a-e1600418775776.jpg","Nón Balder B55 Đen Bóng",300000, 0, "S, M, L","", "", "bla bla bla bla bla bla ");
var helmetnm3 = new Helmet("NM3","../img/nuadau/Balder-B55-2a-e1600418785410.jpg","Nón Balder B55 Đen Nhám",300000, 0, "S, M, L","", "", "bla bla bla bla bla bla ");
var helmetnm4 = new Helmet("NM4","../img/nuadau/mg-0427.jpg","Nón Rona Dino Xanh",300000, 0, "S, M, L","", "", "bla bla bla bla bla bla ");
var helmetnm5 = new Helmet("NM5","../img/nuadau/non-kyt-tiger-3-e1617785052667.jpg","Nón KYT Tiger Xám Đỏ",300000, 250000, "S, M, L","", "", "bla bla bla bla bla bla ");
var helmetnm6 = new Helmet("NM6","../img/nuadau/non-kyt-tiger-6-e1617784847507.jpg","Nón KYT Tiger Vàng Xanh",300000, 0, "S, M, L","", "New", "bla bla bla bla bla bla ");
var helmetnm7 = new Helmet("NM7","../img/nuadau/non-rona-son-dino-den-scaled-e1606534175982.jpg","Nón Sơn Rona Dino Đen",300000, 0, "S, M, L","", "New", "bla bla bla bla bla bla ");
var helmetnm8 = new Helmet("NM8","../img/nuadau/non-rona-son-dino-hong-2-scaled-e1606534201819.jpg","Nón Sơn Rona Dino Hồng",300000, 0, "S, M, L","", "New", "bla bla bla bla bla bla ");
var helmetnm9 = new Helmet("NM9","../img/nuadau/rona-luxury-den-bong-2048x2048.jpg","Nón Rona R6 Luxury Đen Bóng",300000, 0, "S, M, L","", "New", "bla bla bla bla bla bla ");
var helmetnm10 = new Helmet("NM10","../img/nuadau/rona-luxury-vang-2048x2048.jpg","Nón Rona R6 Luxury Vàng",300000, 0, "S, M, L","", "", "bla bla bla bla bla bla ");

// Array normal Helmets
var helmetsnm = [
    helmetnm1,
    helmetnm2,
    helmetnm3,
    helmetnm4,
    helmetnm5,
    helmetnm6,
    helmetnm7,
    helmetnm8,
    helmetnm9,
    helmetnm10,
];

// Show every 34 helmets
var helMets34 = helmets34.map(function(helmet, i) {
    if(helmet.saleCheck()) {
        var strCheck = "Giảm giá";
    }
    if(helmet.salePrice == 0 ) {
        helmet.salePrice = helmet.price;
        helmet.price = 0;
    }
    const col = `<div class="col position-relative px-0">
                <a href="../html/product-detail.html" target=""> 
                    <img src="${helmet.img}" alt="Best seller" class="card-img img-obj">
                </a>
                <div class="box-cover-title position-relative padding-lr-10 padding-tb-30">
                    <h5 class="title text-uppercase text-start">
                        <a class="link-secondary text-decoration-none" href="../html/product-detail.html">${helmet.name}</a>
                    </h5>
                    <div class="row flex-nowrap box-price">
                        <del class="col text-del">
                            <span>${helmet.price.toLocaleString("en-US")}</span>
                            <span>đ</span>
                        </del>
                        <div class="col">
                            <span class="price">
                                ${helmet.salePrice.toLocaleString("en-US")}
                            </span>
                            <span>đ</span>
                        </div>
                    </div>
                    <div class="position-absolute top-0 left-0 d-flex">
                        <span class="text-white callout sale-off">${strCheck}</span>
                        <span class="text-white callout">${helmet.state}</span>
                    </div>
                </div>
            </div>`;
    return col;
});
var ele34 = $("#34helmet .container .row");
for (const helmet34 of helMets34) {
    ele34.append(helmet34);
};

// Show every fullface helmet
var helMetsFF = helmetsff.map(function(helmet, i) {
    if(helmet.saleCheck()) {
        var strCheck = "Giảm giá";
    }
    if(helmet.salePrice == 0 ) {
        helmet.salePrice = helmet.price;
        helmet.price = 0;
    }
    const col = `<div class="col position-relative px-0">
        <a href="../html/product-detail.html" target=""> 
            <img src="${helmet.img}" alt="Best seller" class="card-img img-obj">
        </a>
        <div class="box-cover-title position-relative padding-lr-10 padding-tb-30">
            <h5 class="title text-uppercase text-start">
                <a class="link-secondary text-decoration-none" href="../html/product-detail.html">${helmet.name}</a>
            </h5>
            <div class="row flex-nowrap box-price">
                <del class="col text-del">
                    <span>${helmet.price.toLocaleString("en-US")}</span>
                    <span>đ</span>
                </del>
                <div class="col">
                    <span class="price">${helmet.salePrice.toLocaleString("en-US")}</span>
                    <span>đ</span>
                </div>
            </div>
            <div class="position-absolute top-0 left-0 d-flex">
                <span class="text-white callout sale-off">${strCheck}</span>
                <span class="text-white callout">${helmet.state}</span>
            </div>
        </div>
    </div>`;
    return col;
});

var eleFF = $("#fullface .container .row");
for (const helmetff of helMetsFF) {
    eleFF.append(helmetff);
}
// Show every normal helmet
var helMetsNM =  helmetsnm.map(function(helmet) {
    if(helmet.saleCheck()) {
        var strCheck = "Giảm giá";
    }
    
    if(helmet.salePrice == 0 ) {
        helmet.salePrice = helmet.price;
        helmet.price = 0;
    }
        // Dùng toLocaleString để chuyển number sang chuỗi có định dạng ###,000
    const col = `<div class="col position-relative px-0">
                <a href="../html/product-detail.html" target=""> 
                    <img src="${helmet.img}" alt="Best seller" class="card-img img-obj">
                </a>
                <div class="box-cover-title position-relative padding-lr-10 padding-tb-30">
                    <h5 class="title text-uppercase text-start">
                        <a class="link-secondary text-decoration-none" href="../html/product-detail.html">${helmet.name}</a>
                    </h5>
                    <div class="row flex-nowrap box-price">
                        <del class="col text-del">
                            <span>${helmet.price.toLocaleString("en-US")}</span>
                            <span>đ</span>
                        </del>
                        <div class="col">
                            <span class="price">
                                ${helmet.salePrice.toLocaleString("en-US")}
                            </span>
                            <span>đ</span>
                        </div>
                    </div>
                    <div class="position-absolute top-0 left-0 d-flex">
                        <span class="text-white callout sale-off">${strCheck}</span>
                        <span class="text-white callout">${helmet.state}</span>
                    </div>
                </div>
            </div>`;
    return col;       
});

var eleNM = $("#normal .container .row");
for (const helmet of helMetsNM) {
    eleNM.append(helmet);
}

// Xóa element Giam gia khi ko có SalePrice (==0)

var eles34 = $("#34helmet .position-absolute span");
// console.log(typeof eles34)
for (const ele of eles34) {
    if(ele.innerText == "undefined" || ele.innerText == "") {
        ele.remove();
    }
}

var elesNM = $("#normal .position-absolute span");
// console.log(typeof elesNM)
for (const ele of elesNM) {
    if(ele.innerText == "undefined" || ele.innerText == "") {
        ele.remove();
    }
}

var elesFF = $("#fullface .position-absolute span");
// console.log(elesFF)
for (const ele of elesFF) {
    if(ele.innerText == "undefined" || ele.innerText == "") {
        ele.remove();
    }
}


// Xóa các element có saleprice = 0
var textDels = $(".main-home del.text-del :first-child");
// console.log(textDels);
for (const eleDel of textDels) {
    // console.log(parseFloat(eleDel.innerText))
    if(parseFloat(eleDel.innerText) > 0) {

    } else {
        // console.log(eleDel.parentElement)
        eleDel.parentElement.remove();
    }
}


function setDataStorage(helMetObj) {
    
    let nameHelmet = helMetObj.name;
    let imgHelmet = helMetObj.img;
    let priceHelmet = helMetObj.price;
    let salePriceHelmet = helMetObj.salePrice;
    let sizeHelmet = helMetObj.size;
    let factoryHelmet = helMetObj.factory;
    let descriptionHelmet = helMetObj.description;
    console.log(nameHelmet);
    window.localStorage.setItem("nameHelmet",nameHelmet);
    window.localStorage.setItem("imgHelmet",imgHelmet);
    window.localStorage.setItem("priceHelmet",priceHelmet);
    window.localStorage.setItem("salePriceHelmet",salePriceHelmet);
    window.localStorage.setItem("sizeHelmet",sizeHelmet);
    window.localStorage.setItem("factoryHelmet", factoryHelmet);
    window.localStorage.setItem("descriptionHelmet", descriptionHelmet);
    // console.log(window.localStorage.getItem("myHelmet",pickHelmet);
}


// click vao img lay ra obj cua img trong NormalHelmet
const img34HelMets = $("#34helmet .img-obj");
var pickHelmet;

// console.log(img34HelMets);
for(let i=0; i< img34HelMets.length; i++) {
    img34HelMets[i].addEventListener("click",function(e) {
        pickHelmet = e.view.helmets34[i];
        setDataStorage(pickHelmet);
    });
}

// Click vào text name lấy ra obj của text
const linkTexts34 = $("#34helmet .link-secondary");
// console.log(linkTexts34);
for(let i = 0; i < linkTexts34.length; i++) {
    linkTexts34[i].addEventListener("click",function(e) {
        pickHelmet = e.view.helmets34[i];
        setDataStorage(pickHelmet);
    });
}

// click vao img lay ra obj cua img trong FullFaceHelmet
const imgFullFaceHelmets = $("#fullface .img-obj");
// console.log(imgFullFaceHelmets)
for(let i=0; i< imgFullFaceHelmets.length; i++) {

    imgFullFaceHelmets[i].addEventListener("click",function(e) {
        pickHelmet = e.view.helmetsff[i];
        setDataStorage(pickHelmet);
    });
}

// Click vào text name lấy ra obj của text
const linkTextsFF = $("#fullface .link-secondary");
// console.log(linkTextsFF);
for(let i = 0; i < linkTextsFF.length; i++) {
    linkTextsFF[i].addEventListener("click",function(e) {
        pickHelmet = e.view.helmetsff[i];
        setDataStorage(pickHelmet);
    });
}


// click vao img lay ra obj cua img trong NormalHelmet
const imgNormalHelmets = $("#normal .img-obj");
// console.log(imgNormalHelmets);
for(let i=0; i< imgNormalHelmets.length; i++) {
    imgNormalHelmets[i].addEventListener("click",function(e) {
        pickHelmet = e.view.helmetsnm[i];
        setDataStorage(pickHelmet);
    });
}

// Click vào text name lấy ra obj của text
const linkTextsNormal = $("#normal .link-secondary");
// console.log(linkTextsNormal);
for(let i = 0; i < linkTextsNormal.length; i++) {
    linkTextsNormal[i].addEventListener("click",function(e) {
        pickHelmet = e.view.helmetsnm[i];
        setDataStorage(pickHelmet);
    });
}

// Lay ra Element cần thay đổi
var img_Detail = $(".product-main .col-6 img");
var text_Name = $(".product-main .title-text");
var bdiPrice = $(".product-main .price-text");
var bdiSalePrice = $(".product-main .saleprice-text");

// console.log(text_Name);

// Lấy dữ liệu của các obj trong localStorage
var getName = window.localStorage.getItem("nameHelmet");
var getImg = window.localStorage.getItem("imgHelmet");
var getPrice = window.localStorage.getItem("priceHelmet");
// console.log(getPrice)
var getSalePrice = window.localStorage.getItem("salePriceHelmet");
var getSize = window.localStorage.getItem("sizeHelmet");
var getFactory = window.localStorage.getItem("factoryHelmet");
var getDescription = window.localStorage.getItem("descriptionHelmet");
// console.log(getSize);
$(".product-main #table-sizedata").html(getSize);
$(".product-main #table-factory").html(getFactory);
$(".description-box .text-box strong").html(getName);
$(".description-box .text-box .description-text").html(getDescription);
$(".detail-map").html(getName);
var arrSize = getSize.split(", ");
// console.log(arrSize);

var arrSizeElements = arrSize.map(function(size) {
    let sizeInput = `<div class="col-3">
                        <input type="radio" name="radSize" id="${size.toLowerCase()}-size"> <label class="fw-bold" for="${size.toLowerCase()}-size">${size}</label>
                    </div>`;
    return sizeInput;
})
// console.log(arrSizeElements);

for (const sizeElement of arrSizeElements) {
    let sizePickerELe = $(".product-main .sizepicker");
    sizePickerELe.append(sizeElement);
}


// Gán giá dữ liệu cho các Element đã lấy
text_Name.html(getName);
img_Detail.attr("src",`${getImg}`);
// console.log(bdiPrice)
// console.log(bdiSalePrice)
if(getSalePrice == 0) {
    bdiSalePrice.html(parseFloat(getPrice).toLocaleString("en-US"));
    $(".product-main del.text-del").remove();
}else{

    bdiSalePrice.html(parseFloat(getSalePrice).toLocaleString("en-US"));
    bdiPrice.html(parseFloat(getPrice).toLocaleString("en-US"));
}

// Form search
$(document).ready(function(){
    var inputSearchElement = $(".search-frm input");
    console.log(inputSearchElement);
    inputSearchElement.change(function(e){
        console.log(e);
        let inputValue = e.target.value;

    });
    var searchBtn = $(".search-frm button");
    console.log(searchBtn);
    searchBtn.click(function(e){
        e.preventDefault();
        let inputValue = $(".search-frm input").val();
        console.log(inputValue);
        let firstCase = inputValue.split("")[0];
        console.log([firstCase]);
        if(firstCase.toLowerCase() == "f") {
            $('html, body').animate({
                scrollTop: $("#fullface").offset().top
              }, 0);
        } else if(firstCase.toLowerCase() == "n") {
            $('html, body').animate({
                scrollTop: $("#normal").offset().top
              }, 0);
        } else if(firstCase.toLowerCase() == "3") {
            $('html, body').animate({
                scrollTop: $("#34helmet").offset().top
              }, 0);
        }
    });
});


// console.log(window.localStorage.removeItem("myHelmet"))
console.log(window.localStorage);
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
});
