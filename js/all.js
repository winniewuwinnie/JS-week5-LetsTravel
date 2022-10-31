let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];

const list = document.querySelector(".ticket-card-area");
//渲染畫面
function render() {
  let str = "";
  data.forEach(function (item, index) {
    str += `<li class="col">
  <div class="card shadow border-0 h-100">
    <div class="card-header p-0 border-0 mb-2 position-relative">
      <img
        src="${item.imgUrl}"
        alt="${item.name}"
        class="card-img-top"
      />
      <div
        class="badge bg-info px-3 fs-5 position-absolute top-0 start-0 translate-middle-y rounded-0 rounded-end"
      >${item.area}</div>
      <div
        class="badge bg-primary py-2 px-2 position-absolute top-100 start-0 translate-middle-y rounded-0 rounded-end"
      >${item.rate}</div>
    </div>
    <div class="card-body">
      <div
        class="card-title text-primary h4 border-bottom border-primary fw-bold pb-1 mb-3"
      >${item.name}</div>
      <p class="text-secondary mb-0">${item.description}</p>
    </div>
    <div
      class="card-footer border-0 bg-white d-flex justify-content-between align-items-center mb-1"
    >
      <p class="text-primary fw-bold mb-0">
        <i class="bi bi-exclamation-circle-fill"></i> 剩下最後 ${item.group} 組
      </p>
      <p class="text-primary fw-bold mb-0 d-flex align-items-center">
        TWD<span class="fw-bold h2 d-inline-block mb-0 ms-1"
          >${item.price}</span
        >
      </p>
    </div>
  </div>
</li>`;
  });
  list.innerHTML = str;
}
render();

//新增套票
const name = document.querySelector(".tickets-name");
const imgUrl = document.querySelector(".tickets-imgUrl");
const area = document.querySelector(".tickets-area");
const price = document.querySelector(".tickets-price");
const group = document.querySelector(".tickets-group");
const rate = document.querySelector(".tickets-rate");
const description = document.querySelector(".tickets-description");
const addTicketBtn = document.querySelector(".add-ticket-btn");
addTicketBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let obj = {
    id: data.length,
    name: name.value.trim(),
    imgUrl: imgUrl.value.trim(),
    area: area.value,
    group: group.value.trim(),
    price: price.value.trim(),
    rate: rate.value.trim(),
    description: description.value.trim(),
  };
  if (
    name.value == "" ||
    imgUrl.value == "" ||
    area.value == "" ||
    group.value == "" ||
    price.value == "" ||
    rate.value == ""||
    description.value == "" 
  ) {
    alert("欄位不可為空白");
  } else if (
    name.value &&
    imgUrl.value &&
    area.value &&
    group.value &&
    price.value &&
    rate.value&&
    description.value
  ) {
    if (parseInt(group.value) <=0) {
      alert("套票組數輸入錯誤");
    } else if (parseInt(price.value) <=0) {
      alert("套票金額輸入錯誤");
    } else if (parseInt(rate.value) <= 0) {
      alert("套票星級輸入錯誤");
    } else if (description.value.length>100) {
      alert("套票描述超過100字");
    } else {
      data.push(obj);
      render();
      //清空輸入欄
      name.value = "";
      imgUrl.value = "";
      area.value = "台北";
      price.value = "";
      group.value = "";
      rate.value = "";
      description.value = "";
    }
  }
});


//篩選器
const areaFilter = document.querySelector(".area-filter");
const areaFilterNum = document.querySelector(".area-filter-num");
areaFilter.addEventListener("click", function (e) {
  let str = "";
  let count = 0;
  data.forEach(function (item, index) {
    if(areaFilter.value=="全部"){
      str += `<li class="col">
      <div class="card shadow border-0 h-100">
        <div class="card-header p-0 border-0 mb-2 position-relative">
          <img
            src="${item.imgUrl}"
            alt="${item.name}"
            class="card-img-top"
          />
          <div
            class="badge bg-info px-3 fs-5 position-absolute top-0 start-0 translate-middle-y rounded-0 rounded-end"
          >${item.area}</div>
          <div
            class="badge bg-primary py-2 px-2 position-absolute top-100 start-0 translate-middle-y rounded-0 rounded-end"
          >${item.rate}</div>
        </div>
        <div class="card-body">
          <div
            class="card-title text-primary h4 border-bottom border-primary fw-bold pb-1 mb-3"
          >${item.name}</div>
          <p class="text-secondary mb-0">${item.description}</p>
        </div>
        <div
          class="card-footer border-0 bg-white d-flex justify-content-between align-items-center mb-1"
        >
          <p class="text-primary fw-bold mb-0">
            <i class="bi bi-exclamation-circle-fill"></i> 剩下最後 ${item.group} 組
          </p>
          <p class="text-primary fw-bold mb-0 d-flex align-items-center">
            TWD<span class="fw-bold h2 d-inline-block mb-0 ms-1"
              >${item.price}</span
            >
          </p>
        </div>
      </div>
    </li>`;
    } else if (areaFilter.value == item.area) {
      str += `<li class="col">
      <div class="card shadow border-0 h-100">
        <div class="card-header p-0 border-0 mb-2 position-relative">
          <img
            src="${item.imgUrl}"
            alt="${item.name}"
            class="card-img-top"
          />
          <div
            class="badge bg-info px-3 fs-5 position-absolute top-0 start-0 translate-middle-y rounded-0 rounded-end"
          >${item.area}</div>
          <div
            class="badge bg-primary py-2 px-2 position-absolute top-100 start-0 translate-middle-y rounded-0 rounded-end"
          >${item.rate}</div>
        </div>
        <div class="card-body">
          <div
            class="card-title text-primary h4 border-bottom border-primary fw-bold pb-1 mb-3"
          >${item.name}</div>
          <p class="text-secondary mb-0">${item.description}</p>
        </div>
        <div
          class="card-footer border-0 bg-white d-flex justify-content-between align-items-center mb-1"
        >
          <p class="text-primary fw-bold mb-0">
            <i class="bi bi-exclamation-circle-fill"></i> 剩下最後 ${item.group} 組
          </p>
          <p class="text-primary fw-bold mb-0 d-flex align-items-center">
            TWD<span class="fw-bold h2 d-inline-block mb-0 ms-1"
              >${item.price}</span
            >
          </p>
        </div>
      </div>
    </li>`;
    } else {
      return;
    }
    count++;
  });
  list.innerHTML = str;
  areaFilterNum.innerHTML = `
  <p class="text-secondary mb-0 text-end text-md-start area-filter-num">本次搜尋共${count}筆資料</p>`;
});
