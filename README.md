【目的】<br>
・基本的なことからコーディングの練習<br>
・JSのフレームワークに触れる前に何か作っておきたかった<br>

【目標】<br>
・スマホで気軽にできるゲームの作成<br>
・人に見せれるコードを書く<br>
  1.変数の命名に一貫性がある<br>
  2.無駄・効率の悪い処理をしない<br>
  3.コメントで処理の意図が伝わる<br>

【ルール】<br>
命名はスネークケースを採用<br>
変数名は基本的に名詞+動詞+型で表す<br>
関数名は基本的に動詞＋名詞で表す<br>
定数はすべて大文字<br>
繰り返し使う処理は関数にする(1行で済む処理は例外)<br>
変数はletで宣言する<br>

【ゲームの遊び方】<br>
・「ポメ」「ラニ」「アン」の3種類の単語の揃え方によって全７パターンの画像が表示される運だけのスロットゲーム<br>
1.PUSHボタンで単語を揃える<br>
2.リセットボタンでリセットする<br>
上記の2手順を繰り返して遊ぶ<br>
・戦績ボタンを押すと戦績画面に遷移し、それまでに表示された画像が羅列される<br>
・すべての画像を表示させると戦績画面の「戦績」が変わりクリアとなる<br>
[パターン]<br>
「ポメ」「ラニ」「アン」が揃った場合×１パターン<br>
「ポメ」「ポメ」「ポメ」などの同じ単語が揃った場合×3パターン(同じ単語がそろった際にランダムで画像が表示される処理になっている)<br>
それ以外の場合×3パターン<br>

【不具合・直せなかったこと】<br>
●スマートフォンでPUSHボタンの文字が左右にずれる<br>
・PCの開発者ツール→iphone14ProMaxだと正常に表示される<br>
・cssが原因だと思われるため許容<br>
●戦績画面がきれいに表示されない<br>
・戦績画面に画像が追加されると、ロック画像のサイズが変わり歪になる<br>
・フリー素材を適当に集めていたため、画像の元サイズがバラバラであることが原因だと思われる。こちらもプログラム由来のものではないため許容<br>
