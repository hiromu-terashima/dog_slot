const SLOT_ARRAY = ['ポメ', 'ラニ', 'アン'] //スロットの中身を格納する定数配列
let slot_cnt = 0 //スロットの回数
let slot_result_array = [] //獲得したスロットの値を格納する配列
let complete_chk_array = []　//全てのパターンを網羅したか確認するための配列

//1～3のランダム値を獲得し、引数の位置に結果を格納する
function stop_slot(slot_num) {
    ram_int = Math.floor(Math.random() * (2 + 1))
    slot_result_array[slot_num] = SLOT_ARRAY[ram_int]
    ram_int = ram_int + 1
    slot_cnt = slot_cnt + 1
}

//スロットの結果を表示
function chk_slot_limit() {
    //スロットをすべて回していた場合実行
    if (slot_cnt === 3) {
        //ポメラニアンが完成している場合
        if (JSON.stringify(SLOT_ARRAY) === JSON.stringify(slot_result_array)) {
            result_str = ('ポメラニアン!!!!!')
            result_img_path = 'img/ポメラニアン成功.jpg'
            score_num = 1

            //同じ単語が揃っている場合(例:ポメ,ポメ,ポメ)
        } else if (slot_result_array[0] === slot_result_array[1] && slot_result_array[0] === slot_result_array[2]) {
            result_str = ('ポメラニアン？')
            //ランダムで失敗画像,パターン番号を格納
            false_num = Math.floor(Math.random() * (2 + 1))
            if (false_num === 0) {
                result_img_path = 'img/おしい_1.jpg'
                score_num = 2
            } else if (false_num === 1) {
                result_img_path = 'img/おしい_2.jpg'
                score_num = 3
            } else if (false_num === 2) {
                result_img_path = 'img/おしい_3.jpg'
                score_num = 4
            }

            //上記のどれにも当てはまらない場合
        } else {
            result_str = ('ポメラニアン失敗')
            //ランダムで失敗画像,パターン番号を格納
            false_num = Math.floor(Math.random() * (2 + 1))
            if (false_num === 0) {
                result_img_path = 'img/失敗_1.jpg'
                score_num = 5
            } else if (false_num === 1) {
                result_img_path = 'img/失敗_2.jpg'
                score_num = 6
            } else if (false_num === 2) {
                result_img_path = 'img/失敗_3.jpg'
                score_num = 7
            }
        }
        //結果を反映
        view_result()
        update_score()
    }

}

//スロットの値をそれぞれ表示
function view_slot(div_num, i) {
    document.getElementById(div_num).innerHTML = slot_result_array[i]
}

//スロットの結果を表示
function view_result() {
    document.getElementById("result_str").innerHTML = result_str
    document.getElementById("result_img").innerHTML = '<img src="' + result_img_path + '" ></img>;'
}

//戦績を更新する
function update_score() {
    document.getElementById("score_" + score_num).setAttribute('src', result_img_path)
    //配列に結果を格納する
    complete_chk_array[score_num] = score_num
    //7パターンすべての結果が格納されている場合、コンプリートと表示する。
    if (complete_chk_array.filter(item => item !== undefined).length === 7) {
        document.getElementById('title').textContent = "コンプリート！！！";
    }

}

//リセット機能(戦績はリセットされない)
function reset() {
    slot_cnt = 0
    slot_result_array = []
    document.getElementById('PUSH1').disabled = false;
    document.getElementById('PUSH2').disabled = false;
    document.getElementById('PUSH3').disabled = false;
    document.getElementById('1st').textContent = "";
    document.getElementById('2nd').textContent = "";
    document.getElementById('3rd').textContent = "";
    document.getElementById('result_str').textContent = "ポメラニアンを成功させよう！";
    document.getElementById('result_img').textContent = ""

}

//PUSH1ボタン
document.getElementById('PUSH1').addEventListener('click', () => {
    stop_slot(0)
    view_slot("1st", 0)
    chk_slot_limit()
});

//PUSH2ボタン
document.getElementById('PUSH2').addEventListener('click', () => {
    stop_slot(1)
    view_slot("2nd", 1)
    chk_slot_limit()
});

//PUSH3ボタン
document.getElementById('PUSH3').addEventListener('click', () => {
    stop_slot(2)
    view_slot("3rd", 2)
    chk_slot_limit()
});

//リセットボタン
document.getElementById('reset').addEventListener('click', () => {
    reset()
});

//遊び方ボタン
document.getElementById('help').addEventListener('click', () => {
    alert('【ポメ】【ラニ】【アン】を揃えてポメラニアンを出現させよう！！！');
});

//戦績画面遷移ボタン
document.getElementById('score').addEventListener('click', () => {
    document.getElementById('title').style.display = 'block';
    document.getElementById('score_view').style.display = 'block';
    document.getElementById('slot_view').style.display = 'none';
    document.getElementById('result_view').style.display = 'none';
    document.getElementById('score').style.display = 'none';
    document.getElementById('slot').style.display = 'block';


});

//スロット画面遷移ボタン
document.getElementById('slot').addEventListener('click', () => {
    document.getElementById('title').style.display = 'none';
    document.getElementById('score_view').style.display = 'none';
    document.getElementById('slot_view').style.display = 'block';
    document.getElementById('result_view').style.display = 'block';
    document.getElementById('score').style.display = 'block';
    document.getElementById('slot').style.display = 'none';
});