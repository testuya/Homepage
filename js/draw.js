/*キャンバスの設定とシーン作成*/
var canvas = document.getElementById('canvas'); // div要素の取得
var renderer = new THREE.WebGLRenderer(); // レンダラーの生成
renderer.setSize(canvas.clientWidth, canvas.clientHeight); // レンダラーのサイズをdivのサイズに設定
renderer.setClearColor(0xffffff, 1.0); // レンダラーの背景色を黒色（不透過）に設定
canvas.appendChild(renderer.domElement); // div領域にレンダラーを配置
var scene = new THREE.Scene(); // シーンの生成 

/*カメラの処理*/
var fov = 45; // 視野角：0～90
var aspect = canvas.clientWidth / canvas.clientHeight; // 縦横比
var near = 1; // 視体積手前までの距離
var far = 1000; // 視体積奥までの距離
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // カメラの生成
camera.position.set(100, 100, 100); // カメラ位置の設定
camera.up.set(0, 0, 1); // カメラの上方向ベクトルの設定
camera.lookAt({x: 0, y: 0, z: 0}); // カメラ視野の中心座標の設定

/*オブジェクト生成*/
var axis = new THREE.AxisHelper(100); // 長さ100の軸オブジェクトを生成
scene.add(axis); // シーンにオブジェクトを追加

/*描画*/
renderer.render(scene, camera);