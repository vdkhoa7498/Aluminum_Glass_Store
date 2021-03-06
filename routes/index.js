var express = require("express");
var router = express.Router();
var path = require('path');
var moment = require('moment');

router.get("/", (req, res, next) => {
    res.render("general/general-index", {
        title: "Cửa Hàng Nhôm Kính Trung"
    });

})

router.get("/cua-nhom", (req, res, next) => {
    res.render("productpages/cua-nhom", {
        title: "Cửa Nhôm - NK Trung"
    });

})

router.get("/ke-bep", (req, res, next) => {
    res.render("productpages/ke-bep", {
        title: "Kệ Bếp- NK Trung"
    });

})

router.get("/kinh-cuong-luc", (req, res, next) => {
    res.render("productpages/kinh-cuong-luc", {
        title: "Kính Cường Lực - NK Trung"
    });

})

router.get("/san-pham-khac", (req, res, next) => {
    res.render("productpages/san-pham-khac", {
        title: "Sản Phẩm Khác - NK Trung"
    });

})

router.get("/mau-tu", (req, res, next) => {
    res.render("productpages/mau-tu", {
        title: "Mẫu Tủ - NK Trung"
    });

})

router.get("/lien-he", (req, res, next) => {
    res.render("productpages/lien-he", {
        title: "Liên Hệ - NK Trung"
    });

})

//Cửa nhôm
router.get("/cua-nhom/cua-di", (req, res, next) => {
    res.render("productpages/cua-nhom/cua-di", {
        title: "Cửa Đi - NK Trung"
    });

})


router.get("/cua-nhom/cua-nhom-xingfa", (req, res, next) => {
    res.render("productpages/cua-nhom/cua-nhom-xingfa", {
        title: "Cửa Nhôm XingFa - NK Trung"
    });

})

router.get("/cua-nhom/cua-phong-khach", (req, res, next) => {
    res.render("productpages/cua-nhom/cua-phong-khach", {
        title: "Cửa Phòng Khách - NK Trung"
    });

})

router.get("/cua-nhom/cua-phong-ngu", (req, res, next) => {
    res.render("productpages/cua-nhom/cua-phong-ngu", {
        title: "Cửa Phòng Ngủ - NK Trung"
    });

})

router.get("/cua-nhom/cua-so", (req, res, next) => {
    res.render("productpages/cua-nhom/cua-so", {
        title: "Cửa Sổ - NK Trung"
    });
})

//Kệ Bếp
router.get("/ke-bep/ke-bep", (req, res, next) => {
    res.render("productpages/ke-bep/ke-bep", {
        title: "Kệ Bếp - NK Trung"
    });

})

router.get("/ke-bep/o-bep", (req, res, next) => {
    res.render("productpages/ke-bep/o-bep", {
        title: "Ô Bếp - NK Trung"
    });

})


//Kính cường lực
router.get("/kinh-cuong-luc/kinh-cach-am", (req, res, next) => {
    res.render("productpages/kinh-cuong-luc/kinh-cach-am", {
        title: "Kính Cách Âm - NK Trung"
    });
})

router.get("/kinh-cuong-luc/kinh-cuong-luc", (req, res, next) => {
    res.render("productpages/kinh-cuong-luc/kinh-cuong-luc", {
        title: "Kính Cường Lực - NK Trung"
    });
})

router.get("/kinh-cuong-luc/kinh-hai-lop", (req, res, next) => {
    res.render("productpages/kinh-cuong-luc/kinh-hai-lop", {
        title: "Kính Hai Lớp - NK Trung"
    });
})

router.get("/kinh-cuong-luc/kinh-son", (req, res, next) => {
    res.render("productpages/kinh-cuong-luc/kinh-son", {
        title: "Kính Sơn - NK Trung"
    });
})

//Mẫu Tủ

router.get("/mau-tu/tu-ao", (req, res, next) => {
    res.render("productpages/mau-tu/tu-ao", {
        title: "Tủ Áo - NK Trung"
    });
})

router.get("/mau-tu/tu-chen", (req, res, next) => {
    res.render("productpages/mau-tu/tu-chen", {
        title: "Tủ Chén - NK Trung"
    });
})

router.get("/mau-tu/tu-am-tuong", (req, res, next) => {
    res.render("productpages/mau-tu/tu-am-tuong", {
        title: "Tủ Âm Tường - NK Trung"
    });
})

router.get("/mau-tu/tu-trung-bay", (req, res, next) => {
    res.render("productpages/mau-tu/tu-trung-bay", {
        title: "Tủ Trưng Bày - NK Trung"
    });
})

//Sản phẩm khác

router.get("/san-pham-khac/cua-chong-muoi", (req, res, next) => {
    res.render("productpages/san-pham-khac/cua-chong-muoi", {
        title: "Cửa Chống Muỗi - NK Trung"
    });
})

router.get("/san-pham-khac/cua-gia-go", (req, res, next) => {
    res.render("productpages/san-pham-khac/cua-gia-go", {
        title: "Cửa Giả Gỗ - NK Trung"
    });
})

router.get("/san-pham-khac/lan-can-cau-thang-kinh", (req, res, next) => {
    res.render("productpages/san-pham-khac/lan-can-cau-thang-kinh", {
        title: "Lan Can Cầu Thang Kính - NK Trung"
    });
})


module.exports = router;