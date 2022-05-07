document.addEventListener("DOMContentLoaded", () => {
    var ctx = document.getElementById("chartDoughnut");

    if (ctx) {
        var canvas = ctx.getContext("2d");
        var gradient = canvas.createLinearGradient(0, 0, 0, 450);
        gradient.addColorStop(0.5, "rgba(0, 148, 68, 1)");
        gradient.addColorStop(0, "rgba(141, 198, 63, 1)");

        //   gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

        var data = {
            labels: ["Đặt hàng TQ", "NK chính nghạch", "Thanh toán hộ"],
            datasets: [
                {
                    data: [75, 14, 11],
                    backgroundColor: [gradient, "#1A8917", "#076007"],
                    hoverBackgroundColor: [gradient, "#1A8917", "#076007"],
                },
            ],
        };

        var promisedDeliveryChart = new Chart(
            document.getElementById("chartDoughnut"),
            {
                type: "doughnut",
                data: data,
                options: {
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    elements: {
                        arc: {
                            borderWidth: 0,
                        },
                    },
                    rotation: 0.5 * Math.PI - (25 / 45) * Math.PI,
                },
            }
        );
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var ctx = document.getElementById("statisticalChart");
    var data = {
        labels: ["01/07", "05/07", "10/07", "15/07", "20/07", "25/07", "31/07"],
        datasets: [
            {
                label: "Counts",
                data: [140, 180, 150, 190, 190, 250, 260],
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderWidth: 3,
                borderColor: "rgba(26, 137, 23, 1)",
                borderCapStyle: "round",
                borderJoinStyle: "round",
                pointBorderColor: "rgba(26, 137, 23, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(26, 137, 23, 1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 20,
                pointStyle: "circle",
            },
        ],
    };

    if (ctx) {
        var myChart = new Chart.Line(ctx, {
            data: data,
            options: {
                legend: {
                    display: false,
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: 140,
                                max: 260,
                            },
                        },
                    ],
                },
            },
        });
    }
});

function cloneNode(elem, item) {
    const itm = document.getElementById(item);
    const cln = itm.cloneNode(true);
    document.getElementById(elem).appendChild(cln);
}

document.addEventListener("DOMContentLoaded", () => {
    const addClassify = document.getElementById("addClassify");
    if (addClassify) {
        addClassify.addEventListener("click", () => {
            cloneNode("listProduct", "itemProduct");
        });
    }

    const addProduct = document.getElementById("addProduct");
    if (addProduct) {
        addProduct.addEventListener("click", () => {
            cloneNode("listCardProduct", "itemCardProduct");
        });
    }

    const addRequirement = document.getElementById("addRequirement");
    if (addRequirement) {
        addRequirement.addEventListener("click", () => {
            cloneNode("listRequirement", "itemRequirement");
        });
    }

    const addDeclare = document.getElementById("addDeclare");
    if (addDeclare) {
        addDeclare.addEventListener("click", () => {
            cloneNode("listCardDeclare", "cardDeclare");
        });
    }

    const addAddress = document.getElementById("addAddress");
    if (addAddress) {
        addAddress.addEventListener("click", () => {
            cloneNode("listAddress", "cardAddress");
        });
    }
});

let windowWidth = document.documentElement.clientWidth;
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".sidebar .dropdown").forEach((el) => {
        const dropdown = el;
        const arrows = document.createElement("i");
        const back = el.querySelector(".title-sub-menu");
        arrows.classList.add("fa", "fa-angle-right");
        dropdown.querySelector("a").appendChild(arrows);
        if (windowWidth < 992) {
            back.addEventListener("click", function () {
                dropdown.classList.remove("show-sub-menu");
            });
            arrows.addEventListener("click", (e) => {
                e.preventDefault();
                let text = el.querySelector("a").textContent;
                back.querySelector(".tt").textContent = text;
                dropdown.classList.toggle("show-sub-menu");
            });
        }
    });
});

