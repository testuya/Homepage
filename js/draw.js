(function (win, doc) {
	/*変数宣言*/
	var num = 50;//オブジェクトの個数
	var count = 0;
	//num個のオブジェクト格納用
	var cube = new Array(num);
	var phyBox = new Array(num);

	var scene,renderer,camera;//three.js用
	var world;//cannon.js用

	var date_old = new Date();
	var time_old;//アクセスした時間
	var flag = 0;//描画フラッグ

	function init(){
		time_old = date_old.getSeconds();//アクセス時の時間取得

		/*three.jsの初期化*/
		/*キャンバスの設定とシーン作成*/
		var canvas = document.getElementById('canvas'); 
		renderer = new THREE.WebGLRenderer(); // レンダラー生成
		renderer.setSize(canvas.clientWidth, canvas.clientHeight); // レンダラーのサイズを設定
		renderer.setClearColor(0xffffff, 1.0); //背景を白に設定
		canvas.appendChild(renderer.domElement); // レンダラーを配置
		scene = new THREE.Scene(); // シーンの生成 

		/*カメラの処理*/
		var fov = 45; // 視野角
		var aspect = canvas.clientWidth / canvas.clientHeight; 
		var near = 10; // 視体積手前までの距離
		var far = 1000; // 視体積奥までの距離
		camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // カメラの生成
		camera.position.set(100, 100, 100); // カメラ位置の設定
		camera.up.set(0, 1, 0); // カメラの上方向ベクトルの設定
		camera.lookAt({x: 0, y: 0, z: 0}); // カメラ視野の中心座標の設定

		/*ライトの設定*/
		var light = new THREE.DirectionalLight(0xffffff, 2);
	    var amb   = new THREE.AmbientLight(0x404040);
	    var d = 100;
	    light.position.set(d, d, d);
	    light.castShadow = true;
	    light.shadowMapWidth = 1024;
	    light.shadowMapHeight = 1024;

	    light.shadowCameraLeft = -d;
	    light.shadowCameraRight = d;
	    light.shadowCameraTop = d;
	    light.shadowCameraBottom = -d;

	    light.shadowCameraFar = 1000;
	    light.shadowCameraNear = 1;
	    light.shadowDarkness = 0.5;
		scene.add(light);
	    scene.add(amb);

	    var axis = new THREE.AxisHelper(100); // 長さ100の軸オブジェクトを生成
		scene.add(axis); 

		/*cannon.jsの初期化*/
		world = new CANNON.World();
		world.gravity.set(0, -9.8, 0);   //重力を設定
		world.broadphase = new CANNON.NaiveBroadphase();//衝突判定
		world.solver.iterations = 9;//反復計算回数
		world.solver.tolerance = 0.1;//許容値
	}

	/*オブジェクト生成*/
	 function createCube(w, h, d) {
        var geometry = new THREE.CubeGeometry(w, h, d, 10, 10);
        var material = new THREE.MeshLambertMaterial({
            color: 0x00ccff
        });
        var mesh = new THREE.Mesh(geometry, material);

        return mesh;
    }

	function generate_object(){
			cube[count] = createCube(5, 5, 5);
			scene.add(cube[count]);
			var mass = 1;
			var shape = new CANNON.Box(new CANNON.Vec3(5, 5, 5));
			phyBox[count] = new CANNON.Body({mass, shape});
			phyBox[count].angularVelocity.set(0, 5, 10);   //角速度
			phyBox[count].angularDamping = 0.1;　　　//減衰率
			phyBox[count].position.x = 0;
			phyBox[count].position.y = 50;
			phyBox[count].stiffness = 0.2;
			phyBox[count].linearDamping = 0.8;
			world.add(phyBox[count]);
			count = count+1;
			//console.log(count);
	}

	function generate_ground(){
		var mass = 0;
		var shape = new CANNON.Plane();
		var phyPlane = new CANNON.Body({mass, shape});
		phyPlane.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);   //X軸に９０度回転
		world.add(phyPlane);
	}

	/*描画*/
	function animate(){
		world.step(1 / 60);
		var date_new = new Date();
		var time = date_new.getSeconds() - time_old;
		if(time%2==0&&flag==0){
			flag=1;
				if(count<num){
					generate_object();
				}
		}else if(time%2!=0&&flag==1){
			flag=0;
		}
		
		for (var i = 0; i <count; i++) {
			cube[i].position.copy(phyBox[i].position);  
			cube[i].quaternion.copy(phyBox[i].quaternion);  
		}
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}

	//処理
	init();
	generate_ground();
	animate();
}(window, document));

