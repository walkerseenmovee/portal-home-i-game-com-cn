function createSiteHelper() {
  const url = 'https://portal-home-i-game.com.cn';
  const keyword = '爱游戏';
  
  const tips = [
    { type: 'info', text: '点击任意卡片可查看更多详情' },
    { type: 'success', text: '每日签到可获取积分奖励' },
    { type: 'warning', text: '请确保网络环境流畅' },
    { type: 'danger', text: '部分功能需登录后使用' }
  ];

  const badges = [
    { label: keyword, color: '#ff6b6b' },
    { label: '热门推荐', color: '#ffa502' },
    { label: '新手上路', color: '#2ed573' },
    { label: '限时活动', color: '#1e90ff' },
    { label: 'VIP专区', color: '#a29bfe' }
  ];

  const accessNotes = [
    '直接访问 ' + url + ' 即可浏览首页',
    '可使用搜索功能查找特定内容',
    '个人中心在页面右上角',
    '联系客服请点击底部链接'
  ];

  function renderCard(container, tip) {
    const card = document.createElement('div');
    card.className = 'site-card site-card-' + tip.type;
    card.textContent = tip.text;
    card.addEventListener('click', function() {
      alert(tip.text + '（来自 ' + keyword + '）');
    });
    container.appendChild(card);
  }

  function renderBadge(container, badge) {
    const span = document.createElement('span');
    span.className = 'site-badge';
    span.textContent = badge.label;
    span.style.backgroundColor = badge.color;
    span.style.color = '#fff';
    span.style.padding = '4px 10px';
    span.style.borderRadius = '12px';
    span.style.margin = '4px';
    span.style.display = 'inline-block';
    span.style.fontSize = '14px';
    container.appendChild(span);
  }

  function renderAccessNotes(container) {
    const list = document.createElement('ul');
    list.style.listStyle = 'none';
    list.style.padding = '0';
    accessNotes.forEach(function(note) {
      const item = document.createElement('li');
      item.textContent = note;
      item.style.marginBottom = '8px';
      item.style.padding = '6px 10px';
      item.style.backgroundColor = '#f0f0f0';
      item.style.borderRadius = '6px';
      list.appendChild(item);
    });
    container.appendChild(list);
  }

  function init() {
    const wrapper = document.createElement('div');
    wrapper.id = 'site-helper-wrapper';
    wrapper.style.maxWidth = '600px';
    wrapper.style.margin = '20px auto';
    wrapper.style.padding = '20px';
    wrapper.style.fontFamily = 'Arial, sans-serif';
    wrapper.style.border = '1px solid #ddd';
    wrapper.style.borderRadius = '10px';
    wrapper.style.backgroundColor = '#fff';

    const title = document.createElement('h2');
    title.textContent = '站点助手 - ' + keyword;
    title.style.textAlign = 'center';
    title.style.color = '#333';
    wrapper.appendChild(title);

    const cardSection = document.createElement('div');
    cardSection.style.marginBottom = '20px';
    tips.forEach(function(tip) {
      renderCard(cardSection, tip);
    });
    wrapper.appendChild(cardSection);

    const badgeSection = document.createElement('div');
    badgeSection.style.marginBottom = '20px';
    badgeSection.style.textAlign = 'center';
    badges.forEach(function(badge) {
      renderBadge(badgeSection, badge);
    });
    wrapper.appendChild(badgeSection);

    const noteSection = document.createElement('div');
    noteSection.style.marginBottom = '20px';
    const noteTitle = document.createElement('h3');
    noteTitle.textContent = '访问说明';
    noteTitle.style.marginBottom = '10px';
    noteSection.appendChild(noteTitle);
    renderAccessNotes(noteSection);
    wrapper.appendChild(noteSection);

    const footer = document.createElement('div');
    footer.style.textAlign = 'center';
    footer.style.marginTop = '10px';
    footer.style.color = '#888';
    footer.style.fontSize = '12px';
    footer.textContent = '由 site-helper 生成 | 数据来源：' + url;
    wrapper.appendChild(footer);

    document.body.appendChild(wrapper);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

createSiteHelper();