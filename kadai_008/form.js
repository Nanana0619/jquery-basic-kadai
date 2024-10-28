$(function () {
    // class属性がcheckの要素がクリックされたら
    $('.btn').on('click', function () {
      // 名前(テキストボックス)を取得する
      $('.text-box').val('クリックされました！');
    });
});