/**
 * 何回生計算機
 * 計算式: 回生 = 生まれた年度 - 1967
 * 早生まれ（1〜4月1日生まれ）は前年度扱い
 */
(function () {
  'use strict';

  var yearSelect = document.getElementById('calc-year');
  var hayaumareCheck = document.getElementById('calc-hayaumare');
  var resultDiv = document.getElementById('calc-result');

  // プレースホルダー（未選択状態）
  var placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = '選択してください';
  placeholder.selected = true;

  // 年プルダウン: 1968〜2010 昇順（1968年=1回生〜、プレースホルダーを1990付近に配置）
  for (var y = 1968; y <= 2010; y++) {
    if (y === 1990) {
      yearSelect.appendChild(placeholder);
    }
    var opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  }

  function calculate() {
    var year = parseInt(yearSelect.value, 10);

    if (isNaN(year)) {
      resultDiv.textContent = '生まれた年を選択すると結果が表示されます';
      resultDiv.classList.remove('is-active');
      return;
    }

    // 早生まれなら前年度扱い
    var fiscalYear = year;
    if (hayaumareCheck.checked) {
      fiscalYear = year - 1;
    }

    var kaisei = fiscalYear - 1967;

    if (kaisei < 1) {
      resultDiv.textContent = '岡崎西高校の開校以前の生まれです';
      resultDiv.classList.remove('is-active');
      return;
    }

    resultDiv.innerHTML =
      'あなたは <span class="calc-result__number">' + kaisei + '回生</span> です' +
      '<p class="calc-result__cta">公式LINEに「<strong>' + kaisei + '回生 お名前</strong>」と送って登録しましょう！</p>' +
      '<a href="https://line.me/R/ti/p/@gsx2099g" target="_blank" rel="noopener" class="btn btn--line calc-result__btn">LINEで友だち追加</a>';
    resultDiv.classList.add('is-active');
  }

  yearSelect.addEventListener('change', calculate);
  hayaumareCheck.addEventListener('change', calculate);
})();
