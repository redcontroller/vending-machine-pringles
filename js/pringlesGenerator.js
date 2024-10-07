class PringlesGenerator {
  constructor() {
    this.itemList = document.querySelector('.pringles-list');
  }

  async setup() {
    const response = await this.loadData();
    this.pringlesFactory(response);
  }

  async loadData() {
    try {
      const response = await fetch('./items.json');

      if (!response.ok) {
        throw new Error('HTTP ERROR!! :' + response.status);
      }
      return await response.json();
    } catch (error) {
      console.error(
        '콜라데이터를 로딩하는 중에 문제가 발생했습니다. :' + error
      );
    }
  }

  // <li>
  //     <!-- JS : 클래스 on 유/무 제어 -->
  //     <button type="button" class="btn-pringles on">
  //         <img src="./img/pringles-original.png" alt="" />
  //         <span class="pringles-name">Original_pringles</span>
  //         <strong class="pringles-price">1000원</strong>
  //     </button>
  // </li>

  // 프링글스의 템플릿 코드입니다.
  pringlesFactory(data) {
    const docFrag = new DocumentFragment();
    data.forEach((el) => {
      const item = document.createElement('li');
      const itemTemplate = `
            <button type="button" class="btn-pringles" data-item="${el.name}"
                data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <picture>
                  <img src="./img/${el.img}" alt="${el.name}" />
                </picture>
                <span class="pringles-name">${el.name}</span>
                <strong class="pringles-price">${el.cost}원</strong>
            </button>`;
      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });

    this.itemList.append(docFrag);
  }
}

export default PringlesGenerator;
