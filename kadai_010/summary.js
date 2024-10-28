$(function () {
    $('#change-color').on('click', function () {
        // 文字色を任意の色に更新
        $('p').css('color', 'red');
    });
    $('#change-text').on('click', function () {
        // 任意の文字内容に更新(Hello!)
        $('p').text('Hello!');
    });
    $('#fade-out').on('click', function () {
        // フェードアウトで文字が消える
        $('p').fadeOut();
    });
    $('#fade-in').on('click', function () {
        // フェードインで文字が現れる
        $('p').fadeIn();
    });
});