const tabsMoveTo = (target) => {
    const tabLink = target;
    const tabLinkSiblings = tabLink.parentElement.children;
    const tabContent = document.querySelector(tabLink.getAttribute("data-tab"));
    if (!tabContent) {
        console.warn("tabContent not found!");
        return;
    }
    const tabContentSiblings = tabContent.parentElement.children;
    for (const tabLinkSibling of tabLinkSiblings) {
        if (tabLinkSibling.classList.contains("active")) {
            tabLinkSibling.classList.remove("active");
        }
    }
    tabLink.classList.add("active");
    for (const tabContentSibling of tabContentSiblings) {
        if (tabContentSibling.classList.contains("active")) {
            tabContentSibling.classList.remove("active");
        }
    }
    tabContent.classList.add("active");
    if (tabContent.querySelector(".swiper-container")) {
        window.dispatchEvent(new Event("resize"));
    }
};
document.addEventListener("click", (e) => {
    e.target.closest(".tab-link") && tabsMoveTo(e.target.closest(".tab-link"));
});
document.querySelectorAll(".tab-link.active").forEach((el) => tabsMoveTo(el));

const body = document.getElementById("body");
const mainMenuBtn = document.getElementById("header-menu-btn");
const mainMenu = document.getElementById("sideBar");
const mainMenuOverlay = document.getElementById("sidebarOverlay");
if (mainMenu && mainMenuBtn) {
    mainMenuBtn.addEventListener("click", () => {
        body.classList.toggle("stop-scroll");
        mainMenuBtn.classList.toggle("active");
        mainMenu.classList.toggle("active");
    });
    if (mainMenuOverlay) {
        mainMenuOverlay.addEventListener("click", () => {
            mainMenuBtn.classList.remove("active");
            mainMenu.classList.remove("active");
            body.classList.toggle("stop-scroll");
        });
    }
}

const toogleService = document.getElementById("toogleService");
const listService = document.getElementById("listService");
const cart = document.querySelector(".cart");
if (toogleService && listService) {
    toogleService.addEventListener("click", () => {
        listService.classList.toggle("active");
        cart.classList.toggle("active");
    });
}

$(".list-price .item-price").click(function () {
    $(".list-price .item-price").removeClass("active");
    $(this).addClass("active");
});

$(".list-bank .item-bank").click(function () {
    $(".list-bank .item-bank").removeClass("active");
    $(this).addClass("active");
});

$(".list-props-1 .item-props").click(function () {
    $(".list-props-1 .item-props").removeClass("active");
    $(this).addClass("active");
});

$(".list-props-2 .item-props").click(function () {
    $(".list-props-2 .item-props").removeClass("active");
    $(this).addClass("active");
});

// const $ = jQuery.noConflict();
/** MAGNIFICPOPUP */
$(document).on("click", ".open-popup-btn", function (e) {
    e.preventDefault();
    const link = $(this).attr("href") || $(this).attr("data-mfp-src");
    $.magnificPopup.open({
        items: {
            src: link,
        },
        type: "inline",
        modal: false, // CLOSE POPUP WHEN CLICK OUTSIDE
        midClick: true,
        removalDelay: 500, // DELAY BEFORE CLOSE POPUP
        preloader: false,
        fixedBgPos: true, // SET HEIGHT BACKGROUND FIX WITH CONTENT
        fixedContentPos: false, // FIXED CONTENT AT CLICKED POSITION
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = "mfp-zoom-in";
            },
            open: function () {
                $("body").css("overflow", "hidden");
                $(".popup-wrap").removeClass(".mfp-hide");
            },
            close: function () {
                $("body").css("overflow", "");
            },
        },
    });
});
$(document).on(
    "click",
    ".open-video-btn, .video-popup, .video-btn, .video-btn-2, .c-video .main-title[data-mfp-src]",
    function (e) {
        e.preventDefault();
        let link =
            $(this).attr("href") ||
            $(this).attr("data-mfp-src") ||
            "https://www.youtube.com/watch?v=C3QKB74zaD8";

        $.magnificPopup.open({
            disableOn: 700,
            items: {
                src: link,
                type: "iframe",
            },
            mainClass: "mfp-zoom-in",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = "mfp-zoom-in";
                },
                open: function () {
                    $("body").css("overflow", "hidden");
                },
                close: function () {
                    $("body").css("overflow", "auto");
                },
            },
        });
    }
);
/** MAGNIFICPOPUP - END*/

if ($('[data-theme-toggle="collapse"]').length) {
    $('[data-theme-toggle="collapse"]').closest('tbody').css('vertical-align', 'top');
    $('[data-theme-toggle="collapse"]').each(function (index, elm) {
        $(elm).click(function () {
            let elmButton = $(this),
                elmTarget = elmButton.attr('data-theme-target'),
                elmID = $(elmTarget);

            elmID.slideToggle(150);
        });
    })
}
