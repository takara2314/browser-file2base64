const fileUploadElement = document.getElementById('file-upload');
const b64Area = document.getElementById('b64-area');

// ファイルをBase64に変換する関数
const fileToBase64 = (file) => {
  // ファイルをテキストとして読み込む
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return (
    new Promise((resolve, reject) => {
      // 読み込めたとき
      reader.addEventListener('load', (e) => {
        resolve(reader.result);
      });
      // 読み込みエラー
      reader.addEventListener('error', (e) => {
        reject(reader.error);
      });
    })
  );
};

// ファイルが選択されたときに行う処理
const handleChangeFile = async (e) => {
  const file = e.target.files[0];

  // ファイルをBase64に変換
  const b64 = await fileToBase64(file);

  // Base64を表示
  b64Area.innerHTML = b64;
};

// ファイルが選択されたときのイベント
fileUploadElement.addEventListener('change', handleChangeFile);
